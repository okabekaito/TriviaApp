import { Button } from "@chakra-ui/react";
import React, { ReactNode, VFC } from "react"

type Props = {
    children:ReactNode;
}

export const PrimaryButton : VFC<Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            <Button bg="#BEE3F8" _hover={{ opacity:0.8}}>{children}</Button>
        </>
    )
}
