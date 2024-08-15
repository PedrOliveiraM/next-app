import BarbershopServiceItem from '@/app/_components/barbershop-service-item'
import PhoneItem from '@/app/_components/phone-item'
import { Button } from '@/app/_components/ui/button'
import { db } from '@/app/_lib/prisma'
import { ChevronLeft, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BarbershopPropsDto {
  params: {
    id: string
  }
}
const BarbershopPage = async ({ params }: BarbershopPropsDto) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })
  const services = await db.barbershopServices.findMany({
    where: { barbershopId: params.id },
  })

  if (!barbershop) {
    throw new Error('BarberShop is not found')
  }
  return (
    <>
      {/** IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop.imageURL}
          fill
          className="object-cover"
        />

        <Button variant={'secondary'} className="absolute left-4 top-4" asChild>
          <Link href={'/'}>
            <ChevronLeft />
          </Link>
        </Button>

        <Button
          variant={'secondary'}
          className="absolute right-4 top-4"
          asChild
        >
          <MenuIcon />
        </Button>
      </div>
      {/** TITULO */}
      <div className="flex flex-col border-b border-solid px-5 pb-6 pt-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPinIcon size={24} className="text-primary" />
            <p className="text-sm">{barbershop.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon size={24} className="fill-primary text-primary" />
            <p className="text-sm">5,0 (889 avaliações)</p>
          </div>
        </div>
      </div>
      {/** SOBRE */}
      <div className="mt-6 flex flex-col border-b border-solid px-5">
        <h2 className="text-base font-semibold uppercase text-gray-400">
          sobre nós
        </h2>
        <p className="pb-6 pt-3 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          adipisci omnis necessitatibus ipsa, quod nobis sapiente eius
          asperiores sit neque. Harum debitis facere velit nesciunt officia
          molestiae dignissimos fugiat repudiandae!
        </p>
      </div>
      {/** SERVIÇOS */}
      <div className="p-5">
        <h2 className="mb-3 text-base font-semibold uppercase text-gray-400">
          SERVIÇOS
        </h2>
        <div className="space-y-3">
          {services.map((service) => (
            <BarbershopServiceItem
              key={service.id}
              barbershopService={service}
            />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h2 className="text-base font-semibold uppercase text-gray-400">
          CONTATO
        </h2>
        <div className="space-y-4">
          {barbershop.phones.map((phone) => (
            <PhoneItem key={phone} phone={phone} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BarbershopPage
