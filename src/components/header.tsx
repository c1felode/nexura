type headerClass = {
    className?: string
}
export const Header: React.FC<headerClass> = ({className}) => {
    return (
    <div className={`py-8 bg-chart-5 flex justify-between ${className ? className : ''}`}>
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white">Nexura</h1>
        </div>        
    </div>
    )
}