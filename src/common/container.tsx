'use client'

import React from 'react'
import Aside from '@component/common/aside'
import Footer from '@component/common/footer'
import { ContainerProps } from './types'

function Container({ children, page, pageTemplate }: ContainerProps) {
  return (
    <main className={`${page} main ${pageTemplate}`}>
      <div className="col-main">
        {children}
        <Footer />
      </div>
      { pageTemplate === 'two-col' ? <Aside page={page} /> : null }
    </main>
  )
}

export default Container