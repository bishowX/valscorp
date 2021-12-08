import Input from '../../components/Input'
import Button from '../../components/Button'
import { DialogClose } from '../../components/Dialog'

const AddItemForm = ({ formValues, handleSubmit, handleChange }) => {
	return (
		<form onSubmit={handleSubmit} autoComplete="off" className="w-full flex flex-col gap-4">
			<div className="space-y-2">
				<label htmlFor="item" className="block text-base text-light-white font-light">Product</label>
				<Input value={formValues.item} onChange={handleChange} name="item" type="text" />
			</div>
			<div className="space-y-2">
				<label htmlFor="quantity" className="block text-base text-light-white font-light">Quantity</label>
				<Input value={formValues.quantity} onChange={handleChange} name="quantity" type="number" />
			</div>
			<div className="space-y-2">
				<label htmlFor="price" className="block text-base text-light-white font-light">Price</label>
				<Input value={formValues.price} onChange={handleChange} name="price" type="number"/>
			</div>
			<div className="w-full flex justify-between items-center">
				<DialogClose asChild>
					<Button type="button" color="brand" variant="outlined">Cancell</Button>
				</DialogClose>
				<Button type="submit" color="white" backgroundColor="brand">Add</Button>
			</div>
		</form>
	)
}


export default AddItemForm
