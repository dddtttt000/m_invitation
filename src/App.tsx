import "./App.css"
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import calendar from "./assets/calendar.png"
import frontImg from "./assets/main_01.png"
import rearImg from "./assets/IMG_3621.png"
import middleImg from "./assets/mid.png"
const App = () => {
  const navermaps = useNavermaps()

  return (
    <>
      <div className="w-full p-2 flex justify-center text-center nanum-myeongjo-regular">
        <div className="border-gray-100  w-96">
          {/* <div>우리 결혼 합니다.</div> */}

          {/* //ANCHOR - 사진 넣는 부분 */}
          <img className="mt-2" src={frontImg} alt="" />
          <div className="flex justify-center items-center my-8 gap-6 nanum-myeongjo-regular">
            <div className="text-2xl w-full text-right">Selin</div>
            <div className=" font-semibold w-10">&</div>
            <div className=" text-2xl w-full text-left">Songha</div>
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
      <div className="p-2 text-center nanum-myeongjo-regular">
        <div className="flex justify-center py-8">
          <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
        </div>

        <div className="text-[#0E13E5] text-sm">INVITATION</div>
        {/* <div className=" text-[#0E13E5] mt-2 font-semibold">
          소중한 분들을 초대합니다
        </div> */}

        <div className="mt-12 space-y-2">
          <div>예쁜 예감이 들었다.</div>
          <div>우리는 언제나 손을 잡고 있게 될 것이다.</div>
          <div className="pt-3 text-sm">- 이이체, 〈연인〉 中 -</div>

          <div className="py-10">우리의 설레는 첫걸음을 함께 빛내주세요.</div>

          <div className="space-y-3">
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

          <div className="flex justify-center">
            <div className="w-96 ">
              <div className="text-lg">10월</div>

              <div className="p-10 pb-0">
                <img src={calendar} alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 ">
              <img className="mt-4" src={middleImg} alt="" />
            </div>
          </div>

          <div className="flex justify-center py-8">
            <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
          </div>
          <div className="text-[#0E13E5] text-sm">LOCATION</div>
          {/* <div className=" text-[#0E13E5] font-semibold ">오시는 길</div> */}
          <div className="pt-6">
            <div>웨딩 스퀘어 4층, 그레이스 홀</div>
            <div className="text-sm mt-2">서울 광진구 광나루로56길 85</div>
            <div className="text-sm mt-4">TEL. 02-3424-7000</div>
            <div className="flex justify-center">
              <div id="map" className="p-6 pb-0 h-[400px] w-[400px] mt-8">
                <MapDiv
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "-30px",
                    display: "flex",
                  }}
                  className="border"
                >
                  <NaverMap
                    defaultCenter={new navermaps.LatLng(37.5356993, 127.095765)}
                    defaultZoom={16}
                  >
                    <Marker
                      defaultPosition={
                        new navermaps.LatLng(37.5356993, 127.095765)
                      }
                    />
                  </NaverMap>
                </MapDiv>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-left px-8 w-96 space-y-1">
                <div className="font-bold">지하철</div>
                <div className="text-sm ml-1">
                  2호선 강변역 1, 2번 출구 지하통로 연결
                </div>
                <div className="flex justify-center py-4">
                  <div className="border-b-gray-100 border w-full border-t-0"></div>
                </div>

                <div className="font-bold">시외 ∙ 고속버스</div>
                <div className="text-sm ml-1">
                  동서울종합터미널 하차 후 강변역 통로 이용
                </div>
                <div className="flex justify-center py-4">
                  <div className="border-b-gray-100 border w-full border-t-0"></div>
                </div>
                <div className="font-bold">자가용</div>
                <div className="text-sm space-y-1 ml-1">
                  <div>강변테크노마트(광진구 구의동) 또는 강변역 검색</div>
                  <div>강변북로 올림픽대로 이용</div>
                  <div>잠실대교 또는 올림픽대교 교차로 이용</div>
                </div>
                <div className="font-bold pt-4">주차</div>
                <div className="text-sm ml-1">
                  강변 테크노마트 지하 주차장 B3, B4층 이용
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
          </div>
          {/* <div className="text-[#0E13E5] text-sm">마음 전하실 곳</div> */}
          <div className=" text-[#0E13E5] font-semibold ">마음 전하실 곳</div>
          <div className="font-thin space-y-2 text-sm pt-8">
            <div>참석이 어려우신 분들을 위해</div>
            <div>계좌번호를 기재하였습니다.</div>
            <div>너그러운 마음으로 양해 부탁 드립니다.</div>
          </div>

          <div className="pt-8 flex justify-center">
            <div className="px-10 w-96">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ color: "primary.main" }}
                >
                  신랑측
                </AccordionSummary>
                <AccordionDetails>
                  <div className="text-left flex justify-between">
                    <div>계좌번호</div>
                    <div>복사</div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ color: "primary.main" }}
                >
                  신부측
                </AccordionSummary>
                <AccordionDetails>
                  <div className="text-left flex justify-between">
                    <div>계좌번호</div>
                    <div onClick={(e) => console.log(e)}>복사</div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="mb-10 mt-10 w-96">
              <img className="mt-4" src={rearImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
