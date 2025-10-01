import React from 'react';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {boolean} [props.isSubmitting=false] - Status loading saat submit
 * @param {boolean} [props.isValid=false] - Status validasi form
 * @param {Function} props.onViewResults - Handler function untuk melihat hasil submission
 * @param {Function} props.onClear - Handler function untuk clear/reset form
 * @returns {JSX.Element} FormActions component
 */
const FormActions = ({ 
  isSubmitting = false,
  onViewResults, 
  onClear 
}) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 text-white border-0 rounded px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim'}
        </button>
        <button
          type="button"
          onClick={onViewResults}
          className="bg-blue-600 text-white border-0 rounded px-4 py-3 text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Lihat Hasil
        </button>
      </div>
      
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClear();
        }}
        className="text-blue-600 text-sm font-medium hover:text-blue-800"
      >
        Kosongkan formulir
      </a>
    </div>
  );
};

export default FormActions;