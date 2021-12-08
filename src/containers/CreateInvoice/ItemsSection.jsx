import { useState } from 'react'

import Dialog, { DialogTitle, DialogContent, DialogTrigger, DialogClose } from '../../components/Dialog'
import Button from '../../components/Button'
import AddItemForm from './AddItemForm'
import ReadonlyTableRow from './ReadonlyTableRow'


const initialFormValues = {
	item: '',
	quantity: '',
	price: ''
}

const ItemsSection = ({ items, handleAddItem }) => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [formValues, setFormValues] = useState(initialFormValues)
	
	const toggleDialog = (openState) => {
		setDialogOpen(openState)
	}
	
	const handleChange = event => {
		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value
		const newFormValues = formValues
		newFormValues[fieldName] = fieldValue
		
		setFormValues({...newFormValues})
	}
	
	const resetForm = () => {
		setFormValues(initialFormValues)
	}
	
	const handleSubmit = event => {
		event.preventDefault()
		handleAddItem(formValues)
		resetForm()
		setDialogOpen(false)
	}
	
	return (
		<div className="w-full relative space-y-4 rounded-md">
			<div className="w-full flex justify-between items-center">
				<p className="text-xl text-white font-bold">Items</p>
				<Dialog open={dialogOpen} onOpenChange={toggleDialog}>
					<DialogTrigger asChild>
						<Button backgroundColor="brand" color="white">Add</Button>
					</DialogTrigger>
					<DialogContent className="max-w-md p-4 space-y-4 fixed left-2/4 top-2/4 w-9/12 transform -translate-x-2/4 -translate-y-2/4 bg-midnight rounded-lg">
						<DialogTitle className="text-white text-lg font-bold">Add new Product</DialogTitle>
						<AddItemForm formValues={formValues} handleChange={handleChange} handleSubmit={handleSubmit}/>
						<DialogClose className="absolute top-0 right-3 w-7 h-7 bg-midnight hover:bg-not-black flex justify-center items-center rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</DialogClose>
					</DialogContent>
				</Dialog>
			</div>
			
			<table className="border-collapse z-0">
				<thead className="border-b border-off-white">
					<tr>
						<th className="uppercase tracking-wide w-full text-md pr-2 text-left font-light">Product</th>
						<th className="uppercase tracking-wide text-md px-2 font-light">Qty.</th>
						<th className="uppercase tracking-wide text-md px-2 font-light">Price</th>
						<th className="uppercase tracking-wide text-md pl-2 text-right font-light">Amt.</th>
					</tr>
	 			</thead>
				<tbody>
				{items.map((item, idx) => (
					<ReadonlyTableRow key={item.id} item={item} />
				))}
				</tbody>
			</table>
		</div>
	)
}


export default ItemsSection
