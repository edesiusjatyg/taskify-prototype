"use client"

import { Search, Zap, Timer, Ellipsis, ChevronDown, Folders, GalleryHorizontalEnd, GalleryVertical, MessageCircleMore, Pin, ChevronLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CircularProgress } from "@/components/ui/circular-progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link"

export default function DashboardPage(){
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([])

  const tasks = [
    // make the character only 5 person
    { id: 1, title: "Design Landing Page", assignee: "Alice", status: "In Progress", dueDate: "2024-06-10" },
    { id: 2, title: "Implement Authentication", assignee: "Bob", status: "Completed", dueDate: "2024-06-05" },
    { id: 3, title: "Set Up Database", assignee: "Charlie", status: "Completed", dueDate: "2024-06-15" },
    { id: 4, title: "Create API Endpoints", assignee: "Diana", status: "Completed", dueDate: "2024-06-12" },
    { id: 5, title: "Write Unit Tests", assignee: "Ethan", status: "Completed", dueDate: "2024-06-20" },
    { id: 6, title: "Optimize Performance", assignee: "Ethan", status: "Completed", dueDate: "2024-06-18" },
    { id: 7, title: "Fix Bugs", assignee: "Alice", status: "In Progress", dueDate: "2024-06-08" },
    { id: 8, title: "Update Documentation", assignee: "Ethan", status: "In Progress", dueDate: "2024-06-22" },
    { id: 9, title: "Deploy to Staging", assignee: "Bob", status: "In Progress", dueDate: "2024-06-14" },
    { id: 10, title: "Conduct Code Review", assignee: "Bob", status: "Completed", dueDate: "2024-06-07" },
    { id: 11, title: "Plan Sprint", assignee: "Alice", status: "In Progress", dueDate: "2024-06-25" },
    { id: 12, title: "Set Up CI/CD", assignee: "Charlie", status: "In Progress", dueDate: "2024-06-16" },
    { id: 13, title: "Design Logo", assignee: "Alice", status: "In Progress", dueDate: "2024-06-04" },
    { id: 14, title: "Create Marketing Plan", assignee: "Bob", status: "In Progress", dueDate: "2024-06-21" },
    { id: 15, title: "User Testing", assignee: "Charlie", status: "In Progress", dueDate: "2024-06-19" },
    { id: 16, title: "Fix Security Issues", assignee: "Alice", status: "In Progress", dueDate: "2024-06-06" },
    { id: 17, title: "Update UI/UX", assignee: "Bob", status: "In Progress", dueDate: "2024-06-23" },
    { id: 18, title: "Research New Technologies", assignee: "Ethan", status: "In Progress", dueDate: "2024-06-17" },
    { id: 19, title: "Prepare Presentation", assignee: "Alice", status: "In Progress", dueDate: "2024-06-09" },
    { id: 20, title: "Organize Team Meeting", assignee: "Bob", status: "In Progress", dueDate: "2024-06-24" },
  ]

  const feeds = [
    { id: 1, user: "Alice", notes: "Completed the task", time: "2 hours ago" },
    { id: 2, user: "Bob", notes: "Started working on the task", time: "5 hours ago" },
    { id: 3, user: "Charlie", notes: "Reviewed the code", time: "1 day ago" },
    { id: 4, user: "Diana", notes: "Fixed bugs reported", time: "2 days ago" },
    { id: 5, user: "Ethan", notes: "Updated documentation", time: "3 days ago" },
    { id: 6, user: "Fiona", notes: "Deployed to staging", time: "4 days ago" },
    { id: 7, user: "George", notes: "Conducted user testing", time: "5 days ago" },
    { id: 8, user: "Hannah", notes: "Planned the sprint", time: "6 days ago" },
    { id: 9, user: "Ian", notes: "Set up CI/CD pipeline", time: "1 week ago" },
    { id: 10, user: "Jane", notes: "Designed new logo", time: "1 week ago" },
  ]

  const upcomingTasks = tasks.filter(task => {
    return task.assignee === "Alice" && task.status !== "Completed" && !completedTaskIds.includes(task.id)
  })

  const handleTaskComplete = (taskId: number) => {
    setTimeout(() => {
      setCompletedTaskIds(prev => [...prev, taskId])
    }, 500)
  }

  const chats = [
    { id: 1, user: "John", message: "Hey, how's the progress on the landing page?", time: "2m", status: "unread" },
    { id: 2, user: "Bob", message: "Authentication is almost done.", time: "15m", status: "read" },
    { id: 3, user: "Charlie", message: "Database setup is complete.", time: "1h", status: "unread" },
    { id: 4, user: "Diana", message: "API endpoints are ready for review.", time: "2h", status: "read" },
    { id: 5, user: "Ethan", message: "Unit tests are passing.", time: "2h", status: "read" },
  ]

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
          <h1 className="text-3xl">Project Apaya</h1>
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
        <div className="flex flex-col gap-6 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-row justify-between w-full mb-4">
              <h2 className="font-semibold">Sprint Progress</h2>
              <Timer className="h-6 w-6 text-sky-600" />
            </div>
            <CircularProgress value={75} size={200} strokeWidth={15} />
            <p className="text-sm text-gray-500">75% Complete</p>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[470px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Upcoming Tasks</h2>
              <GalleryHorizontalEnd className="h-6 w-6 text-sky-600" />
            </div>
            <ScrollArea className="w-full h-[390px]">
              <div className="overflow-hidden w-full">
                {upcomingTasks.map(task => (
                  <div key={task.id} className="flex justify-between hover:bg-gray-100 py-2 px-2 border-b border-gray-300">
                    <div>
                      <p className="font-semibold">{task.title}</p>
                      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                    </div>
                    <div className="items-center flex">
                      <Checkbox 
                        onClick={() => handleTaskComplete(task.id)} 
                        className="h-6 w-6 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>
        <div className="flex flex-col gap-6 col-span-3 animate-[fadeIn_0.8s_ease-out_0.4s_both]">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[300px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Activity Feed</h2>
              <GalleryVertical className="h-6 w-6 text-sky-600" />
            </div>
            <ScrollArea className="w-full h-[200px]">
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeds.map(feed => (
                      <TableRow key={feed.id} className={feed.id % 2 !== 0 ? "bg-gray-50" : ""}>
                        <TableCell>{feed.user}</TableCell>
                        <TableCell>{feed.notes}</TableCell>
                        <TableCell>{feed.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </Card>
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[500px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Task Board</h2>
              <Pin className="h-6 w-6 text-sky-600" />
            </div>
            <ScrollArea className="w-full h-[390px]">
              <div className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">ID</TableHead>
                      <TableHead>Task</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map(task => (
                      <TableRow key={task.id} className={task.id % 2 !== 0 ? "bg-gray-50" : ""}>
                        <TableCell className="font-medium">{task.id}</TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.assignee}</TableCell>
                        <TableCell className={task.status === "Completed" ? "text-green-600" : "text-yellow-600"}>{task.status}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </Card>
        </div>
        <div className="flex flex-col gap-6 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
          <Card className="px-4 py-4 flex flex-col items-center gap-4 cursor-pointer shadow-md hover:shadow-lg transition-all min-h-[200px]">
            <div className="flex flex-row justify-between w-full">
              <h2 className="font-semibold">Chat</h2>
              <MessageCircleMore className="h-6 w-6 text-sky-600" />
            </div>
            <ScrollArea className="w-full h-[250px]">
              <div className="overflow-hidden w-full">
                {chats.map(chat => (
                  <div key={chat.id} className="flex justify-between hover:bg-gray-100 py-2 px-2 border-b border-gray-300">
                    <div>
                      <p className={chat.status === "unread" ? "font-semibold" : "text-gray-800"}>{chat.user}</p>
                      <p className={chat.status === "unread" ? "text-sm font-normal" : "text-sm text-gray-500"}>{chat.message}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                    <p className="text-xs text-gray-400">{chat.time}</p>
                    {chat.status === "unread" && <div className="h-2 w-2 bg-blue-600 rounded-full self-center"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
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