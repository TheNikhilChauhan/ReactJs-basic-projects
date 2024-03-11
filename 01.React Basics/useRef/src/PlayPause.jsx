import { useRef, useState } from "react";

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef();

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        ref={ref}
        width="250"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default PlayPause;
