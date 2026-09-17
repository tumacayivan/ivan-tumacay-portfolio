import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-6">
      <div className="text-center max-w-md">
        <div className="slug mb-4">No such record</div>
        <h1 className="display text-[28vw] sm:text-[12rem] leading-none text-ink">404</h1>
        <p className="font-doc text-sm uppercase tracking-[0.18em] text-ink-dim mt-4 mb-8">
          This page is not in the file.
        </p>
        <a href="/" className="btn-primary">
          <span>Back to the record</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
