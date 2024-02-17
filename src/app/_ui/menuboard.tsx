'use client'
import { Popover } from '@headlessui/react'
import Button, { ButtonWithForwardRef } from '@/components/button'
import CustomIcon from '@/components/navbar/customicon'
import {
  MdAccountCircle,
  MdAdd,
  MdClose,
  MdDescription,
  MdEdit,
  MdMoreHoriz
} from 'react-icons/md'
import LabelWithIcon from './labelwithicon'
import BoardOwnerDetails from './boardownerdetails'
import { notoSans, poppins } from '@/fonts/fonts'
import BoardMember from './boardmember'
import BoardInviteButton from './boardinvitebutton'

interface Props {}

export default function MenuBoard(props: Props): JSX.Element {
  return (
    <div>
      <Popover>
        <Popover.Button
          as={ButtonWithForwardRef}
          className='flex items-center justify-center gap-2 px-3 h-[32px] bg-[#f2f2f2] rounded-lg hover:bg-[#e2e2e2]'
          icon={
            <CustomIcon
              icon={MdMoreHoriz}
              fontSize={13}
              fill='#828282'
            />
          }
        >
          <span className='text-xs font-medium text-[#828282]'>
            Show Menu
          </span>
        </Popover.Button>
        <Popover.Panel className='absolute z-20 max-w-full w-[377px] bg-white shadow-lg  right-0 top-0 sm:top-[68px] p-5  sm:h-[calc(100vh-68px)] h-screen overflow-auto'>
          {({ close }) => (
            <>
              <header className='flex justify-between pb-[5px] border-b border-[#E0E0E0]'>
                <h4 className='font-xs font-semibold text-[#333]'>
                  Devchallenges Board
                </h4>
                <Button
                  onClick={async () => close()}
                  icon={
                    <CustomIcon
                      icon={MdClose}
                      fontSize={24}
                      fill='#4f4f4f'
                    />
                  }
                ></Button>
              </header>
              <div className='py-2'>
                <LabelWithIcon
                  icon={
                    <CustomIcon
                      icon={MdAccountCircle}
                      fill='#bdbdbd'
                      fontSize={12}
                    />
                  }
                >
                  Made by
                </LabelWithIcon>
                <BoardOwnerDetails className='mb-6 mt-3' />
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
                    className={`text-sm font-medium text-black ${notoSans.className}`}
                  >
                    Simple board to start on a project. Each list can
                    hold items (cards) that represent ideas or tasks.
                    There 4 lists here: * Backlog 🤔 : Ideas are
                    created here. Here people can describe the idea
                    following three simple questions: Why you wish to
                    do it, What it is, how can you do it. * In
                    Progress📚: Once the ideas is clearly defined, the
                    task can move to #todo stage. Here the owner of
                    the idea can move to #doing once s/he is ready. He
                    can also wait a bit for other members to join. *
                    In Review ⚙️: On-going * Completed 🙌🏽**: Finished
                    You could add other lists like labels holding
                    labels (with colors) in order to tag each card by
                    a label if you wish.
                  </p>
                </div>
                <div className='flex items-center gap-4 mb-3'>
                  <LabelWithIcon
                    icon={
                      <CustomIcon
                        icon={MdDescription}
                        fill='#bdbdbd'
                        fontSize={12}
                      />
                    }
                  >
                    Team
                  </LabelWithIcon>
                  <BoardInviteButton
                    icon={
                      <CustomIcon
                        icon={MdAdd}
                        fill='#828282'
                        fontSize={12}
                      />
                    }
                    className='w-[62px] h-6 border rounded-lg border-[#bdbdbd] flex items-center justify-center gap-2'
                  >
                    <span
                      className={`font-medium text-[10px] text-[#828282] ${poppins.className}`}
                    >
                      Add
                    </span>
                  </BoardInviteButton>
                </div>
                <div className='flex flex-col gap-[18px]'>
                  <BoardMember isOwner />
                  <BoardMember />
                  <BoardMember />
                </div>
              </div>
            </>
          )}
        </Popover.Panel>
      </Popover>
    </div>
  )
}
