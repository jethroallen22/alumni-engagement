import { useState } from 'react';
import Layout from '@/components/Pencil/Layout';
import Dashboard from "./Dashboard";
import Link from "next/link";


const Breadcrumbs = () => {
    return (
        <nav class="text-sm mb-10">
        <ol class="list-reset flex">
            <li>
                <Link className="text-blue-500" href={`/`}>
                Home
                </Link>
            </li>
            <li className="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </li>
            <li><span class="text-gray-500">Pencil</span></li>
        </ol>
        </nav>
    );
};

export default function Pencil() {

    const [events, setEvents] = useState([
        {
          title: 'Event 1',
          description: 'Description for Event 1',
          date: 'July 20, 2023',
          location: 'Location 1'
        },
        {
          title: 'Event 2',
          description: 'Description for Event 2',
          date: 'July 25, 2023',
          location: 'Location 2'
        },
        {
          title: 'Event 3',
          description: 'Description for Event 3',
          date: 'July 30, 2023',
          location: 'Location 3'
        },
        {
          title: 'Event 4',
          description: 'Description for Event 4',
          date: 'August 1, 2023',
          location: 'Location 4'
        },
        {
          title: 'Event 5',
          description: 'Description for Event 5',
          date: 'August 5, 2023',
          location: 'Location 5'
        },
        {
          title: 'Event 6',
          description: 'Description for Event 5',
          date: 'August 10, 2023',
          location: 'Location 6'
        },
        {
          title: 'Event 7',
          description: 'Description for Event 5',
          date: 'August 15, 2023',
          location: 'Location 7'
        },
        {
          title: 'Event 8',
          description: 'Description for Event 5',
          date: 'August 25, 2023',
          location: 'Location 8'
        },
    ]);

    const updateEvents = (data) => {
        setEvents(data)
    }

    return (
        <Layout events={events} updateEvents={updateEvents}>
        <Breadcrumbs />
        <Dashboard />
        </Layout>
    )
}