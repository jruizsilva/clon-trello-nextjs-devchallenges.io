'use client'

import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import SelectVisibility from '@/components/selectvisibility'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { MdAdd, MdImage } from 'react-icons/md'

interface AddBoardModalProps {}

const AddBoardModal = (props: AddBoardModalProps) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Button
        onClick={openModal}
        icon={<CustomIcon icon={MdAdd} fill='white' />}
        className='w-[74px] h-[30px] rounded-lg bg-[#2f80ed] flex justify-center items-center gap-1'
      >
        <span className='text-[10px] text-white font-medium'>
          Add
        </span>
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-[307px] h-[271px] rounded-lg bg-white px-6 pt-[27px] pb-[17px] shadow-md transition-all'>
                  <div className='w-[259px] h-[78px] flex items-center overflow-hidden rounded-lg mb-[10px]'>
                    <Image
                      src='/background-board.avif'
                      alt='background image'
                      width={259}
                      height={78}
                      className='rounded-lg'
                    />
                  </div>
                  <input
                    type='text'
                    className='py-2 ps-3 w-full h-[34px] text-[10px] shadow-md rounded-lg border mb-[21px]'
                    placeholder='Add board title...'
                  />
                  <div className='flex gap-5 mb-[22px]'>
                    <Button
                      icon={
                        <CustomIcon
                          icon={MdImage}
                          fontSize={12}
                          fill='#828282'
                        />
                      }
                      className='flex items-center gap-2 min-w-[120px] h-[32px] bg-[#f2f2f2] rounded-lg px-4 py-2 hover:bg-[#e2e2e2]'
                    >
                      <span className='text-xs font-medium text-[#828282]'>
                        Cover
                      </span>
                    </Button>
                    <SelectVisibility />
                  </div>
                  <div className='flex gap-4'>
                    <Button
                      className='ml-auto'
                      onClick={() => closeModal()}
                    >
                      <span className='text-[10px] text-[#828282]'>
                        Cancel
                      </span>
                    </Button>
                    <Button
                      onClick={openModal}
                      icon={<CustomIcon icon={MdAdd} fill='white' />}
                      className='w-[74px] h-[30px] rounded-lg bg-[#2f80ed] flex justify-center items-center gap-1'
                    >
                      <span className='text-[10px] text-white font-medium'>
                        Create
                      </span>
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddBoardModal
