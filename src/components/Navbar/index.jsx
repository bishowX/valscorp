import { useState } from 'react'

import MobileDrawer from '../MobileDrawer'

const Navbar = () => {
	return (
		<div className="w-full flex justify-between items-center">
			<h2 className="text-2xl text-brand font-bold">ValsCorp</h2>
		</div>
	)
}

/*
	For Drawer
	// const [open, setOpen] = useState(false)
	
	// const handleDrawerToggle = () => setOpen(!open)

	<button onClick={handleDrawerToggle} className="md:hidden bg-none">
		{ open ? 
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
			</svg> :
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
			</svg> 
		}
	</button>
	
	{ open && <MobileDrawer onClose={handleDrawerToggle} /> }
*/


export default Navbar
