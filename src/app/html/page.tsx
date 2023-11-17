import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@component/common/container'
import SvgImg from '@component/common/svg'

export const metadata: Metadata = {
  title: 'Webpage: SEO Tag & Social Media Topic Generation',
  description: 'Generate SEO tags and/or social media tags based on url.',
}

export default function Page() {
  return (
    <Container page={'html-generationo'} pageTemplate={'two-col'}>
      <section className="section">
        <h1>Let&rsquo;s Get Started</h1>

        <div className="card-grid">
          <Link className="card card-link" href="/analysis">
            <SvgImg name={'analysis'} type={'icn'} role={'img'} width={16} height={16} /> Content Analysis
          </Link>
          
          <Link className="card card-link" href="/">
            <SvgImg name={'coding'} type={'icn'} role={'img'} width={16} height={16} /> HTML Generation
          </Link>
        </div>
      </section>
    </Container>
  )
}