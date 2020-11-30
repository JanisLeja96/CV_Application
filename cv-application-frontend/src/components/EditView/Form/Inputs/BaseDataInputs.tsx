import React, {FC} from 'react';
import {DocumentType} from "../../../../types/DocumentType";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    register: any,
    errors: any
    document?: DocumentType

}

export const BaseDataInputs: FC<Props> = ({onChange, register, errors, document}) => {


    return (
        <>
            <input onChange={onChange}
                   name="first_name"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 18, message: "Maximum length is 18 characters"}
                   })}
                   className="ml-2 flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="First Name"
                   value={document?.base_data.first_name}/>
            {errors?.first_name?.message}

            <input onChange={onChange}
                   name="last_name"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 18, message: "Maximum length is 18 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Last Name"
                   value={document?.base_data.last_name}/>
            {errors?.last_name?.message}

            <input onChange={onChange}
                   name="phone_number"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 12, message: "Maximum length is 12 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   pattern="+371[0-9]{8}"
                   type="tel"
                   placeholder="Phone Number"
                   value={document?.base_data.phone_number}/>
            {errors?.phone_number?.message}

            <input onChange={onChange}
                   name="email"
                   ref={register({required: true, pattern: /^\S+@\S+$/i})}
                   className="flex bg-gray-200 h-8 w-full"
                   type="email"
                   placeholder="E-mail address"
                   value={document?.base_data.email}/>
            {errors.email && "Invalid email entered"}

            <textarea onChange={onChange}
                      name="summary"
                      ref={register({
                          required: {value: true, message: "This field is required"},
                          maxLength: {value: 255, message: "Maximum length is 255 characters"}
                      })}
                      className="flex bg-gray-200 w-full"
                      placeholder="Summary"
                      value={document?.base_data.summary}/>
            {errors?.summary?.message}
        </>

    )
}