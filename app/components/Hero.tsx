import Image from "next/image";

export default function Hero(){
    return <div className="w-full">
        <div className=" w-full container mt-16  grid grid-cols-3  mx-auto h-[33vw] ">
            <div className="  container px-10 py-8 col-span-2 -red-400">
                <h1 className="text-white text-[4.5vw]">Hi, I'm </h1>
                <h1 className="text-[5.4vw]  leading-10 tracking-tighter text-purple-500 font-medium " >Umesh Kumar</h1>
                <p className="text-white mt-10 ml-2 text-lg ">A  <span className="text-purple-400 font-medium"> Full-Stack Developer </span>from India </p>
                <p className="text-white  ml-2 mt-2 ">Bridging Technology and Creativity through <span className="text-purple-400 capitalize ml-1 font-medium">web development</span>.</p>
                <div className="flex w-full mt-12 gap-20">
                    <button className="text-white font-medium hover:text-purple-400  hover:cursor-pointer  px-8 py-2 border-2 border-purple-400 rounded-full">Hire me</button>
                    <button className="text-white font-medium hover:text-purple-400  hover:cursor-pointer  px-8 py-2 border-2 border-purple-400 rounded-full">Resume</button>
                </div>
            </div>
            <div className="container py-20">
                <div className="w-[500px] -mt-18  bg-purple-400 h-[500px] relative rounded-full p-4 ">
                    <Image className="rounded-full absolute right-3 bottom-2" src={'/profile.jpg'} width={550} height={550} alt="Profile"/>
                </div>
            </div>
        </div>
    </div>
}