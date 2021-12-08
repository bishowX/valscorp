import * as DialogPrimitive from '@radix-ui/react-dialog'


const Dialog = ({ children, ...props}) => {
	return (
		<DialogPrimitive.Root {...props} className="focus:outline-none">
			<DialogPrimitive.Overlay asChild className="fixed inset-0 bg-backdrop" />
			{ children }
		</DialogPrimitive.Root>
	)
}

export const DialogContent = ({ children, backgroundColor, ...props }) => {
	return (
		<DialogPrimitive.Content className={`w-10/12 max-h-4/5 bg-${backgroundColor} fixed left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2`} {...props}>
			{ children }
		</DialogPrimitive.Content>
	)
}

export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description
export const DialogClose = DialogPrimitive.Close

export default Dialog
