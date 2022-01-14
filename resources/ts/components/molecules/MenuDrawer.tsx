import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import React, { VFC } from "react"

type Props = {
    onClose:() => void;
    isOpen:boolean;
}

export const MenuDrawer : VFC<Props> = (props) => {
    const { onClose,isOpen } = props;
    
    return (
        <>
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100" >
                        <Button w="100%">トップ</Button>
                        <Button w="100%">ヘルプ</Button>
                        <Button w="100%">ログイン</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    )
}
