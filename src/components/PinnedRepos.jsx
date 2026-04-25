import React from 'react';

const PinnedRepos = () => {
  const repos = [
    { name: 'GitLearningD', lang: 'HTML', color: '#e34c26', desc: '', status: 'Public' },
    { name: 'capstone_1', lang: 'CSS', color: '#563d7c', desc: 'this is the Frontend Capstone Project using HTML and CSS', status: 'Public' },
    { name: 'Tic-tac-toe', lang: 'HTML', color: '#e34c26', desc: '', status: 'Public' },
    { name: 'TicTacToe_Python', lang: 'Python', color: '#3572A5', desc: '', status: 'Public' },
    { name: 'Santulan', lang: '', color: '', desc: '', status: 'Public archive' },
    { name: 'CalenderApp', lang: 'JavaScript', color: '#f1e05a', desc: '', status: 'Public' },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[16px] text-[#c9d1d9]">Pinned</h2>
        <span className="text-xs text-[#8b949e] hover:text-[#58a6ff] cursor-pointer">Customize your pins</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <div key={repo.name} className="border border-[#30363d] rounded-md p-4 bg-[#0d1117] flex flex-col justify-between hover:border-[#8b949e] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <svg className="fill-[#8b949e]" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <span className="text-[#58a6ff] font-semibold text-sm hover:underline cursor-pointer">{repo.name}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border border-[#30363d] text-[#8b949e] font-medium ${repo.status === 'Public archive' ? 'border-[#d29922] text-[#d29922]' : ''}`}>
                  {repo.status}
                </span>
              </div>
              {repo.desc && <p className="text-xs text-[#8b949e] mb-4">{repo.desc}</p>}
            </div>
            
            <div className="flex items-center text-xs text-[#8b949e] mt-auto">
              {repo.lang && (
                <div className="flex items-center mr-4">
                  <span className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: repo.color }}></span>
                  <span>{repo.lang}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinnedRepos;
