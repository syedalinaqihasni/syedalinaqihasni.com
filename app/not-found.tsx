import Link from "next/link";

const PortfolioNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-6 text-center">
      <h1 className="text-[8rem] font-extrabold select-none">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Portfolio page not found.
      </h2>
      <p className="mb-8 max-w-md text-lg">
        The portfolio page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="flex space-x-6">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-40 transition font-medium"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default PortfolioNotFound;
