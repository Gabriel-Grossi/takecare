import { AppointmentList } from "@/components/internal-sections/Appointment";
import { Header } from "@/components/internal-sections/Header";
import { Sidebar } from "@/components/internal-sections/Sidebar";

export default function Appointments() {
    return (
        <main className="grid grid-cols-5 w-full">
            <Sidebar />
            <section className="grid grid-cols-4 col-span-4 p-6 gap-y-2">
                <Header title="My appointments" />
                <section className="flex flex-col col-span-4 gap-y-4">
                    <AppointmentList />
                </section>
            </section>
        </main>
    )
}