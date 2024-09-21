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
import mainImg from "./assets/main.png"
const App = () => {
  const navermaps = useNavermaps()

  return (
    <>
      <div className="w-full p-2 flex justify-center text-center nanum-myeongjo-regular">
        <div className="border-gray-100  w-96">
          <div className=" mt-10 text-2xl text-[#0E13E5] gowun-batang-bold">
            10 / 26
          </div>
          <div className="flex justify-center items-center my-6 gap-6 nanum-myeongjo-regular">
            <div className="text-2xl ">남세린</div>
            <div className="text-[#0E13E5] font-semibold">&</div>
            <div className=" text-2xl">임송하</div>
          </div>
          {/* <div>우리 결혼 합니다.</div> */}

          {/* //ANCHOR - 사진 넣는 부분 */}
          <div className="flex justify-center p-2">
            <div className="w-full h-[460px] bg-gray-100">
              <img
                className="img-filter"
                src={
                  "https://private-user-images.githubusercontent.com/79240270/369620126-03215a5d-2479-4ff7-8675-6fffa9025ae7.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MjQzMDIsIm5iZiI6MTcyNjkyNDAwMiwicGF0aCI6Ii83OTI0MDI3MC8zNjk2MjAxMjYtMDMyMTVhNWQtMjQ3OS00ZmY3LTg2NzUtNmZmZmE5MDI1YWU3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTIxVDEzMDY0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJmZjAwOTI1ODJmOTAwN2ZmNjE0ZTgwMjE4ZDBhMmZhOGU3MjJlYmZhOWZiOTA0NDhmZWE1MmUxOTBjOWYxMWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ox52w-99tYMc2NrgthwyZuwTxLHv5LpyFDDensKKLnY"
                }
                alt=""
              />
            </div>
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
        <div className=" text-[#0E13E5] mt-2 font-semibold">
          소중한 분들을 초대합니다
        </div>

        <div className="mt-12 space-y-2">
          <div>예쁜 예감이 들었다.</div>
          <div>우리는 언제나 손을 잡고 있게 될 것이다.</div>
          <div className="pt-3 text-sm">- 이이체, 〈연인〉 中 -</div>

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

          <div className="">
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
          <div className=" text-[#0E13E5] font-semibold ">오시는 길</div>
          <div className=" pt-6">
            <div>웨딩 스퀘어 4층, 그레이스 홀</div>
            <div className="text-sm mt-2">서울 광진구 광나루로56길 85</div>
            <div className="text-sm mt-4">TEL. 02-3424-7000</div>
            <div
              id="map"
              className="p-6 h-[400px] w-[400] flex justify-center mt-8"
            >
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
                  defaultCenter={
                    new navermaps.LatLng(37.535725176732, 127.095692162256)
                  }
                  defaultZoom={16}
                >
                  <Marker
                    defaultPosition={
                      new navermaps.LatLng(37.535725176732, 127.095692162256)
                    }
                  />
                </NaverMap>
              </MapDiv>
            </div>
            <div className="text-left px-12">
              <div className="font-bold">지하철</div>
              <div className="text-sm">
                2호선 강변역 1, 2번 출구 지하통로 연결
              </div>
              <div className="flex justify-center py-4">
                <div className="border-b-gray-100 border w-full border-t-0"></div>
              </div>
              <div className="font-bold">시내버스</div>
              <div className="text-sm">
                마을 : 강동01, 광진01, 광진03, 광진04
              </div>
              <div className="text-sm">지선 : 2224. 3214. 3212</div>
              <div className="text-sm">
                경기(일반) : 1, 1-1, 1-2. 9. 9-1, 13, 13-2, 15, 91, 92, 93, 95,
                96, 97, 112, 112-1. 2000-1, 2000-3, 2000-4
              </div>
              <div className="text-sm">
                경기(직행) : 11, 1112. 1113. 1113-1. 1113-2. 1117, 1650. 1660.
                5600, 5700
              </div>
              <div className="text-sm">공항 : 6705</div>
              <div className="flex justify-center py-4">
                <div className="border-b-gray-100 border w-full border-t-0"></div>
              </div>
              <div className="font-bold">시외 ∙ 고속버스</div>
              <div className="text-sm">
                동서울종합터미널 하차 후 강변역 통로 이용(도보 5분)
              </div>
              <div className="flex justify-center py-4">
                <div className="border-b-gray-100 border w-full border-t-0"></div>
              </div>
              <div className="font-bold">자가용</div>
              <div className="text-sm">
                네비게이션 검색 : 강변테크노마트(광진구 구의동) 또는 강변역 검색
                강변북로 올림픽대로 이용 : 잠실대교 또는 올림픽대교 교차로 이용
              </div>
              <div className="font-bold mt-4">주차</div>
              <div className="text-sm">
                강변 테크노마트 지하 주차장 B3, B4층 이용
              </div>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <div className="border-b-[#0E13E5] border border-t-0 w-72"></div>
          </div>
          <div className="text-[#0E13E5] text-sm">ACCOUNT</div>
          <div className=" text-[#0E13E5] font-semibold ">마음 전하실 곳</div>
          <div className="font-thin space-y-2 text-sm pt-8">
            <div>참석이 어려우신 분들을 위해</div>
            <div>계좌번호를 기재하였습니다.</div>
            <div>너그러운 마음으로 양해 부탁 드립니다.</div>
          </div>

          <div className="pt-8">
            <div className="px-10">
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
                    <div>복사</div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
