'use client'

import { useState } from 'react'
import Link from 'next/link'
import SvgImg from '@component/common/svg'
import { AsideProps, NavProps } from './types'
import { navList } from '@component/common/constants'

type ToggleMobileMenuProps = {
  active: boolean;
  isCloseBtn: boolean;
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type NavLinksProps = {
  navList: NavProps[];
  page: string;
}

function ToggleMobileMenu({ active, isCloseBtn, setMobileMenuActive }: ToggleMobileMenuProps): React.JSX.Element {
  const btnClass = isCloseBtn ? 'overlay-close' : `btn-nav ${active ? 'active' : ''}`
  return (
    <button
      type="button"
      className={btnClass}
      aria-label={active ? "Close Navigation Menu" : "Open Navigation Menu"}
      onClick={() => active ? setMobileMenuActive(false) : setMobileMenuActive(true)}
    >
      {active ? 'Close' : 'Menu'}
    </button>
  )
}

function NavLinks({ navList, page }: NavLinksProps): React.JSX.Element {
  return (
    <nav className="nav nav-vertical">
      {navList.map(({ uid, displayHeading, label, url, icn }) => 
        (displayHeading && displayHeading !== '' ? (
          <Link key={uid} className={`${page === uid ? 'nav-link active' : 'nav-link'}`} href={url}>
            <SvgImg name={icn.name} type={icn.type} role={icn.role} width={icn.width} height={icn.height} /> {label}
          </Link>
        ) : null)
      )}
    </nav>
  )
}

function Aside({ page }: AsideProps) {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  return (
    <aside className={mobileMenuActive ? 'aside active' : 'aside'}>
      <ToggleMobileMenu active={mobileMenuActive} isCloseBtn={true} setMobileMenuActive={setMobileMenuActive} />

      <div className="aside-header">
        <Link className="logo" href="/">
          <strong>M<span>arky </span>M<span>arketing</span></strong>
          <small>Content Generation</small>
        </Link>

        <ToggleMobileMenu active={mobileMenuActive} isCloseBtn={false} setMobileMenuActive={setMobileMenuActive} />
      </div>

      <NavLinks navList={navList} page={page} />
    </aside>
  )
}

export default Aside