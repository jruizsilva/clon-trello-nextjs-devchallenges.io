'use client'
import Avatar from '@/components/avatar'
import Button from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import { notoSans, poppins } from '@/fonts/fonts'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import {
  MdAccountCircle,
  MdAdd,
  MdAttachFile,
  MdComment,
  MdDescription,
  MdEdit,
  MdGroup,
  MdInsertPhoto,
  MdLabel
} from 'react-icons/md'
import BoardTag from './boardtag'
import LabelWithIcon from './labelwithicon'
import BoardOwnerDetails from './boardownerdetails'
import Member from './member'
import AddButton from './addbutton'
import BoardAddMemberToCardButton from './boardaddmembertocardbutton'
import BoardAddLabelToCardButton from './boardaddlabeltocardbutton'

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
            <div className='h-[130px] rounded-lg mb-3 flex items-center overflow-hidden'>
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
          className='relative z-20'
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
            <div className='flex min-h-full items-center justify-center p-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-[661px] max-w-full transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all'>
                  <div className='h-[130px] w-[616px] flex items-center overflow-hidden rounded-xl'>
                    <Image
                      src='/logo.svg'
                      alt='card cover image'
                      width={616}
                      height={130}
                    />
                  </div>
                  <div className='mt-6'>
                    <div className='flex gap-6'>
                      <div>
                        <h6
                          className={`text-base font-normal text-black mb-1 ${notoSans.className}`}
                        >
                          ✋🏿 Move anything that is actually started
                          here
                        </h6>
                        <p
                          className={`font-semibold text-[#bdbdbd] text-[10px] mb-5 ${poppins.className}`}
                        >
                          in list{' '}
                          <span
                            className={`text-[#333] font-semibold ${poppins.className}`}
                          >
                            In Progress
                          </span>
                        </p>
                        <div className='flex items-center gap-4'>
                          <LabelWithIcon
                            icon={
                              <CustomIcon
                                icon={MdDescription}
                                fill='#bdbdbd'
                                fontSize={12}
                              />
                            }
                          >
                            Description
                          </LabelWithIcon>
                          <Button
                            icon={
                              <CustomIcon
                                icon={MdEdit}
                                fill='#828282'
                                fontSize={12}
                              />
                            }
                            className='w-[62px] h-6 border rounded-lg border-[#bdbdbd] flex items-center justify-center gap-2'
                          >
                            <span
                              className={`font-medium text-[10px] text-[#828282] ${poppins.className}`}
                            >
                              Edit
                            </span>
                          </Button>
                        </div>
                        <div className='my-3'>
                          <p
                            className={`font-normal text-sm text-black ${poppins.className}`}
                          >
                            Ideas are created and share here through a
                            card. Here you can describe what
                            you&apos;d like to accomplish. For example
                            you can follow three simple questions to
                            create the card related to your idea: *
                            Why ? (Why do you wish to do it ?) * What
                            ? (What it is it, what are the goals, who
                            is concerned) * How ? (How do you think
                            you can do it ? What are the required
                            steps ?) After creation, you can move your
                            card to the todo list.
                          </p>
                        </div>
                        <LabelWithIcon
                          icon={
                            <CustomIcon
                              icon={MdDescription}
                              fill='#bdbdbd'
                              fontSize={12}
                            />
                          }
                          className='mb-3'
                        >
                          Attachments
                        </LabelWithIcon>
                        <div className='mb-6 flex gap-3'>
                          <div className='h-[53px] w-[80px] rounded-lg flex items-center overflow-hidden'>
                            <Image
                              src='/logo.svg'
                              alt='preview file uploaded'
                              width={80}
                              height={53}
                            />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-[#bdbdbd] text-[8px]'>
                              Added July 5, 2020
                            </p>
                            <p className='text-black text-[10px] mb-1'>
                              Reasoning by Ranganath Krishnamani
                            </p>
                            <Button className='border rounded-lg border-[#bdbdbd] text-[#828282] w-[62px] h-[24px] text-[10px] font-medium'>
                              Download
                            </Button>
                          </div>
                        </div>
                        <div className='mb-6 flex gap-3'>
                          <div className='h-[53px] w-[80px] rounded-lg flex items-center overflow-hidden'>
                            <Image
                              src='/logo.svg'
                              alt='preview file uploaded'
                              width={80}
                              height={53}
                            />
                          </div>
                          <div className='flex flex-col'>
                            <p className='text-[#bdbdbd] text-[8px]'>
                              Added July 5, 2020
                            </p>
                            <p className='text-black text-[10px] mb-1'>
                              Reasoning by Ranganath Krishnamani
                            </p>
                            <Button className='border rounded-lg border-[#bdbdbd] text-[#828282] w-[62px] h-[24px] text-[10px] font-medium'>
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <LabelWithIcon
                          icon={
                            <CustomIcon
                              icon={MdAccountCircle}
                              fill='#bdbdbdbd'
                              fontSize={12}
                            />
                          }
                          className='mb-3'
                        >
                          Actions
                        </LabelWithIcon>

                        {/* Actions */}
                        <div className='flex flex-col gap-3 mb-[20px]'>
                          <BoardAddLabelToCardButton />
                          <Button
                            icon={
                              <CustomIcon
                                icon={MdInsertPhoto}
                                fill='#828282'
                                fontSize={12}
                              />
                            }
                            className='rounded-lg bg-[#F2F2F2] w-[148px] h-[32px] flex items-center gap-3 pl-4'
                          >
                            <span className='text-[#828282] text-xs font-medium'>
                              Cover
                            </span>
                          </Button>
                        </div>

                        <LabelWithIcon
                          icon={
                            <CustomIcon
                              icon={MdGroup}
                              fill='#bdbdbdbd'
                              fontSize={12}
                            />
                          }
                          className='mb-3'
                        >
                          Members
                        </LabelWithIcon>

                        {/* Members */}
                        <div className='flex flex-col gap-2 mb-4 h-[105px] overflow-y-auto'>
                          <Member />
                          <Member />
                          <Member />
                          <Member />
                        </div>
                        <BoardAddMemberToCardButton
                          className='h-8 flex justify-between bg-[#DAE4FD]  items-center pl-3 pr-2 rounded-lg w-full'
                          icon={
                            <CustomIcon
                              icon={MdAdd}
                              fill='#2F80ED'
                              fontSize={20}
                            />
                          }
                          top='top-[40px]'
                        >
                          <span
                            className={`font-medium text-xs text-[#2F80ED] ${notoSans.className}`}
                          >
                            Assign a member
                          </span>
                        </BoardAddMemberToCardButton>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='relative min-h-[103px] rounded-xl mb-[26px]'>
                      <textarea
                        name='comment'
                        className={`relative w-full min-h-[103px] border border-[#e0e0e0] rounded-xl p-3 pl-14 text-sm text-[#bdbdbd] resize-none ${notoSans.className}`}
                        placeholder='Write a comment...'
                      ></textarea>
                      <Avatar
                        src='https://i.pravatar.cc/32?img=10'
                        width={32}
                        height={32}
                        className='absolute top-3 left-3'
                      />
                      <Button className='absolute right-[12px] bottom-[16px] w-[74px] h-[30px] rounded-lg bg-[#2f80ed] text-[10px] text-white'>
                        Comment
                      </Button>
                    </div>
                    <div className='pb-3 mb-3 border-b'>
                      <div className='flex justify-between mb-3'>
                        <BoardOwnerDetails />
                        <div className='flex gap-3 items-center'>
                          <button
                            className={`text-[#828282] font-medium text-[10px] ${poppins.className}`}
                          >
                            Edit
                          </button>
                          <button
                            className={`text-[#828282] font-medium text-[10px] ${poppins.className}`}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p
                        className={`text-[#4f4f4f] font-normal text-sm ${notoSans.className}`}
                      >
                        “The gladdest moment in human life, methinks,
                        is a departure into unknown lands.” – Sir
                        Richard Burton
                      </p>
                    </div>
                    <div className='pb-3 mb-3'>
                      <div className='flex justify-between mb-3'>
                        <BoardOwnerDetails />
                        <div className='flex gap-3 items-center'>
                          <button
                            className={`text-[#828282] font-medium text-[10px] ${poppins.className}`}
                          >
                            Edit
                          </button>
                          <button
                            className={`text-[#828282] font-medium text-[10px] ${poppins.className}`}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p
                        className={`text-[#4f4f4f] font-normal text-sm ${notoSans.className}`}
                      >
                        “The gladdest moment in human life, methinks,
                        is a departure into unknown lands.” – Sir
                        Richard Burton
                      </p>
                    </div>
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
