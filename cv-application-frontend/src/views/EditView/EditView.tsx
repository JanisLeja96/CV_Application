import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/esm/Row";
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {EditButtons} from "../../components/EditView/EditButtons/EditButtons";
import {Form} from '../../components/EditView/Form/Form';
import './EditView.css';
import {DocumentType} from "../../types/DocumentType";
import {useParams} from "react-router";
import axios from "axios";


export const EditView = () => {
    const [showModal, setShowModal] = useState(false);
    const {id} = useParams<{ id: string }>();
    const [document, setDocument] = useState<DocumentType | undefined>();

    useEffect(() => {
        if (id) {
            fetchDocument();
        }
    }, [])

    const fetchDocument = () => {
        axios.get(`http://localhost:8000/api/documents/${id}`)
            .then((res) => {
                setDocument(res.data.data);
            })
    }

    const handleShow = () => setShowModal(true);
    const handleHide = () => setShowModal(false);


    return (
        <div>
            <TopPanel>
                <EditButtons showModal={() => handleShow()}/>
            </TopPanel>
            <Row className="flex w-full justify-center overflow-y-scroll formSection">
                <Form document={document} modalShown={showModal} hideModal={() => handleHide()}/>
            </Row>
        </div>
    );
};
