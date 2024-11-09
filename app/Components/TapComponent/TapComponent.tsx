"use client";
import React, { useState } from "react";

interface TabsProps {
  tabs: { id: number; label: React.ReactNode; content: React.ReactNode }[];
}

const TapComponent: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <div className="w-full">
      <div className="ml-5 flex w-fit pt-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`md:text-[18px] font-semibold p-4 ${
              activeTab === tab.id
                ? "border-b-2 bg-white text-pumpkin-orange"
                : "hover:text-pumpkin-orange text-white bg-white/45"
            }
            ${tab.id === 1 ? "rounded-tl-xl " : ""}
            ${tab.id === tabs.length ? "rounded-tr-xl " : ""}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-5 pb-5">
        {tabs.map(
          (tab) => activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default TapComponent;
