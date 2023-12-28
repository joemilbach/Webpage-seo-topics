import { PromiseWithCancel, ApiMethods } from '@component/common/types'
import { Url } from 'next/dist/shared/lib/router/router'
import { InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime'

export function timestampToDate(timestamp: number): Date {
  const date = new Date(timestamp * 1000);
  return date
}

export function dateToTimestamp(date: Date): number {
  const timestamp = Math.floor(date.getTime() / 1000);
  return timestamp
}

export function dateBuilder(date: Date): { day: string, month: string, date: number, suffix: string, year: number } {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const dayOfWeek = days[date.getDay()]
  const dayOfMonth = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const suffix = (dayOfMonth >= 4 && dayOfMonth <= 20) || (dayOfMonth >= 24 && dayOfMonth <= 30) ?
    'th' :
    ['st', 'nd', 'rd'][dayOfMonth % 10 - 1]

  return { day: dayOfWeek, month, date: dayOfMonth, suffix, year }
}

export const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

export const urlRegex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/

export function capitalizedSentence(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function isAbortError(error: any): error is DOMException {
  if(!!error && error.name !== 'AbortError') return true
  return false
}

export function apiRequest(url: Url, queryString: string | undefined, method: ApiMethods, body?: any, headers?: HeadersInit) {
  const controller = new AbortController()
  const signal = controller.signal
  const config = {
    headers: !!headers ? headers : {},
    ...(!!body && { body })
  }
  const promise = new Promise(async (resolve) => {
    try {
      const request = await fetch(
        `${url}?${queryString}`, {
          method,
          signal,
          ...config
        })
      const response = await request?.json()
      resolve(response)
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error)
      if (!isAbortError(error)) resolve(message)
    }
  });
  (promise as PromiseWithCancel<any>).cancel = () => controller.abort()
  return promise as PromiseWithCancel<any>
}

export async function bedrockSendCommand(command: InvokeModelCommand, response: React.Dispatch<React.SetStateAction<any>>, loading: React.Dispatch<React.SetStateAction<boolean>>) {
  /* setQuote(false)
  setLoading(true)
  try {
    const response = await bedrockRunTimeClient.send(command)
    const jsonResponse = Buffer.from(response?.body).toString('utf8')
    const responseData = JSON.parse(jsonResponse)
    const responseText = responseData?.generations[0]?.text
    const formatQuote = responseText?.match(/<\s*span[^>]*>(.*?)<\s*\/\s*span>/g)
    const quoteText = !!formatQuote ? formatQuote[0].replaceAll(/(<([^>]+)>)/gi, '') : ''

    if(!!quoteText && quoteText !== '') setModelResponse(quoteText)
  } catch (error) {
    console.log("error: ", error)
    setError(error)
  } finally {
    setQuote(true)
    setLoading(false)
  } */
}

export function removeBodyClasses() {
  const bodyElement = document.getElementById('next-body')
  if(!!bodyElement) bodyElement.className = ''
}

export function addBodyClasses(classes: string) {
  const bodyElement = document.getElementById('next-body')
  if(!!bodyElement) bodyElement.classList.add(classes)
}