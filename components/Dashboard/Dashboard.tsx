import RecentStreams from "./RecentStreams";
import { Revenue } from "./Revenue";
import TopArtist from "./TopArtist";
import TopSongs from "./TopSongs";
import { UsersGraph } from "./UsersGraph";
import SideNav from "../SideNav";

const mockData = {
  usersData: [
    { month: "January", totalUsers: 186, activeUsers: 100 },
    { month: "February", totalUsers: 225, activeUsers: 160 },
    { month: "March", totalUsers: 260, activeUsers: 120 },
    { month: "April", totalUsers: 350, activeUsers: 230 },
    { month: "May", totalUsers: 320, activeUsers: 234 },
    { month: "June", totalUsers: 400, activeUsers: 250 },
    { month: "July", totalUsers: 430, activeUsers: 300 },
  ],
  topSongsData: [
    { song: "Pillow Talk", streams: 3211 },
    { song: "Fein", streams: 2312 },
    { song: "No Face", streams: 2134 },
    { song: "SLIDE", streams: 2043 },
  ],

  songs: [
    {
      name: "Pillow Talk",
      dateStreamed: new Date(Date.now()),
      artist: "Zayn",
      streamCount: 3211,
      userId: "243",
    },
    {
      name: "Fein",
      dateStreamed: new Date(Date.now() - 100000),
      artist: "Travis Scott",
      streamCount: 2312,
      userId: "432",
    },
    {
      name: "No Face",
      dateStreamed: new Date(Date.now() - 200000),
      artist: "Drake",
      streamCount: 2134,
      userId: "123",
    },
    {
      name: "SLIDE",
      dateStreamed: new Date(Date.now() - 200000),
      artist: "Kanye West",
      streamCount: 2043,
      userId: "345",
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="lg:flex bg-black text-white min-h-screen font-sans">
      <SideNav />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <Revenue />
        <UsersGraph usersData={mockData.usersData} />
        <TopSongs topSongsData={mockData.topSongsData} />
        <TopArtist />
        <RecentStreams recentStreamData={mockData.songs} />
      </div>
    </div>
  );
}
