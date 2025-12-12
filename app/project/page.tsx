"use client"

import { Search, Zap, Timer, Ellipsis, ChevronDown, Folders, GalleryHorizontalEnd, GalleryVertical, MessageCircleMore, Pin, ChevronLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CircularProgress } from "@/components/ui/circular-progress"
import Link from "next/link"

export default function DashboardPage(){
  return (
    <div className="bg-gray-200 flex flex-col min-h-[100vh]">
      <div id="header" className="bg-gray-100 flex w-full shadow-md py-6 px-8 justify-between">
        <div id="leftHeader" className="flex flex-col gap-4 justify-between">
          <div id="leftUpperHeader" className="flex gap-4 items-center">
            <Link href="/"><ChevronLeft className="h-6 w-6 text-gray-500"/></Link>
            <h2 className="font-bold text-2xl">Dashboard</h2>
          </div>
          <div id="leftLowerHeader" className="">
            <div id="searchBox" className="border-2 border-gray-300 min-w-[250px] p-2 justify-between items-center flex cursor-text">
              <p className="text-gray-400 text-sm">Search...</p>
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div id="centerHeader" className="flex flex-col gap-4 items-center justify-between absolute inset-0 top-12">
          <h1 className="text-3xl">projek tes yah</h1>
        </div>
        <div id="rightHeader" className="flex flex-col gap-4 items-end justify-between">
          <div id="rightUpperHeader" className="flex gap-4 items-center">
            <Zap className="h-6 w-6 text-gray-500"/>
            <Timer className="h-6 w-6 text-gray-500"/>
            <p className="text-sm text-gray-500">No running sprint.</p>
            <Button className="text-sm bg-sky-600 hover:bg-sky-800 cursor-pointer">Start Sprint</Button>
            <Ellipsis className="h-6 w-6 text-gray-500"/>
          </div>
          <div id="rightLowerHeader" className="flex gap-4 items-center">
            <p className="text-sm text-gray-500">Group By</p>
            <Button className="text-sm bg-gray-300 text-gray-500">Choices<ChevronDown /></Button>
          </div>
        </div>
      </div>
      <div id="content" className="p-12 grid grid-cols-5 gap-6 w-full">
        <div className="flex flex-col gap-6 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Sprint Progress</h2>
              <Timer className="h-6 w-6 text-sky-600" />
            </div>
            <CircularProgress value={0} size={200} strokeWidth={15} />
            <p className="text-sm text-gray-500">0% Complete</p>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[470px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Upcoming Tasks</h2>
              <GalleryHorizontalEnd className="h-6 w-6 text-sky-600" />
            </div>
            <div className="w-full h-[390px] justify-center items-center flex">
              <p className="text-gray-500 text-sm"><span className="text-sky-600 font-semibold">Well done!</span> You've completed all your tasks.</p>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-6 col-span-3 animate-[fadeIn_0.8s_ease-out_0.4s_both]">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[300px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Activity Feed</h2>
              <GalleryVertical className="h-6 w-6 text-sky-600" />
            </div>
            <div className="flex justify-center items-center w-full h-[80%]">
                <p className="text-gray-500 text-sm">Nothing here... start adding some activity!</p>
            </div>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[500px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Task Board</h2>
              <Pin className="h-6 w-6 text-sky-600" />
            </div>
            <div className="w-full h-[390px] justify-center items-center flex flex-col gap-4">
              <Button className="bg-sky-600"><Plus className="w-12 h-12" /></Button>
              <p className="text-gray-500 text-sm">Start creating new tasks!</p>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-6 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[200px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Chat</h2>
              <MessageCircleMore className="h-6 w-6 text-sky-600" />
            </div>
            <div className="flex justify-center items-center w-full h-[250px]">
                <p className="text-gray-500 text-sm">Nothing here...</p>
            </div>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[470px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Project Files</h2>
              <Folders className="h-6 w-6 text-sky-600" />
            </div>
            <div className="w-full h-[390px] justify-center items-center flex flex-col gap-4">
              <Button className="bg-sky-600"><Plus className="w-12 h-12" /></Button>
              <p className="text-gray-500 text-sm">Start uploading some files!</p>
            </div>
          </Card>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}