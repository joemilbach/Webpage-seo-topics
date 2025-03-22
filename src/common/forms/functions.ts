import pdfToText from 'react-pdftotext'
import mammoth from 'mammoth'
import { AcceptTextFilesProps } from '@component/common/types'

async function extractText(arrayBuffer: ArrayBuffer): Promise<string> {
  const { value } = await mammoth.extractRawText({ arrayBuffer })
  return value
}

export async function rawText(file: File, mimeType?: AcceptTextFilesProps): Promise<string | undefined> {
  let text: string | undefined
  
  if (file) {
    switch (mimeType) {
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as ArrayBuffer)
          reader.onerror = reject
          reader.readAsArrayBuffer(file)
        });
        text = await extractText(arrayBuffer)
        break
    
      case 'text/plain':
        text = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsText(file)
        });
        break
      
      case 'application/pdf':
        pdfToText(file).then(text => console.log(text)).catch(error => console.error("Failed to extract text from pdf", error))
      
      default:
        return undefined
    }
  }
  
  return text
}