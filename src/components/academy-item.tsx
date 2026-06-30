import { Star } from "lucide-react"

interface IAcademyItem {
    id: number,
    name: string,
    descr: string
}

export const AcademyItem: React.FC<IAcademyItem> = ({name, id, descr}) => {
    return (
        <li className="flex px-4 py-5 border-t border-l-foreground">
            <div className="w-fit h-full">
                <h3>{name}</h3>
                    <div className="flex max-w-24 items-center">
                        <Star className="text-yellow-300"/>
                        <Star className="text-yellow-300"/>
                        <Star className="text-yellow-300"/>
                        <Star className="text-yellow-300"/>
                        <Star className="text-yellow-300"/>

                        <span className="ml-1 text-sm">5.0</span>
                    </div>
                    <p className="text-xs font-extralight w-[70%] line-clamp-2 overflow-hidden text-ellipsis">{descr}</p>
                </div>
            <div className="w-30 h-20 bg-primary flex justify-center items-center text-white">logo</div>
        </li>
    )
}