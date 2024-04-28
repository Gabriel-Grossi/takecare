interface AppointmentListProps {
    id: number,
    doctor: string,
    dateTime: string
}

const appointmentList = [
    {
        "id": 1,
        "doctor": "Marie Doe",
        "dateTime": "2024-01-28T17:00:00"
    },
    {
        "id": 2,
        "doctor": "Marie Doe",
        "dateTime": "2024-02-27T18:30:00"
    },
    {
        "id": 3,
        "doctor": "Marie Doe",
        "dateTime": "2024-03-25T17:30:00"
    },
    {
        "id": 4,
        "doctor": "Marie Doe",
        "dateTime": "2024-04-22T17:15:00"
    },
    {
        "id": 5,
        "doctor": "Marie Doe",
        "dateTime": "2024-05-21T16:00:00"
    },
    {
        "id": 6,
        "doctor": "Marie Doe",
        "dateTime": "2024-06-26T17:30:00"
    },
]

export function AppointmentList() {
    return (
        <>
            <h3>Upcoming</h3>
            <section className="grid grid-cols-4 col-span-4 gap-2">
                {
                    appointmentList
                        .filter((info: AppointmentListProps) => { return Math.round((new Date(info.dateTime).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) >= 1 })
                        .map((info: AppointmentListProps) => {
                            return (
                                <div className="border border-purple-200 rounded h-max p-4 flex flex-col" key={info.id}>
                                    <h4 className="font-medium py-2">{info.doctor}</h4>
                                    <small>Date: {new Date(info.dateTime).toLocaleDateString()}</small>
                                    <small>Time: {new Date(info.dateTime).toLocaleTimeString()}</small>
                                </div>
                            )
                        })
                }
            </section>
            <h3>Past</h3>
            <section className="grid grid-cols-4 col-span-4 gap-x-2">
                {
                    appointmentList
                        .filter((info: AppointmentListProps) => { return Math.round((new Date(info.dateTime).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 1 })
                        .map((info: AppointmentListProps) => {
                            return (
                                <div className="border h-max p-4 flex flex-col" key={info.id}>
                                    <h4 className="font-medium py-2">{info.doctor}</h4>
                                    <small>Date: {new Date(info.dateTime).toLocaleDateString()}</small>
                                    <small>Time: {new Date(info.dateTime).toLocaleTimeString()}</small>
                                </div>
                            )
                        })
                }
            </section>
        </>
    )
}