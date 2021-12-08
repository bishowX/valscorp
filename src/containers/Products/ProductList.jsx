const ProductList = () => {
	return (
		<div className="w-full rounded-md bg-kinda-indigo pt-2 pb-1 px-2">
			<table className="border-collapse">
				<thead className="border-b border-off-white">
					<tr>
						<th className="uppercase tracking-wide text-md pb-2 font-light">S.N</th>
						<th className="uppercase tracking-wide w-full text-md text-left pb-2 px-2 font-light">Product</th>
						<th className="uppercase tracking-wide text-md text-right pb-2 font-light">Price</th>
					</tr>
				</thead>
				<tbody>
				{[1,3,4,5,6].map((item, idx) => (
					<tr key={idx} className="even:bg-not-black">
						<td className="py-2">{idx+1}.</td>
						<td className="px-2 py-2">Noodle</td>
						<td className="text-right py-2">525</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	)
}


export default ProductList
