export default function ProfileSection() {
  return (
    <section className="desktop:items-center mt-10 flex w-72 flex-col">
      <div className="mb-10 h-60 w-60 overflow-hidden rounded-full">
        <img
          className="h-full w-full object-cover"
          alt="프로필 사진"
          src="/assets/images/profile.jpeg"
        />
      </div>
      <div className="mb-10 font-job text-2xl font-bold text-sky-600">Frontend Developer</div>
      <div className="mb-3 text-xl font-bold text-stone-700">기획자의 의도와 사용자의 니즈</div>
      <p className="mb-3 text-lg text-stone-500">
        왜? 라는 질문을 하며 의미를 가지고
        <br />
        개발하는 것이 서비스 개선의
        <br />
        가장 큰 요소라고 생각합니다.
      </p>
    </section>
  )
}
