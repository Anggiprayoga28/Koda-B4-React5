import React, { useState } from 'react';
import { useSurvey } from './hooks/useSurvey';
import FormPage from './pages/FormPage';
import SubmissionPage from './pages/SubmissionPage';

/**
 * @component
 * @returns {JSX.Element} App component
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('form');

  const {
    formMethods,
    errors,
    onSubmit,
    resetForm,
    submissions,
    watchPerokok
  } = useSurvey();

  /**

   * @param {Object} data - Data form yang sudah tervalidasi
   */
  const handleFormSubmit = (data) => {
    const success = onSubmit(data);
    if (success) {
      setCurrentPage('submission');
    }
  };


  const handleViewResults = () => {
    setCurrentPage('submission');
  };

 
  const handleBackToForm = () => {
    setCurrentPage('form');
  };

  return (
    <>
      {currentPage === 'form' ? (
        <FormPage
          formMethods={formMethods}
          errors={errors}
          onSubmit={handleFormSubmit}
          onClear={resetForm}
          onViewResults={handleViewResults}
          watchPerokok={watchPerokok}
        />
      ) : (
        <SubmissionPage
          submissions={submissions}
          onBackToForm={handleBackToForm}
        />
      )}
    </>
  );
};

export default App;