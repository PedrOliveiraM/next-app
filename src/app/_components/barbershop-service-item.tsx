import { BarbershopServices } from '@prisma/client'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

interface BarbershopServiceItemProps {
  barbershopService: BarbershopServices
}
const BarbershopServiceItem = ({
  barbershopService,
}: BarbershopServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px]">
          <Image
            src={barbershopService.imageURL}
            alt={barbershopService.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{barbershopService.name}</h3>
          <p className="text-sm text-gray-500">
            {barbershopService.description}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(Number(barbershopService.price))}
            </p>
            <Button variant={'secondary'}>Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopServiceItem
