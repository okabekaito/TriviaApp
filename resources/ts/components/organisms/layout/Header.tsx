import { useCallback, VFC } from "react";
import React from "react";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header : VFC = () => {
    const { isOpen,onOpen,onClose } = useDisclosure();
    const history = useHistory();
    const onClickHome = useCallback( () => history.push("/"),[]);
    const onClickHelp = useCallback( () => history.push("/help"),[]);
    const onClickLogin = useCallback( () => history.push("/login"),[]);

    return (
        <>
        <Flex as="nav" color='#EDF2F7' bg='#4299E1' align="center"justify="space-between" padding={{ base:3, md: 5}}>
            <Flex align="center" as ="a" mr={8} _hover={{cursor:"pointer"}} onClick={onClickHome}>
                <Heading as="h1" fontSize={{base:"md",md:"lg"}}>まめぷ</Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{ base:"none",md:"flex"}}>
                <Box pr={4}>
                    <Link to="/help" onClick={onClickHelp}>ヘルプ</Link>
                </Box>
                <Box pr={4}>
                    <Link to="/" onClick={onClickHome}>投稿一覧</Link>
                </Box>
                <Box pr={4}>
                    <Link to="login" onClick={onClickLogin}>ログイン</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer isOpen={isOpen} onClose={onClose}onClickHome={onClickHome}onClickHelp={onClickHelp} onClickLogin={onClickLogin} />
        </>
    );

}
