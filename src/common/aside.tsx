'use client'

import { useState } from 'react'
import Link from 'next/link'
import SvgImg from '@component/common/svg'
import { AsideProps, NavProps } from './types'
import { navList } from '@component/common/constants'

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
        {navList.map(({ uid, displayHeading, label, url, icn }: NavProps) => {
          return (!!displayHeading && displayHeading !== '' ? (
            <Link key={uid} className={page === uid ? 'nav-link active' : 'nav-link'} href={url}>
              <SvgImg name={icn.name} type={icn.type} role={icn.role} width={icn.width} height={icn.height} /> {label}
            </Link>
          ) : null)
        })}
      </nav>
    </aside>
  )
}

export default Aside