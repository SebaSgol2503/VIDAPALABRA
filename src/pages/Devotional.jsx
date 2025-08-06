import React from 'react';
import { useParams } from 'wasp/client/router';
import { useQuery, useAction } from 'wasp/client/operations';
import { getDevotional, updateProgress } from 'wasp/client/operations';

const DevotionalPage = () => {
  const { day } = useParams();
  const { data: devotional, isLoading, error } = useQuery(getDevotional, { day });
  const updateProgressFn = useAction(updateProgress);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleComplete = () => {
    updateProgressFn({ day: parseInt(day), completed: true });
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      <h1 className="text-xl font-bold mb-4">Devotional for Day {day}</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Passage</h2>
        <p>{devotional.passage}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Story</h2>
        <p>{devotional.story}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Context</h2>
        <p>{devotional.context}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Spiritual Issues</h2>
        <p>{devotional.spiritualIssues}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Spiritual Solutions</h2>
        <p>{devotional.spiritualSolutions}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Guided Prayer</h2>
        <p>{devotional.guidedPrayer}</p>
      </div>
      <button
        onClick={handleComplete}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Mark as Completed
      </button>
    </div>
  );
}

export default DevotionalPage;
