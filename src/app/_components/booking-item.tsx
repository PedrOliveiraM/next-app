import { Badge } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      {/* Booking */}
      <Card>
        <CardContent className="flex justify-between p-0">
          {/** Left */}
          <div className="flex flex-col gap-3 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-bold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm font-normal">Vintage Barber</p>
              </div>
            </div>
          </div>
          {/** Right */}
          <div className="flex flex-col items-center justify-center border-l-2 px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">12</p>
            <p className="text-sm">9:45</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
