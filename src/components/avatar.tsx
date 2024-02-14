import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  className?: string
  src: string
}

const Avatar = ({ className, src }: AvatarProps) => {
  return (
    <div className={`w-[28px] h-[28px] rounded-lg ${className}`}>
      <Image
        src={src}
        alt='avatar image'
        width={28}
        height={28}
        className='rounded-lg'
      />
    </div>
  )
}

export default Avatar
