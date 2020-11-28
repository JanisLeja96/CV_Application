import React, {FC, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import './Form.css';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router";
import {toast} from "react-toastify";
import {InputTemplate} from "../../../assets/InputTemplate/InputTemplate";

type Props = {
    modalShown: boolean
    hideModal: () => void
}

export const Form: FC<Props> = (props) => {
    const {register, handleSubmit, watch} = useForm();
    const [inputFields, setInputFields] = useState({...InputTemplate});
    const history = useHistory();

    const onSubmit = () => {
        console.log(inputFields);
        axios.post('http://localhost:8000/api/documents', inputFields)
            .then(() => {
                history.push('/');
                toast('Changes saved');
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
        console.log(InputTemplate);
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

    const handleWorkPlaceInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newFields = {...inputFields};

        // @ts-ignore
        newFields.jobs[index].data[e.target.name] = e.target.value;
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
                        <input onChange={event => handleDocumentNameInput(event)} ref={register} name="document_name"
                               type="text"
                               placeholder="Enter file name..."></input>
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
                        <input onChange={event => handleBaseDataInput(event)} name="first_name" ref={register}
                               className="ml-2 flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="First Name"></input>
                        <input onChange={event => handleBaseDataInput(event)} name="last_name" ref={register}
                               className="flex bg-gray-200 h-8 w-full" type="text"
                               placeholder="Last Name"></input>
                        <input onChange={event => handleBaseDataInput(event)} name="phone_number" ref={register}
                               className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Phone Number"></input>
                        <input onChange={event => handleBaseDataInput(event)} name="email" ref={register}
                               className="flex bg-gray-200 h-8 w-full" type="text"
                               placeholder="E-mail address"></input>
                        <textarea onChange={event => handleBaseDataInput(event)} name="summary" ref={register}
                                  className="flex bg-gray-200 w-full"
                                  placeholder="Summary"></textarea>
                    </div>
                </fieldset>
                <p className="text-l font-bold ml-4 mt-4">Education</p>
                <fieldset className="mt-2 ml-6 w-1/2">
                    <div className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10">
                        <input name="institution" ref={register} className="ml-2 flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Institution"></input>
                        <input name="faculty" ref={register} className="flex bg-gray-200 h-8 w-full" type="text"
                               placeholder="Faculty"></input>
                        <input name="field_of_study" ref={register} className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Field of Study"></input>
                        <input name="education_level" ref={register} className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Education Level"></input>
                        <input name="study_status" ref={register} className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Study status"></input>
                        <input name="started_at" ref={register} className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Started at"></input>
                        <input name="finished_at" ref={register} className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Ended at"></input>
                    </div>
                </fieldset>
                <p className="text-l font-bold ml-4 mt-4">Address</p>
                <div className="mt-2 ml-6 w-1/2">
                    <fieldset className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10">
                        <input onChange={event => handleAddressInput(event)} name="country" ref={register}
                               className="ml-2 flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Country"></input>
                        <input onChange={event => handleAddressInput(event)} name="postal_code" ref={register}
                               className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="Postal code"></input>
                        <input onChange={event => handleAddressInput(event)} name="city" ref={register}
                               className="flex bg-gray-200 h-8 w-full" type="text"
                               placeholder="City"></input>
                        <input onChange={event => handleAddressInput(event)} name="street" ref={register}
                               className="flex bg-gray-200 h-8 w-full" type="text"
                               placeholder="Street"></input>
                        <input onChange={event => handleAddressInput(event)} name="house_number" ref={register}
                               className="flex bg-gray-200 h-8 w-full"
                               type="text" placeholder="House number"></input>
                    </fieldset>
                </div>
                <p className="text-l font-bold ml-4 mt-4">Work Experience</p>
                {inputFields.jobs.map((job, index) => {
                    return (
                        <div key={index} className="mt-2 ml-6 w-1/2">
                            <fieldset className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10 mb-10">
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleWorkPlaceInput(event, index)}
                                    name="company_title" ref={register} className="ml-2 flex bg-gray-200 h-8 w-full"
                                    type="text" placeholder="Company"></input>
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleWorkPlaceInput(event, index)}
                                    name="position" ref={register} className="flex bg-gray-200 h-8 w-full" type="text"
                                    placeholder="Position"></input>
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleWorkPlaceInput(event, index)}
                                    name="description" ref={register} className="flex bg-gray-200 h-8 w-full"
                                    type="text"
                                    placeholder="Description"></input>
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleWorkPlaceInput(event, index)}
                                    name="workload" ref={register} className="flex bg-gray-200 h-8 w-full" type="text"
                                    placeholder="Workload"></input>
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleWorkPlaceInput(event, index)}
                                    name="started_at" ref={register} className="flex bg-gray-200 h-8 w-full" type="text"
                                    placeholder="Started at"></input>
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleWorkPlaceInput(event, index)}
                                    name="ended_at" ref={register} className="flex bg-gray-200 h-8 w-full" type="text"
                                    placeholder="Ended at"></input>
                            </fieldset>
                        </div>
                    )
                })}
                <Button onClick={() => handleAddWorkplace()}>Add workplace</Button>
            </div>
        </form>
    )
}