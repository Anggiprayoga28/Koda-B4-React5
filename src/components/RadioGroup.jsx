import React from 'react';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {string} props.label - Label untuk radio group
 * @param {string} props.name - Name attribute untuk radio buttons
 * @param {Object} props.register - Register function dari react-hook-form
 * @param {Array<string>} [props.options=[]] - Array opsi untuk radio buttons
 * @param {boolean} [props.required=false] - Flag untuk menandai field wajib diisi
 * @param {string} [props.error] - Error message dari validasi
 * @returns {JSX.Element} RadioGroup component
 */
const RadioGroup = ({ 
  label, 
  name, 
  register,
  options = [],
  required = false,
  error
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 p-6">
      <div className="text-base font-normal text-gray-800 mb-4 leading-relaxed">
        {label} {required && <span className="text-red-600">*</span>}
      </div>
      
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer py-2">
            <input
              type="radio"
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

export default RadioGroup;