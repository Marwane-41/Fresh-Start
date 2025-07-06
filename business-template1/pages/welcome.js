import {useEffect,useState } from "react";
import { useRouter } from 'next/router'; // <-- Pages Router

export default function Welcome() {

    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000); // wait 3s then redirect
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (completed) {
      // Delay before redirect // for now no redirect
      setTimeout(() => {
      }, 1000);
    }
  }, [completed]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff7ec] text-[#4e342e]">

        <div className="animate-fade-in text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My BusinessName</h1>
        <p className="text-lg mb-6">Deliciously handmade. Fresh every morning.</p>
        </div>
    </div>

  );
  }
  