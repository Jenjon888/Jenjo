'use client'

import { useEffect } from 'react'
import Hotjar from '@hotjar/browser'

export function HotjarComponent() {
  useEffect(() => {
    const siteId = 6532755
    const hotjarVersion = 6

    Hotjar.init(siteId, hotjarVersion)
  }, [])

  return null
}
