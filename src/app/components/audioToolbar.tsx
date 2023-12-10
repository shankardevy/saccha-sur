import { useState, useEffect } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

export default function AudioToolbar({ audioRef }) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1); // Volume range is from 0 to 1

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = volume;
    }
  }, [isMuted, volume, audioRef]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="audio-toolbar">
      <button onClick={toggleMute}>
        {isMuted ? 
          <SpeakerXMarkIcon className="h-6 w-6" /> : 
          <SpeakerWaveIcon className="h-6 w-6" />
        }
      </button>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volume} 
        onChange={handleVolumeChange} 
        disabled={isMuted}
      />
    </div>
  );
}
