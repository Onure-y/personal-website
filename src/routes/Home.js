import React from "react";
import WelcomeContent from "../components/welcomeContent/WelcomeContent";
import RecentBlogs from "../components/recentBlogs/RecentBlogs";
import RecentSongs from "../components/recentSongs/RecentSongs";

function Home() {
  return (
    <div>
      <WelcomeContent />
      <RecentBlogs />
      <RecentSongs />
    </div>
  );
}

export default Home;
