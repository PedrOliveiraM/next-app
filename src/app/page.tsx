import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'
import { Card, CardContent } from './_components/ui/card'
import { Badge } from './_components/ui/badge'
import { Avatar, AvatarImage } from './_components/ui/avatar'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-6">
        {/* Texts */}
        <h2 className="text-xl font-bold">Olá, Pedro</h2>
        <p>Segunda-feira,12 de agosto</p>
        {/* Input */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner Agende nos melhores lugares"
            src={'/banner01.png'}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        {/* Booking */}
        <Card className="mt-6">
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
      </div>
    </div>
  )
}
export default Home
