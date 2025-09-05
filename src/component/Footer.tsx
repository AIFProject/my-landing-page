import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-200 text-center py-12">
      <p className="mb-4">Terima kasih sudah mampir! Aku senang berbagi perjalanan belajarku dan terbuka untuk koneksi baru 😊</p>
      <div className="space-x-4">
        <a href="https://www.linkedin.com/" target="_blank" className="text-green-500 hover:underline">LinkedIn</a>
        <a href="mailto:tn.mh0512@gmail.com" className="text-green-500 hover:underline">Email</a>
        <a href="https://github.com/" target="_blank" className="text-green-500 hover:underline">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
