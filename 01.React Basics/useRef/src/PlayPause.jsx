import React, { useRef, useState } from "react";

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef();

  return (
    <div>
      <button>{isPlaying ? "Pause" : "Play"}</button>
      <video>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default PlayPause;
