import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import SidebarSheet from './sidebar-sheet'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetTrigger } from './ui/sheet'
import Link from 'next/link'

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Link href={'/'}>
          <Image
            src={'/Logo.png'}
            alt="logo da fsw barber"
            height={18}
            width={120}
          ></Image>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'} variant={'outline'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
