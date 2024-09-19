import "./App.css"
// import bg_frame from "../src/assets/bg_frame.png"
// import Link from "next/link"
import middle from "./assets/middle.png"
const App = () => {
  return (
    <>
      <div className="w-full p-2 flex justify-center text-center font-sans">
        <div className="border-gray-100 border w-96">
          <div className="font-serif mt-10 text-2xl text-[#0E13E5] font-semibold">
            10 / 26
          </div>
          <div className="flex justify-center items-center my-4 gap-4">
            <div className="text-2xl">남세린</div>
            <div className="">그리고</div>
            <div className=" text-2xl">임송하</div>
          </div>

          <div className="flex justify-center  p-2">
            <div className="border w-full h-96">사진</div>
          </div>
          <div className="space-y-1 text-gray-600 mt-4">
            <div className="">2024년 10월 26일 토요일 낮 12시 40분</div>
            <div className="">웨딩 스퀘어 그레이스 홀 4F</div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <img alt="" src={middle} />
      </div>
      <div className="p-2 text-center bg-gray-100 font-sans">
        <div className="mt-6 text-lg">
          저희 두 사람 <br />
          좋은 날 결혼합니다.
        </div>
        <div className="mt-6 space-y-2">
          <div>서로가 마주보며 다져온 사랑을</div>
          <div>이제 함께 한 곳을 바라보며</div>
          <div>걸어갈 수 있는 큰 사랑으로 키우고자 합니다.</div>
          <div>저희 두 사람이 사랑의 이름으로</div>
          <div>지켜나갈 수 있게 앞날을</div>
          <div>축복해 주시면 감사하겠습니다.</div>
        </div>
      </div>
    </>
  )
}

export default App
