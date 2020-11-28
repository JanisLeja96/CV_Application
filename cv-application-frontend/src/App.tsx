import React, {createContext, useState} from "react";
import { Container } from "react-bootstrap";
import { EditView } from "./views/EditView/EditView";
import { IndexView } from "./views/IndexView/IndexView";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DocumentType } from "./types/DocumentType";
import {DocumentView} from "./views/DocumentView/DocumentView";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const DocumentContext = createContext<any>(null);
export const ViewContext = createContext<any>("Index");

function App() {
  const [document, setDocument] = useState<DocumentType | null>(null)

  return (
      <DocumentContext.Provider value={{document, setDocument}}>
        <Container className="border border-gray-800 shadow-lg w-full h-full">
          <ToastContainer />
          <Router>
            <Switch>
              <Route exact path="/">
                <IndexView />
              </Route>
              <Route path="/new">
                <EditView />
              </Route>
              <Route path="/:id/view">
                <DocumentView />
              </Route>
            </Switch>
          </Router>
        </Container>
      </DocumentContext.Provider>

  );
}

export default App;
