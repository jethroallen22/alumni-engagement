import { useRouter } from "next/router";
import Layout from "@/components/Pencil/Layout";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Music Festival",
    image:
      "https://img.jakpost.net/c/2022/01/21/2022_01_21_121655_1642742391._large.jpg",
    description:
      "Join us for a weekend of music, food, and fun at the annual Music Festival in Central Park, New York City. Experience performances from top artists across various genres, indulge in delicious food from local vendors, and participate in engaging activities. Whether you're a music enthusiast or simply looking to have a great time with friends and family, this event promises unforgettable memories.",
    date: "2023-08-18",
    location: "Central Park, New York City",
  },
  {
    id: 2,
    title: "Art Exhibition",
    image:
      "https://gallery.jacksonsart.com/app/uploads/2023/02/Mall-Gallery-Main-Gallery-Exhibition-Hire.jpg",
    description:
      "Step into the world of creativity and imagination at the Art Exhibition held at the renowned Museum of Modern Art in Los Angeles. Discover extraordinary artworks by talented artists from around the world, ranging from paintings and sculptures to digital installations. Immerse yourself in the diverse expressions of art and get inspired by the thought-provoking pieces on display.",
    date: "2023-09-05",
    location: "Museum of Modern Art, Los Angeles",
  },
  {
    id: 3,
    title: "Charity Run",
    image:
      "https://www.westend61.de/images/0000927652pw/enthusiastic-runners-running-at-charity-run-in-park-CAIF20327.jpg",
    description:
      "Make a positive impact on the community by participating in the annual Charity Run at City Park, Chicago. Lace up your running shoes and join hundreds of like-minded individuals in supporting various charitable causes. Whether you're an experienced runner or a casual jogger, your participation will contribute to making a difference in the lives of those in need. Come together for a day of fitness, camaraderie, and philanthropy.",
    date: "2023-10-12",
    location: "City Park, Chicago",
  },
  {
    id: 4,
    title: "Tech Conference",
    image:
      "https://www.travelperk.com/wp-content/uploads/alexandre-pellaes-6vAjp0pscX0-unsplash-1-1.jpg",
    description:
      "Stay ahead in the fast-paced world of technology by attending the Tech Conference at the state-of-the-art Convention Center in San Francisco. Explore groundbreaking innovations, attend insightful keynote presentations, and engage in hands-on workshops led by industry experts. Whether you're a tech enthusiast, entrepreneur, or a business professional, this conference offers valuable insights and networking opportunities.",
    date: "2023-11-22",
    location: "Convention Center, San Francisco",
  },
  {
    id: 5,
    title: "Culinary Workshop",
    image:
      "https://cdn-fkicp.nitrocdn.com/ZvQiQIyacNYIuXwXzPreuCTfVWTjbkvc/assets/images/optimized/rev-3464bca/wp-content/uploads/2021/11/ateliers-1024x666.jpg",
    description:
      "Embark on a gastronomic journey at the Culinary Workshop held at the esteemed Cooking School in Miami. Learn the art of cooking from top chefs as they share their secrets and techniques to prepare mouthwatering dishes. From mastering classic recipes to exploring avant-garde culinary creations, this workshop is a must-attend for food enthusiasts and aspiring chefs alike.",
    date: "2023-12-07",
    location: "Cooking School, Miami",
  },
  {
    id: 6,
    title: "Film Festival",
    image:
      "https://www.rappler.com/tachyon/2023/04/Summer-MMFF-april-2-2023-30.jpg",
    description:
      "Celebrate the world of cinema at the highly anticipated Film Festival in Hollywood. Experience a diverse selection of compelling films from both established filmmakers and emerging talents. Immerse yourself in the magic of storytelling through the art of filmmaking and engage in Q&A sessions with directors and actors. This event is a treat for movie buffs and anyone passionate about the magic of the silver screen.",
    date: "2023-12-31",
    location: "Hollywood, Los Angeles",
  },
  {
    id: 7,
    title: "Science Exhibition",
    image:
      "https://news.miami.edu/_assets/images-stories/2020/06/frostembed480.jpg",
    description:
      "Unleash your curiosity and explore the wonders of science at the interactive Science Exhibition hosted at the Science Museum in Washington, D.C. Engage in hands-on experiments, witness awe-inspiring demonstrations, and learn about the latest scientific breakthroughs. From astronomy to robotics, this exhibition showcases the marvels of science in an engaging and accessible manner.",
    date: "2024-01-15",
    location: "Science Museum, Washington, D.C.",
  },
  {
    id: 8,
    title: "Fashion Show",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/c0d7daa/2147483647/strip/true/crop/4214x2809+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffe%2Fc7%2Fa6c2bee74d81a2395b396962dcc5%2Focr-l-sdcc-heruniverse-0721-016.jpg",
    description:
      "Experience the glitz and glamour of the fashion world at the Fashion Show held in Paris, the fashion capital of the world. Witness breathtaking runway displays featuring the latest couture collections from renowned designers and emerging talents. From haute couture to avant-garde designs, this event is a celebration of creativity, style, and the art of fashion.",
    date: "2024-02-08",
    location: "Paris, France",
  },
  {
    id: 9,
    title: "Wine Tasting Soirée",
    image:
      "https://one15marina.com/wp-content/uploads/2023/01/shutterstock_1036108990_low-res-scaled.jpg",
    description:
      "Indulge your senses in an exquisite Wine Tasting Soirée at a picturesque vineyard in Tuscany, Italy. Sample a delightful selection of fine wines, expertly paired with delectable cheeses and gourmet delicacies. Learn about the intricate art of winemaking from seasoned vintners and embrace the essence of the Italian wine culture amidst breathtaking vineyard landscapes.",
    date: "2024-03-21",
    location: "Tuscany, Italy",
  },
  {
    id: 10,
    title: "Adventure Retreat",
    image:
      "https://www.oasiswanaka.co.nz/wp-content/uploads/2020/04/Adventure-Retreat-Hiking-1024x683.jpg",
    description:
      "Escape the ordinary and embark on an unforgettable Adventure Retreat in the heart of the Amazon Rainforest. Immerse yourself in the beauty of nature and participate in thrilling activities such as zip-lining, jungle trekking, and wildlife spotting. This retreat offers a perfect blend of adrenaline-pumping experiences and serene moments of relaxation in a lush, untouched wilderness.",
    date: "2024-04-10",
    location: "Amazon Rainforest, Brazil",
  },
];
const EventDetail = () => {
  const router = useRouter();
  const { eventid } = router.query;

  console.log("events:", events); // Check the value of events array
  console.log("id:", eventid); // Check the value of the id

  const selectedEvent = events.find((event) => event.id === parseInt(eventid));

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li>
            <Link className="text-blue-500" href={`/Pencil`}>
              Pencil
            </Link>
          </li>
          <li className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li>
            <span class="text-gray-500">Event</span>
          </li>
        </ol>
      </nav>
    );
  };

  return (
    <Layout>
      <Breadcrumbs />
      <div className="px-6 py-4">
        <div className="text-3xl font-bold">{selectedEvent.title}</div>
      </div>
      <div className="max-w-full m-8">
        <div className="w-full">
          <img
            className="w-full"
            src={selectedEvent.image}
            alt={selectedEvent.title}
          />
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{selectedEvent.description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {selectedEvent.date}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {selectedEvent.location}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
