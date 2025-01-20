import { Metadata } from 'next'
import React from 'react'
import Container from '@component/common/container'
import FormUpload from '@component/common/forms/upload'

export const metadata: Metadata = {
  title: 'Webpage: SEO Tag & Social Media Topic Generation',
  description: 'Generate SEO tags and/or social media tags based on url.',
}

export default function Page() {
  return (
    <Container page={'html-generation'} pageTemplate={'two-col'}>
      <section className="section">
        <h1>Let&rsquo;s Get Started</h1>
        <FormUpload />
      </section>
    </Container>
  )
}