import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import List from "./pages/List";
import Form from "./pages/Form";

    function Router() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Landing/> } />
                    <Route path="/studies" element={ <List/> } />
                    <Route path="/classes" element={ <Form/> } />
                </Routes>
            </BrowserRouter>
        );
    };

        export default Router;