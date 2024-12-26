import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const JavaRoadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
      </div>
    </div>
  );
};

export default JavaRoadmap; 