const MenuItem = ({ title, active=false }) => {
	
	return (
		<div className={`w-full p-3 rounded-md ${active && 'bg-brand'} text-center`}>
			<span className="text-md text-white font-bold ">{ title }</span>
		</div>
	)
}

export default MenuItem
