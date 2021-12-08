import { createContext, useReducer } from 'react'

import initialInvoicesState from './initialStates/initialInvoicesState'
import invoicesReducer from './reducers/invoicesReducer'
import { getInvoices, deleteInvoice, createInvoice, updateInvoice, getInvoiceDetail, clearInvoiceDetail } from './actions/invoicesActions'


export const InvoicesContext = createContext()

const InvoicesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(invoicesReducer, initialInvoicesState)
	
	return (
		<InvoicesContext.Provider value={{ state, dispatch, getInvoices, deleteInvoice, createInvoice, updateInvoice, getInvoiceDetail, clearInvoiceDetail }}>
			{ children }
		</InvoicesContext.Provider>
	)
}


export default InvoicesProvider
