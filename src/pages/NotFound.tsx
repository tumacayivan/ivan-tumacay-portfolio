import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/** Signal lost — nothing at these coordinates. */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep px-6">
      <div className="text-center max-w-lg">
        <p className="tele-label mb-6">Signal lost</p>
        <h1 className="plate text-[22vw] sm:text-9xl text-ice leading-none mb-6">404</h1>
        <p className="text-lg text-ice-dim mb-10">
          There is nothing at these coordinates. The mission continues back at the departure point.
        </p>
        <a href="/" className="btn-primary">
          <span>Return to departure</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
