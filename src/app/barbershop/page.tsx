import BarbershopItem from '../_components/barbershop-item'
import Header from '../_components/header'
import Search from '../_components/search'
import { db } from '../_lib/prisma'

interface BarbershopPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}
// server component
const BarbershopPage = async ({ searchParams }: BarbershopPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: 'insensitive',
              },
            }
          : {},
        searchParams.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams.service,
                    mode: 'insensitive',
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <Search />
      </div>
      <h2 className="px-5 pb-3 text-xs font-bold uppercase text-gray-400">{`RESULTADOS PARA "${searchParams.title || searchParams.service}"`}</h2>

      <div className="grid grid-cols-2 gap-4 px-5">
        {barbershops.map((barbershops) => (
          <BarbershopItem key={barbershops.id} barbershop={barbershops} />
        ))}
      </div>
    </>
  )
}
export default BarbershopPage
