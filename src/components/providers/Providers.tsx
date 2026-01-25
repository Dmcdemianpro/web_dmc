'use client'

import { ContentProvider } from '@/context/ContentContext'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContentProvider>
      {children}
    </ContentProvider>
  )
}
