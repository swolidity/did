"use client";

export default function Home() {
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
      </div>
    </div>
  );
}
