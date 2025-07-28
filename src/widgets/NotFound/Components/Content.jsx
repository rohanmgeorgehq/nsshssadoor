import React from "react";
import Link from "next/link";

export default function Content() {
  return (
    <main className="min-h-[70vh] px-4 sm:px-6 lg:px-[5vw]  bg-white_shade flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        {/* Animated GIF */}
        <img
          src="/images/gifs/404.gif"
          alt="404 - Page Not Found"
          className="w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] max-w-[400px] h-auto"
        />

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-font-primary">
          Oops! Page not found.
        </h1>

        {/* Subtext */}
        <p className="text-font-secondary text-sm sm:text-base max-w-xl">
          The page you’re looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link href="/" passHref>
          <button
            className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-700 transition duration-300"
            aria-label="Go back to homepage"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
