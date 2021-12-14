import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Invoices from './containers/Invoices'
import CreateInvoice from './containers/CreateInvoice'
import InvoicesProvider from './context/InvoicesContext'


const App = () => {
	return (
		<InvoicesProvider>
		<ScrollToTop />
		<div className="container mx-auto px-4 py-2 bg-kinda-black">
			<Navbar />
			<div className="h-12"></div>
			<Routes>
				<Route path="/" element={<Invoices />} />
				<Route path="/invoices" element={<Invoices />} />
				<Route path="/create-invoice" element={<CreateInvoice editMode={false} />} />
				<Route path="/edit-invoice/:id" element={<CreateInvoice editMode={true} />} />
			</Routes>
		</div>
		</InvoicesProvider>
	)
}


export default App
