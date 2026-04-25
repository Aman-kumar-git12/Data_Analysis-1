import React from 'react';
import { BookOpen, Package, Layout, Star, Boxes } from 'lucide-react';
import { useSnackbar } from '../context/SnackbarContext';

const SubNavbar = () => {
  const showSnackbar = useSnackbar();

  const tabs = [
    { name: 'Overview', icon: <BookOpen size={18} />, count: null, active: true },
    { name: 'Repositories', icon: <Boxes size={18} />, count: 36, active: false },
    { name: 'Projects', icon: <Layout size={18} />, count: null, active: false },
    { name: 'Packages', icon: <Package size={18} />, count: null, active: false },
    { name: 'Stars', icon: <Star size={18} />, count: 1, active: false },
  ];

  const handleTabClick = (name) => {
    if (name === 'Overview') {
        showSnackbar("You are already at Overview! 🏠");
        return;
    }

    const messages = [
        `Whoops! The ${name} tab is taking a nap. 😴`,
        `Searching for ${name}... still searching... 🕵️`,
        `${name}? That's way too technical for me. 🤖`,
        `You clicked ${name}! Now what? 🤡`,
        `Feature "${name}" is coming in the year 2099. 🚀`
    ];
    showSnackbar(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <nav className="bg-[#0d1117] border-b border-[#30363d] px-4 mt-4 overflow-x-auto">
      <div className="flex space-x-2 md:space-x-8 max-w-[1280px] mx-auto px-4 md:px-8">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`flex items-center space-x-2 py-3 px-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap group ${
              tab.active 
                ? 'border-[#f78166] text-[#c9d1d9]' 
                : 'border-transparent text-[#c9d1d9] hover:border-[#8b949e]'
            }`}
          >
            <span className={`${tab.active ? 'text-[#c9d1d9]' : 'text-[#8b949e]'} group-hover:text-[#c9d1d9]`}>{tab.icon}</span>
            <span className={`text-sm ${tab.active ? 'font-semibold' : ''}`}>{tab.name}</span>
            {tab.count !== null && (
              <span className="bg-[#6e7681] bg-opacity-20 px-2 py-0.5 rounded-full text-xs font-medium text-[#c9d1d9]">
                {tab.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SubNavbar;
