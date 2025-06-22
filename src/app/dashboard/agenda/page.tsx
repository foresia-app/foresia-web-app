"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { useRole } from "../layout"

// Mock data for different roles - organized by day of week
const studentWeekAgenda = {
  monday: [
    { id: 1, title: "Wiskunde", time: "08:30 - 09:15", location: "Lokaal 101", teacher: "Dhr. Janssen", type: "les" },
    { id: 2, title: "Nederlands", time: "09:30 - 10:15", location: "Lokaal 205", teacher: "Mevr. De Vries", type: "les" },
    { id: 3, title: "Pauze", time: "10:15 - 10:30", location: "Schoolplein", teacher: "", type: "pauze" },
    { id: 4, title: "Geschiedenis", time: "10:30 - 11:15", location: "Lokaal 301", teacher: "Dhr. Bakker", type: "les" },
    { id: 14, title: "Extra Wiskunde", time: "13:00 - 14:00", location: "Lokaal 101", teacher: "Dhr. Janssen", type: "les" },
    { id: 15, title: "Nog een les", time: "14:15 - 15:00", location: "Lokaal 205", teacher: "Mevr. De Vries", type: "les" },
  ],
  tuesday: [
    { id: 5, title: "Engels", time: "08:30 - 09:15", location: "Lokaal 102", teacher: "Ms. Smith", type: "les" },
    { id: 6, title: "Biologie", time: "09:30 - 10:15", location: "Lab 1", teacher: "Dhr. Peters", type: "les" },
    { id: 7, title: "Toets Wiskunde", time: "11:00 - 12:00", location: "Lokaal 101", teacher: "Dhr. Janssen", type: "toets" },
  ],
  wednesday: [
    { id: 8, title: "Natuurkunde", time: "08:30 - 09:15", location: "Lab 2", teacher: "Mevr. Klaassen", type: "les" },
    { id: 9, title: "Gym", time: "09:30 - 10:15", location: "Gymzaal", teacher: "Dhr. Sport", type: "les" },
  ],
  thursday: [
    { id: 10, title: "Scheikunde", time: "08:30 - 09:15", location: "Lab 3", teacher: "Dhr. Chemie", type: "les" },
    { id: 11, title: "Muziek", time: "09:30 - 10:15", location: "Muziekzaal", teacher: "Mevr. Melodie", type: "les" },
  ],
  friday: [
    { id: 12, title: "Kunst", time: "08:30 - 09:15", location: "Atelier", teacher: "Dhr. Kunst", type: "les" },
    { id: 13, title: "Mentoruur", time: "09:30 - 10:15", location: "Lokaal 205", teacher: "Mevr. De Vries", type: "mentoring" },
  ]
}

const teacherWeekAgenda = {
  monday: [
    { id: 1, title: "Wiskunde 4A", time: "08:30 - 09:15", location: "Lokaal 101", students: 28, subject: "Algebra", type: "les" },
    { id: 2, title: "Wiskunde 4B", time: "09:30 - 10:15", location: "Lokaal 101", students: 24, subject: "Algebra", type: "les" },
    { id: 3, title: "Toezicht Pauze", time: "10:15 - 10:30", location: "Schoolplein", type: "toezicht" },
  ],
  tuesday: [
    { id: 4, title: "Wiskunde 3A", time: "08:30 - 09:15", location: "Lokaal 101", students: 26, subject: "Meetkunde", type: "les" },
    { id: 5, title: "Docenten Vergadering", time: "14:00 - 15:00", location: "Docentenkamer", attendees: 12, type: "vergadering" },
  ],
  wednesday: [
    { id: 6, title: "Wiskunde 4A", time: "08:30 - 09:15", location: "Lokaal 101", students: 28, subject: "Statistiek", type: "les" },
    { id: 7, title: "Toets Nakijken", time: "15:30 - 16:30", location: "Lokaal 101", type: "voorbereiding" },
  ],
  thursday: [
    { id: 8, title: "Wiskunde 3B", time: "08:30 - 09:15", location: "Lokaal 101", students: 25, subject: "Meetkunde", type: "les" },
    { id: 9, title: "Ouderavond Voorbereiding", time: "15:30 - 16:30", location: "Lokaal 101", type: "voorbereiding" },
  ],
  friday: [
    { id: 10, title: "Wiskunde 4B", time: "08:30 - 09:15", location: "Lokaal 101", students: 24, subject: "Statistiek", type: "les" },
  ]
}

const adminWeekAgenda = {
  monday: [
    { id: 1, title: "Directie Overleg", time: "09:00 - 10:00", location: "Directiekamer", attendees: 5, type: "overleg" },
    { id: 2, title: "Budget Review", time: "10:30 - 11:30", location: "Vergaderzaal A", attendees: 8, type: "financieel" },
  ],
  tuesday: [
    { id: 3, title: "Schoolinspectie Voorbereiding", time: "13:00 - 14:30", location: "Vergaderzaal B", attendees: 15, type: "inspectie" },
  ],
  wednesday: [
    { id: 4, title: "Personeelsoverleg", time: "14:00 - 15:30", location: "Vergaderzaal A", attendees: 20, type: "overleg" },
  ],
  thursday: [
    { id: 5, title: "Ouderraad Vergadering", time: "19:00 - 20:30", location: "Aula", attendees: 25, type: "ouderraad" },
  ],
  friday: [
    { id: 6, title: "Week Evaluatie", time: "16:00 - 17:00", location: "Directiekamer", attendees: 3, type: "evaluatie" },
  ]
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'les':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'toets':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'pauze':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'mentoring':
      return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
    case 'toezicht':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    case 'vergadering':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    case 'voorbereiding':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    case 'overleg':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    case 'financieel':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'inspectie':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    case 'ouderraad':
      return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
    case 'evaluatie':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

const weekDays = [
  { key: 'monday', label: 'Maandag', short: 'Ma', date: '15 Jan' },
  { key: 'tuesday', label: 'Dinsdag', short: 'Di', date: '16 Jan' },
  { key: 'wednesday', label: 'Woensdag', short: 'Wo', date: '17 Jan' },
  { key: 'thursday', label: 'Donderdag', short: 'Do', date: '18 Jan' },
  { key: 'friday', label: 'Vrijdag', short: 'Vr', date: '19 Jan' },
]

export default function AgendaPage() {
  const { role } = useRole()
  const [selectedWeek] = useState("15-19 Januari 2024")
  const [viewType, setViewType] = useState<'week' | 'day'>('week')

  const getWeekAgenda = () => {
    switch (role) {
      case 'student':
        return studentWeekAgenda
      case 'teacher':
        return teacherWeekAgenda
      case 'admin':
        return adminWeekAgenda
      default:
        return studentWeekAgenda
    }
  }

  const getRoleTitle = () => {
    switch (role) {
      case 'student':
        return 'Mijn Weekrooster'
      case 'teacher':
        return 'Lesrooster Deze Week'
      case 'admin':
        return 'Agenda Overzicht'
      default:
        return 'Weekagenda'
    }
  }

  const weekAgenda = getWeekAgenda()

  return (
    <div className="flex flex-col space-y-4 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{getRoleTitle()}</h1>
          <p className="text-sm text-muted-foreground">
            {role === 'student' && 'Bekijk je weekrooster en activiteiten'}
            {role === 'teacher' && 'Beheer je lessen en afspraken deze week'}
            {role === 'admin' && 'Overzicht van alle school activiteiten'}
          </p>
        </div>
        <div className="flex gap-2">
          {(role === 'teacher' || role === 'admin') && (
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Nieuwe Afspraak
            </Button>
          )}
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Main Agenda View */}
        <div className="flex-1 flex flex-col min-w-0">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <h2 className="font-semibold flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Week {selectedWeek}
                    </h2>
                  </div>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={viewType === 'week' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setViewType('week')}
                  >
                    Week
                  </Button>
                  <Button 
                    variant={viewType === 'day' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setViewType('day')}
                  >
                    Dag
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-x-auto">
              <div className="flex gap-4 h-full">
                {weekDays.map((day) => (
                  <div key={day.key} className="w-60 h-full flex-shrink-0">
                    <div className="h-full flex flex-col gap-2">
                      <div className="text-center py-2 border-b">
                        <p className="text-sm font-semibold">{day.label}</p>
                        <p className="text-xs text-muted-foreground">{day.date}</p>
                      </div>
                      <div className="flex-1 relative overflow-y-auto px-1">
                        {/* Background Grid Lines */}
                        <div className="absolute top-0 left-0 w-full">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="h-[60px] border-b border-dashed" />
                          ))}
                        </div>

                        {/* Events */}
                        <div className="relative h-full">
                          {weekAgenda[day.key as keyof typeof weekAgenda]?.map((item) => {
                            const timeToMinutes = (time: string) => {
                              const [hours, minutes] = time.split(':').map(Number);
                              return hours * 60 + minutes;
                            };

                            const [startTimeStr, endTimeStr] = item.time.replace(/ /g, '').split('-');
                            if (!startTimeStr || !endTimeStr) return null;
                            
                            const startMinutes = timeToMinutes(startTimeStr);
                            const endMinutes = timeToMinutes(endTimeStr);

                            const startHour = 8;
                            const hourHeight = 60; // 60px per hour
                            
                            const top = ((startMinutes - startHour * 60) / 60) * hourHeight;
                            const height = ((endMinutes - startMinutes) / 60) * hourHeight;
                            
                            if (height <= 0) return null;

                            return (
                              <div
                                key={item.id}
                                className="absolute w-[calc(100%-8px)] left-1 p-2 rounded-md border transition-colors cursor-pointer"
                                style={{
                                  top: `${top}px`,
                                  height: `${height - 4}px`, // a bit of padding
                                  backgroundColor: `hsl(var(--card))`,
                                  borderColor: `hsl(var(--border))`,
                                }}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <Badge className={`${getTypeColor(item.type)} text-xs px-1 py-0`}>
                                      {item.type}
                                    </Badge>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-medium text-xs leading-tight">{item.title}</h4>
                                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                      <Clock className="h-3 w-3" />
                                      {item.time}
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      {item.location}
                                    </div>
                                  </div>
                                  
                                  {role === 'student' && 'teacher' in item && item.teacher && (
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      {item.teacher}
                                    </div>
                                  )}
                                  
                                  {role === 'teacher' && 'students' in item && item.students && (
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      {item.students}
                                    </div>
                                  )}
                                  
                                  {role === 'admin' && 'attendees' in item && item.attendees && (
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      {item.attendees}
                                    </div>
                                  )}
                                  
                                  {role === 'teacher' && 'subject' in item && item.subject && (
                                    <div className="text-xs text-muted-foreground truncate">
                                      {item.subject}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calendar Sidebar */}
        <div className="w-72 flex-shrink-0 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kalender</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-7 text-center text-xs font-medium text-muted-foreground">
                  {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(day => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6; // Start from previous month
                    const isCurrentWeek = day >= 15 && day <= 19;
                    const isToday = day === 15;
                    const isValidDay = day > 0 && day <= 31;
                    
                    return (
                      <button
                        key={i}
                        className={`
                          h-8 w-8 text-xs rounded-md transition-colors flex items-center justify-center
                          ${!isValidDay ? 'text-muted-foreground/30 cursor-not-allowed' : 'hover:bg-accent text-foreground'}
                          ${isCurrentWeek && isValidDay ? 'bg-primary/10' : ''}
                          ${isToday ? 'bg-primary text-primary-foreground font-semibold' : ''}
                        `}
                      >
                        {isValidDay ? day : ''}
                      </button>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Deze Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {role === 'student' && 'Lessen'}
                  {role === 'teacher' && 'Te Geven'}
                  {role === 'admin' && 'Vergaderingen'}
                </span>
                <span className="font-semibold">
                  {Object.values(weekAgenda).flat().filter((item) => 
                    role === 'student' ? item.type === 'les' :
                    role === 'teacher' ? item.type === 'les' :
                    ['overleg', 'vergadering'].includes(item.type)
                  ).length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {role === 'student' && 'Toetsen'}
                  {role === 'teacher' && 'Vergaderingen'}
                  {role === 'admin' && 'Belangrijke Events'}
                </span>
                <span className="font-semibold">
                  {Object.values(weekAgenda).flat().filter((item) => 
                    role === 'student' ? item.type === 'toets' :
                    role === 'teacher' ? item.type === 'vergadering' :
                    ['inspectie', 'ouderraad'].includes(item.type)
                  ).length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Totale Activiteiten</span>
                <span className="font-semibold">
                  {Object.values(weekAgenda).flat().length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 