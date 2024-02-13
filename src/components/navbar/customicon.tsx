import { IconType, IconBaseProps } from 'react-icons'

interface CustomIconProps extends IconBaseProps {
  icon: IconType
}

const CustomIcon = ({ icon: Icon, ...rest }: CustomIconProps) => {
  return <Icon {...rest} />
}

export default CustomIcon
