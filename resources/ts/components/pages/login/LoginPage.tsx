import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import React, { VFC } from "react"


export const LoginPage : VFC = () => {
    return (
        <>
        <Flex align="center" justify="center" height="100vh" >
            <Box bg="#F7FAFC" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">ログインページ</Heading>
                <Divider my={4} />
                <Stack spacing={4} py={3} px={10}>
                <Input placeholder="メールアドレス" />
                <Input placeholder="パスワード" />
                <Button bg="#BEE3F8" _hover={{ opacity:0.8}}>ログイン</Button>
                </Stack>
            </Box>
        </Flex>
        </>
    )
}
