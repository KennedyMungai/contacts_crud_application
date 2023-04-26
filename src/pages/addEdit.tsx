import { useEffect, useState } from 'react'

const initialState = {
	name: '',
	email: '',
	contact: ''
}

const AddEdit = () => {
	const [formValue, setFormValue] = useState<{
		name: string
		email: string
		contact: string
	}>(initialState)

	const { name, email, contact } = formValue

	return <div>AddContact</div>
}

export default AddEdit
