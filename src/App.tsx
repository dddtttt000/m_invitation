import "./App.css"
// import bg_frame from "../src/assets/bg_frame.png"

function App() {
  return (
    <div className="bg-black w-full h-svh flex justify-center">
      <div className="w-[400px] bg-white relative">
        <div id="bg" className="flex justify-center">
          <div className="mt-28 text-center">
            <div className="text-xs mb-6 font-thin">YOU ARE INVITED TO THE</div>
            <div className="licorice-regular text-7xl font- text-center">
              Wedding
            </div>
            <div className=" text-2xl text-center lavishly-yours-regular mb-5">
              -of-
            </div>
            <div className=" text-3xl  font-light mb-2">Lin</div>
            <div className=" text-2xl text-center lavishly-yours-regular mb-2">
              and
            </div>
            <div className=" text-3xl  font-light mb-4">Songha</div>
            <div className=" mt-5 text-sm">
              <div className=" font-thin">2024.10.26 (토)</div>
              <div className=" font-thin">오후 12:40</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
