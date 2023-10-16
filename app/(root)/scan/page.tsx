'use client'
import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

const Scan: React.FC = () => {
    const [vcfData, setVcfData] = useState('');
    const [qrData, setQrData] = useState('');
  
    useEffect(() => {
      // Dữ liệu liên hệ VCF
      const contactData = {
        firstName: 'DUY',
        lastName: 'LE',
        email: '20520467@gmail.com',
        phone: '(+84)327977933',
      };
  
      // Tạo nội dung VCF
      const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.firstName} ${contactData.lastName}
EMAIL:${contactData.email}
TEL:${contactData.phone}
END:VCARD`;
  
      setVcfData(vcfContent);
  
      // Tạo URL chứa VCF dưới dạng data URI
      const vcfUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcfContent)}`;
      setQrData(vcfUrl);
  
      // Tải tệp VCF
      saveAs(vcfUrl, 'contact.vcf');
    }, []);
  
    return (
      <div>
        <h1>QR Code VCF Generator</h1>
        <div id="qrcode" />
        <a href={qrData} download="contact.vcf">Tải tệp VCF</a>
      </div>
    );
  };
  
  export default Scan;