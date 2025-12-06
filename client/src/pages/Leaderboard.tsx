import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export default function Leaderboard() {
  const { data: leaderboard } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async () => {
      const { data } = await api.get('/tests/leaderboard');
      return data;
    }
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Rank</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">WPM</th>
              <th className="px-6 py-3 text-left">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard?.map((entry: any, index: number) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{entry.username}</td>
                <td className="px-6 py-4">{Math.round(entry.wpm)}</td>
                <td className="px-6 py-4">{Math.round(entry.accuracy)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
