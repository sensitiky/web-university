'use client';
import React from 'react';
import Image from 'next/image';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  defaultMessage?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber,
  defaultMessage,
}) => {
  const handleRedirect = () => {
    const encodedMessage = defaultMessage
      ? encodeURIComponent(defaultMessage)
      : '';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleRedirect}
      className="fixed bottom-5 right-5 bg-[#25D366] text-white border-none rounded-full w-12 h-12 lg:w-20 lg:h-20 cursor-pointer shadow-lg flex items-center justify-center z-50 animate-fadeInSwing"
      aria-label="Contact via WhatsApp"
    >
      <Image
        src="/wpp.svg"
        alt="WhatsApp icon"
        width={36}
        height={36}
        className="w-10 h-10 lg:w-[5rem] lg:h-[5rem]"
      />
    </button>
  );
};

export default WhatsAppWidget;
