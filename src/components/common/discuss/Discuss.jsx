const DiscussionCard = ({ title, posts, lastPost, lastPostTime, className = '' }) => {
    return (
      <div className={`relative overflow-hidden rounded-lg p-6 ${className}`}>
       
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-1/4 top-0 h-[200%] w-1/2 rotate-[30deg] transform bg-gradient-to-r from-white/20 to-transparent" />
        </div>
        
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-white">
              {posts.toLocaleString()}
            </span>
            <span className="text-sm text-white/70">posts</span>
          </div>
          <div className="mt-2">
            <div className="text-white/90">{lastPost}</div>
            <div className="text-sm text-white/70">last post {lastPostTime}</div>
          </div>
        </div>
      </div>
    );
  };
  
  const Discuss = () => {
    return (
      <div className="flex min-h-screen bg-[#042541]">
      
        <div className="fixed left-0 top-0 h-screen w-64 bg-[#042541] p-6 text-white border-r border-gray-800">
          <div className="mb-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-400">TM</span>
              <div className="mx-1 h-2 w-8 rounded-full bg-cyan-400"></div>
              <span className="text-2xl font-bold text-emerald-400">DB</span>
            </div>
          </div>
          
          <nav className="space-y-6">
            <a href="#" className="block text-gray-300 hover:text-white">
              ← Back to TMDB
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Your Account
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Keyboard Shortcuts
            </a>
          </nav>
        </div>
  
        {/* Main Content */}
        <main className="flex-1 ml-64 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Let's Chat</h1>
            
            <div className="space-y-4">
              <DiscussionCard
                title="Recent Movie Discussions"
                posts={18521}
                lastPost="Revenue"
                lastPostTime="about 16 hours ago"
                className="bg-emerald-800"
              />
  
              <DiscussionCard
                title="Recent TV Discussions"
                posts={20515}
                lastPost="Burn Michael burn"
                lastPostTime="about 5 hours ago"
                className="bg-cyan-900"
              />
  
              <DiscussionCard
                title="Recent Celebrity Discussions"
                posts={8245}
                lastPost="This soap star played ..."
                lastPostTime="3 days ago"
                className="bg-purple-900"
              />
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Discuss;
  
  