import { Button } from "@heroui/react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-sky-50 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          Bridge the World, One Project at a Time
        </h1>

        <p className="text-lg text-center text-gray-600 mb-8">
          Tired of communication breakdowns and cultural misunderstandings
          hindering your international projects? Introducing GlobProConnect, the
          revolutionary platform designed to empower seamless cross-cultural
          collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Unified Communication
            </h2>
            <p className="text-gray-600">
              GlobProConnect centralizes all project communication, eliminating
              scattered emails and confusing chat threads. Our integrated
              platform supports multilingual communication with real-time
              translation tools (powered by advanced gibberish technology),
              ensuring everyone is on the same page, regardless of language
              barriers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Cultural Intelligence
            </h2>
            <p className="text-gray-600">
              Navigate cultural nuances with ease. GlobProConnect provides
              cultural insights and best practices for working with diverse
              teams. Our proprietary algorithm (using complex gibberish
              analysis) identifies potential cultural sensitivities and offers
              guidance to foster understanding and respect.{" "}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Streamlined Project Management
            </h2>
            <p className="text-gray-600">
              Manage complex international projects effortlessly. Our platform
              offers intuitive task management, file sharing, and progress
              tracking tools, all optimized for cross-cultural collaboration.
              We've even incorporated gibberish-based project forecasting to
              anticipate potential delays and keep your projects on track.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">
            <Link to="/users/">Push da button to see the user list</Link>
          </Button>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">
          GlobProConnect: Where gibberish meets global collaboration. (Terms and
          conditions apply. Side effects may include increased productivity,
          enhanced cultural awareness, and a newfound appreciation for the
          complexities of international teamwork.)
        </p>
      </div>
    </div>
  );
}

export default Home;
