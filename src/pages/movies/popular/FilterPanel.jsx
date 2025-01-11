import { Button } from "@/components/ui/button";

export default function FilterPanel() {
  return (
    <div className="w-72 h-72 bg-white p-4 border-r min-h-screen">
      {/* Sort Section */}
      <div className="mb-4">
        <button className="w-full px-4 py-2 text-left border rounded-md flex justify-between items-center">
          <span>Sort</span>
          <span>›</span>
        </button>
      </div>

      {/* Where To Watch Section */}
      <div className="mb-4">
        <button className="w-full px-4 py-2 text-left border rounded-md flex justify-between items-center">
          <span>Where To Watch</span>
          <span className="text-gray-500">198</span>
        </button>
      </div>

      {/* Filters Section */}
      <div className="space-y-6">
        <h3 className="font-medium">Filters</h3>

        {/* Show Me Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Show Me</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="showMe" className="form-radio" defaultChecked />
              <span>Everything</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="showMe" className="form-radio" />
              <span>Movies I Haven't Seen</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="showMe" className="form-radio" />
              <span>Movies I Have Seen</span>
            </label>
          </div>
        </div>

        {/* Availabilities Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Availabilities</h4>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Search all availabilities?</span>
          </label>
        </div>

        {/* Release Date Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Release Date</h4>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Search all releases?</span>
          </label>
          <div className="space-y-2">
            <div>
              <label className="block text-sm mb-1">From</label>
              <input type="date" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm mb-1">To</label>
              <input type="date" className="w-full px-3 py-2 border rounded-md" />
            </div>
          </div>
        </div>

        {/* Genres Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Genres</h4>
          <div className="flex flex-wrap gap-2">
            {['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
              'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 
              'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'
            ].map((genre) => (
              <button
                key={genre}
                className="px-3 py-1 text-xs border rounded-full hover:bg-gray-100"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Certification</h4>
          <div className="flex flex-wrap gap-2">
            {['NR', 'G', 'PG', 'PG-13', 'R', 'NC-17'].map((cert) => (
              <button
                key={cert}
                className="px-3 py-1 text-xs border rounded-full hover:bg-gray-100"
              >
                {cert}
              </button>
            ))}
          </div>
        </div>

        {/* Language Section */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Language</h4>
          <select className="w-full px-3 py-2 border rounded-md bg-white">
            <option>None Selected</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        {/* Rating Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">User Score</h4>
            <input type="range" className="w-full" min="0" max="100" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Minimum User Votes</h4>
            <input type="range" className="w-full" min="0" max="100" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Runtime</h4>
            <input type="range" className="w-full" min="0" max="100" />
          </div>
          
          {/* Keywords Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Keywords</h4>
            <input 
              type="search" 
              placeholder="Filter by keywords..." 
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* Search Button */}
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

