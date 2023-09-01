'use client'
import Menu from "@/components/menu/menu"
import Profile from "../profile/page"
export default function MainPage() {
  return (
    <main>
        <div className="flex flex-jc-sb ">
            <Menu/>
            <Profile/>
        </div>
    </main>
  )
}