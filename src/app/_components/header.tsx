import { CalendarDays, HomeIcon, LogOutIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { listQuickSearch } from '../_constants/quick-search'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image
          src={'/Logo.png'}
          alt="logo da fsw barber"
          height={18}
          width={120}
        ></Image>

        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'} variant={'outline'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-3 border-b border-solid py-5">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
              </div>
              <div>
                <h2 className="text-base font-bold">Pedro Oliveira</h2>
                <p>pedro@gmail.com</p>
              </div>
            </div>

            {/** MEMU INICIAL */}
            <div className="flex flex-col gap-3 border-b border-solid py-6">
              <Button className="justify-start gap-2" variant={'ghost'}>
                <HomeIcon />
                Ínicio
              </Button>
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

            <Button
              className="mt-6 w-full justify-start gap-2"
              variant={'ghost'}
            >
              <LogOutIcon />
              Sair da conta
            </Button>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
