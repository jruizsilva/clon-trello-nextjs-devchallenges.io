import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  className?: string
  src: string
  width: number
  height: number
}

const Avatar = ({ className, src, width, height }: AvatarProps) => {
  return (
    <div
      className={`w-[${width}px] h-[${height}px] rounded-lg ${className}`}
    >
      <Image
        src={src}
        alt='avatar image'
        width={width}
        height={height}
        className='rounded-lg'
      />
    </div>
  )
}

export default Avatar
