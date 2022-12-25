import * as Avatar from '@radix-ui/react-avatar'

const UserAvatar = ({ user, width }) => {
  return (
    <Avatar.Root
      className={`flex justify-center align-middle overflow-hidden w-[${width}px] h-[${width}px] rounded-full`}
    >
      <Avatar.Image src={user.picture}/>
      <Avatar.AvatarFallback
        className='w-full h-full text-lg bg-gray-200 rounded-full text-orange-400 flex items-center justify-center'
      >
        {user.username[0]}
      </Avatar.AvatarFallback>
    </Avatar.Root>
  )
}

export default UserAvatar