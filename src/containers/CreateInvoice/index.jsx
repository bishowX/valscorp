import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import moment from 'moment'

import Dialog, { DialogTitle, DialogContent, DialogTrigger, DialogClose } from '../../components/Dialog'
import Input from '../../components/Input'
import Button from '../../components/Button'
import HorizontalLoader from '../../components/HorizontalLoader'
import ItemsSection from './ItemsSection'
import { InvoicesContext } from '../../context/InvoicesContext'
import ShortUniqueId from 'short-unique-id'


const newDate = new Date()
const dueDate = newDate.setDate(newDate.getDate() + 30)

const initialFormValues = {
	status: "unpaid",
	totalAmount: 0,
	createdAt: new Date(),
	dueDate: dueDate,
	clientName: "",
	clientAddress: "",
	sellerName: "",
	sellerAddress: "",
	items: []
}

const CreateInvoice = ({ editMode }) => {
	const [formValues, setFormValues] = useState(initialFormValues)
	const [deleteComfirmationDialogOpen, setDeleteComfirmationDialogOpen] = useState(false)
	
	const { id: invoiceId } = useParams()
	const navigate = useNavigate()
	
	const { state: {invoiceDetail, create, update}, dispatch, deleteInvoice, getInvoices, getInvoiceDetail, clearInvoiceDetail, createInvoice, updateInvoice } = useContext(InvoicesContext)
	
	// Get invoice detail when the component mounts
	useEffect(() => {
		if (editMode) getInvoiceDetail(invoiceId)(dispatch)
		return () => clearInvoiceDetail()(dispatch)
	}, [])
	
	// Change formValues to invoice detail when it loads	
	useEffect(() => {
		if(editMode && invoiceDetail.data?.hasOwnProperty('id')) setFormValues(invoiceDetail.data)
	}, [invoiceDetail.data])
	
	// Update form values as the input changes
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
	
	const handleCreateInvoice = event => {
		event.preventDefault()
		createInvoice(formValues)(dispatch)
		resetForm()
		if(!create.loading) navigate('/', {replace: true})
	}

	const handleEditInvoice = event => {
		event.preventDefault()
		updateInvoice(invoiceId, formValues)(dispatch)
		resetForm()
		navigate('/', {replace: true})
	}
	
	const handleDeleteInvoice =() => {
		deleteInvoice(invoiceId)(dispatch)
		toggleDeleteComfirmationDialog()
		navigate('/', {replace: true})
	}
	
	const getTotalPrice = (items) => {
		let sum = 0
		for (var i = 0; i < items.length; i++) {
			sum += parseInt(items[i].price)* parseInt(items[i].quantity)
		}
		return sum
	}
	
	// Adds item to formValues.items
	const handleAddItem = item => {
		const uid = new ShortUniqueId({length: 10})
		const newFormValues = formValues
		newFormValues.items = [...formValues.items, item]
		newFormValues.totalAmount = getTotalPrice(newFormValues.items)
		newFormValues.id = uid()
		setFormValues({...newFormValues})
	}
	
	const toggleDeleteComfirmationDialog = () => {
		setDeleteComfirmationDialogOpen(!deleteComfirmationDialogOpen)
	}
	if (editMode && invoiceDetail.loading) return <h1>Loading invoice</h1>
	
	return (
		<div className="w-full space-y-8">
			
			<form autoComplete="off" className="space-y-8">
				<div className="w-full flex justify-between items-center">
					{editMode ? <h1 className="text-xl text-white font-bold">Edit invoice</h1> :
						<h1 className="text-xl text-white font-bold">Create new invoice</h1>
					}
					{editMode && <Button onClick={toggleDeleteComfirmationDialog} type="button" color="danger" variant="outlined">Delete</Button>}
				</div>
				
				<div className="w-full flex justify-between items-center">
					<div>
						<p className="text-base text-gray font-bold">Created at</p>
						<p className="text-lg text-white">{moment(formValues.createdAt.date).format('MMM D, YYYY')}</p>
					</div>
					<div>
						<p className="text-base text-gray text-right font-bold">Due date</p>
						<p className="text-lg text-white text-right">{moment(formValues.dueDate).format('MMM D, YYYY')}</p>
					</div>
				</div>
				
				<div className="w-full space-y-4">
					<p className="text-white font-bold text-md">Bill From</p>
					<label className="block text-gray" htmlFor="sellerName">Seller's Name</label>
					<Input value={formValues.sellerName} onChange={handleChange} type="text" name="sellerName"/>
					<label className="block text-gray" htmlFor="sellerAddress">Seller's Address</label>
					<Input value={formValues.sellerAddress} onChange={handleChange} type="text" name="sellerAddress" />
				</div>
				
				<div className="w-full space-y-4">
					<p className="text-white font-bold text-md">Bill To</p>
					<label className="block text-gray" htmlFor="clientName">Buyer's Name</label>
					<Input value={formValues.clientName} onChange={handleChange} type="text" name="clientName"/>
					<label className="block text-gray" htmlFor="clientAddress">Client Address</label>
					<Input value={formValues.clientAddress} onChange={handleChange} type="text" name="clientAddress" />
				</div>
				
			</form>
			
			<ItemsSection handleAddItem={handleAddItem} items={formValues.items} />
			
			<div className="w-full flex justify-between items-center">
				<Link to="/"><Button color="brand" variant="outlined">Cancell</Button></Link>
				{editMode ? <Button onClick={handleEditInvoice} color="white" backgroundColor="brand">Save</Button> :
					<Button onClick={handleCreateInvoice} color="white" backgroundColor="brand">Create</Button>
				}
			</div>
			
			{deleteComfirmationDialogOpen && 
			<Dialog open={deleteComfirmationDialogOpen} onOpenChange={toggleDeleteComfirmationDialog}>
				<DialogTrigger asChild>
					<Button backgroundColor="brand" color="white">Add</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md p-4 space-y-4 fixed left-2/4 top-2/4 w-9/12 transform -translate-x-2/4 -translate-y-2/4 bg-midnight rounded-lg">
					<DialogTitle className="text-white text-lg font-bold">Delete invoice</DialogTitle>
					<p className="text-gray text-base">Are you sure you want to delete this?</p>
					<div className="h-8"></div>
					<div className="w-full flex justify-between items-center">
						<DialogClose asChild>
							<Button type="button" color="brand" variant="outlined">Cancell</Button>
						</DialogClose>
						<Button onClick={() => handleDeleteInvoice()} type="button" color="white" backgroundColor="danger">Delete</Button>
					</div>
					<DialogClose className="absolute top-0 right-3 w-7 h-7 bg-midnight hover:bg-not-black flex justify-center items-center rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</DialogClose>
				</DialogContent>
			</Dialog>
			}
		</div>
	)
}


export default CreateInvoice
