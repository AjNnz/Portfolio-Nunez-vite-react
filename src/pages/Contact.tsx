import React, { useState } from 'react';
import type { FormEvent } from 'react';
import facebookIcon from '../assets/Img/facebook.png';
import githubIcon from '../assets/Img/github.png';
import instagramIcon from '../assets/Img/instagram.png';
import linkedinIcon from '../assets/Img/linkedin.png';
import emailIcon from '../assets/Img/email.png';
import gpsIcon from '../assets/Img/gps.png';
import phoneIcon from '../assets/Img/telephone-call.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-blue-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        <div className="bg-blue-100 p-8 ">
          <h2 className="text-3xl font-black mb-4">Contact Me.</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            I'm currently open to internships, collaborations, and freelance opportunities. Don't hesitate to contact me, and I'll get back to you as soon as I can.
          </p>

          <div className="flex gap-3 flex-wrap mb-7">
            <a href="#" className="w-10 h-10 rounded-full bg-black inline-flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="w-4 invert brightness-125" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-black inline-flex items-center justify-center">
              <img src={instagramIcon} alt="Instagram" className="w-4 invert brightness-125" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-black inline-flex items-center justify-center">
              <img src={githubIcon} alt="GitHub" className="w-4 invert brightness-125" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-black inline-flex items-center justify-center">
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 invert brightness-125" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary text-sm">
              <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
              <span>+63 932 910 6640</span>
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <img src={emailIcon} alt="Email" className="w-5 h-5" />
              <span>angelitonunez87@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <img src={gpsIcon} alt="Location" className="w-5 h-5" />
              <span>Cogon, Cordova, Cebu</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-8 ">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name:"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 rounded-lg border border-blue-300 bg-white text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email:"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 rounded-lg border border-blue-300 bg-white text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              rows={6}
              placeholder="Message:"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 rounded-lg border border-blue-300 bg-white text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="w-fit mt-2 py-4 px-7 rounded-full border-none bg-blue-300 text-primary font-black cursor-pointer hover:bg-blue-250 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};