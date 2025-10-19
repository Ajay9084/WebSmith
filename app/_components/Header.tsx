import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const MenuOptions=[
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact us',
        path:'/contact-us'
    }
]

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow">
        {/* Logo */}
        <div className="flex gap-2 items-center">
        <Image src={'/logo.svg'} alt='logo' width={35} height={35}/>
        <h2 className="font-bold text-xl">WebSmith</h2>
    </div>

    {/* MenuOptions */}

    <div className="flex gap-3">
        {MenuOptions.map((menu,index) => (
            <Button variant={'ghost'} key={index}> {menu.name}</Button>
        ))}
    </div>

{/* GetStarted */}

<div>
    <Button>Get Started<ArrowRight/> </Button>
</div>

    </div>
  )
}

export default Header