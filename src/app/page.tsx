import { Metadata } from 'next'
import React from 'react'
import Container from '@component/common/container'
import Form from '@component/common/form'
import SvgImg from '@component/common/svg'
import { contactNav } from '@component/common/constants'

export const metadata: Metadata = {
  title: 'Webpage: SEO Tag & Social Media Topic Generation',
  description: 'Generate SEO tags and/or social media tags based on url.',
}

export default function Page() {
  function ContactNav(): React.ReactElement | null {
    if (!contactNav || contactNav?.length < 1) return null
    return(
      <nav className="nav nav-inline">
        {contactNav?.map((link) => {
          return (
            <a key={link.uid} rel="nofollow" href={link.url} target={link?.targetBlank ? '_blank' : '_self'}>
              <SvgImg name={link.icn.name} type={link.icn.type} role={link.icn.role} width={link.icn.width} height={link.icn.height} />
              <span className="sr-only">{link.label}</span>
            </a>
          )
        })}
      </nav>
    )
  }

  return (
    <Container page={'home'}>
      <section className="section">
        <h1>Let&rsquo;s Get Started</h1>
        <p>Type or paste a URL in the field below.</p>
        <Form />
      </section>
    </Container>
  )
}