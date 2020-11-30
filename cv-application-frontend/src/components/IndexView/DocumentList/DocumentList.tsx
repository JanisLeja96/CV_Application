import React, {useEffect, useState} from "react";
import {DocumentType} from "../../../types/DocumentType";
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import config from "./../../../config.json";


export const DocumentList = () => {
    const [documents, setDocuments] = useState<DocumentType[] | null>(null);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        loadDocuments();
    }, [loaded])

    const loadDocuments = () => {
        axios.get(`${config.SERVER_URL}`)
            .then((res) => {
                setDocuments(res.data.data);

                console.log(documents);
                if (!loaded) {
                    setLoaded(true);
                }
            })
    }

    const deleteDocument = (id: number) => {
        axios.delete(`http://localhost:8000/api/documents/${id}`)
            .then(() => {
                setLoaded(false);
            })
    }

    return (
        <div className="w-full">
            <table className="w-full mt-2 border-bottom h-full">
                <thead>
                <tr className="border border-top-0 border-left-0 border-right-0 border-gray-600 align-bottom">
                    <th></th>
                    <th>File name</th>
                    <th>Created At</th>
                    <th>Last modified</th>
                </tr>
                </thead>
                <tbody className="space-y-4">
                {documents && documents.map((document) => {
                    return (
                        <tr
                            key={document.id}
                            className="border-top border-gray-800 h-16"
                            tabIndex={0}>
                            <td className="w-36 space-x-2">
                                <Link to={`/${document.id}/view`}>
                                    <FontAwesomeIcon size="2x" className="hover:border-black" icon={faEye}/>
                                </Link>
                                <Link to={`/${document.id}/edit`}>
                                    <FontAwesomeIcon size="2x" className="hover:border-black" icon={faEdit}/>
                                </Link>
                                <button onClick={() => deleteDocument(document.id)}>
                                    <FontAwesomeIcon size="2x" className="hover:border-black" icon={faTrashAlt}/>
                                </button>

                            </td>
                            <td className="border-right border-gray-800">{document.document_name}</td>
                            <td className="border-right border-gray-800">{document.created_at}</td>
                            <td>{document.updated_at}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};
