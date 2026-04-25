import React from 'react';
import { Mail, Users, Smile } from 'lucide-react';

const ProfileSidebar = () => {
  return (
    <div className="flex flex-col space-y-4 pt-6">
      <div className="relative group">
        <img 
          src="/profileimage/profile.png" 
          alt="Aman kumar profile" 
          className="w-full aspect-square rounded-full border border-[#30363d] object-cover"
        />
        <div className="absolute bottom-10 right-2 bg-[#0d1117] border border-[#30363d] p-1.5 rounded-full cursor-pointer hover:text-[#58a6ff] transition-colors shadow-sm">
          <Smile size={18} className="text-[#8b949e]" />
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-[26px] font-bold text-[#c9d1d9] leading-tight">Aman kumar</h1>
        <p className="text-[20px] text-[#8b949e] font-light">Aman-kumar-git12</p>
      </div>

      <div className="mt-4">
        <p className="text-[14px] text-[#c9d1d9] leading-[1.5]">
          Detail-oriented Data Analyst skilled in transforming raw datasets into actionable insights through data cleaning, exploratory analysis, and interactive visual dashboards. Proficient in Python, SQL, Excel, Power BI, Tableau, and data storytelling to support data-driven decision-making.
        </p>
      </div>

      <button className="w-full bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] py-1.5 rounded-md text-sm font-semibold text-[#c9d1d9] transition-colors mt-4">
        Edit profile
      </button>

      <div className="flex items-center space-x-1 text-sm text-[#8b949e] mt-4">
        <Users size={16} />
        <span className="text-[#c9d1d9] font-bold ml-1">2</span>
        <span className="hover:text-[#58a6ff] cursor-pointer">followers</span>
        <span className="mx-1 text-[#c9d1d9]">·</span>
        <span className="text-[#c9d1d9] font-bold">1</span>
        <span className="hover:text-[#58a6ff] cursor-pointer">following</span>
      </div>

      <div className="flex items-center space-x-2 text-sm text-[#c9d1d9] hover:text-[#58a6ff] cursor-pointer mt-4 overflow-hidden group">
        <Mail size={16} className="text-[#8b949e] flex-shrink-0 group-hover:text-[#58a6ff]" />
        <span className="truncate">kumaraman73065@gmail.com</span>
      </div>

      <div className="mt-8 border-t border-[#30363d] pt-4">
        <h2 className="font-semibold text-sm mb-3 text-[#c9d1d9]">Achievements</h2>
        <div className="flex space-x-2">
            <div className="group relative">
                <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 32 32" className="fill-[#79c0ff]">
                        <path d="M16 2.667c-7.36 0-13.333 5.973-13.333 13.333s5.973 13.333 13.333 13.333 13.333-5.973 13.333-13.333-5.973-13.333-13.333-13.333zm0 24c-5.88 0-10.667-4.787-10.667-10.667s4.787-10.667 10.667-10.667 10.667 4.787 10.667 10.667-4.787 10.667-10.667 10.667zm-3.333-13.334l2 2 4.667-4.667 1.333 1.333-6 6-3.333-3.333 1.333-1.333z"></path>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
