export default function NaljaIntro() {
  return (
    <div className="flex h-screen flex-row justify-between bg-gradient-to-t from-zinc-50 to-indigo-200 p-32">
      <div className="flex flex-col justify-center">
        <div className="text-3xl font-bold">나의 유능함 사용법, 마이날자</div>
        <div className="mt-3 text-lg">
          커리어 역량 진단 및 분석, 코칭을 제공하는 사내 역량 강화 서비스
        </div>
        <div className="mt-3">
          <p className="text-sm text-stone-500">
            MBTI검사와 유사한 커리어 역량 자가진단, 상호진단을 통해
            <br />
            사내 직원들의 역량 진단 결과를 분석하여
            <br />
            코칭하고 툴킷을 이용하여 미흡한 부분에 대한 <br />
            추천과 역량을 강화할 수 있는 서비스를 제공합니다.
          </p>
        </div>
        <div className="mt-56 flex flex-row">
          <div className="mr-3 w-20 text-sm font-bold">작업 기간</div>
          <div className="text-sm text-stone-500">2024.09 ~ 2024.10</div>
        </div>
        <div className="mt-3 flex flex-row">
          <div className="mr-3 w-20 text-sm font-bold">기여도</div>
          <div className="text-sm text-stone-500">프론트엔드 100%</div>
        </div>
        <div className="mt-3 flex flex-row">
          <div className="mr-3 w-20 text-sm font-bold">스킬</div>
          <div className="text-sm text-stone-500">
            NextJS, TypeScript, Recoil, MUI, React-Beautiful-DND, XLSX, AWS EC2, Docker
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div
          className="h:w-96 h-fit overflow-hidden rounded-lg"
          style={{width: '650px'}}
        >
          <img
            alt="날자 소개 이미지"
            src="/assets/images/nalja-diagnosis.png"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}
