import React from 'react'

const TrailerCard = ({ video, title, date }) => {
  return (
    <div className="relative w-[300px] my-4">
      <div className="w-[300px] h-[170px] rounded-lg">
        <iframe
          width="300"
          height="170"
          src={`${video}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 mt-[10px]">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white">{date}</p>
      </div>
    </div>
  )
}

export default TrailerCard
