import React from 'react'

const osCategories = [
  { name: 'Android', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.6 9.48c.16-.32.24-.68.24-1.08 0-1.44-1.16-2.6-2.6-2.6-.56 0-1.08.16-1.52.44-.44-.28-.96-.44-1.52-.44-1.44 0-2.6 1.16-2.6 2.6 0 .4.08.76.24 1.08C7.08 10.08 6 11.44 6 13.08V18c0 .56.44 1 1 1h10c.56 0 1-.44 1-1v-4.92c0-1.64-1.08-3-2.4-3.6zM9.2 7.4c.44 0 .8.36.8.8s-.36.8-.8.8-.8-.36-.8-.8.36-.8.8-.8zm5.6 0c.44 0 .8.36.8.8s-.36.8-.8.8-.8-.36-.8-.8.36-.8.8-.8z"/></svg> },
  { name: 'Windows', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4.5l9.5-1.3v8.3H2V4.5zm10.5-1.4L22 2.1v9.4h-9.5V3.1zm9.5 10.4v9.4l-9.5 1.3v-8.3H22zm-10.5 9.4L2 21.9v-9.4h9.5v8.3z"/></svg> },
  { name: 'macOS', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 2c-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.8-.9 2.8 1 .1 2.1-.5 2.7-1.2.6-.7 1.1-1.8.8-2.9zm-4.2 3.6c-1.5 0-3.2 1-4.2 2.7-1.8 3.1-.5 7.7 1.3 10.2.9 1.3 2 2.7 3.4 2.7 1.3 0 1.7-.8 3.2-.8 1.5 0 1.8.8 3.2.8 1.4 0 2.3-1.3 3.2-2.6.6-.9.8-1.3 1.3-2.3-3.4-1.3-3.9-6.2.7-7.2-.5-1.5-2-2.7-3.7-2.7-1.2 0-2.2.8-3.2.8-1 0-2.1-.8-3.2-.8z"/></svg> }
];

const MenuHeader = () => {
  return (
    <div className="bg-gray-900 text-white px-3 py-2 flex items-center border-b border-gray-800 min-h-[40px]">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        {/* Left side - OS Categories */}
        <div className="flex items-center gap-4">
          {osCategories.map((os, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors px-2 py-1 rounded-md"
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              <span className="flex items-center">{os.icon}</span>
              <span className="font-medium">{os.name}</span>
            </div>
          ))}
        </div>
        {/* Right side - Event Notification */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-2 h-2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm font-normal whitespace-nowrap">Không có sự kiện nào sắp diễn ra</span>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;