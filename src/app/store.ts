import { contactsApi } from '@/services/contactsApi'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		[contactsApi.reducerPath]: contactsApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(contactsApi.middleware)
})

export default store
