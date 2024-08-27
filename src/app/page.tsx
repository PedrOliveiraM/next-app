import Image from 'next/image'
import BarbershopItem from './_components/barbershop-item'
import BookingItem from './_components/booking-item'
import Header from './_components/header'
import Search from './_components/search'
import { Button } from './_components/ui/button'
import { listQuickSearch } from './_constants/quick-search'
import { db } from './_lib/prisma'

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const barbershopsPopulars = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  })
  // TODO: receber uma props
  return (
    <div>
      <Header />
      <div className="p-6">
        {/* Texts */}
        <h2 className="text-xl font-bold">Olá, Pedro</h2>
        <p>Segunda-feira,12 de agosto</p>
        {/* Input */}
        <div className="mt-6">
          <Search />
        </div>
        {/** Buttons */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {listQuickSearch.map((option) => (
            <Button key={option.title} className="gap-2" variant={'secondary'}>
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
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
        {/** Agendamentos */}
        <BookingItem />

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershopsPopulars.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
