import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 animate-fadeIn select-none">
      <div className="text-center">
        <p className="font-bold header-span text-5xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <div className="article-button">Go back home</div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NoMatch;
