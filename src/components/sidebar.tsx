import { Search } from "lucide-react"
import { Input } from "./ui"
import { AcademiesList } from "./academies-list"

export const SideBar = () => {
    return (
        <div className="bg-white h-full w-full overflow-scroll scrollbar-thin border-r border-b-foreground">
            <div className="sticky top-0 bg-white py-6 border-b border-t-foreground">
                <div className="mx-4 relative">
                    <Search size={22} className="text-muted-foreground absolute left-2.5 top-2"/>
                    <Input className="bg-neutral py-5 pl-10 pr-4 placeholder:text-lg xl:text-lg focus:placeholder:xl:text-muted-foreground xl:text-muted-foreground" placeholder="Markazni qidiring"/>
                </div>
            </div>
            <AcademiesList/> 
        </div>
    )
}