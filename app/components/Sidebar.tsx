import React, { useState } from "react";

export default function Sidebar() {
  // For demonstration, let's assume "Dashboard" is the selected option.
  // In a real app, you'd use router location or state.
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    {
      label: "React Dashboard",
      route: "/",
      icon: (
        <svg className="mr-3 flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      ),
    },
    {
      label: "Power BI Dashboard",
      route: "/all",
      icon: (
        <svg className="mr-3 flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v-1a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      label: "Users",
      icon: (
        <svg className="mr-3 flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
    },
    {
      label: "Settings",
      icon: (
        <svg className="mr-3 flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="sticky top-16 z-10 w-64 bg-white shadow-sm border-r border-gray-200 h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isSelected = selected === item.label;
            return (
              <a
                key={item.label}
                href={item.route}
                className={
                  (isSelected
                    ? "bg-purple-800 text-white "
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 ") +
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                }
                onClick={() => setSelected(item.label)}
              >
                {React.cloneElement(item.icon, {
                  className:
                    "mr-3 flex-shrink-0 h-6 w-6 " +
                    (isSelected
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-500"),
                })}
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}