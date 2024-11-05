import {Github} from '../icon/Github'
import {Instagram} from '../icon/Instagram'

export default function MyInfo() {
  return (
    <section className="flex w-72 flex-col pt-10">
      <div className="mb-3 text-xl font-semibold text-sky-600">
        최정석 <br />
        CHOI JEONG SEOK
      </div>
      <p className="mb-3 text-stone-500">1997.06.02</p>
      <p className="mb-3 text-stone-500">010-2035-9863</p>
      <p className="mb-3 text-stone-500">cjs0097@gmail.com</p>
      <p className="mb-3 text-stone-500">ESFJ</p>
      <div className="flex flex-row">
        <a
          href="https://github.com/cjsgmail"
          target="_blank"
          rel="noreferrer"
        >
          <Github
            className="mr-2 text-stone-500 hover:text-stone-800"
            width={'30px'}
            height={'30px'}
          />
        </a>
        <a
          href="https://www.instagram.com/holoseokeee/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram
            className="text-stone-500 hover:text-red-500"
            width={'30px'}
            height={'30px'}
          />
        </a>
      </div>
      <div className="mb-3 mt-10 text-xl font-semibold text-sky-600">EDUCATION</div>
      <p className="mb-3 text-stone-500">2016.02 구일고등학교 졸업</p>
      <p className="mb-3 text-stone-500">2022.08 수원대학교 호텔관광학부 졸업</p>
      <p className="mb-3 text-stone-500">
        2022.04 ~ 2022.10 <br /> 코드스테이츠 프론트엔드 엔지니어링 수료
      </p>
    </section>
  )
}
