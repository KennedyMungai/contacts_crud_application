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
	VStack,
	Spacer
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
								<Th>Name</Th>
								<Th>Email</Th>
								<Th>Contact</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data?.map((item: any, index: any) => (
								<Tr key={item.id}>
									<Td>{item.name}</Td>
									<Td>{item?.email}</Td>
									<Td>{item?.contact}</Td>
									<Td>
										<Flex gap='0.5rem'>
											<Button bg={'blue.100'}>Edit</Button>
											<Spacer />
											<Button bg={'red.200'}>Delete</Button>
										</Flex>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</VStack>
		</Flex>
	)
}
