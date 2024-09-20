import "./App.css"
// import bg_frame from "../src/assets/bg_frame.png"
// import Link from "next/link"
// import middle from "./assets/middle.png"
const App = () => {
  return (
    <>
      <div className="w-full p-2 flex justify-center text-center font-sans">
        <div className="border-gray-100  w-96">
          <div className="font-serif mt-10 text-2xl text-[#0E13E5] font-semibold">
            10 / 26
          </div>
          <div className="flex justify-center items-center my-6 gap-6 font-serif">
            <div className="text-2xl ">남세린</div>
            <div className="text-[#0E13E5] font-semibold">&</div>
            <div className=" text-2xl">임송하</div>
          </div>

          {/* //ANCHOR - 사진 넣는 부분 */}
          <div className="flex justify-center p-2">
            <div className="w-full h-[460px] bg-gray-100"></div>
          </div>

          <div className="space-y-1 text-gray-600 mt-8">
            <div className="">2024년 10월 26일 토요일 낮 12시 40분</div>
            <div className="">웨딩 스퀘어 그레이스 홀 4F </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-24 flex justify-center">
        <img alt="" src={middle} />
        </div> */}
      <div className="p-2 text-center font-sans">
        <div className="flex justify-center py-8">
          <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
        </div>

        <div className="text-[#0E13E5] text-sm font-serif">INVITATION</div>
        <div className=" text-[#0E13E5] mt-2 font-semibold">
          소중한 분들을 초대합니다
        </div>

        <div className="mt-12 space-y-2 font-serif">
          <div>예쁜 예감이 들었다.</div>
          <div>우리는 언제나 손을 잡고 있게 될 것이다.</div>
          <div className="pt-3 text-sm">- 이이체, 〈연인〉 中 -</div>
          {/* <div className="py-8 font-light">-</div> */}
          <div className="py-8">우리의 설레는 첫걸음을 함께 빛내주세요.</div>

          <div className="space-y-2">
            <div className="font-semibold flex justify-center">
              남기수 <span className="font-normal mx-1">∙</span> 조은경
              <span className="font-normal ml-1">의</span>
              <span className="font-normal w-[36px]">아들</span>남세린
            </div>
            <div className="font-semibold flex justify-center">
              임광옥 <span className="font-normal mx-1">∙</span> 정민정
              <span className="font-normal ml-1">의</span>
              <span className="font-normal w-[36px]">딸</span>임송하
            </div>
          </div>

          <div className="flex justify-center py-8">
            <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
          </div>

          <div className="font-sans">
            <div>
              <div className="text-lg">2024. 10. 26</div>
              <div>토요일 낮 12시 40분</div>
            </div>

            <div className="flex justify-center py-2 mt-4">
              <div className="border-b-gray-100 border w-72 border-t-0"></div>
            </div>
            <div>달력 이미지</div>
          </div>

          <div className="flex justify-center py-8">
            <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
          </div>
          <div className="text-[#0E13E5] text-sm">LOCATION</div>
          <div className=" text-[#0E13E5] font-semibold font-sans">
            오시는 길
          </div>
          <div className="font-sans pt-6">
            <div>웨딩 스퀘어 4층, 그레이스 홀</div>
            <div className="text-sm mt-2">서울 광진구 광나루로56길 85</div>
            <div className="text-sm mt-4">TEL. 02-3424-7000</div>
            <div id="map" className="w-full h-[400px]"></div>
          </div>

          <div className="flex justify-center py-8">
            <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
          </div>
          <div className="text-[#0E13E5] text-sm">ACCOUNT</div>
          <div className=" text-[#0E13E5] font-semibold font-sans">
            마음 전하실 곳
          </div>
          <div className="font-thin space-y-2 text-sm pt-8">
            <div>참석이 어려우신 분들을 위해</div>
            <div>계좌번호를 기재하였습니다.</div>
            <div>너그러운 마음으로 양해 부탁 드립니다.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
