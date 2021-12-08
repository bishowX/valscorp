import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import InvoiceList from './InvoiceList'
import Fab from '../../components/Fab'
import HorizontalLoader from '../../components/HorizontalLoader'
import Dialog, { DialogTitle, DialogContent, DialogTrigger, DialogClose } from '../../components/Dialog'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {InvoicesContext} from '../../context/InvoicesContext'

const Invoices = () => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const {state: {invoices}, dispatch, getInvoices} = useContext(InvoicesContext)
	
	useEffect(() => getInvoices()(dispatch), [])
	
	return (
		<div className="w-full">
			<div className="w-full flex justify-between items-center">
				<h1 className="text-xl text-white font-bold">Invoices</h1>
				<Link className="hidden md:block" to="/create-invoice">
					<Button type="button" color="white" backgroundColor="brand">Create New</Button>
				</Link>
			</div>
			<div className="w-full h-8"></div>
			{invoices.loading && <HorizontalLoader />}
			{invoices.error && <p className="text-white text-xl">{invoices.error}</p>}
			{invoices.data && <InvoiceList invoices={invoices.data}/>}
			<Link to="/create-invoice" className="md:hidden">
				<Fab />
			</Link>
		</div>
	)
}


export default Invoices
