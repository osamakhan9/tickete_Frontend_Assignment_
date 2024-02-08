import { useState, useEffect } from "react";

export const useGetTmer = (timerLimit?: number, resetTimer?: boolean) => {
  const localStorageKey = "visitTimestamp";
  const visitTimeout = timerLimit ?? 30 * 60 * 1000;
  const [remainingTime, setRemainingTime] = useState(visitTimeout);

  useEffect(() => {
    const lastVisitTimestamp = localStorage.getItem(localStorageKey);
    const currentTime = new Date().getTime();

    if (!lastVisitTimestamp) {
      localStorage.setItem(localStorageKey, currentTime.toString());
    } else {
      const timeElapsed = currentTime - parseInt(lastVisitTimestamp, 10);
      const newRemainingTime = Math.max(visitTimeout - timeElapsed, 0);
      setRemainingTime(newRemainingTime);
    }

    if (resetTimer) {
      localStorage.setItem(localStorageKey, currentTime.toString());
      setRemainingTime(visitTimeout);
    }

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1000, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(remainingTime / 60000);
  const sec = Math.floor((remainingTime % 60000) / 1000);
  const seconds = sec < 10 ? `0${sec}` : sec.toString();

  return { minutes, seconds };
};
