import React, { useState } from 'react';
import { Mail, Phone,  Send } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Contact', path: '/contact' },
          ]}
        />
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
          <div className="bg-primary text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-200">
              Have questions or feedback? We're here to help.
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="content">Content Request</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary inline-flex items-center"
                    >
                      <Send size={16} className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600 mt-1">
                        National Digital Library of India<br />
                        Indian Institute of Technology Kharagpur<br />
                        Kharagpur, West Bengal 721302<br />
                        India
                      </p>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+911234567890" className="hover:text-primary">
                          +91 123 456 7890
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:support@ndli.edu" className="hover:text-primary">
                          support@ndli.edu
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-medium mb-4">Operating Hours</h3>
                  <table className="w-full text-gray-600">
                    <tbody>
                      <tr>
                        <td className="py-1">Monday - Friday:</td>
                        <td className="py-1">9:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Saturday:</td>
                        <td className="py-1">9:00 AM - 1:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sunday:</td>
                        <td className="py-1">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              </div>
            </div>
            
            {/* <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">How do I access the full text of a resource?</h3>
                  <p className="text-gray-600">
                    Most resources in our library are open access and can be downloaded directly. For some resources, you may need to log in or register for a free account. If a resource is restricted, you'll see a notation on the resource page.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">Can I contribute my own work to the library?</h3>
                  <p className="text-gray-600">
                    Yes! We welcome contributions from authors, researchers, and institutions. Please contact us through the form above with details about the content you wish to contribute.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">Is there a mobile app for the library?</h3>
                  <p className="text-gray-600">
                    Yes, we have mobile apps available for both Android and iOS devices. You can download them from the Google Play Store or Apple App Store by searching for "National Digital Library India."
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">How can my institution partner with NDLI?</h3>
                  <p className="text-gray-600">
                    We're always looking for institutional partners to expand our collection. Please select "Partnership Opportunities" in the subject dropdown of the contact form, and our partnership team will get in touch with you.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;