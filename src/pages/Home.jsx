import React from 'react';
import { useQuery } from 'wasp/client/operations';
import { getUserProgress } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';

const HomePage = () => {
  const { data: progress, isLoading, error } = useQuery(getUserProgress);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to Vida en la Palabra</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Your Progress</h2>
        <ul className="list-disc pl-5">
          {progress.map((item) => (
            <li key={item.day} className="text-gray-700 dark:text-gray-300">
              Day {item.day}: {item.completed ? 'Completed' : 'Not completed'}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Access Your Daily Devotionals</h2>
        <p className="text-gray-600 dark:text-gray-400">Start each day with meaningful spiritual insights and reflections.</p>
        <Link to="/devotional/today" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Today's Devotional
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
