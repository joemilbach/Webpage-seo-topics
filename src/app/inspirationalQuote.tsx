'use client'

import React from 'react'
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime'

export default function InspirationalQuote() {
  const [showQuote, setShowQuote] = React.useState<boolean>(false)
  
  //const [test, setTest] = React.useState<string | null>(null)

  /* const client = new BedrockRuntimeClient({ region: "us-east-1" });

  const params = {
  }

  const command = new InvokeModelCommand(params)

  try {
    const data = await client.send(command);
    // process data.
  } catch (error) {
    // error handling.
  } finally {
    // finally.
  } */
  
  return (
    <>
      <span className="h2">Adam&apos;s Coffee Shop™ Inspiration</span>
      <div className="inspirational-quote">
        <button
          type="button"
          className='btn'
          aria-label='Get inspirational quote'
          onClick={() => { setShowQuote(prev => !prev) }}
        >
          Get Inspired
        </button>
        {showQuote ? (
          <blockquote style={{ marginTop: '1rem' }}>&quot;If they ever come up with a swashbuckling School, I think one of the courses should be Laughing, Then Jumping Off Something.&quot;</blockquote>
        ) : null}
      </div>
    </>
  )
}

