'use client'
import { Copy, Smartphone } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'sonner'

interface PhonePropDto {
  phone: string
}

const PhoneItem = ({ phone }: PhonePropDto) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success('Copiado com sucesso')
  }
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Smartphone />
        <a href={'tel:+55' + phone}>{phone}</a>
      </div>

      <Button
        variant={'secondary'}
        size={'sm'}
        className="flex gap-2"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        <Copy size={16} />
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
