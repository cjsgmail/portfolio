import Career from '../about/Career'
import MyInfo from '../about/MyInfo'
import ProfileSection from '../about/ProfileSection'

export default function About() {
  return (
    <div className="desktop:flex-row desktop:justify-between desktop:align-middle flex flex-col justify-center p-32 max-[1149px]:items-center">
      <ProfileSection />
      <MyInfo />
      <Career />
    </div>
  )
}
