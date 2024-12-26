import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <img 
              src={user.photoURL} 
              alt={user.displayName} 
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.displayName}</h1>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 