'use client'
import { CalendarDays, HomeIcon, LogInIcon, LogOutIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { listQuickSearch } from '../_constants/quick-search'
// import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from './ui/dialog'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarImage } from './ui/avatar'

const SidebarSheet = () => {
  const { data } = useSession()

  const handleLoginWithGoogleClick = () => {
    signIn('google')
  }

  const handleLogoutClick = () => {
    signOut()
  }
  return (
    <SheetContent className="h-full overflow-y-auto p-4">
      <SheetHeader className="text-start">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {/** AREA DE LOGIN */}
      {data?.user ? (
        <div className="flex gap-3 border-b border-solid py-6">
          <Avatar>
            <AvatarImage src={data.user.image ?? ''} />
          </Avatar>
          <div>
            <h2 className="text-base font-bold">{data.user.name}</h2>
            <p className="text-xs">{data.user.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-lg font-bold">Olá. Faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size={'icon'}>
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-lg">
                <DialogHeader className="font-bold">
                  Faça login na plataforma
                </DialogHeader>
                <DialogDescription className="text-center">
                  Conecte-se usando sua conta do google
                </DialogDescription>
                <Button
                  onClick={handleLoginWithGoogleClick}
                  variant={'outline'}
                  className="gap-3 font-bold"
                >
                  <Image
                    src="/google-icon.svg"
                    alt="Login com google"
                    width={18}
                    height={18}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
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
          <SheetClose key={option.title} asChild>
            <Button asChild className="justify-start gap-3" variant={'ghost'}>
              <Link href={`/barbershop?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={18}
                  height={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      <Button
        onClick={handleLogoutClick}
        className="mt-6 w-full justify-start gap-2"
        variant={'ghost'}
      >
        <LogOutIcon />
        Sair da conta
      </Button>
    </SheetContent>
  )
}

export default SidebarSheet
