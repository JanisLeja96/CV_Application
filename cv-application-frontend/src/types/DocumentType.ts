export type DocumentType = {
    id: number,
    document_name: string,
    created_at?: string,
    updated_at?: string,
    base_data: {
        id?: number,
        cv_id?: number,
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string,
        summary: string
    },
    education: [
        {
            id: number,
            cv_id: number,
            institution: string,
            faculty: string,
            field_of_study: string,
            level_of_education: string,
            status: string,
            started_at: string,
            finished_at?: string,
        }
    ],
    address: {
        id: number,
        cv_id: number
        country: string,
        postal_code: string,
        city: string,
        street: string,
        house_number: string,
    },
    jobs: [
        {
            id: number,
            cv_id: number,
            company_title: string,
            description: string,
            position: string,
            workload: string,
            started_at: string,
            ended_at?: string,
            job_info: [
                {
                    id: number,
                    job_id: number,
                    description: string,
                }
            ],
            job_responsibilities: [
                {
                    id: number,
                    job_id: number,
                    responsibility: string
                }
            ],
            job_achievements: [
                {
                    id: number,
                    job_id: number,
                    achievement: string
                }
            ]
        }
    ]
}