/**
 * Sanitizes input string to strip unwanted HTML/script tags and prevent XSS injection
 * @param {string} str
 * @returns {string} sanitized string
 */
export const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip script tags
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .trim();
};

/**
 * Validates the contact form inputs with strict length and format rules
 * @param {Object} formData - { name, email, subject, message }
 * @returns {Object} { isValid, errors, sanitizedData }
 */
export const validateContactForm = (formData) => {
  const errors = {};

  const name = sanitizeInput(formData.name || '');
  const email = (formData.email || '').trim();
  const subject = sanitizeInput(formData.subject || '');
  const message = sanitizeInput(formData.message || '');

  // Name validation (2 - 100 chars)
  if (!name) {
    errors.name = "Full name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (name.length > 100) {
    errors.name = "Name must not exceed 100 characters";
  }

  // Email validation (max 100 chars)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    errors.email = "Email address is required";
  } else if (email.length > 100) {
    errors.email = "Email address must not exceed 100 characters";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  // Subject validation (3 - 200 chars)
  if (!subject) {
    errors.subject = "Subject is required";
  } else if (subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  } else if (subject.length > 200) {
    errors.subject = "Subject must not exceed 200 characters";
  }

  // Message validation (10 - 2000 chars)
  if (!message) {
    errors.message = "Message is required";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters long";
  } else if (message.length > 2000) {
    errors.message = "Message must not exceed 2000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: { name, email, subject, message }
  };
};
