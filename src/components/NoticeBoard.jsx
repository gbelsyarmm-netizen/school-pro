import React from 'react';
import { Bell, Calendar, Megaphone } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { id: 1, text: "Admission Open for Session 2026-27. Limited seats available!", type: "New" },
    { id: 2, text: "Annual Sports Day will be held on February 15th, 2026.", type: "Events" },
    { id: 3, text: "Result Announcement: Class 5th and 8th annual results are out.", type: "Results" },
    { id: 4, text: "Holiday Notice: School will remain closed on 5th Feb (Kashmir Day).", type: "Holiday" },
  ];

  return (
    <div className="bg-blue-600 py-3 text-white">
      <div className="container mx-auto px-6 flex items-center gap-4">
        <div className="flex items-center gap-2 font-bold whitespace-nowrap bg-blue-700 px-4 py-1 rounded-full text-sm">
          <Megaphone className="w-4 h-4" />
          LATEST NEWS
        </div>
        <div className="marquee-container flex-grow">
          <div className="marquee-content inline-flex gap-20">
            {notices.map((notice) => (
              <span key={notice.id} className="flex items-center gap-2 group cursor-pointer hover:text-blue-200">
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded font-bold uppercase">{notice.type}</span>
                <span className="font-medium">{notice.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
