'use client'
export default function CircularProgress( { value } ) {
  const percentage = value
  const circumference = 2 * Math.PI * 45 
  const getProgressColor = (value) => {
    if (value > 50) return 'stroke-green-500'
    if (value < 75) return 'stroke-red-500'
    return 'stroke-emerald-500'
  }

  return (
    <div className="relative w-12 h-12 ">
      <svg className=" transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="stroke-muted"
          fill="black"
          strokeWidth="8"
          cx="50"
          cy="50"
          r="45"
        />
        <circle
          className={`${getProgressColor(percentage)} transition-all duration-300`}
          fill="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - (percentage / 100) * circumference}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <span className="text-white r font-bold">{percentage}%</span>
      </div>
    </div>
  )
}
