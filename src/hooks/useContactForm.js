import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { validateContactForm } from '../utils/validation';

/**
 * Calculates progressive cooldown timer in seconds based on submission count
 * 1st & 2nd message: 0s (no cooldown)
 * 3rd message: 30s
 * 4th message: 60s (1 min)
 * 5th message: 120s (2 mins)
 * 6th message: 300s (5 mins)
 * 7th+ message: 600s (10 mins)
 */
const getProgressiveCooldown = (count) => {
  if (count < 3) return 0;
  if (count === 3) return 30;
  if (count === 4) return 60;
  if (count === 5) return 120;
  if (count === 6) return 300;
  return 600; // 7th and subsequent messages
};

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website_hp: '' // Honeypot anti-bot field
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmissionKey, setLastSubmissionKey] = useState('');

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    isDemo: false
  });

  // Cooldown timer interval effect
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '', website_hp: '' });
    setErrors({});
  };

  const startCooldown = (seconds) => {
    setCooldown(seconds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Prevent submissions while loading or during active cooldown
    if (isLoading || cooldown > 0) return;

    // 2. Anti-bot Honeypot check: If hidden field is filled, silently ignore bot submission
    if (formData.website_hp && formData.website_hp.trim() !== '') {
      console.warn('Bot submission blocked via honeypot field.');
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been received.',
        isDemo: false
      });
      resetForm();
      return;
    }

    // 3. Validate and sanitize form inputs
    const { isValid, errors: validationErrors, sanitizedData } = validateContactForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      setStatus({
        submitted: true,
        success: false,
        message: 'Please resolve the errors highlighted above.',
        isDemo: false
      });
      return;
    }

    setIsLoading(true);
    setStatus({ submitted: false, success: false, message: '', isDemo: false });

    // Track repeated submissions with same Name or Email
    const currentSubmissionKey = `${sanitizedData.name.toLowerCase()}_${sanitizedData.email.toLowerCase()}`;
    const nextCount = (currentSubmissionKey === lastSubmissionKey || submissionCount > 0)
      ? submissionCount + 1
      : 1;

    setLastSubmissionKey(currentSubmissionKey);
    setSubmissionCount(nextCount);

    // Retrieve EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS env variables are not configured yet, provide clear instruction state
    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      console.warn(
        'EmailJS environment variables not set. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env file.'
      );
      
      setTimeout(() => {
        setIsLoading(false);
        const cooldownSecs = getProgressiveCooldown(nextCount);
        if (cooldownSecs > 0) {
          startCooldown(cooldownSecs);
        }
        setStatus({
          submitted: true,
          success: true,
          message: 'Message captured in preview mode! (To send real emails, configure your EmailJS credentials in the .env file).',
          isDemo: true
        });
        resetForm();
      }, 1000);
      return;
    }

    try {
      const templateParams = {
        name: sanitizedData.name,
        from_name: sanitizedData.name,
        email: sanitizedData.email,
        from_email: sanitizedData.email,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        to_name: 'Hemant Kumawat'
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully to hemantkumawat.dev@gmail.com. I will get back to you shortly.',
          isDemo: false
        });
        resetForm();

        // Calculate and apply progressive cooldown timer based on submission count
        const cooldownSecs = getProgressiveCooldown(nextCount);
        if (cooldownSecs > 0) {
          startCooldown(cooldownSecs);
        }
      } else {
        throw new Error('Email service returned non-200 status');
      }
    } catch (error) {
      console.error('EmailJS Submission Error:', error);
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Failed to send message. Please try again or reach out directly via email.',
        isDemo: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    cooldown,
    submissionCount,
    status,
    handleChange,
    handleSubmit,
    resetForm
  };
};
