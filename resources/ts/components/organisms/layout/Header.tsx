import { VFC } from "react";
import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header : VFC = () => {
    return (
        <>
        <Flex as="nav" color='#EDF2F7' bg='#4299E1' align="center"justify="space-between">
            <Heading as="h1" fontSize={{base:"md",md:"lg"}}>まめぷ</Heading>

            <Flex pr={4}>
                <Box mr={4}>
                <Link to="/help">ヘルプ</Link>
                <Link to="/">投稿一覧</Link>
                <Link to="login">ログイン</Link>
                </Box>
            </Flex>
        </Flex>
        </>
    );

}
