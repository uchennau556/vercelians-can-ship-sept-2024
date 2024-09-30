"use client"

import { useState } from "react"
import { CheckCircle2, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialSchedule = [
  { day: "Monday", morning: false, evening: false },
  { day: "Tuesday", morning: false, evening: false },
  { day: "Wednesday", morning: false, evening: false },
  { day: "Thursday", morning: false, evening: false },
  { day: "Friday", morning: false, evening: false },
  { day: "Saturday", morning: false, evening: false },
  { day: "Sunday", morning: false, evening: false },
]

export default function DogWalkingSchedule() {
  const [schedule, setSchedule] = useState(initialSchedule)

  const toggleWalk = (day: string, time: "morning" | "evening") => {
    setSchedule(prevSchedule =>
      prevSchedule.map(item =>
        item.day === day ? { ...item, [time]: !item[time] } : item
      )
    )
  }

  const resetSchedule = () => {
    setSchedule(initialSchedule)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dog Walking Schedule</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Morning Walk</TableHead>
            <TableHead>Evening Walk</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((day) => (
            <TableRow key={day.day}>
              <TableCell>{day.day}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleWalk(day.day, "morning")}
                >
                  {day.morning ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleWalk(day.day, "evening")}
                >
                  {day.evening ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={resetSchedule} className="mt-4">
        Reset Schedule
      </Button>
    </div>
  )
}
