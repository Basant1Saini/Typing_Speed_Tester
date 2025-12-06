import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TypingTest</Link>
        <div className="space-x-4">
          <Link to="/test" className="hover:text-blue-600">Test</Link>
          <Link to="/leaderboard" className="hover:text-blue-600">Leaderboard</Link>
          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/register" className="hover:text-blue-600">Register</Link>
        </div>
      </div>
    </nav>
  );
}
