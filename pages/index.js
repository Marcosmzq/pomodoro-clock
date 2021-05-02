import Head from "next/head";
import PomodoroClock from "components/PomodoroClock";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pomodoro Clock</title>
      </Head>
      <div className="min-h-screen w-screen bg-gray-900 flex flex-col sm:flex-row justify-center items-center">
        <PomodoroClock />
      </div>
    </div>
  );
}
