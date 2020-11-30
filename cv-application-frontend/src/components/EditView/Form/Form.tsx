import React, {FC, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import './Form.css';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router";
import {toast} from "react-toastify";
import {InputTemplate} from "../../../assets/InputTemplate/InputTemplate";
import {BaseDataInputs} from "./Inputs/BaseDataInputs";
import {AddressInputs} from "./Inputs/AddressInputs";
import {WorkPlaceInputs} from "./Inputs/WorkPlaceInputs";
import {DocumentType} from "../../../types/DocumentType";
import config from "../../../config.json";


type Props = {
    modalShown: boolean
    hideModal: () => void
    document?: DocumentType
}

export const Form: FC<Props> = (props) => {
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur"
    });
    const [inputFields, setInputFields] = useState({...InputTemplate});
    const history = useHistory();

    useEffect(() => {
        if(props.document) {
            // @ts-ignore
            setInputFields(...props.document);
        }
    })

    const onSubmit = (data: any) => {
        const fieldsToSubmit = {...inputFields, education: [...data.education], jobs: [...data.jobs]};
        console.log(fieldsToSubmit);
        if (!props.document) {
            storeDocument(fieldsToSubmit);
        } else {
            updateDocument(fieldsToSubmit);
    }

    }

    const storeDocument = (fields: any) => {
        axios.post(config.SERVER_URL, fields)
            .then(() => {
                history.push('/');
                toast('Document created');
            })
            .catch(() => {
                props.hideModal();
                toast('An error occurred');
            })
    }

    const updateDocument = (fields: any) => {
        axios.put(`http://localhost:8000/api/documents/${props.document?.id}`)
            .then(() => {
                history.push(`/${props.document?.id}/view`);
                toast('Changes saved!')
            })
            .catch(() => {
                props.hideModal();
                toast('An error occurred');
            })
    }


    const handleAddWorkplace = () => {
        const newInputs = {
            ...inputFields,
            jobs: [
                ...inputFields.jobs,
                ...InputTemplate.jobs
            ]
        }
        setInputFields(newInputs);
    }

    const handleAddEducation = () => {
        const newInputs = {
            ...inputFields,
            education: [
                ...inputFields.education,
                ...InputTemplate.education
            ]
        }
        setInputFields(newInputs);
    }

    const handleAddJobResponsibility = (index: number) => {
        const newInputs = {...inputFields};
        newInputs.jobs[index].job_responsibilities.push({responsibility: ''});
        setInputFields(newInputs);
    }

    const handleDocumentNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFields = {
            ...inputFields,
            document_name: e.target.value
        }
        setInputFields(newFields);
    }

    const handleBaseDataInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newFields = {
            ...inputFields,
            base_data: {
                ...inputFields.base_data,
                [e.target.name]: e.target.value
            }
        }
        setInputFields(newFields);
    }

    const handleAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFields = {
            ...inputFields,
            address: {
                ...inputFields.address,
                [e.target.name]: e.target.value
            }
        }
        setInputFields(newFields);
    }

    const handleWorkPlaceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newFields = {...inputFields};

        // @ts-ignore
        newFields[`${e.target.name}`] = e.target.value;

        setInputFields(newFields);
    }

    const handleEducationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newFields = {...inputFields};

        // @ts-ignore
        newFields[`${e.target.name}`] = e.target.value;

        setInputFields(newFields);
    }


    return (
        <form id="documentForm" onSubmit={handleSubmit(onSubmit)} className="w-11/12 mt-8">
            <Modal show={props.modalShown} onHide={props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Save changes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset name="modalInput">
                        <input onChange={event => handleDocumentNameInput(event)} ref={register({required: true})}
                               name="document_name"
                               type="text"
                               placeholder="Enter file name..."
                                value={props.document?.document_name}/>
                        {errors.document_name && "This field is required"}
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="bg-red-700" onClick={() => props.hideModal()}>
                        Close
                    </Button>
                    <Button form="documentForm" type="submit" variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
                <p className="text-l font-bold ml-4">About</p>
                <fieldset name="baseData" className="mt-2 ml-6 w-1/2">
                    <div className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10">
                        <BaseDataInputs document={props.document} onChange={handleBaseDataInput} errors={errors} register={register}/>
                    </div>
                </fieldset>
                <p className="text-l font-bold ml-4 mt-4">Education</p>
                <div>
                    {inputFields.education.map((education, index) => {
                        return (
                            <div key={index}>
                                <fieldset className="mt-2 ml-6 w-1/2 mb-8">
                                    <div className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10">
                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].institution`}
                                               ref={register}
                                               className="ml-2 flex bg-gray-200 h-8 w-full"
                                               type="text"
                                               placeholder="Institution"
                                                value={props.document?.education[index].institution}/>
                                        {errors[`education[${index}].institution`]?.message}

                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].faculty`}
                                               ref={register}
                                               className="flex bg-gray-200 h-8 w-full"
                                               type="text"
                                               placeholder="Faculty"
                                               value={props.document?.education[index].faculty}/>
                                        {errors[`education[${index}].faculty`]?.message}

                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].field_of_study`}
                                               ref={register}
                                               className="flex bg-gray-200 h-8 w-full"
                                               type="text"
                                               placeholder="Field of Study"
                                               value={props.document?.education[index].field_of_study}/>
                                        {errors[`education[${index}].field_of_study`]?.message}

                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].level_of_education`}
                                               ref={register}
                                               className="flex bg-gray-200 h-8 w-full"
                                               type="text"
                                               placeholder="Education Level"
                                               value={props.document?.education[index].level_of_education}/>
                                        {errors[`education[${index}].level_of_education`]?.message}

                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].status`}
                                               ref={register}
                                               className="flex bg-gray-200 h-8 w-full"
                                               type="text"
                                               placeholder="Study status"
                                               value={props.document?.education[index].status}/>
                                        {errors[`education[${index}].status`]?.message}

                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].started_at`}
                                               ref={register}
                                               className="flex bg-gray-200 h-8 w-full"
                                               type="date"
                                               placeholder="Started at"
                                               value={props.document?.education[index].started_at}/>
                                        {errors[`education[${index}].started_at`]?.message}

                                        <input onChange={event => handleEducationInput(event)}
                                               name={`education[${index}].finished_at`}
                                               ref={register}
                                               className="flex bg-gray-200 h-8 w-full"
                                               type="date"
                                               placeholder="Finished at"
                                               value={props.document?.education[index].finished_at}/>
                                    </div>
                                </fieldset>
                            </div>
                        )
                    })}
                    <Button onClick={handleAddEducation}>Add education</Button>
                </div>

                <p className="text-l font-bold ml-4 mt-4">Address</p>
                <div className="mt-2 ml-6 w-1/2">
                    <fieldset className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10">
                        <AddressInputs document={props.document} onChange={handleAddressInput} register={register} errors={errors}/>
                    </fieldset>
                </div>
                <p className="text-l font-bold ml-4 mt-4">Work Experience</p>
                <div>
                    {inputFields.jobs.map((job, index) => {
                        return (
                            <div key={index} className="mt-2 ml-6 w-1/2">
                                <fieldset>
                                    <WorkPlaceInputs
                                        document={props.document}
                                        onChange={handleWorkPlaceInput}
                                        index={index}
                                        errors={errors}
                                        register={register}
                                        responsibilities={job.job_responsibilities}
                                        responsibilityHandler={(index) => handleAddJobResponsibility(index)}/>
                                </fieldset>
                            </div>
                        )
                    })}
                    <Button onClick={handleAddWorkplace}>Add workplace</Button>
                </div>
            </div>
        </form>
    )
}