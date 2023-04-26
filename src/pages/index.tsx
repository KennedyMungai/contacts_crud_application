import { useContactsQuery } from '@/services/contactsApi'
import {
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

export default function Home() {
	const { data, isLoading, error } = useContactsQuery()

	return (
		<Flex justify={'center'} p={'4rem'}>
			<VStack spacing={'4rem'}>
				<Heading>Contacts</Heading>
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
							<Tr>
								<Td>feet</Td>
								<Td>centimetres (cm)</Td>
								<Td isNumeric>30.48</Td>
							</Tr>
							<Tr>
								<Td>yards</Td>
								<Td>metres (m)</Td>
								<Td isNumeric>0.91444</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Th>To convert</Th>
								<Th>into</Th>
								<Th isNumeric>multiply by</Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>
			</VStack>
		</Flex>
	)
}
