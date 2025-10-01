import React from 'react';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {boolean} [props.showEmail=true] - Flag untuk menampilkan/menyembunyikan section email
 * @returns {JSX.Element} Header component
 */
const Header = ({ showEmail = true }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <div className="bg-purple-700 h-3 w-full"></div>
      
      <div className="pt-8 px-6 pb-2">
        <h1 className="text-[32px] font-normal text-gray-800 mb-2">
          Form Survey Perokok
        </h1>
      </div>
      
      {showEmail && (
        <div className="px-6 pb-6 flex items-center gap-2 text-gray-600 text-sm">
          <span className="text-gray-800">anggiprayoga930@gmail.com</span>
          <a href="#" className="text-blue-600 ml-1">Ganti akun</a>
        </div>
      )}
    </div>
  );
};

export default Header;