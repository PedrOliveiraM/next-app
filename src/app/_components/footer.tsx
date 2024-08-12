import { Card, CardContent } from './ui/card'

const Footer = () => {
  return (
    <footer>
      <Card className="mt-12">
        <CardContent className="px-5 py-6 text-gray-400">
          © 2023 Copyright <span className="font-bold">FSW Barber</span>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
