import React, {FC} from 'react';
import {Button} from "react-bootstrap";
import {DocumentType} from "../../../../types/DocumentType";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    responsibilityHandler: (index: number) => void,
    index: number,
    document?: DocumentType,
    errors: any,
    register: any
    responsibilities: { responsibility: string }[]
}

export const WorkPlaceInputs: FC<Props> = ({onChange, document, index, errors, register, responsibilities, responsibilityHandler}) => {


    return (
        <div className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10 mb-10">
            <input
                onChange={onChange}
                name={`jobs[${index}].data.company_title`}
                ref={register({
                    required: {value: true, message: "This field is required"},
                    maxLength: {value: 255, message: "Maximum length is 255 characters"}
                })}
                className="ml-2 flex bg-gray-200 h-8 w-full"
                type="text"
                placeholder="Company"
                value={document?.jobs[index].company_title}/>
            {errors[`jobs[${index}].data.company_title`]?.message}

            <input
                onChange={onChange}
                name={`jobs[${index}].data.position`}
                ref={register({
                    required: {value: true, message: "This field is required"},
                    maxLength: {value: 255, message: "Maximum length is 255 characters"}
                })}
                className="flex bg-gray-200 h-8 w-full"
                type="text"
                placeholder="Position"
                value={document?.jobs[index].position}/>
            {errors[`jobs[${index}].data.position`]?.message}

            <input
                onChange={onChange}
                name={`jobs[${index}].data.description`}
                ref={register({
                    required: {value: true, message: "This field is required"},
                    maxLength: {value: 255, message: "Maximum length is 255 characters"}
                })}
                className="flex bg-gray-200 h-8 w-full"
                type="text"
                placeholder="Description"
                value={document?.jobs[index].description}/>
            {errors[`jobs[${index}].data.description`]?.message}

            <input
                onChange={onChange}
                name={`jobs[${index}].data.workload`}
                ref={register({
                    required: {value: true, message: "This field is required"}
                })}
                className="flex bg-gray-200 h-8 w-full"
                type="text"
                placeholder="Workload"
                value={document?.jobs[index].workload}/>
            {errors[`jobs[${index}].data.workload`]?.message}

            <input
                onChange={onChange}
                name={`jobs[${index}].data.started_at`}
                ref={register({
                    required: {value: true, message: "This field is required"}
                })}
                className="flex bg-gray-200 h-8 w-full"
                pattern="\d{4}-\d{2}-\d{2}"
                type="date"
                placeholder="Started at"
                value={document?.jobs[index].started_at}/>
            {errors[`jobs[${index}].data.started_at`]?.message}

            <input
                onChange={onChange}
                name={`jobs[${index}].data.ended_at`}
                ref={register}
                className="flex bg-gray-200 h-8 w-full"
                pattern="\d{4}-\d{2}-\d{2}"
                type="date"
                placeholder="Ended at"
                value={document?.jobs[index].ended_at}/>

            {responsibilities.map((responsibility, respIndex) => {
                return (
                    <input onChange={onChange}
                           name={`jobs[${index}].job_responsibilities[${respIndex}].responsibility`}
                           ref={register}
                           className="flex bg-gray-200 h-8 w-full"
                           type="text"
                           placeholder="Responsibility at work"
                           value={document?.jobs[index].job_responsibilities[respIndex].responsibility}/>
                )
            })}
            <Button onClick={() => responsibilityHandler(index)}>Add responsibility</Button>
        </div>
    )
}