import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IContact } from '../models/contact.model'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5698'}),
    endpoints: (builder) => ({})
}}
