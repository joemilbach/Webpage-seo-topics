'use client'

import { useState } from 'react'
import Link from 'next/link'
import SvgImg from '@component/common/svg'
import { AsideProps } from './types'

function Aside({ page }: AsideProps) {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  return (
    <aside className={mobileMenuActive ? 'aside active' : 'aside'}>
      <button type="button" className="overlay-close" aria-label="Close Navigation Menu" onClick={()=>{ setMobileMenuActive(prev => !prev) }}>
        <span className="sr-only">close</span>
      </button>

      <div className="aside-header">
        <Link className="logo" href="/">
          <strong>M<span>arky </span>M<span>arketing</span></strong>
          <small>Content Generation</small>
        </Link>

        <button type="button" className="btn-nav" aria-label="Open/Close Navigation Menu" onClick={()=>{ setMobileMenuActive(prev => !prev) }}>
          <span>Menu</span>
        </button>
      </div>

      <nav className="nav nav-vertical">
        <Link className={page === 'dashboard' ? 'nav-link active' : 'nav-link'} href="/"><SvgImg name={'dashboard'} type={'icn'} role={'img'} width={16} height={16} /> Dashboard</Link>
        <Link className="nav-link" href="/analysis"><SvgImg name={'analysis'} type={'icn'} role={'img'} width={16} height={16} /> Content Analysis</Link>
        <Link className="nav-link" href="/html"><SvgImg name={'coding'} type={'icn'} role={'img'} width={16} height={16} /> HTML Generation</Link>
      </nav>
    </aside>
  )
}

export default Aside