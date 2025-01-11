import React, { useState } from 'react';

const TabNavigation = ({ tabs , name , v }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <>
        {
            v==2 && 
            <div className="flex items-center gap-4 text-[25px] font-bold mt-4">
            <h2 className='text-white'>{name}</h2>
          <div className="flex rounded-full border-2 border-teal-500 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-bold rounded-full ${
                  activeTab === tab.id
                    ? " text-[#052442] bg-teal-500"
                    : "text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div> 
        }

        {
            v!=2 && <div className="flex items-center gap-4 text-[25px] font-bold mt-4">
            <h2 className=''>{name}</h2>
          <div className="flex rounded-full border-2 border-[#052442] ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-bold rounded-full ${
                  activeTab === tab.id
                    ? " text-teal-500 bg-[#052442]"
                    : "text-[#052442]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        }


    </>
    

  );
};

export default TabNavigation;
