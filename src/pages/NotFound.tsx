
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-6 glass rounded-xl animate-fade-in">
        <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
          <span className="text-5xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 shadow-sm hover:shadow"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
