import Table from "@/components/Pencil/Table";
import Layout from "@/components/Pencil/Layout";
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
          <span class="text-gray-500">Management</span>
        </li>
      </ol>
    </nav>
  );
};

export default function Management() {
  return (
    <Layout>
      <Breadcrumbs />
      <Table />
    </Layout>
  );
}
