import { createSignal, onCleanup } from "solid-js";

function progressTimer(seconds: number) {
  const [loadingProgress, setLoadingProgress] = createSignal(0);
  
  let intervalId;
  
  const startTimer = () => {
    const startTime:number = Date.now(); // Get start time
    // const endTime:number = startTime + seconds * 1000; // Calculate end time
    
    // Clear existing interval to prevent multiple timers running
    if (intervalId) {
      clearInterval(intervalId);
    }
    
    intervalId = setInterval(() => {
      const currentTime:number = Date.now();
      const elapsedTime:number = currentTime - startTime;
      const progress: number = Math.round((elapsedTime / (seconds * 1000)) * 100);
      
      setLoadingProgress(progress);

      // When time is up, clear the interval and set progress to 100%
      if (progress >= 100) {
        setLoadingProgress(100); // Ensure it's exactly 100%
        clearInterval(intervalId);
      }
    }, 100); // Update progress every 100 ms for smoothness
  };

  onCleanup(() => {
    if (intervalId) {
      clearInterval(intervalId); // Clean up on component unmount
    }
  });

  startTimer();
  
  return loadingProgress; // Return the signal for use in your component
}

export default progressTimer;