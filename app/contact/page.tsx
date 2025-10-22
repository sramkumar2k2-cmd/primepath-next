"use client";

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './page.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    errors: {} as Record<string, string>,
    success: false,
    touched: {} as Record<string, boolean>,
    thankYouEmailSent: false
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("MQzHIw7L7oDD4Tr7c");
  }, []);

  const subjectOptions = [
    { value: '', label: 'Select a service...', disabled: true },
    { value: 'SEO', label: 'SEO (Search Engine Optimization)' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'SMM', label: 'Social Media Marketing (SMM)' },
    { value: 'SEM', label: 'Search Engine Marketing (SEM)' },
    { value: 'Content Marketing', label: 'Content Marketing' },
    { value: 'Email Marketing', label: 'Email Marketing' },
    { value: 'Branding', label: 'Branding & Identity' },
    { value: 'E-commerce', label: 'E-commerce Solutions' },
    { value: 'Digital Strategy', label: 'Digital Strategy Consultation' },
    { value: 'Other', label: 'Other Inquiry' }
  ];

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'official.primepath@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '(+91) 70929 39307',
      description: 'Mon to Fri, 9AM to 6PM'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Tenkasi, Tamil Nadu',
      description: 'India, Tamil Nadu, Tenkasi - 627 415'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '(+91) 70929 39307',
      description: 'Quick chat support'
    }
  ];

  // Send thank you email to the visitor - IMPROVED ERROR HANDLING
  const sendThankYouEmail = async (userEmail: string, userName: string, userSubject: string) => {
    try {
      console.log('Attempting to send thank you email to:', userEmail);

      const thankYouTemplateParams = {
        to_email: userEmail,
        to_name: userName,
        from_name: "Primepath Solutions",
        from_email: "official.primepath@gmail.com",
        subject: `Thank you for contacting Primepath Solutions!`,
        user_subject: userSubject,
        company_name: "Primepath Solutions",
        reply_to: "official.primepath@gmail.com",
        timestamp: new Date().toLocaleString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('EmailJS parameters:', {
        serviceId: 'service_c2uwltl',
        templateId: 'template_lp0vfpi',
        publicKey: 'MQzHIw7L7oDD4Tr7c'
      });

      const result = await emailjs.send(
        'service_c2uwltl',
        'template_lp0vfpi',
        thankYouTemplateParams,
        'MQzHIw7L7oDD4Tr7c'
      );

      console.log('Thank you email sent successfully:', result);
      return true;

    } catch (error: any) {
      console.error('Failed to send thank you email. Full error details:', {
        error,
        message: error?.message,
        text: error?.text,
        status: error?.status,
        serviceId: 'service_c2uwltl',
        templateId: 'template_lp0vfpi'
      });
      
      // Return more detailed error information
      return {
        success: false,
        error: error?.text || error?.message || 'Unknown email error'
      };
    }
  };

  // Validation rules
  const validateField = (name: string, value: string) => {
    const errors: Record<string, string> = {};
    
    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required';
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters';
        break;
      
      case 'email':
        if (!value.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = 'Please enter a valid email';
        break;
      
      case 'phone':
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
          errors.phone = 'Please enter a valid phone number';
        }
        break;
      
      case 'subject':
        if (!value.trim()) errors.subject = 'Please select a service';
        break;
      
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters';
        break;
      
      default:
        break;
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (formState.touched[name]) {
      const fieldErrors = validateField(name, value);
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: fieldErrors[name] || ''
        }
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({
      ...prev,
      touched: {
        ...prev.touched,
        [name]: true
      }
    }));

    const fieldErrors = validateField(name, value);
    setFormState(prev => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: fieldErrors[name] || ''
      }
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    Object.keys(formData).forEach(field => {
      const fieldErrors = validateField(field, formData[field as keyof typeof formData]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });

    setFormState(prev => ({
      ...prev,
      errors,
      touched: Object.keys(formData).reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {} as Record<string, boolean>)
    }));

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, success: false, thankYouEmailSent: false }));

    try {
      // Send thank you email to the visitor
      const thankYouResult = await sendThankYouEmail(
        formData.email, 
        formData.name, 
        formData.subject
      );

      // Send notification email to yourself
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        to_email: 'official.primepath@gmail.com',
        reply_to: formData.email,
        timestamp: new Date().toLocaleString('en-IN'),
        user_email: formData.email,
        user_name: formData.name,
        user_phone: formData.phone,
        user_subject: formData.subject,
        user_message: formData.message
      };

      console.log('Sending notification email with params:', templateParams);

      const notificationResult = await emailjs.send(
        'service_c2uwltl',
        'template_ibfce83',
        templateParams,
        'MQzHIw7L7oDD4Tr7c'
      );

      console.log('Notification email sent successfully:', notificationResult);
      
      setFormState(prev => ({ 
        ...prev, 
        success: true,
        thankYouEmailSent: thankYouResult === true // Only true if thankYouResult is boolean true
      }));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormState(prev => ({ 
          ...prev, 
          success: false, 
          errors: {}, 
          touched: {},
          thankYouEmailSent: false 
        }));
      }, 8000);

    } catch (error: any) {
      console.error('Email sending failed. Full error:', {
        error,
        message: error?.message,
        text: error?.text,
        status: error?.status
      });
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error?.text) {
        errorMessage = `Email service error: ${error.text}`;
      } else if (error?.status) {
        errorMessage = `Error ${error.status}: ${error.text || 'Please check your EmailJS configuration'}`;
      }
      
      setFormState(prev => ({
        ...prev,
        errors: { submit: errorMessage }
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Get In Touch</h1>
          <p className={styles.contactSubtitle}>
            Ready to start your project? Contact us today and let's create something amazing together.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactFormSection}>
            <div className={styles.formHeader}>
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {formState.success && (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <div>
                  <h3>Thank You for Your Message!</h3>
                  <p>
                    We've received your inquiry about <strong>{formData.subject}</strong>. 
                    {formState.thankYouEmailSent ? (
                      " A confirmation email has been sent to your inbox."
                    ) : (
                      " We'll get back to you within 24 hours."
                    )}
                  </p>
                  <p className={styles.confirmationNote}>
                    We appreciate you choosing Primepath Solutions!
                  </p>
                </div>
              </div>
            )}

            {formState.errors.submit && (
              <div className={styles.errorMessage}>
                <div className={styles.errorIcon}>⚠️</div>
                <p>{formState.errors.submit}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={formState.isSubmitting}
                    placeholder="Enter your full name"
                    className={`${styles.formInput} ${formState.errors.name ? styles.error : ''}`}
                  />
                  {formState.errors.name && <span className={styles.errorText}>{formState.errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={formState.isSubmitting}
                    placeholder="Enter your email address"
                    className={`${styles.formInput} ${formState.errors.email ? styles.error : ''}`}
                  />
                  {formState.errors.email && <span className={styles.errorText}>{formState.errors.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={formState.isSubmitting}
                    placeholder="Enter your phone number"
                    className={`${styles.formInput} ${formState.errors.phone ? styles.error : ''}`}
                  />
                  {formState.errors.phone && <span className={styles.errorText}>{formState.errors.phone}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Service Interested In *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={formState.isSubmitting}
                    className={`${styles.formSelect} ${formState.errors.subject ? styles.error : ''}`}
                  >
                    {subjectOptions.map((option, index) => (
                      <option key={index} value={option.value} disabled={option.disabled}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formState.errors.subject && <span className={styles.errorText}>{formState.errors.subject}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={formState.isSubmitting}
                  placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                  className={`${styles.formTextarea} ${formState.errors.message ? styles.error : ''}`}
                ></textarea>
                {formState.errors.message && <span className={styles.errorText}>{formState.errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={formState.isSubmitting}
                className={`${styles.submitBtn} ${formState.isSubmitting ? styles.submitting : ''}`}
              >
                {formState.isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          <div className={styles.contactInfoSection}>
            <div className={styles.infoHeader}>
              <h2>Contact Information</h2>
              <p>Choose your preferred method to reach out to us.</p>
            </div>

            <div className={styles.contactMethods}>
              {contactMethods.map((method, index) => (
                <div key={index} className={styles.contactMethod}>
                  <div className={styles.methodIcon}>{method.icon}</div>
                  <div className={styles.methodContent}>
                    <h3>{method.title}</h3>
                    <p className={styles.methodDetail}>{method.details}</p>
                    <p className={styles.methodDescription}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.businessHours}>
              <h3>Business Hours</h3>
              <div className={styles.hoursList}>
                <div className={styles.hourItem}>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span>Sunday</span>
                  <span>10:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h2>Find Us Here</h2>
            <p>Visit our office in Tenkasi, Tamil Nadu</p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63057.404927463416!2d77.27327855852528!3d8.96405642012878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758978497484!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Primepath Solutions Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;