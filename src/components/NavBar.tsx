import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  const activeClass = 'p-5 w-full font-bold text-stone-800'
  const nomalClass = 'p-5 w-full font-bold hover:text-stone-800 text-stone-500'
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
    <nav className="fixed top-20 w-full bg-white/60">
      <Link
        to="/"
        className="cursor-pointer"
      >
        <div className={aboutTabClass}>About Me</div>
      </Link>
      <Link
        to="/project"
        className="cursor-pointer"
      >
        <div className={projectTabClass}>Project</div>
      </Link>
    </nav>
  )
}
