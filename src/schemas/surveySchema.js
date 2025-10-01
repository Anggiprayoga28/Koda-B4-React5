import * as yup from 'yup';

/**
 * @type {yup.ObjectSchema}
*/

export const surveySchema = yup.object({

  nama: yup
    .string()
    .required('Nama wajib diisi')
    .min(3, 'Nama minimal 3 karakter')
    .max(100, 'Nama maksimal 100 karakter')
    .trim(),


  umur: yup
    .number()
    .required('Umur wajib diisi')
    .positive('Umur harus lebih dari 0')
    .integer('Umur harus berupa angka bulat')
    .min(1, 'Umur minimal 1 tahun')
    .max(150, 'Umur maksimal 150 tahun')
    .typeError('Umur harus berupa angka'),

  jenisKelamin: yup
    .string()
    .required('Jenis kelamin wajib dipilih')
    .oneOf(['Laki-laki', 'Perempuan'], 'Jenis kelamin tidak valid'),


  perokok: yup
    .string()
    .required('Status perokok wajib dipilih')
    .oneOf(['Ya', 'Tidak'], 'Status perokok tidak valid'),


  jenisRokok: yup
    .array()
    .of(yup.string())
    .default([])
    .when('perokok', {
      is: 'Ya',
      then: (schema) => schema.min(0, 'Pilih minimal 1 jenis rokok jika Anda perokok'),
      otherwise: (schema) => schema
    })
}).required();

/**
 * @constant {Object}
 * @property {string} nama - Default nama (empty string)
 * @property {string} umur - Default umur (empty string)
 * @property {string} jenisKelamin - Default jenis kelamin (empty string)
 * @property {string} perokok - Default status perokok (empty string)
 * @property {Array<string>} jenisRokok - Default jenis rokok (empty array)
 */
export const defaultValues = {
  nama: '',
  umur: '',
  jenisKelamin: '',
  perokok: '',
  jenisRokok: []
};