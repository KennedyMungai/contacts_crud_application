import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IContact {
	id?: string
	name: string
	email: string
	contact: string
}

export const contactsApi = createApi({
	reducerPath: 'contactsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5698' }),
	endpoints: (builder) => ({
		contacts: builder.query<IContact[], void>({
			query: () => '/contacts'
		})
	})
})

export const { useContactsQuery } = contactsApi
