import React from "react";

const VideoCard: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#e5e7eb', borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 12px #cfd8dc' }}>
    <img src="/video-placeholder.svg" alt="Video" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    <button
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255,255,255,0.9)',
        border: 'none',
        borderRadius: '50%',
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px #bdbdbd',
        cursor: 'pointer',
        padding: 0
      }}
      aria-label="Play Video"
    >
      <img src="/play-icon.svg" alt="Play" style={{ width: 36, height: 36 }} />
    </button>
  </div>
);

export default VideoCard; 