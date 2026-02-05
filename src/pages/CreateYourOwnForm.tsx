import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CreateYourOwnForm = () => {
  const [formData, setFormData] = useState({
    flavour: '',
    milk: '',
    sweetener: '',
    quantity: '',
    dateTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = [
      'flavour', 'milk', 'sweetener', 'quantity', 
      'dateTime', 'firstName', 'lastName', 'email', 'phone'
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData].trim()) {
        alert('Please fill in all required fields');
        return;
      }
    }

    // Construct WhatsApp message
    const message = `Custom Ice Cream Request 🍨

Flavour: ${formData.flavour}
Milk: ${formData.milk}
Sweetener: ${formData.sweetener}
Quantity: ${formData.quantity}
Date / Time: ${formData.dateTime}

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}`;

    // URL-encode the message
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/918105317181?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Content */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link 
            to="/#create" 
            className="inline-flex items-center gap-2 text-[#6B5E52] hover:text-[#3D3127] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-light">Back</span>
          </Link>

          {/* Form Container */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* WHAT'S YOUR FLAVOUR? */}
              <div>
                <label htmlFor="flavour" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  WHAT'S YOUR FLAVOUR? <span className="text-red-500">*</span> <span className="inline-flex items-center justify-center w-4 h-4 bg-gray-400 text-white rounded-full text-xs">?</span>
                </label>
                <input
                  type="text"
                  id="flavour"
                  name="flavour"
                  value={formData.flavour}
                  onChange={handleChange}
                  placeholder="Honey Pepper Ginger"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* MILK */}
              <div>
                <label htmlFor="milk" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  MILK <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="milk"
                  name="milk"
                  value={formData.milk}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* SWEETENER */}
              <div>
                <label htmlFor="sweetener" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  SWEETENER <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="sweetener"
                  name="sweetener"
                  value={formData.sweetener}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* QUANTITY */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  QUANTITY <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Minumum Order Is 1 KG"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* DATE / TIME */}
              <div>
                <label htmlFor="dateTime" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  DATE / TIME <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  placeholder="Please choose a date TWO DAYS AHEAD of the date you submit this form"
                  required
                  min={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* FIRST NAME / LAST NAME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wide mb-2">
                    FIRST NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wide mb-2">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* PHONE NUMBER */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wide mb-2">
                  PHONE NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A44A] focus:border-transparent"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#8B6F47] hover:bg-[#75593A] text-white font-bold uppercase tracking-wide rounded-md transition-colors duration-200"
                >
                  SUBMIT FORM
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreateYourOwnForm;
