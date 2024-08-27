import BarbershopItem from '../_components/barbershop-item'
import Header from '../_components/header'
import Search from '../_components/search'
import { db } from '../_lib/prisma'

interface BarbershopPageProps {
  searchParams: {
    search?: string
  }
}
// server component
const BarbershopPage = async ({ searchParams }: BarbershopPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: 'insensitive',
      },
    },
  })

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <Search />
      </div>
      <h2 className="px-5 pb-3 text-xs font-bold text-gray-400">{`RESULTADOS PARA "${searchParams.search?.toUpperCase()}"`}</h2>

      <div className="grid grid-cols-2 gap-4 px-5">
        {barbershops.map((barbershops) => (
          <BarbershopItem key={barbershops.id} barbershop={barbershops} />
        ))}
      </div>
    </>
  )
}
export default BarbershopPage
