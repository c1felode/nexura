type headerClass = {
    className?: string
}
export const Header: React.FC<headerClass> = ({className}) => {
    return (
    <div className={`py-12 background-primary flex justify-between ${className}`}>
        
    </div>
    )
}