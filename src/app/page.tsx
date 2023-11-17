import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@component/common/container'
import SvgImg from '@component/common/svg'
import InspirationalQuote from './inspirationalQuote'

export const metadata: Metadata = {
  title: 'Marky Marketing Can Generate That',
  description: 'Content analysis, content generation and Word too HTML conversion',
}

export default function Page() {
  return (
    <Container page={'dashboard'} pageTemplate={'one-col'}>
      <header className="header">
        
        <Link className="logo" href="/">
          <strong>M<span>arky </span>M<span>arketing</span></strong>
          <small>Content Generation</small>
        </Link>

      </header>

      <section className="section">

        <h1>Let&rsquo;s Get Started</h1>
        <p>Choose one of the options below.</p>

        <div className="card-grid">
          <Link className="card card-link" href="/analysis">
            <span className="h2"><SvgImg name={'analysis'} type={'icn'} role={'img'} width={16} height={16} /> Content Analysis</span>
            <span className="p">Give Marky a URL or text document and have him learn how to generate content in specific style.</span>
          </Link>
          
          <Link className="card card-link" href="/html">
            <span className="h2"><SvgImg name={'coding'} type={'icn'} role={'img'} width={16} height={16} /> HTML Generation</span>
            <span className="p">Upload a Word document and Marky will turn that into HTML for you.</span>
          </Link>

          <div className="card">
            <span className="h2">More Coming <em>Soon<sup>™</sup></em></span>
            <span className="p">Marky Marketing is just getting started. Adam&apos;s Coffee Shop™ is dedicated to making him work his fingers to the bone.</span>
          </div>

          <div className="card">
            <InspirationalQuote />
          </div>
        </div>

      </section>
    </Container>
  )
}