type footerClass = {
    className?: string
}
export const Footer: React.FC<footerClass> = ({className}) => {
    return (
    <div className={`py-12 background-primary flex justify-between ${className ? className : ''}`}>
        
    </div>
    )
}