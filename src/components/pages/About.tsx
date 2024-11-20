import Career from '../about/Career'
import MyInfo from '../about/MyInfo'
import ProfileSection from '../about/ProfileSection'

export default function About() {
  return (
    <div className="desktop:flex-row desktop:items-start desktop:justify-between desktop:align-middle mobile:px-10 flex flex-col items-center justify-center p-32">
      <ProfileSection />
      <MyInfo />
      <Career />
    </div>
  )
}
