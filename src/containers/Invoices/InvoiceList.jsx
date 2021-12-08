import { Link } from 'react-router-dom'

import Invoice from './Invoice'


const InvoiceList = ({ invoices }) => {
	return (
		<div className="w-full flex flex-col justify-between gap-4">
			{invoices.map(invoice => (
				<Link key={invoice.id} to={`/edit-invoice/${invoice.id}`}>
					<Invoice invoice={invoice} />
				</Link>
			))}
		</div>
	)
}


export default InvoiceList
