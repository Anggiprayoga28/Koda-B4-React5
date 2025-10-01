import React from 'react';

/**
 * Komponen CheckboxGroup untuk menampilkan grup checkbox dengan react-hook-form
 * @component
 * @param {Object} props - Props komponen
 * @param {string} props.label - Label untuk checkbox group
 * @param {string} props.name - Name attribute untuk checkboxes
 * @param {Object} props.register - Register function dari react-hook-form
 * @param {Array<string>} [props.options=[]] - Array opsi untuk checkboxes
 * @param {string} [props.error] - Error message dari validasi
 * @returns {JSX.Element} CheckboxGroup component
 */
const CheckboxGroup = ({ 
  label, 
  name,
  register,
  options = [],
  error
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 p-6">
      <div className="text-base font-normal text-gray-800 mb-4 leading-relaxed">
        {label}
      </div>
      
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer py-2">
            <input
              type="checkbox"
              value={option}
              {...register(name)}
              className="mr-3 w-5 h-5 cursor-pointer accent-blue-600"
            />
            <span className="text-gray-800 text-sm">{option}</span>
          </label>
        ))}
      </div>
      
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default CheckboxGroup;