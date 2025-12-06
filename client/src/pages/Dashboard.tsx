import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export default function Dashboard() {
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const { data } = await api.get('/users/stats');
      return data;
    }
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Total Tests</h3>
          <p className="text-3xl font-bold">{stats?.totalTests || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Avg WPM</h3>
          <p className="text-3xl font-bold">{Math.round(stats?.avgWpm || 0)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Avg Accuracy</h3>
          <p className="text-3xl font-bold">{Math.round(stats?.avgAccuracy || 0)}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600">Best WPM</h3>
          <p className="text-3xl font-bold">{stats?.bestWpm || 0}</p>
        </div>
      </div>
    </div>
  );
}
