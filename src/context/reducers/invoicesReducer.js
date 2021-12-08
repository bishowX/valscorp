import { 
	INVOICES_LOADING, 
	INVOICES_LOAD_SUCCESS, 
	INVOICES_LOAD_ERROR, 
	INVOICE_CREATE_LOADING, 
	INVOICE_CREATE_SUCCESS, 
	INVOICE_CREATE_ERROR, 
	INVOICE_UPDATE_LOADING,
	INVOICE_UPDATE_SUCCESS,
	INVOICE_UPDATE_ERROR,
	INVOICE_DETAIL_LOADING,
	INVOICE_DETAIL_LOAD_SUCCESS,
	INVOICE_DETAIL_LOAD_ERROR,
	INVOICE_DETAIL_CLEAR,
	INVOICE_DELETE_LOADING,
	INVOICE_DELETE_SUCCESS,
	INVOICE_DELETE_ERROR,
} 
from '../actionTypes'


const invoicesReducer = (state, action) => {
	switch (action.type) {
		case INVOICES_LOADING:
			return {
				...state, 
				invoices: {...state.invoices, loading: true}
			}
		case INVOICES_LOAD_SUCCESS:
			return {
				...state, 
				 invoices: {...state.invoices, loading: false, data: action.payload}
			}
		case INVOICES_LOAD_ERROR:
			return {
				...state, 
				 invoices: {...state.invoices, loading: false, error: action.payload}
			}
		case INVOICE_UPDATE_LOADING:
			return {
				...state,
				create: {...state.create, loading: true}
			}
			
		case INVOICE_UPDATE_SUCCESS:
			const updatedData = [...state.invoices.data.filter(invoice => invoice.id !== action.payload.id), action.payload]
			return {
				...state,
				update: {...state.update, loading: false, error: null},
				invoices: {...state.invoices, data: [...updatedData]}
			}
			
		case INVOICE_UPDATE_ERROR:
			return {
				...state,
				update: {...state.update, loading: false, error: action.payload}
			}
		
		case INVOICE_DETAIL_LOADING:
			return {
				...state,
				invoiceDetail: {...state.invoiceDetail, loading: true}
			}
		
		case INVOICE_DETAIL_LOAD_SUCCESS:
			return {
				...state,
				invoiceDetail: {...state.invoiceDetail, loading: false, error: null, data: action.payload}
			}
		
		case INVOICE_DETAIL_LOAD_ERROR:
			return {
				...state,
				invoiceDetail: {...state.invoiceDetail, loading: false, error: action.payload}
			}
		
		case INVOICE_DETAIL_CLEAR:
			return {
				...state,
				invoiceDetail: {...state.invoiceDetail, data: {}}
			}
		
		case INVOICE_DELETE_LOADING:
			return {
				...state,
				deleteInvoice: {...state.deleteInvoice, loading: true}
			}
		
		case INVOICE_DELETE_SUCCESS:
			return {
				...state,
				invoices: {...state.invoices, data: [...state.invoices.data.filter(invoice => invoice.id !== action.payload)]},
				deleteInvoice: {...state.deleteInvoice, loading: false, error: null}
			}
		
		case INVOICE_DELETE_ERROR:
			return {
				...state,
				deleteInvoice: {...state.deleteInvoice, loading: false, error: action.payload}
			}
		
		default:
			return state
	}
}

export default invoicesReducer
