import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Typing Speed Tester</h1>
        <p className="text-xl mb-8">Test and improve your typing speed</p>
        <Link to="/test" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          Start Test
        </Link>
      </div>
    </div>
  );
}
