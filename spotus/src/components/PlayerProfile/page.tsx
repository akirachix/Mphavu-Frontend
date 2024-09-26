import Image from 'next/image';
import router from 'next/router';
import { FaTrophy } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { formatPlayerStats, PlayerStat } from '@/utils/playerProfile';

const PlayerProfile = () => {
  const [player, setPlayer] = useState<any>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerProfile = async () => {
      try {
        const response = await fetch('/api/PlayerProfile/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch player profile');
        }
        const data = await response.json();
        setPlayer(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!player) {
    return <div>No player found.</div>; 
  }

  const stats = formatPlayerStats(player.stats);

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 bg-white">
      <div className="mr-64 text-8xl">
        <button onClick={() => router.back()} className="text-black text-6xl">
          &#8592;
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mb-12">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src={player.imageUrl}
              alt="Player Image"
              width={160}
              height={160}
            />
            <FaTrophy className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded-full" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg md:text-xl font-semibold">{player.name}</h2>
            <p className="text-gray-600">{player.team}</p>
          </div>
        </div>

        <div className="relative w-64 h-40 mb-10">
          <Image
            src={player.videoThumbnailUrl}
            alt="Video Thumbnail"
            width={320}
            height={224}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl max-h-6xl">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-gray-600">{stat.label}</p>
            <div className="text-blue-500 text-3xl font-semibold">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerProfile;
