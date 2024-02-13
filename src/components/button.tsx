import React from 'react'

interface ButtonProps {}

const Button = (props: ButtonProps) => {
  return (
    <button className='flex items-center gap-3 w-[108px] h-[32px] bg-[#f2f2f2] rounded-lg px-4 py-2 hover:bg-[#e2e2e2]'>
      <svg
        className='w-3 h-3 fill-[#828282]'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
      </svg>
      <span className='text-xs font-medium text-[#828282]'>
        All board
      </span>
    </button>
  )
}

export default Button
