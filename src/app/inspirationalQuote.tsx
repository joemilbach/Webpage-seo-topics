'use client'

import React from 'react'

export default function InspirationalQuote() {
  const [test, setTest] = React.useState<string | null>(null)
  
  return (
    <>
      <span className="h2">Adam&apos;s Coffee Shop™ Inspiration</span>
      <div className="inspirational-quote">
        <button
          type="button"
          className='btn'
          aria-label='Get inspirational quote'
          onClick={() => { console.log('Test') }}
        >
          Get Inspired
        </button>
        <blockquote>&quot;If they ever come up with a swashbuckling School, I think one of the courses should be Laughing, Then Jumping Off Something.&quot;</blockquote>
      </div>
    </>
  )
}

