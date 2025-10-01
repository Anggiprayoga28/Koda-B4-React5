import React from 'react';
import { FormProvider } from 'react-hook-form';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import RadioGroup from '../components/RadioGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import FormActions from '../components/FormActions';

/**
 * @component
 * @param {Object} props - Props komponen
 * @param {Object} props.formMethods - React Hook Form methods dari useForm
 * @param {Object} props.errors - Error object dari validasi
 * @param {Function} props.onSubmit - Handler untuk submit form
 * @param {Function} props.onClear - Handler untuk reset form
 * @param {Function} props.onViewResults - Handler untuk navigasi ke halaman hasil
 * @param {string} props.watchPerokok - Value dari field perokok untuk conditional rendering
 * @returns {JSX.Element} FormPage component
 */
const FormPage = ({ 
  formMethods,
  errors,
  onSubmit, 
  onClear,
  onViewResults,
  watchPerokok
}) => {
  /**
   * @type {Array<string>}
   */

  const cigaretteTypes = [
    'Gudang Garam Filter', 
    'Lucky Strike', 
    'Marlboro', 
    'Esse'
  ];

  const { 
    register, 
    handleSubmit, 
    formState 
  } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <div className="min-h-screen bg-purple-50 px-4 py-10">
        <div className="max-w-[600px] mx-auto">
          <Header showEmail={true} />

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput
              label="Siapa nama anda?"
              name="nama"
              register={register}
              error={errors.nama?.message}
              required={true}
            />

            <TextInput
              label="Berapa umur anda?"
              name="umur"
              type="number"
              register={register}
              error={errors.umur?.message}
              min="1"
              max="150"
              required={true}
            />

            <RadioGroup
              label="Apa jenis kelamin anda?"
              name="jenisKelamin"
              register={register}
              options={['Laki-laki', 'Perempuan']}
              error={errors.jenisKelamin?.message}
              required={true}
            />

            <RadioGroup
              label="Apakah anda perokok?"
              name="perokok"
              register={register}
              options={['Ya', 'Tidak']}
              error={errors.perokok?.message}
              required={true}
            />

            {watchPerokok === 'Ya' && (
              <CheckboxGroup
                label="Jika anda perokok, rokok apa yang pernah anda coba?"
                name="jenisRokok"
                register={register}
                options={cigaretteTypes}
                error={errors.jenisRokok?.message}
              />
            )}

            <FormActions
              isSubmitting={formState.isSubmitting}
              isValid={formState.isValid}
              onViewResults={onViewResults}
              onClear={onClear}
            />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default FormPage;