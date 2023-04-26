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
	Spacer,
	Box,
	Skeleton,
	Stack
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
	const { data, isLoading, error } = useContactsQuery()

	if (isLoading) {
		return (
			<Stack padding={4} spacing={1}>
				<Skeleton height='40px' isLoaded={isLoading}></Skeleton>
				<Skeleton
					height='40px'
					isLoaded={isLoading}
					color='white'
					fadeDuration={1}
				></Skeleton>
				<Skeleton
					height='40px'
					isLoaded={isLoading}
					fadeDuration={4}
					color='white'
				></Skeleton>
			</Stack>
		)
	}

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
											<Button bg={'blue.100'} size={'sm'}>
												<Link href={`addEdit`}>
													Edit
												</Link>
											</Button>
											<Spacer />
											<Button bg={'red.200'} size={'sm'}>
												Delete
											</Button>
											<Spacer />
											<Button size={'sm'}>
												<Link href={`${item.name}`}>
													View
												</Link>
											</Button>
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
