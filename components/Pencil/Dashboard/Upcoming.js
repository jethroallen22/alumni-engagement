import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={event.image} alt={event.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.title}</div>
        <p className="text-gray-700 text-base">{event.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {event.date}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {event.location}
        </span>
      </div>
    </div>
  );
};

const events = [
  {
    title: 'Event 1',
    description: 'Description for Event 1',
    date: 'July 20, 2023',
    location: 'Location 1',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 2',
    description: 'Description for Event 2',
    date: 'July 25, 2023',
    location: 'Location 2',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 3',
    description: 'Description for Event 3',
    date: 'July 30, 2023',
    location: 'Location 3',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 4',
    description: 'Description for Event 4',
    date: 'August 1, 2023',
    location: 'Location 4',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 5',
    description: 'Description for Event 5',
    date: 'August 5, 2023',
    location: 'Location 5',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 6',
    description: 'Description for Event 5',
    date: 'August 10, 2023',
    location: 'Location 6',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 7',
    description: 'Description for Event 5',
    date: 'August 15, 2023',
    location: 'Location 7',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Event 8',
    description: 'Description for Event 5',
    date: 'August 25, 2023',
    location: 'Location 8',
    image: 'https://via.placeholder.com/300',
  },
];

export default function UpcomingEvents() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="flex flex-wrap">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};
