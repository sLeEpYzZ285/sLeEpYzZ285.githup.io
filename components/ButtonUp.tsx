"use client"
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/button'


export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        color='default'
        isIconOnly
        variant='flat'
        size='lg'
        onClick={scrollToTop}
        aria-label='button go to on top.'
        className={`${isVisible ? 'opacity-100' : 'opacity-0'} 
        px-0
        rounded-full text-blue-500
        shadow-sm transition-opacity 
         z-50`}
      >
        ▲
      </Button>
    </div>
  )
}