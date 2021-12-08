import ProductList from './ProductList'
import Fab from '../../components/Fab'
import Dialog, { DialogTitle, DialogContent, DialogTrigger, DialogClose } from '../../components/Dialog'
import Button from '../../components/Button'
import Input from '../../components/Input'


const Products = () => {
	return (
		<div className="w-full">
			<h1 className="text-xl text-white font-bold">Products</h1>
			<div className="w-full h-8"></div>
			<ProductList />
			
			<Dialog>
				<DialogTrigger asChild>
					<Fab />
				</DialogTrigger>
				<DialogContent className="max-w-md p-4 space-y-4 fixed left-2/4 top-2/4 w-9/12 transform -translate-x-2/4 -translate-y-2/4 bg-midnight rounded-lg">
					<DialogTitle className="text-white text-lg font-bold">Add new Product</DialogTitle>
					<form autoComplete="off" className="w-full flex flex-col gap-8" action="/" method="get" accept-charset="utf-8">
						<div className="space-y-2">
							<label htmlFor="product" className="block text-base text-light-white font-light">Product</label>
							<Input id="product" type="text" />
						</div>
						<div className="space-y-2">
							<label htmlFor="price" className="block text-base text-light-white font-light">Price</label>
							<Input id="price" type="number"/>
						</div>
						<div className="w-full flex justify-between items-center">
							<DialogClose asChild>
								<Button type="button" color="brand" variant="outlined">Cancell</Button>
							</DialogClose>
							<Button type="submit" color="white" backgroundColor="brand">Add</Button>
						</div>
					</form>
					
					<DialogClose className="absolute top-0 right-3 w-7 h-7 bg-midnight hover:bg-not-black flex justify-center items-center rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</DialogClose>
				</DialogContent>
			</Dialog>
		</div>
	)
}


export default Products
