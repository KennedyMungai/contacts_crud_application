import { useContactsQuery } from '@/services/contactsApi'
import {
	Button,
	Flex,
	Heading,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
	VStack
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
	const { data, isLoading, error } = useContactsQuery()

	return (
		<Flex justify={'center'} p={'4rem'}>
			<VStack spacing={'2rem'}>
				<Heading>Contacts</Heading>
				<Button bg={'blue.100'}>
					<Link href='/addEdit'>Add Contact</Link>
				</Button>
				<TableContainer>
					<Table size='md'>
						<Thead>
							<Tr>
								<Th>To convert</Th>
								<Th>into</Th>
								<Th isNumeric>multiply by</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>inches</Td>
								<Td>millimetres (mm)</Td>
								<Td isNumeric>25.4</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</VStack>
		</Flex>
	)
}
