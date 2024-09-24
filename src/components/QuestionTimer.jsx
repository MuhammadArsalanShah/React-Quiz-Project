import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Setting TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      console.log('Timeout CLEARED')
      clearTimeout(timer);
    }
  }, [timeout, onTimeout])

  useEffect(() => {
    console.log('Setting INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      console.log('Interval CLEARED')
      clearInterval(interval);
    }
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
