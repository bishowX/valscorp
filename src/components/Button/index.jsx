const Button = ({ children, variant, color, backgroundColor, ...props }) => {
	return (
		<button className={`px-4 py-1 rounded-md text-${color} bg-${backgroundColor || 'transparent'} ${variant==='outlined' && `border border-${color}`}`} {...props}>{children}</button>
	)
}


export default Button
