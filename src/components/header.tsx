import Link from "next/link"

type headerClass = {
    className?: string
}
export const Header: React.FC<headerClass> = ({className}) => {
    return (
    <div className={`px-3 lg:px-0 bg-chart-5 flex justify-between sticky top-0 ${className ? className : ''}`}>
        <div className="px-8">
            <Link href='/' className="text-3xl font-bold text-white">Nexura</Link>
        </div>
    </div>
    )
}