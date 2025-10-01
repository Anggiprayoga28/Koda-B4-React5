import React from 'react';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {string} props.label - Label untuk input field
 * @param {string} props.name - Name attribute untuk input
 * @param {Object} props.register - Register function dari react-hook-form
 * @param {string} [props.type="text"] - Type input (text/number)
 * @param {string} [props.placeholder="Jawaban Anda"] - Placeholder text
 * @param {boolean} [props.required=false] - Flag untuk menandai field wajib diisi
 * @param {string} [props.error] - Error message dari validasi
 * @param {number} [props.min] - Nilai minimum untuk input type number
 * @param {number} [props.max] - Nilai maximum untuk input type number
 * @returns {JSX.Element} TextInput component
 */
const TextInput = ({ 
  label, 
  name, 
  register,
  type = "text",
  placeholder = "Jawaban Anda",
  required = false,
  error,
  min,
  max
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 p-6">
      <div className="text-base font-normal text-gray-800 mb-4 leading-relaxed">
        {label} {required && <span className="text-red-600">*</span>}
      </div>
      
      <input
        type={type}
        {...register(name)}
        className={`w-full border-0 border-b ${
          error ? 'border-red-500' : 'border-gray-300'
        } py-2 text-base outline-none bg-transparent text-gray-800 focus:border-blue-600 placeholder:text-gray-600 placeholder:text-sm`}
        placeholder={placeholder}
        min={min}
        max={max}
      />
      
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default TextInput;