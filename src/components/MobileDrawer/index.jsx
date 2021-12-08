import Backdrop from '../Backdrop'
import MenuItem from './MenuItem'


const MobileDrawer = ({ onClose }) => {
	return (
		<Backdrop onclick={onClose}>
			<div onClick={event => event.stopPropagation()} className="z-50 h-full w-9/12 p-4 pt-8 ml-auto flex flex-col gap-4 bg-kinda-indigo">
				<MenuItem active title="Invoices" />
				<MenuItem title="Product" />
				<MenuItem title="Account" />
				<MenuItem title="Dark mode" />
			</div>
		</Backdrop>
	)
}

export default MobileDrawer
