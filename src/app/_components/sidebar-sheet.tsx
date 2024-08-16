import { CalendarDays, HomeIcon, LogOutIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { listQuickSearch } from '../_constants/quick-search'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
        </Avatar>

        <div>
          <h2 className="text-base font-bold">Pedro Oliveira</h2>
          <p className="text-xs">pedro@gmail.com</p>
        </div>
      </div>

      {/** MEMU INICIAL */}
      <div className="flex flex-col gap-3 border-b border-solid py-6">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant={'ghost'} asChild>
            <Link href={'/'}>
              <HomeIcon />
              Ínicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant={'ghost'}>
          <CalendarDays />
          Agendamento
        </Button>
      </div>
      {/** MEMU RAPIDO */}
      <div className="flex flex-col gap-3 border-b border-solid py-6">
        {listQuickSearch.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-3"
            variant={'ghost'}
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={18}
              height={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <Button className="mt-6 w-full justify-start gap-2" variant={'ghost'}>
        <LogOutIcon />
        Sair da conta
      </Button>
    </SheetContent>
  )
}

export default SidebarSheet
