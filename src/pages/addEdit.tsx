import { useEffect, useState } from 'react'

const initialState = {
	name: '',
	email: '',
	contact: ''
}

type Props = {}

const AddEdit = (props: Props) => {
	const [formValue, setFormValue] = useState<{
		name: string
		email: string
		contact: string
	}>(initialState)

	return <div>AddContact</div>
}

export default AddEdit
