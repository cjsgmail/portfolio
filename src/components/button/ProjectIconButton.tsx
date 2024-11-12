import {Icon} from '@iconify/react'

type Props = {
  children: string
  url: string
  icon: string
}

export default function ProjectIconButton({url, icon, children}: Props) {
  const handleClickButton = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <button
      className="mr-1 flex h-8 w-fit flex-row rounded-md border-2 border-gray-300 p-1 align-middle"
      onClick={() => handleClickButton(url)}
    >
      <Icon
        icon={icon}
        width="20px"
        height="20px"
        className="mr-1"
      />
      <div className="text-sm">{children}</div>
    </button>
  )
}
