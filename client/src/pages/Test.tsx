import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export default function Test() {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentText, setCurrentText] = useState('');

  const { data: texts } = useQuery({
    queryKey: ['texts'],
    queryFn: async () => {
      const { data } = await api.get('/tests/texts');
      return data;
    }
  });

  useEffect(() => {
    if (texts && texts.length > 0) {
      setCurrentText(texts[0].text);
    }
  }, [texts]);

  const handleStart = () => {
    setStartTime(Date.now());
    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!startTime) handleStart();
    setInput(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Typing Test</h2>
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <p className="text-xl">{currentText}</p>
      </div>
      <textarea
        value={input}
        onChange={handleChange}
        className="w-full h-32 p-4 border rounded"
        placeholder="Start typing..."
      />
    </div>
  );
}
