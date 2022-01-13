import React from "react"
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { PostPage } from "../components/pages/posts/PostPage";
import { HelpPage } from "../components/pages/help/HelpPage";
import { LoginPage } from "../components/pages/login/LoginPage";
import { HeaderLayout } from "../components/templates/HeaderLayout";


export const Router = () => {
    return (
        <BrowserRouter>
        <HeaderLayout />

            <Switch>
              <Route path="/help">
                <HelpPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/">
                <PostPage />
              </Route>
            </Switch>
        </BrowserRouter>
      );
    }
