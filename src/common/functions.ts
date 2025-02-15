import { daysOfWeek, months } from '@component/common/constants'
import { PromiseWithCancel, ApiMethods, DateInfo } from '@component/common/types'

export function timestampToDate(timestamp: number): Date | undefined {
  if (isNaN(timestamp) || timestamp < 0) return undefined
  const date = new Date(timestamp * 1000)
  if(!date || isNaN(date.getTime())) return undefined;
  return date;
}

export function dateToTimestamp(date: Date): number | undefined {
  if(!(date instanceof Date)) return undefined
  return Math.floor(date.getTime() / 1000)
}

function getSuffix(dayOfMonth: number): string {
  if(
    (dayOfMonth >= 4 && dayOfMonth <= 20)
    || (dayOfMonth >= 24 && dayOfMonth <= 30)
  ) {
    return 'th'
  }
  const lastDigit = dayOfMonth % 10
  return ['st', 'nd', 'rd'][lastDigit - 1] ?? 'th'
}

export function dateBuilder(date: Date): DateInfo | undefined {
  if (!(date instanceof Date)) return undefined

  const dayOfWeek = daysOfWeek[date.getDay()]
  const dayOfMonth = date.getDate()
  const month = months[date.getMonth()]

  return { 
    day: dayOfWeek, 
    month, 
    date: dayOfMonth, 
    suffix: getSuffix(dayOfMonth), 
    year: date.getFullYear()
  }
}

export const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

export const urlRegex = /^(https?:)\/\/([\w.-]*)\/?([^\s]*)?$/

export function capitalizedSentence(string: string): string {
  if(typeof string !== 'string' || string.length === 0) return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function handleApiError(error: unknown): string | never {
  if(error instanceof Error) {
    return error.message
  } else {
    throw new Error(`Unknown error: ${String(error)}`)
  }
}

export function apiRequest(url: string, queryString?: string, method: ApiMethods = 'GET', body?: any, headers?: HeadersInit) {
  const controller = new AbortController()
  const signal = controller.signal
  
  const config: RequestInit = {
    headers: headers || {},
    ...(body && { body }),
    method,
    signal
  };

  return new Promise<any>(async (resolve, reject) => {
    try {
      const requestUrl = `${url}${queryString ? `?${queryString}` : ''}`;
      const response = await fetch(requestUrl, config);
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      resolve(await response.json())
    } catch(error: unknown) {
      reject(handleApiError(error))
    }
  }) as PromiseWithCancel<any>
}

export function modifyBodyClasses(classes: string | undefined) {
  const bodyElement = document.getElementById('next-body') as HTMLElement
  if(!bodyElement || !classes?.trim()) return
  bodyElement.classList.add(classes.trim())
}