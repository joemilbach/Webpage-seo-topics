'use client'

import Link from 'next/link'

function Header() {
  return (
    <header className='header'>
      <Link className='logo' href="/">
        <strong>M<span>arky </span>M<span>arketing</span></strong>
        <small>Content Generation</small>
      </Link>
    </header>
  );
}

export default Header