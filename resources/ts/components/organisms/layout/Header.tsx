import { VFC } from "react";
import React from "react";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';

export const Header : VFC = () => {
    return (
        <>
        <Flex as="nav" color='#EDF2F7' bg='#4299E1' align="center"justify="space-between" padding={{ base:3, md: 5}}>
            <Flex align="center" as ="a" mr={8} _hover={{cursor:"pointer"}}>
                <Heading as="h1" fontSize={{base:"md",md:"lg"}}>まめぷ</Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{ base:"none",md:"flex"}}>
                <Box pr={4}>
                    <Link to="/help">ヘルプ</Link>
                </Box>
                <Box pr={4}>
                    <Link to="/">投稿一覧</Link>
                </Box>
                <Box pr={4}>
                    <Link to="login">ログイン</Link>
                </Box>
            </Flex>
            <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{ base:"block",md:"none"}} />
        </Flex>
        </>
    );

}
