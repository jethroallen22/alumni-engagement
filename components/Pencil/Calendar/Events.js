import React from 'react';

const events = [
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
  ];

const EventCard = ({ event }) => {
  return (
    <div className="p-4 mb-4">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-500 mb-2">{event.description}</p>
    </div>
  );
};

const Calendar = ({ year, month }) => {
  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate an array of dates for the month
  const dates = [...Array(daysInMonth).keys()].map((day) => day + 1);

  return (
    <div className="grid grid-cols-7 gap-4">
      {dates.map((date) => (
        <div key={date} className="border p-4">
          <h3 className="text-lg font-semibold">{date}</h3>
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            if (
              eventDate.getFullYear() === year &&
              eventDate.getMonth() === month &&
              eventDate.getDate() === date
            ) {
              return <EventCard key={index} event={event} />;
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default function Events(){
  const year = 2023;
  const month = 6; // July is 0-indexed

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Events for July 2023</h1>
      <Calendar year={year} month={month} />
    </div>
  );
};
