import React from 'react';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {Array<Object>} props.submissions - Array data submission yang akan ditampilkan
 * @param {string} props.submissions[].id - ID unik submission
 * @param {string} props.submissions[].nama - Nama responden
 * @param {string} props.submissions[].umur - Umur responden
 * @param {string} props.submissions[].jenisKelamin - Jenis kelamin responden
 * @param {string} props.submissions[].perokok - Status perokok (Ya/Tidak)
 * @param {Array<string>} props.submissions[].jenisRokok - Array jenis rokok
 * @returns {JSX.Element} SubmissionTable component
 */
const SubmissionTable = ({ submissions }) => {
  if (submissions.length === 0) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
        <div className="text-center py-10 px-5 text-gray-600">
          <h3 className="text-xl mb-2.5 text-gray-800">Belum ada data survey</h3>
          <p>Silakan isi survey terlebih dahulu untuk melihat hasil submission.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-5">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-[15px] text-left font-bold text-gray-800 border-b-2 border-gray-300">
                No
              </th>
              <th className="p-[15px] text-left font-bold text-gray-800 border-b-2 border-gray-300">
                Nama Lengkap
              </th>
              <th className="p-[15px] text-left font-bold text-gray-800 border-b-2 border-gray-300">
                Umur
              </th>
              <th className="p-[15px] text-left font-bold text-gray-800 border-b-2 border-gray-300">
                Jenis Kelamin
              </th>
              <th className="p-[15px] text-left font-bold text-gray-800 border-b-2 border-gray-300">
                Perokok
              </th>
              <th className="p-[15px] text-left font-bold text-gray-800 border-b-2 border-gray-300">
                Rokok yang pernah dicoba
              </th>
            </tr>
          </thead>
          
          <tbody>
            {submissions.map((submission, index) => (
              <tr 
                key={submission.id} 
                className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-200' : 'hover:bg-gray-200'}
              >
                <td className="p-[15px] border-b border-gray-200 text-gray-800 font-bold">
                  {index + 1}
                </td>
                <td className="p-[15px] border-b border-gray-200 text-gray-800">
                  {submission.nama}
                </td>
                <td className="p-[15px] border-b border-gray-200 text-gray-800">
                  {submission.umur}
                </td>
                <td className="p-[15px] border-b border-gray-200 text-gray-800">
                  {submission.jenisKelamin}
                </td>
                <td className="p-[15px] border-b border-gray-200 text-gray-800">
                  {submission.perokok}
                </td>
                <td className="p-[15px] border-b border-gray-200 text-gray-800 max-w-[300px] break-words">
                  {submission.jenisRokok.length > 0 ? submission.jenisRokok.join(', ') : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;