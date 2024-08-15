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
              <Button variant="secondary" size="sm">
                Reservar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BarbershopServiceItem
