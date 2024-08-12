import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex items-center justify-between p-5">
          <Image
            src={'/Logo.png'}
            alt="logo da fsw barber"
            height={18}
            width={120}
          ></Image>
          <Button size={'icon'} variant={'outline'}>
            <MenuIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
