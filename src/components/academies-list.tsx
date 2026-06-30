import { AcademyItem } from "./academy-item"

const academiesList = [
    {id: 1, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 2, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 3, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 4, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 5, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 6, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 7, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 8, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},
    {id: 9, name:"IT Park Academy", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur fuga modi, veniam"},

]

export const AcademiesList = () => {
    return (
        <div>            
            <ul className="flex flex-col">
                {academiesList.map(item => (
                    <AcademyItem key={item.id} {...item}/>
                ))}
            </ul>
        </div>
    )
}