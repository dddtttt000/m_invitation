import "./App.css"
// import bg_frame from "../src/assets/bg_frame.png"
// import Link from "next/link"

function App() {
  return (
    // <div className="bg-black w-full h-svh flex justify-center">
    //   <div className="w-[400px] bg-white relative">
    //     <div id="bg" className="flex justify-center">
    //       <div className="mt-28 text-center">
    //         <div className="text-xs mb-6 font-thin">YOU ARE INVITED TO THE</div>
    //         <div className="licorice-regular text-7xl font- text-center">
    //           Wedding
    //         </div>
    //         <div className=" text-2xl text-center lavishly-yours-regular mb-5">
    //           -of-
    //         </div>
    //         <div className=" text-3xl  font-light mb-2">Lin</div>
    //         <div className=" text-2xl text-center lavishly-yours-regular mb-2">
    //           and
    //         </div>
    //         <div className=" text-3xl  font-light mb-4">Songha</div>
    //         <div className=" mt-5 text-sm">
    //           <div className=" font-thin">2024.10.26 (토)</div>
    //           <div className=" font-thin">오후 12:40</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-background text-card-foreground p-6 sm:p-10 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-card p-8 sm:p-12 rounded-xl w-full max-w-md shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <div className="text-4xl sm:text-5xl font-bold">John &amp; Jane</div>
          <div className="text-2xl sm:text-3xl font-medium">
            are getting married
          </div>
        </div>
        <div className="mt-8 grid gap-4">
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <div>
              <div className="text-lg font-medium">June 10, 2023</div>
              <div className="text-muted-foreground text-sm">5:00 PM</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPinIcon className="w-6 h-6 text-primary" />
            <div>
              <div className="text-lg font-medium">The Willow Garden</div>
              <div className="text-muted-foreground text-sm">
                123 Main St, Anytown USA
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MailIcon className="w-6 h-6 text-primary" />
            <div>
              <div className="text-lg font-medium">RSVP by May 1, 2023</div>
              <div className="text-muted-foreground text-sm">
                {/* <Link href="#" className="underline" prefetch={false}> */}
                RSVP Now
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-[300px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-10 rounded-xl" />
            <div className="relative rounded-xl overflow-hidden">
              {/* <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Wedding Couple"
                className="w-full h-auto object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default App
