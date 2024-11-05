import Career from '../about/Career'
import MyInfo from '../about/MyInfo'
import ProfileSection from '../about/ProfileSection'

export default function About() {
  return (
    <div className="relative top-40 flex flex-row justify-between px-44 align-middle">
      <ProfileSection />
      <MyInfo />
      <Career />
    </div>
  )
}
