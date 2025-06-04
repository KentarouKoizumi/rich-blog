'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = stored === 'dark' || (!stored && prefersDark)
    if (shouldUseDark) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <button onClick={toggle} className="p-2 border rounded">
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
