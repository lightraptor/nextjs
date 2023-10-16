"use client";
import React from "react";
import QRCode from 'react-qr-code';

const VCardQRCode = () => {

  return (
    <div className="m-4">
      <QRCode value={`http://192.168.1.51:3000/scan`} size={600} level="H"/>
      
    </div>
  );
};

export default VCardQRCode;