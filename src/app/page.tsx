import Image from 'next/image'
import CourseList from "../components/CourseList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CourseList />
    </main>
  )
}


