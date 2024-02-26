import "./App.css"
import bg_frame from "../src/assets/bg_frame.png"

function App() {
  return (
    <div className="bg-black w-full h-svh flex justify-center">
      <div className="w-[450px] bg-white">
        <img src={bg_frame} alt="" className="relative" />
        <div className=" fixed left-28 top-32 ">
          <div className="lavishly-yours-regular text-6xl">Wedding</div>
          <div className="licorice-regular text-6xl">Wedding</div>
        </div>
      </div>
    </div>
  )
}

export default App
