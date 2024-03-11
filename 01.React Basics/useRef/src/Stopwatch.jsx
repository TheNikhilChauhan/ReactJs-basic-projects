import { useRef, useState } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  //   claculate time passed in seconds
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
      <h2>now: {now}</h2>
      <h2>startTime: {startTime}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default Stopwatch;
