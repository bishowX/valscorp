import moment from 'moment'


const Invoice = ({ invoice }) => {
	return (
		<div className="w-full rounded-md bg-kinda-indigo p-4 space-y-4">
			<div className="w-full flex justify-between items-center">
				<h3 className="text-xl text-white text-bold">{invoice.clientName}</h3>
				<p className="text-lg text-green">{invoice.status}</p>
			</div>
			
			<div className="w-full">
				<p className="text-base text-light-white">Due {moment(invoice.dueDate.date).format('MMM D, YYYY')}</p>
				<div className="w-full flex justify-between items-center">
					<p className="text-2xl text-light-white text-bold">Rs. {invoice.totalAmount}</p>
					<p className="text-base text-gray text-bold">items: {invoice.items.length}</p>
				</div>
			</div>
		</div>
	)
}


export default Invoice
