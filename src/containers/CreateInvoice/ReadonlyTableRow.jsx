const ReadonlyTableRow = ({ item }) => {
	return (
		<tr className="even:bg-not-black">
			<td className="pr-1 py-2">{item.item}</td>
			<td className="text-center px-1 py-2">{item.quantity}</td>
			<td className="text-center px-1 py-2">{item.price}</td>
			<td className="text-right pl-1 py-2">{item.quantity * item.price}</td>
		</tr>
	)
}


export default ReadonlyTableRow
