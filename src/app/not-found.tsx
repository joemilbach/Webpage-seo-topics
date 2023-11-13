'use client'

import React from 'react'
import Container from '@component/common/container'
import SvgImg from '@component/common/svg'
import { contactNav } from '@component/common/constants'

export default function NotFound() {
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
    <Container page={'not-found'}>
      <section className="hero">
        <div>
          <h1>Page Not Found</h1>
          <p>Looks like the page you are looking for is not here anymore or you typed in the wrong URL. Use the navigation above or get ahold of me through the links below.</p>
          <ContactNav />
        </div>
      </section>
    </Container>
  )
}