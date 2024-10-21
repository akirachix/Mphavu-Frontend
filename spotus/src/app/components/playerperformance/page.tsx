import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useVideoData,usePerformanceData } from '@/app/hooks/usePerformance';
import Link from 'next/link';
const Stat = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-16 h-16">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#eee"
          strokeWidth="2"
        />
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray={`${value}, ${max}`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
        {value}%
      </div>
    </div>
    <div className="mt-2 text-sm text-gray-600">{label}</div>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
    <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
    <span className="sr-only">Error</span>
    <div>
      <span className="font-medium">Error:</span> {message}
    </div>
  </div>
);

const PlayerPerformanceDashboard = ({ videoId }: { videoId: number }) => {
  const { data: videoData, loading: videoLoading, error: videoError } = useVideoData(videoId);
  const { data: performanceData, loading: perfLoading, error: perfError } = usePerformanceData();

  if (videoLoading || perfLoading) return <div>Loading...</div>;

  if (videoError || perfError) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        {videoError && <ErrorMessage message={videoError.message} />}
        {perfError && <ErrorMessage message={perfError.message} />}
      </div>
    );
  }

  const playerData = videoData?.player || {};
  const stats = performanceData || {};

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center mb-4">
<Link href='components/statisticsform/'>
        <ArrowLeft className="mr-2" />
        </Link>
        <div className="flex items-center">
          <img src={playerData.imageUrl || "/api/placeholder/100/100"} alt={playerData.name} className="w-12 h-12 rounded-full mr-2" />
          <div>
            <h2 className="text-lg font-semibold">{playerData.name}</h2>
            <p className="text-sm text-gray-600">{playerData.position}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Shooting Accuracy" value={stats.shootingAccuracy} />
        <Stat label="Shooting Angle" value={stats.shootingAngle} />
        <Stat label="Assists" value={stats.assists} />
        <Stat label="Ball Control" value={stats.ballControl} />
        <Stat label="Defense" value={stats.defense} />
        <Stat label="Scores" value={stats.scores} />
        <Stat label="Action Completion" value={stats.actionCompletion} />
        <Stat label="Passing game" value={stats.passingGame} />
      </div>
    </div>
  );
};

export default PlayerPerformanceDashboard;