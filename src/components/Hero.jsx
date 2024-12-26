import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/personalized-roadmaps');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleStaticRoadmaps = () => {
    setIsModalOpen(false);
    navigate('/roadmaps');
  };

  const handlePersonalizedJourney = async () => {
    try {
      await signInWithGoogle();
      setIsModalOpen(false);
      navigate('/personalized-roadmaps');
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent py-2.5">
        Transform Your Career with AI-Optimized Roadmaps
      </h2>
      <p className="text-base sm:text-lg text-gray-50 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
        Climb.ai Provides AI-powered roadmaps, personalized learning paths,
        and real-time guidance to help you achieve your career goals.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-600 text-white py-3 px-6 text-lg rounded hover:bg-blue-700 transition-colors mt-10 inline-flex items-center gap-2"
        aria-label={user ? "Continue your journey" : "Get started for free"}
      >
        {user ? "Continue Your Journey" : "Get Started for Free"}
        {user && <ArrowRight className="w-5 h-5" />}
      </button>

      {!user && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Choose Your Journey
            </h3>
            <div className="space-y-4">
              <button
                onClick={handleStaticRoadmaps}
                className="w-full bg-gray-700/50 backdrop-blur-sm text-white py-4 px-6 rounded-xl hover:bg-gray-600/50 transition-all duration-300 flex flex-col items-center space-y-2 border border-gray-600/50 hover:border-gray-500/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-semibold text-lg">Access Static Roadmaps</span>
                <span className="text-sm text-gray-300">
                  Explore pre-defined career paths and learning resources
                </span>
              </button>
              
              <button
                onClick={handlePersonalizedJourney}
                className="w-full bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white py-4 px-6 rounded-xl hover:from-cyan-500/80 hover:to-blue-500/80 transition-all duration-300 flex flex-col items-center space-y-2 border border-cyan-500/20 hover:border-cyan-400/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-semibold text-lg">Personalize Your Learning Journey</span>
                <span className="text-sm text-gray-100">
                  Sign in to get AI-powered personalized recommendations
                </span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Hero; 