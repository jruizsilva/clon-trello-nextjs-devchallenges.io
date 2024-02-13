import Button from '../button'

const InputSearch = ({ className }: { className?: string }) => {
  return (
    <div className={`w-[338px] h-[34px] relative ${className}`}>
      <input
        type='text'
        className='py-2 ps-3 w-full h-[34px] text-[10px] shadow-md rounded-lg'
        placeholder='Keyword...'
      />
      <Button className='absolute right-[2px] bottom-[2px] top-[2px] w-[74px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white'>
        Search
      </Button>
    </div>
  )
}

export default InputSearch
