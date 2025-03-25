export function Header() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* <img
          src="/avatar.png" // replace with your image path
          alt="Mateus Fontoura"
          className="rounded-full w-16 h-16"
        />
        */}

      <h1 className="text-4xl font-bold tracking-tight">Lorem ipsum</h1>
      <h2 className="text-2xl font-bold text-muted-foreground max-w-xl">
        Lorem ipsum dolor sit amet.
        <br />
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet.
      </h2>

      <form className="flex w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-md border border-yellow-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-r-md hover:bg-yellow-400"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
