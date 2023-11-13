'use client'

import React from 'react'
import Header from '@component/common/header'
import Footer from '@component/common/footer'
import { ContainerProps } from './types'

function Container({ children, page }: ContainerProps) {
  return (
    <main className={`${page} main`}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Container