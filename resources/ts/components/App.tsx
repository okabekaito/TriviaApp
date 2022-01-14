import { ChakraProvider } from "@chakra-ui/react";
import React, { VFC } from "react"
import { Router } from '../Router/router';

export const App:VFC = () => {
    return (
        <ChakraProvider>
        <Router></Router>
        </ChakraProvider>
    )
}
