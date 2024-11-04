import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const activeClass = 'flex-1 py-6 text-center font-bold cursor-pointer text-stone-800'
  const nomalClass =
    'flex-1 py-6 text-center font-bold cursor-pointer hover:text-stone-800 text-stone-500'
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
    <header className="fixed top-0 flex h-20 w-full cursor-pointer flex-row p-2">
      <div className="flex-1 cursor-default py-6 text-center font-bold text-sky-600">
        Choi JeongSeok
      </div>
      <div className={aboutTabClass}>
        <Link to="/">About Me</Link>
      </div>
      <div className={projectTabClass}>
        <Link to="/project">Project</Link>
      </div>
    </header>
  )
}
