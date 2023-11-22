import React from 'react'
import { Metadata } from 'next'
import Container from '@component/common/container'

export const metadata: Metadata = {
  title: 'Webpage: SEO Tag & Social Media Topic Generation',
  description: 'Generate SEO tags and/or social media tags based on url.',
}

export default function Page() {
  return (
    <Container page={'social-media'} pageTemplate={'two-col'}>
      <section className="section">
        <h1>Let&rsquo;s Get Started</h1>
      </section>
    </Container>
  )
}