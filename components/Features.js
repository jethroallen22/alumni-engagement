import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Navigate Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <li>
            <Link href={`Listy`}>
              <h3 className="text-xl font-bold">Listy</h3>
            </Link>
            <p>Students Database Management</p>
          </li>
          <li>
            <Link href={`Parachute`}>
              <h3 className="text-xl font-bold">Parachute</h3>
            </Link>
            <p>Your resume online</p>
          </li>
          <li>
            <Link href={`Pencil`}>
              <h3 className="text-xl font-bold">Pencil</h3>
            </Link>
            <p>Events management</p>
          </li>
          {/* Add more feature items as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Features;
