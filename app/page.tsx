import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <input
          type="text"
          placeholder="what did you do today?"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
}
