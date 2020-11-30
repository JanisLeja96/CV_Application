import React from "react";
import {Container} from "react-bootstrap";
import {EditView} from "./views/EditView/EditView";
import {IndexView} from "./views/IndexView/IndexView";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {DocumentView} from "./views/DocumentView/DocumentView";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <Container className="border border-gray-800 shadow-lg w-full h-full">
            <ToastContainer/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <IndexView/>
                    </Route>
                    <Route path="/new">
                        <EditView/>
                    </Route>
                    <Route path="/:id/view">
                        <DocumentView/>
                    </Route>
                    <Route path="/:id/edit">
                        <EditView/>
                    </Route>
                </Switch>
            </Router>
        </Container>

    );
}

export default App;
