import React from "react";
import Button from "./ui/button";
import heroImage from "../assets/are-you-sure-warning-warning.jpg";

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative p-8 rounded">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Halo, aku Abyan, Mahasiswa Teknik Informatika
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Sedang belajar membuat website dan web app. Ini pengalaman pertamaku
          mengunggah project pertamaku.
        </p>
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button
            onClick={() => window.open("https://www.linkedin.com/", "_blank")}
          >
            LinkedIn
          </Button>
          <Button
            onClick={() =>
              (window.location.href = "mailto:tn.mh0512@gmail.com")
            }
          >
            Email
          </Button>
          <Button onClick={() => window.open("https://github.com/", "_blank")}>
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
