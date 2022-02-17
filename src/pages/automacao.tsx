import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { Sidebar } from "../components/Sidebar";
import NextLink from 'next/link';
import { useUsers } from "../hooks/useUsers";
import { queryClient } from "../services/queryClient";
import { api } from "../services/axios/api";

/* type User = {
	id: string;
	name: string;
	email: string;
	created_at: string;
} */

const Automacao = () => {
	/* const [page, setPage] = useState(1);
	const { data, isLoading, error, isFetching } = useUsers<User>(page);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const handlePrefetchData = async (userId: string) => {
		await queryClient.prefetchQuery(['user', userId], async () => {
			const { data } = await api.get(`/users/${userId}`);

			return data;
		}, { staleTime: 1000 * 60 * 10 });
	} */

	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Automação
							{/* {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />} */}
						</Heading>
						<NextLink href="/users/create" passHref>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								cursor="pointer"
								leftIcon={<Icon
									as={RiAddLine}
								/>}
							>
								Criar novo
                        </Button>
						</NextLink>
					</Flex>
					
				</Box>
			</Flex>
		</Box>
	)
}

export default Automacao;