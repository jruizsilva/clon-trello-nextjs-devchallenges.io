'use client'
import Avatar from '@/components/avatar'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { notoSans } from '@/fonts/fonts'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { MdAdd, MdAttachFile, MdComment } from 'react-icons/md'
import BoardTag from './boardtag'

interface Props {
  title: string
  image?: string
  tags: Tag[]
}

export default function BoardCard({
  title,
  image,
  tags
}: Props): JSX.Element {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className='bg-white rounded-lg shadow-md p-3 w-full min-h-[148px] hover:ring hover:cursor-pointer'
        onClick={openModal}
      >
        <div className=''>
          {image && (
            <div className='h-[130px] rounded-lg bg-red-50 mb-3 flex items-center'>
              <Image
                src={image}
                alt='card image'
                height={130}
                width={219}
                className='rounded-lg'
              />
            </div>
          )}
        </div>
        <h4
          className={`text-black font-normal text-base mb-3 ${notoSans.className}`}
        >
          {title}
        </h4>
        <div className='flex gap-3 mb-[22px]'>
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => <BoardTag key={tag.id} tag={tag} />)}
        </div>
        <footer className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <Avatar
              src='https://i.pravatar.cc/28?img=10'
              width={28}
              height={28}
            />
            <Button
              icon={
                <CustomIcon icon={MdAdd} fill='white' fontSize={24} />
              }
              className='w-[28px] h-[28px] rounded-lg bg-[#2f80ed] justify-center items-center flex'
            />
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-1'>
              <CustomIcon
                icon={MdComment}
                fill='#bdbdbd'
                fontSize={14}
              />
              <span
                className={`font-medium text-[10px] text-[#bdbdbd] ${notoSans.className}`}
              >
                2
              </span>
            </div>
            <div className='flex gap-1'>
              <CustomIcon
                icon={MdAttachFile}
                fill='#bdbdbd'
                fontSize={14}
              />
              <span
                className={`font-medium text-[10px] text-[#bdbdbd] ${notoSans.className}`}
              >
                1
              </span>
            </div>
          </div>
        </footer>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
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
                <Dialog.Panel className='w-[661px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Your payment has been successfully submitted.
                      We’ve sent you an email with all of the details
                      of your order.
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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
