const Fab = ({ onClick }) => {
	return (
		<button onClick={onClick} className="fixed right-4 bottom-4 p-4 rounded-full shadow-md bg-brand text-white">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
			</svg>
		</button>
	)
}


export default Fab
