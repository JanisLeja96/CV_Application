export const InputTemplate = {
    document_name: '',
    base_data: {
        first_name: '',
        last_name: '',
        summary: '',
        phone_number: '',
        email: ''
    },
    address: {
        country: '',
        city: '',
        street: '',
        house_number: '',
        postal_code: ''
    },
    education: [
        {
            institution: '',
            faculty: '',
            field_of_study: '',
            level_of_education: '',
            status: '',
            started_at: '',
            finished_at: ''
        }
    ],
    jobs: [
        {
            data: {
                company_title: '',
                position: '',
                workload: '',
                started_at: '',
                ended_at: '',
                description: '',
            },
            job_responsibilities: [
                {
                    responsibility: ''
                }
            ],
            job_achievements: [
                {
                    achievement: ''
                }
            ]
        },

    ]

}