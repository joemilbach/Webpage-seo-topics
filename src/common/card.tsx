'use client'

import Link from 'next/link'
import { CardProps } from './types'

function Card({ children, isLinked, link, customClass }: CardProps) {
  const cssClass = `card${isLinked ? ' card-link' : ''}${!!customClass ? ' ' + customClass : ''}`
  
  return(isLinked && link ? (
    <Link
      className={cssClass}
      href={link?.url ? link.url : ''}
      target={link?.target ? link.target : '_self'}
    >
      {children}
    </Link>
  ) : (
    <div className={cssClass}>
      {children}
    </div>
  ))
}

export default Card