import React from 'react';
import Header from '../components/Header';
import SubmissionTable from '../components/SubmissionTable';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {Array<Object>} props.submissions - Array data submission
 * @param {string} props.submissions[].id - ID unik submission
 * @param {string} props.submissions[].nama - Nama responden
 * @param {string} props.submissions[].umur - Umur responden
 * @param {string} props.submissions[].jenisKelamin - Jenis kelamin responden
 * @param {string} props.submissions[].perokok - Status perokok (Ya/Tidak)
 * @param {Array<string>} props.submissions[].jenisRokok - Array jenis rokok
 * @param {Function} props.onBackToForm - Handler untuk kembali ke halaman form
 * @returns {JSX.Element} SubmissionPage component
 */
const SubmissionPage = ({ submissions, onBackToForm }) => {
  return (
    <div className="min-h-screen bg-purple-50 p-5">
      <div className="max-w-[1000px] mx-auto">
        <Header showEmail={false} />

        <div className="bg-white rounded-lg p-5 mb-5 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800">
            Menampilkan {submissions.length} Data
          </h2>
        </div>

        <SubmissionTable submissions={submissions} />

        <div className="flex gap-2.5 justify-center flex-wrap">
          <button
            onClick={onBackToForm}
            className="bg-blue-600 text-white py-3 px-6 rounded text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Isi Survey Lagi
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;