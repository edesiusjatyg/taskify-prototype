"use client"

import { LogOut, Codepen, CirclePlus, Search, Zap, Timer, Ellipsis, ChevronDown, Folders, GalleryHorizontalEnd, GalleryVertical, MessageCircleMore, Pin, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CircularProgress } from "@/components/ui/circular-progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function DashboardPage(){

  return (
    <div className="bg-gray-200 flex flex-col min-h-[100vh]">
      <div id="header" className="bg-gray-100 flex w-full shadow-md py-6 px-16 justify-between">
        <div id="leftHeader" className="flex flex-col gap-4 justify-between">
          <div id="leftUpperHeader" className="flex gap-4 items-center">
            <h2 className="font-bold text-2xl">Projects</h2>
          </div>
          <div id="leftLowerHeader" className="flex gap-4 items-center">
            <p className="text-gray-500 text-sm">Welcome Back, Alice!</p>
          </div>
        </div>
        <div id="centerHeader" className="flex flex-col gap-4 items-center justify-center absolute left-1/2 -translate-x-1/2 top-10 pointer-events-none">
          <h1 className="text-3xl font-light">Taskify</h1>
        </div>
        <div id="rightHeader" className="flex flex-row gap-4 items-center justify-between">
          <Button variant="ghost" className="cursor-pointer hover:text-red-500">
            Logout
            <LogOut className="w-6 h-6"/>
          </Button>
        </div>
      </div>
      <div id="content" className="py-36 px-48 flex flex-col w-full justify-center items-center gap-12">
        <h2 className="text-3xl text-gray-500 font-light animate-[fadeIn_0.6s_ease-out_0.2s_both]">What are you working on today?</h2>
        <div className="grid grid-cols-2 gap-8">
          <Link href={"/apaya"}>
          <Card className="py-6 px-12 flex flex-col justify-center items-center gap-6 hover:shadow-lg cursor-pointer animate-[fadeIn_0.6s_ease-out_0.4s_both]">
            <h2 className="font-semibold text-lg">Project Apaya</h2>
            <Codepen className="w-18 h-18 text-sky-600"/>
            <p className="text-gray-500 text-sm">Last opened 3 days ago</p>
          </Card>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="py-6 px-12 flex flex-col justify-center items-center gap-6 h-full hover:shadow-lg cursor-pointer animate-[fadeIn_0.6s_ease-out_0.6s_both]">
                <h2 className="font-semibold text-lg">Create New Project</h2>
                <CirclePlus className="w-18 h-18 text-sky-600"/>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Enter the details for your new project below.
                </DialogDescription>
              </DialogHeader>
              <div>
                <Label>Project Name</Label>
                <Input placeholder="Project Name" className="w-full mb-4 mt-2"/>
                <Label>Project Description</Label>
                <Input placeholder="Project Description" className="w-full mb-4 mt-2"/>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Link href={"/project"}>
                    <Button className="cursor-pointer bg-sky-600 hover:bg-sky-800">Create Project</Button>
                  </Link>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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