'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getBasePath } from '@/lib/utils';
import { contactContent } from '@/content/pages/contact';
import { Icon } from '@/components/icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const formUrl = `https://docs.google.com/forms/d/e/${contactContent.form.googleForm.id}/formResponse`;
      
      // Create form data object
      const googleFormData = new FormData();
      googleFormData.append(contactContent.form.googleForm.fields.firstName, formData.firstName);
      googleFormData.append(contactContent.form.googleForm.fields.lastName, formData.lastName);
      contactContent.form.googleForm.fields.email.forEach(field => {
        googleFormData.append(field, formData.email);
      });
      googleFormData.append(contactContent.form.googleForm.fields.company, formData.company);
      googleFormData.append(contactContent.form.googleForm.fields.subject, formData.subject);
      googleFormData.append(contactContent.form.googleForm.fields.message, formData.message);

      // Create a hidden iframe for submission
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.id = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Handle successful submission
      iframe.onload = () => {
        setFormStatus({
          type: 'success',
          message: contactContent.form.messages.success
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });

        setShowForm(false);

        // Clean up
        setTimeout(() => {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        }, 500);

        setIsSubmitting(false);
      };

      // Create and submit the form
      const form = document.createElement('form');
      form.action = formUrl;
      form.method = 'POST';
      form.target = 'hidden_iframe';

      // Add form fields
      for (const [key, value] of googleFormData.entries()) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();

    } catch {
      setFormStatus({
        type: 'error',
        message: contactContent.form.messages.error
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          {contactContent.hero.title}
          <span className="block text-2xl text-muted-foreground mt-2">
            {contactContent.hero.subtitle}
          </span>
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {contactContent.hero.description}
          </p>
          {/* Contact Image */}
          <div className="max-w-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image 
                src={getBasePath(contactContent.image.src)}
                alt={contactContent.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{contactContent.contactInfo.title}</h2>
            <div className="space-y-4">
              {contactContent.contactInfo.items.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {showForm ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus.type === 'error' && (
                <div className="p-4 rounded-md bg-red-50 text-red-700 border border-red-200">
                  {formStatus.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactContent.form.fields.slice(0, 2).map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label htmlFor={field.name} className="text-sm font-medium">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md"
                      type={field.type}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>
              {contactContent.form.fields.slice(2).map((field) => (
                <div key={field.name} className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md"
                      rows={field.rows}
                      required={field.required}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md"
                      type={field.type}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? contactContent.form.submitButton.loadingText : contactContent.form.submitButton.text}
              </button>
            </form>
          ) : (
            <div className="p-8 text-center bg-green-50 text-green-700 border border-green-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p>{formStatus.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 