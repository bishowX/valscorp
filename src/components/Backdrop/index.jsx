const Backdrop = ({ children, onclick }) => {
	return (
		<div onClick={onclick} className="absolute left-0 top-12 w-screen h-screen bg-backdrop">
			{ children }
		</div>
	)
}

export default Backdrop
