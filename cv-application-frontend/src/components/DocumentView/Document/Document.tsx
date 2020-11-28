import React, {useState} from 'react';
import {DocumentType} from "../../../types/DocumentType";

type Props = {
    document: DocumentType
}

export const Document = (props: Props) => {
    const [document, setDocument] = useState<DocumentType>(props.document);
    console.log(document);
    const {first_name, last_name, phone_number, email, summary} = document.base_data;
    const {country, street, city, house_number, postal_code} = document.address;


    return (
        <table className="w-11/12 mr-4 ml-4">
            <tr>
                <td className="w-1/4">

                </td>
                <td>
                    <div className="flex justify-center w-full mt-12">
                        <span className="text-6xl pr-32">{first_name} {last_name}</span>
                    </div>
                    <div className="space-x-4 mt-2 mb-2 text-sm">
                        <span>{email}</span>
                        <span className="h-4 border-l-2 border-black"></span>
                        <span>{phone_number}</span>
                        <span className="h-4 border-l-2 border-black"></span>
                        <span>{`${country}, ${city}, ${street}-${house_number}, ${postal_code}`}</span>
                    </div>
                </td>
            </tr>
            {summary && (
                <tr className="border-t-2 border-gray-300">
                    <td className="w-1/4 py-12">
                        <span className="mt-12 ml-8 text-xl">Summary</span>
                    </td>
                    <td>
                        <span className="align-middle mt-12">{document.base_data.summary}</span>
                    </td>
                </tr>
            )}
            <tr className="border-t-2 border-gray-300">
                <td className="w-1/4 py-24">
                    <span className="mt-12 text-xl">Work experience</span>
                </td>
                <td className="space-y-4">
                    {document.jobs.map((job) => {
                        return (
                            <div>
                                <span className="text-xl font-bold">{job.company_title}</span>
                                <span>{`, ${job.position} - ${job.workload}`}</span><br/>
                                <span>{job.description}</span>
                                <ul className="list-disc ml-4 text-sm">
                                    <span>Responsibilities:</span>
                                    {job.job_responsibilities.map((responsibility) => {
                                        return (
                                            <li className="ml-4">{responsibility.responsibility}</li>
                                        )
                                    })}
                                    <span>Achievements:</span>
                                    {job.job_achievements.map((achievement) => {
                                        return (
                                            <li className="ml-4">{achievement.achievement}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                </td>
            </tr>
            <tr className="border-t-2 border-gray-300">
                <td className="w-1/4 py-12">
                    <span className="mt-12 ml-8 text-xl">Education</span>
                </td>
                <td>
                    {document.education.map((education) => {
                        return (
                            <div>
                                <span className="text-lg font-bold">{education.level_of_education}: </span>
                                <span> {education.field_of_study}</span><br/>
                                <span>{education.institution}, {education.faculty}</span><br/>
                                <span>2015-2018</span>
                            </div>
                        )
                    })}

                </td>
            </tr>
        </table>
    )
}
