const EditableTableRow = ({ product }) => {
	return (
		<tr className="even:bg-not-black">
			<td className="pr-1 py-2">
				<Input name="productName" type="text" />
			</td>
			<td className="text-center px-1 py-2">
				<Input name="quantity" type="number" />
			</td>
			<td className="text-center px-1 py-2">
				<Input name="price" type="number" />
			</td>
			<td className="text-center pl-1 py-2">{5}</td>
		</tr>
	)
}


export default EditableTableRow
