import React, {FC} from 'react';

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    register: any,
    index: number
    errors: any
}

export const EducationInputs: FC<Props> = ({onChange, register, index, errors}) => {

    return (
        <div className="flex flex-grow flex-wrap space-x-2 space-y-2 mr-10">
            <input onChange={onChange}
                   name={`education[${index}].institution`}
                   ref={register({
                       name: `education[${index}].institution`,
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 18, message: "Maximum length is 18 characters"}
                   })}
                   className="ml-2 flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Institution"/>
            {errors[`education[${index}].institution`]?.message}

            <input onChange={onChange}
                   name={`education[${index}].faculty`}
                   ref={register({
                       name: `education[${index}].faculty`,
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 36, message: "Maximum length is 36 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Faculty"/>
            {errors[`education[${index}].faculty`]?.message}

            <input onChange={onChange}
                   name={`education[${index}].field_of_study`}
                   ref={register({
                       name: `education[${index}].field_of_study`,
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 36, message: "Maximum length is 36 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Field of Study"/>
            {errors[`education[${index}].field_of_study`]?.message}

            <input onChange={onChange}
                   name={`education[${index}].level_of_education`}
                   ref={register({
                       name: `education[${index}].level_of_education`,
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 36, message: "Maximum length is 36 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Education Level"/>
            {errors[`education[${index}].level_of_education`]?.message}

            <input onChange={onChange}
                   name={`education[${index}].status`}
                   ref={register({
                       name: `education[${index}].status`,
                       required: {value: true, message: "This field is required"},
                       maxLength: {value: 18, message: "Maximum length is 18 characters"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   type="text"
                   placeholder="Study status"/>
            {errors[`education[${index}].status`] && errors[`education[${index}].status`].message}

            <input onChange={onChange}
                   name={`education[${index}].started_at`}
                   ref={register({
                       name: `education[${index}].started_at`,
                       required: {value: true, message: "This field is required"}
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   pattern="\d{4}-\d{2}-\d{2}"
                   type="date"
                   placeholder="Started at"/>
            {errors[`education[${index}].started_at`] && errors[`education[${index}].started_at`].message}

            <input onChange={onChange}
                   name={`education[${index}].finished_at`}
                   ref={register({
                       name: `education[${index}].finished_at`
                   })}
                   className="flex bg-gray-200 h-8 w-full"
                   pattern="\d{4}-\d{2}-\d{2}"
                   type="date"
                   placeholder="Finished at"/>
        </div>
    )
}