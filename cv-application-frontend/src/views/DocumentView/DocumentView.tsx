import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {DocumentType} from "../../types/DocumentType";
import axios from 'axios';
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {DocumentButtons} from "../../components/DocumentView/DocumentButtons/DocumentButtons";
import './DocumentView.css';
import {Document} from "../../components/DocumentView/Document/Document";
import config from "../../config.json";

export const DocumentView: FC = (props) => {
    const {id} = useParams<{ id: string }>();
    const [document, setDocument] = useState<DocumentType>();

    useEffect(() => {
        fetchDocument();
    }, []);

    const fetchDocument = () => {
        axios.get(`${config.SERVER_URL}${id}`)
            .then((res) => {
                setDocument(res.data.data);
                console.log(document);
            })
    }

    return (
        <>
            <div>
                <TopPanel>
                    <DocumentButtons documentId={id}/>
                </TopPanel>
            </div>
            <div className="document shadow-2xl ml-auto mr-auto mt-4">
                {document && <Document document={document}/>}
            </div>
        </>


    )
}