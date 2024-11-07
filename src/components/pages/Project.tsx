import NaljaDetail from '../nalja/NaljaDetail'
import NaljaIntro from '../nalja/NaljaIntro'

export default function Project() {
  return (
    <section className="flex flex-col">
      <NaljaIntro />
      <NaljaDetail />
    </section>
  )
}
