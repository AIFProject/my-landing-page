import React from 'react';
import Badge from './ui/badge';
import aboutImage from '../assets/undraw_deep-work_muov.svg'; // import gambar

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mb-4">
            <strong>Motivasi Belajar Coding:</strong> Aku ingin tetap up-to-date dan belajar membuat web app. Saat ini fokus belajar React, Node, dan Express.
          </p>
          <p className="mb-4"><strong>Skill / Tools (sementara):</strong></p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="React" />
            <Badge text="Node" />
            <Badge text="Express" />
          </div>
          <p>
            <strong>Unik Tentang Diriku:</strong> Aku cepat menemukan inovasi dan referensi baru saat belajar coding.
          </p>
        </div>
        <div>
          <img src={aboutImage} alt="About Me Illustration" className="rounded shadow" />
        </div>
      </div>
    </section>
  );
};

export default About;
