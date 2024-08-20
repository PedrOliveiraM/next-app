'use client'
import { BarbershopServices } from '@prisma/client'
import { ptBR } from 'date-fns/locale/pt-BR'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'

interface BarbershopServiceItemProps {
  barbershopService: BarbershopServices
}

const hoursList = [
  '08:00',
  '08:45',
  '09:30',
  '10:15',
  '11:00',
  '11:45',
  '12:30',
  '13:15',
  '14:00',
  '14:45',
  '15:30',
  '16:15',
  '17:00',
  '17:45',
  '18:30',
  '19:00',
]

const BarbershopServiceItem = ({
  barbershopService,
}: BarbershopServiceItemProps) => {
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  )
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)

  const handleSelectedTime = (hour: string | undefined) => {
    setSelectedTime(hour)
  }

  const handleSelectedDay = (date: Date | undefined) => {
    setSelectedDay(date)
  }

  return (
    <>
      <Card>
        <CardContent className="flex items-center gap-3 p-3">
          {/* IMAGE */}
          <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
            <Image
              alt={barbershopService.name}
              src={barbershopService.imageURL}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* DIREITA */}
          <div className="w-full space-y-2">
            <h3 className="text-sm font-semibold">{barbershopService.name}</h3>
            <p className="text-sm text-gray-400">
              {barbershopService.description}
            </p>
            {/* PREÇO E BOTÃO */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-primary">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(barbershopService.price))}
              </p>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" size="sm">
                    Reservar
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-0">
                  <SheetHeader className="font-bold">Fazer Reserva</SheetHeader>
                  <div className="border-b border-solid py-5">
                    <Calendar
                      mode="single"
                      locale={ptBR}
                      selected={selectedDay}
                      onSelect={handleSelectedDay}
                      styles={{
                        head_cell: {
                          width: '100%',
                          textTransform: 'capitalize',
                        },
                        cell: {
                          width: '100%',
                        },
                        button: {
                          width: '100%',
                        },
                        nav_button_previous: {
                          width: '32px',
                          height: '32px',
                        },
                        nav_button_next: {
                          width: '32px',
                          height: '32px',
                        },
                        caption: {
                          textTransform: 'capitalize',
                        },
                      }}
                    />
                  </div>

                  {selectedDay && (
                    <div className="flex gap-3 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
                      {hoursList.map((hour) => (
                        <Button
                          key={hour}
                          variant={
                            selectedTime === hour ? 'default' : 'outline'
                          }
                          className="rounded-full"
                          onClick={() => handleSelectedTime(hour)}
                        >
                          {hour}
                        </Button>
                      ))}
                    </div>
                  )}

                  {selectedTime && (
                    <div className="p-5">
                      <Card>
                        <CardContent className="gap-3 p-3">
                          <div className="flex items-start justify-between">
                            <h2 className="font-bold">
                              {barbershopService.name}
                            </h2>
                            <p className="font-bold">
                              {barbershopService.price.toString()}
                            </p>
                          </div>
                          <div className="flex items-start justify-between">
                            <p>Data</p>
                            <p className="font-bold">
                              {selectedDay?.toDateString()}
                            </p>
                          </div>
                          <div className="flex items-start justify-between">
                            <p>Horário</p>
                            <p className="font-bold">{selectedTime}</p>
                          </div>
                          <div className="flex items-start justify-between">
                            <p>Barbearia</p>
                            <p className="font-bold">
                              {barbershopService.name}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BarbershopServiceItem
