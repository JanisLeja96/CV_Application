import React, {FC} from 'react';
import {DocumentType} from "../../../../types/DocumentType";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    register: any,
    errors: any,
    document?: DocumentType
}

export const AddressInputs: FC<Props> = ({onChange, register, errors, document}) => {

    return (
        <>
            <input onChange={onChange}
                   name="country"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 18, message: "Maximum length is 18 characters"}
                   })}
                   className="ml-2 flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Country"
                   value={document?.address.country}/>
            {errors?.country?.message}

            <input onChange={onChange}
                   name="postal_code"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 7, message: "Maximum length is 7 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Postal code"
                   value={document?.address.postal_code}/>
            {errors?.postal_code?.message}

            <input onChange={onChange}
                   name="city"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 255, message: "Maximum length is 255 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="City"
                   value={document?.address.city}/>
            {errors?.city?.message}

            <input onChange={onChange}
                   name="street"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 255, message: "Maximum length is 255 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Street"
                   value={document?.address.street}/>
            {errors?.street?.message}

            <input onChange={onChange}
                   name="house_number"
                   ref={register({
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 255, message: "Maximum length is 255 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="House number"
                   value={document?.address.house_number}/>
            {errors?.house_number?.message}
        </>
    )
}