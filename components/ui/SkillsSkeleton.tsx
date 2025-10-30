export function SkillsSkeleton() {
  return (
    <div className="py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-white/5 rounded-2xl animate-pulse">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="h-4 bg-gray-400 rounded w-32"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          
          <div className="h-12 bg-gray-400 rounded-lg mb-6 w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-400 rounded w-2/3 mx-auto"></div>
        </div>

        {/* Skills Grid Skeleton */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 animate-pulse">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="h-6 bg-gray-400 rounded w-1/3"></div>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {[...Array(3)].map((_, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-4 rounded-2xl bg-white/5">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-400 rounded-lg"></div>
                      <div className="h-5 bg-gray-400 rounded w-24"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, barIndex) => (
                          <div key={barIndex} className="w-2 h-6 bg-gray-400 rounded-full"></div>
                        ))}
                      </div>
                      <div className="h-4 bg-gray-400 rounded w-16"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}