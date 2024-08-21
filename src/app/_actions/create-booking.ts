'use server'
import { db } from '@/app/_lib/prisma'

interface BookingDto {
  serviceId: string
  userId: string
  date: Date
}

export const createBooking = async (params: BookingDto) => {
  const booking = await db.booking.create({
    data: params,
  })

  return booking
}
