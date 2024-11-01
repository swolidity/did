"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
interface Thing {
  id: number;
  thing: string;
}

export default function Home() {
  const [things, setThings] = useState([]);
  useEffect(() => {
    fetchThings();
  }, []);

  const fetchThings = async () => {
    try {
      const res = await fetch("/api/thing");
      const data = await res.json();
      setThings(data.things);
    } catch (error) {
      console.error(error);
    }
  };

  const submitThing = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const thing = formData.get("thing");

      await fetch("/api/thing", {
        method: "POST",
        body: JSON.stringify({ thing }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <form onSubmit={submitThing}>
          <input
            type="text"
            name="thing"
            placeholder="what did you do today?"
            className="input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="submit"
            value="submit"
            className="btn btn-primary max-w-xs"
          />
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Things Done:</h2>
          <ul className="list-disc pl-5">
            {things.map((thing: Thing, index: number) => (
              <li key={index} className="mb-2">
                <Link href={`/thing/${thing.id}`}>{thing.thing}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
