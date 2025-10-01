import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { surveySchema, defaultValues } from '../schemas/surveySchema';

/**
 * @returns {Object} Object berisi state, form methods, dan functions untuk mengelola survey
 * @property {Object} formMethods - React Hook Form methods (register, handleSubmit, watch, etc)
 * @property {Object} formState - Form state dari react-hook-form
 * @property {Object} errors - Error messages dari validasi
 * @property {Function} onSubmit - Handler untuk submit form
 * @property {Function} resetForm - Handler untuk reset form
 * @property {Array<Object>} submissions - Array berisi semua data submission
 * @property {Function} clearAllSubmissions - Handler untuk clear semua submission
 */
export const useSurvey = () => {
  const [submissions, setSubmissions] = useState([]);

  /**
   * @type {Object}
   */
  const formMethods = useForm({
    resolver: yupResolver(surveySchema),
    defaultValues: defaultValues,
    mode: 'onBlur', 
    reValidateMode: 'onChange' 
  });

  const {
    formState: { errors },
    reset,
    watch
  } = formMethods;


  const watchPerokok = watch('perokok');

  useEffect(() => {
    const saved = localStorage.getItem('surveySubmissions');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading submissions:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (submissions.length > 0) {
      localStorage.setItem('surveySubmissions', JSON.stringify(submissions));
    }
  }, [submissions]);

  /**
   * @param {Object} data - Data form yang sudah divalidasi
   * @returns {boolean} True jika submit berhasil
   */
  const onSubmit = (data) => {
    try {
      const newSubmission = {
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      
      setSubmissions(prev => [...prev, newSubmission]);
      
      reset(defaultValues);
      
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  const resetForm = () => {
    reset(defaultValues);
  };

  const clearAllSubmissions = () => {
    setSubmissions([]);
    localStorage.removeItem('surveySubmissions');
  };

  return {
    formMethods,
    errors,
    onSubmit,
    resetForm,
    submissions,
    clearAllSubmissions,
    watchPerokok
  };
};