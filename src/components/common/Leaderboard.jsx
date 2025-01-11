export default function Leaderboard() {
    const users = [
      {
        name: "Shei",
        avatar: "/placeholder.svg?height=40&width=40",
        allTimeEdits: 1432706,
        weeklyEdits: 17013,
      },
      {
        name: "Samara",
        avatar: "/placeholder.svg?height=40&width=40",
        allTimeEdits: 4034352,
        weeklyEdits: 13320,
      },
      {
        name: "Newborn",
        avatar: "/placeholder.svg?height=40&width=40",
        allTimeEdits: 55867,
        weeklyEdits: 7982,
      },
      {
        name: "gabijuzas222",
        letter: "G",
        allTimeEdits: 61096,
        weeklyEdits: 5013,
      },
      {
        name: "CXC6000",
        letter: "C",
        allTimeEdits: 190522,
        weeklyEdits: 3586,
      },
      {
        name: "jedi.jesse",
        avatar: "/placeholder.svg?height=40&width=40",
        allTimeEdits: 286725,
        weeklyEdits: 15532,
      },
      {
        name: "CeRu",
        avatar: "/placeholder.svg?height=40&width=40",
        allTimeEdits: 66020,
        weeklyEdits: 11368,
      },
      {
        name: "DJonesT",
        letter: "D",
        allTimeEdits: 6150,
        weeklyEdits: 6150,
      },
      {
        name: "talestalker",
        avatar: "/placeholder.svg?height=40&width=40",
        allTimeEdits: 1234423,
        weeklyEdits: 4090,
      },
      {
        name: "seventhgear45",
        letter: "S",
        allTimeEdits: 49599,
        weeklyEdits: 3576,
      },
    ]
  
    const maxAllTimeEdits = Math.max(...users.map(user => user.allTimeEdits))
    const maxWeeklyEdits = Math.max(...users.map(user => user.weeklyEdits))
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>All Time Edits</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              <span>Edits This Week</span>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {users.map((user) => (
            <div 
              key={user.name}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white
                  ${user.letter === 'G' ? 'bg-gray-500' : ''}
                  ${user.letter === 'C' ? 'bg-rose-500' : ''}
                  ${user.letter === 'D' ? 'bg-amber-500' : ''}
                  ${user.letter === 'S' ? 'bg-rose-500' : ''}
                `}>
                  {user.letter}
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium group-hover:text-emerald-500 transition-colors">
                    {user.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {user.allTimeEdits.toLocaleString()}
                  </span>
                </div>
                
                <div className="relative h-2 mb-1">
                  <div 
                    className="absolute inset-0 bg-emerald-100 rounded-full"
                    style={{
                      width: `${(user.allTimeEdits / maxAllTimeEdits) * 100}%`
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-pink-100 rounded-full"
                    style={{
                      width: `${(user.weeklyEdits / maxWeeklyEdits) * 100}%`
                    }}
                  />
                </div>
                
                <div className="text-right">
                  <span className="text-sm text-gray-600">
                    {user.weeklyEdits.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  