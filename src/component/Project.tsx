import React from 'react';
import Card from './ui/card';
import projectImage from '../assets/image.png'; // import gambar

const Project: React.FC = () => {
  return (
    <section id="project" className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">Project Pertamaku</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <Card
          title="Landing Page 1.x"
          description="Ini adalah project pertamaku yang diunggah ke internet. Masih sederhana, tapi langkah awal membangun website dinamis."
        >
          <img src={projectImage} alt="Project Screenshot" className="rounded mt-4" />
        </Card>
      </div>
    </section>
  );
};

export default Project;
