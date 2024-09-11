function TopArtist() {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl flex flex-col col-span-2 md:col-span-1 min-h-80">
      <h2 className="text-xl mb-4">Top Artist</h2>
      <div className="flex flex-col bg-[url('/zayn.webp')] bg-cover p-4 rounded-lg mb-4 w-full h-full">
        <div className="text-sm mb-2">Zayn</div>
        <div className="text-lg font-bold mb-4">Pillow Talk</div>
        <div className="flex -space-x-2 mt-auto">
          <div className="w-8 h-8 rounded-full bg-gray-500"></div>
          <div className="w-8 h-8 rounded-full bg-gray-600"></div>
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs">
            +12
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopArtist;
