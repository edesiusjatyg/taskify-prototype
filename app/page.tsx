import { Search, Zap, Timer, Ellipsis, ChevronDown, Folders, GalleryHorizontalEnd, GalleryVertical, MessageCircleMore, Pin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CircularProgress } from "@/components/ui/circular-progress"

export default function DashboardPage(){
  return (
    <div className="bg-gray-200 flex flex-col min-h-[100vh]">
      <div id="header" className="bg-gray-100 flex w-full shadow-md py-6 px-8 justify-between">
        <div id="leftHeader" className="flex flex-col gap-4 justify-between">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <div id="leftLowerHeader" className="">
            <div id="searchBox" className="border-2 border-gray-300 min-w-[250px] p-2 justify-between items-center flex cursor-text">
              <p className="text-gray-400 text-sm">Search...</p>
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div id="rightHeader" className="flex flex-col gap-4 items-end justify-between">
          <div id="rightUpperHeader" className="flex gap-4 items-center">
            <Zap className="h-6 w-6 text-gray-500"/>
            <Timer className="h-6 w-6 text-gray-500"/>
            <p className="text-sm text-red-500">2 days remaining</p>
            <Button className="text-sm bg-sky-600 hover:bg-sky-800 cursor-pointer">Complete Sprint</Button>
            <Ellipsis className="h-6 w-6 text-gray-500"/>
          </div>
          <div id="rightLowerHeader" className="flex gap-4 items-center">
            <p className="text-sm text-gray-500">Group By</p>
            <Button className="text-sm bg-gray-300 text-gray-500">Choices<ChevronDown /></Button>
          </div>
        </div>
      </div>
      <div id="content" className="p-12 grid grid-cols-5 gap-6 w-full">
        <div className="flex flex-col gap-6">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Sprint Progress</h2>
              <Timer className="h-6 w-6 text-sky-600" />
            </div>
            <CircularProgress value={75} size={200} strokeWidth={15} />
            <p className="text-sm text-gray-500">75% Complete</p>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[470px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Upcoming Tasks</h2>
              <GalleryHorizontalEnd className="h-6 w-6 text-sky-600" />
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-6 col-span-3">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[300px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Activity Feed</h2>
              <GalleryVertical className="h-6 w-6 text-sky-600" />
            </div>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[500px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Task Board</h2>
              <Pin className="h-6 w-6 text-sky-600" />
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-6">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[150px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Chat</h2>
              <MessageCircleMore className="h-6 w-6 text-sky-600" />
            </div>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[200px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Project Files</h2>
              <Folders className="h-6 w-6 text-sky-600" />
            </div>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[420px]">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">gtw</h2>
              <Timer className="h-6 w-6 text-sky-600" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}