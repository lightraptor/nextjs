"use client";
import React from "react";
import QRCode from 'react-qr-code';

const VCardQRCode = () => {

  return (
    <div className="m-4">
      <QRCode value={`https://nextjs-swart-beta-51.vercel.app/scan`} size={600} level="H"/>
      
    </div>
  );
};

export default VCardQRCode;