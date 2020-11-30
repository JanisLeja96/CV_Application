import React from "react";
import Row from "react-bootstrap/esm/Row";
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {DocumentList} from "../../components/IndexView/DocumentList/DocumentList";
import {IndexButtons} from "../../components/IndexView/IndexButtons/IndexButtons";

export const IndexView = () => {

    return (
        <div>
            <TopPanel>
                <IndexButtons/>
            </TopPanel>
            <div>
                <DocumentList/>
            </div>
            <Row className="py-40"/>
        </div>
    );
};
