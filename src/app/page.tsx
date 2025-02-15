import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { NavProps } from '@component/common/types'
import { navList } from '@component/common/constants'
import Container from '@component/common/container'
import Card from '@component/common/card'
import SvgImg from '@component/common/svg'
import InspirationalQuote from './inspirationalQuote'

type CardListProps = {
  navList: NavProps[];
}

export const metadata: Metadata = {
  title: 'Marky Marketing Can Generate That',
  description: 'Content analysis, content generation and Word too HTML conversion',
}

function CardList({ navList }: CardListProps): React.JSX.Element {
  return (
    <div className="card-grid">
      {navList.map(({ uid, displayHeading, displayBody, url, icn }: NavProps) => 
        (displayHeading && displayHeading !== '' ? (
          <Card key={uid} isLinked={true} link={{url}}>
            <span className="h2">
              <SvgImg name={icn.name} type={icn.type} role={icn.role} width={icn.width} height={icn.height} />
              {displayHeading}
            </span>
            <span className="p">
              {displayBody}
            </span>
          </Card>
        ) : null)
      )}

      <div className="card">
        <InspirationalQuote />
      </div>

      <div className="card">
        <span className="h2">More Coming <em>Soon<sup>™</sup></em></span>
        <span className="p">Marky Marketing is just getting started. Adam&apos;s Coffee Shop™ is dedicated to making him work his fingers to the bone.</span>
        <span className="p">Website Audit, Summarization...</span>
      </div>
    </div>
  )
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
        <CardList navList={navList} />
      </section>
    </Container>
  )
}