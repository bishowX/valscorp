import ShortUniqueId from 'short-unique-id'
import { collection, where, query, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

import { db } from '../../firebase'
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


export const getInvoices = () => async dispatch => {
	dispatch({ type:  INVOICES_LOADING})
	try {
		//TODO: only fetch invoices that logged in user has
		const querySnapshot = await getDocs(collection(db, "invoices"))
		const data = []
		querySnapshot.forEach(doc => {
			data.push(doc.data())
		})
		
		dispatch({type: INVOICES_LOAD_SUCCESS, payload:data})
	}
	catch(err) {
		dispatch({type: INVOICES_LOAD_ERROR, payload: err.message})
	}
}

export const createInvoice = invoice => async dispatch => {
	dispatch({type: INVOICE_CREATE_LOADING})
	const uid = new ShortUniqueId({length: 10})
	
	try {
		const docRef = await addDoc(collection(db, 'invoices'), {...invoice, id: uid()})
		const docSnap = await getDoc(docRef)
		
		dispatch({type: INVOICE_CREATE_SUCCESS, payload: docSnap.data()})
	}
	catch (err) {
		console.log(err);
		dispatch({type: INVOICE_CREATE_ERROR, payload: err.message})
	}
		
}

export const updateInvoice = (invoiceId, data) => async dispatch => {
	dispatch({type: INVOICE_UPDATE_LOADING})
	
	try {
		const q = query(collection(db, 'invoices'), where('id', '==', invoiceId))
		let docRef = null
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach(d => {
			docRef = doc(db, 'invoices', d.id)
		})
		await updateDoc(docRef, data)
		const updatedDoc= await getDoc(docRef)
		dispatch({type: INVOICE_UPDATE_SUCCESS, payload: updatdDoc.data()})
	} catch (err) {
		dispatch({type: INVOICE_UPDATE_ERROR, payload: err.message})
	}
		
}

export const getInvoiceDetail = invoiceId => async dispatch => {
	dispatch({type: INVOICE_DETAIL_LOADING})
	
	try {
		const q = query(collection(db, 'invoices'), where('id', '==', invoiceId))
		let docData = null
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach(d => {
			docData = d.data()
		})
		
		dispatch({type: INVOICE_DETAIL_LOAD_SUCCESS, payload: docData})
	}
	catch(err) {
		dispatch({type: INVOICE_DETAIL_LOAD_ERROR, payload: err.message})
	}
	
}

export const deleteInvoice = invoiceId => async dispatch => {
	dispatch({type:INVOICE_DELETE_LOADING})
	
	try {
		const q = query(collection(db, 'invoices'), where('id', '==', invoiceId))
		let docRef = null
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach(d => {
			docRef = doc(db, 'invoices', d.id)
		})
		
		await deleteDoc(docRef)
		dispatch({type: INVOICE_DELETE_SUCCESS, payload: invoiceId})
	} catch (err) {
		console.log(err);
		dispatch({type: INVOICE_DELETE_ERROR, payload: err.message})
	}
}

export const clearInvoiceDetail = () => dispatch => {
	dispatch({type: INVOICE_DETAIL_CLEAR})
}
