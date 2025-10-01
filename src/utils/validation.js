
/**
 * @param {string} value - String yang akan divalidasi
 * @returns {boolean} True jika string kosong atau hanya whitespace
 */
export const isEmpty = (value) => {
  return !value || value.trim() === '';
};

/**
 * @param {number|string} age - Umur yang akan divalidasi
 * @param {number} min - Umur minimum (default: 1)
 * @param {number} max - Umur maximum (default: 150)
 * @returns {boolean} True jika umur valid
 */
export const isValidAge = (age, min = 1, max = 150) => {
  const numAge = Number(age);
  return !isNaN(numAge) && numAge >= min && numAge <= max;
};

export const validateRequiredFields = (formData, requiredFields) => {
  const errors = [];
  
  requiredFields.forEach(field => {
    if (isEmpty(formData[field])) {
      errors.push(`Field ${field} wajib diisi`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * @param {Object} formData - Object berisi data form
 * @param {string} formData.nama - Nama responden
 * @param {string} formData.umur - Umur responden
 * @param {string} formData.jenisKelamin - Jenis kelamin responden
 * @param {string} formData.perokok - Status perokok
 * @returns {Object} Object berisi status validasi dan error messages
 */
export const validateForm = (formData) => {
  const errors = [];
  
  if (isEmpty(formData.nama)) {
    errors.push('Nama wajib diisi');
  }
  
  if (isEmpty(formData.umur)) {
    errors.push('Umur wajib diisi');
  } else if (!isValidAge(formData.umur)) {
    errors.push('Umur harus antara 1-150 tahun');
  }
  
  if (isEmpty(formData.jenisKelamin)) {
    errors.push('Jenis kelamin wajib dipilih');
  }
  
  if (isEmpty(formData.perokok)) {
    errors.push('Status perokok wajib dipilih');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const sanitizeInput = (input) => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};