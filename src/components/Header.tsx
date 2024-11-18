import {Icon} from '@iconify/react'
import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const activeClass = 'text-center font-bold text-stone-800'
  const nomalClass = 'text-center font-bold hover:text-stone-800 text-stone-500'
  const [aboutTabClass, setAboutTabClass] = useState(nomalClass)
  const [projectTabClass, setProjectTabClass] = useState(nomalClass)

  useEffect(() => {
    if (location.pathname === '/') {
      setAboutTabClass(activeClass)
      setProjectTabClass(nomalClass)
    } else {
      setAboutTabClass(nomalClass)
      setProjectTabClass(activeClass)
    }
  }, [location.pathname])

  return (
    <header className="fixed top-0 flex h-20 w-full flex-row bg-white/50 p-2 max-[1149px]:items-center max-[1149px]:justify-between">
      <div className="desktop:flex-1 cursor-default py-6 text-center font-bold text-sky-600 max-[1149px]:ml-2">
        Choi JeongSeok
      </div>
      <Link
        to="/"
        className="desktop:block hidden flex-1 cursor-pointer py-6"
      >
        <div className={aboutTabClass}>About Me</div>
      </Link>
      <Link
        to="/project"
        className="desktop:block hidden flex-1 cursor-pointer py-6"
      >
        <div className={projectTabClass}>Project</div>
      </Link>
      <Icon
        icon="material-symbols:menu"
        className="desktop:hidden text-2xl"
      />
    </header>
  )
}
