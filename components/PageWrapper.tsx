import Image from 'next/image'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-coronado.png"
          alt="Coronado background"
          fill
          className="object-cover opacity-70"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-background/95" />
      </div>
      
      {/* Content */}
      {children}
    </div>
  )
}
