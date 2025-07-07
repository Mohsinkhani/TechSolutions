// WhatsAppFloatingButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton: React.FC = () => {
  const phoneNumber = '+966535560431';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d+]/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-36 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloatingButton;