'use client'

import React from 'react'
import { awsRegion, bedrockModelID } from '@component/common/constants'
import { AWSCredentials, LlamaRequestBody } from '@component/common/types'
import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelCommandInput } from '@aws-sdk/client-bedrock-runtime'

export default function InspirationalQuote() {
  const awsAccessKeyID = !!process?.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ? process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID : ''
  const awsSecretAccessKey = !!process?.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ? process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY : ''
  const awsSessionToken = !!process?.env.NEXT_PUBLIC_AWS_SESSION_TOKEN ? process.env.NEXT_PUBLIC_AWS_SESSION_TOKEN : ''
  const [modelResponse, setModelResponse] = React.useState<any>(null)
  const [error, setError] = React.useState<any>(null)
  const [quote, setQuote] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const promptMessage = `Find one smaller quote from Deep Thoughts by Jack Handey. Format the quote inside an html span tag.`;
  const credentials: AWSCredentials = {
    accessKeyId: awsAccessKeyID,
    secretAccessKey: awsSecretAccessKey,
    sessionToken: awsSessionToken,
  }

  const prompt = 
  `<|begin_of_text|><|start_header_id|>user<|end_header_id|>
  ${promptMessage}
  <|eot_id|>
  <|start_header_id|>assistant<|end_header_id|>`

  const requestBody: LlamaRequestBody = {
    prompt,
    max_gen_len: 250,
    temperature: 0.7,
    top_p: 0.9
  }

  const bedrockRunTimeClient = new BedrockRuntimeClient({
    region: awsRegion[0],
    credentials,
  })

  const invokeModelInput: InvokeModelCommandInput = {
    contentType: "application/json",
    body: JSON.stringify(requestBody),
    modelId: bedrockModelID[2]
  }

  const command = new InvokeModelCommand(invokeModelInput)

  async function getQuote() {
    setQuote(false)
    setLoading(true)
    try {
      const response = await bedrockRunTimeClient.send(command)
      const jsonResponse = Buffer.from(response?.body).toString('utf8')
      const responseData = JSON.parse(jsonResponse)
      const responseText = responseData?.generation
      const hasSpan = !!responseText?.match(/<\s*span[^>]*>(.*?)<\s*\/\s*span>/g)
      const formatQuote = hasSpan ? responseText?.match(/<\s*span[^>]*>(.*?)<\s*\/\s*span>/g) : responseText
      const quoteText = !!formatQuote ? hasSpan ? formatQuote[0].replaceAll(/(<([^>]+)>)/gi, '') : formatQuote : ''

      if(!!quoteText && quoteText !== '') setModelResponse(quoteText)
    } catch (error) {
      console.log("error: ", error)
      setError(error)
    } finally {
      setQuote(true)
      setLoading(false)
    }
  }

  return (
    <>
      <span className="h2">Adam&apos;s Coffee Shop™ Thoughts</span>
      <div className="inspirational-quote">
        {loading ? (<p><em className="text-primary loader-fade">I will give you a moment to prepare yourself...</em></p>) : (
          <button
            type="button"
            className='btn'
            aria-label='Get deep thought'
            onClick={() => {
              getQuote()
            }}
          >
            Food for Thought
          </button>
        )}
        {quote ? (
          <blockquote className="fade-in" style={{ marginTop: '1rem' }}><em>{modelResponse}</em></blockquote>
        ) : null}
      </div>
    </>
  )
}

