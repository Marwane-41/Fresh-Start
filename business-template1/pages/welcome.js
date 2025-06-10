import {useEffect,useState } from "react";
import { useRouter } from 'next/router'; // <-- Pages Router

export default function Welcome() {

    const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCompleted(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // speed of progress

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (completed) {
      // Delay before redirect
      setTimeout(() => {
        
      }, 1000);
    }
  }, [completed]);

    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-[80%] h-6 bg-gray-800 rounded-full overflow-hidden">
        {/* Loading Bar */}
        <div
          className="absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />

        {/* Clock Icon */}
        <div
          className={`absolute -top-3 transition-all duration-100 text-white text-2xl ${
            completed ? 'animate-bounce text-yellow-400' : ''
          }`}
          style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
        >
          🕒
        </div>
      </div>
    </div>
    );
  }
  