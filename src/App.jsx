import React from 'react';
import Navbar from './components/Navbar';
import BoardMembers from './components/BoardMembers';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import Notices from './components/Notices';
import { Building2, AlertCircle } from 'lucide-react';
import 'swiper/css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <Building2 className="w-16 h-16 mx-auto text-blue-600 mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to THE MUNDI (S) SELF SUPPORTING CO-OPERATIVE House Building Society Ltd., Mohali</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Building stronger communities through collaboration, innovation, and dedication.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="https://forms.google.com/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                <AlertCircle className="w-5 h-5" />
                Submit Complaint
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <ImageSlider />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Society</h2>
              <p className="text-lg text-gray-600 mb-6">
                XYZ Society has been at the forefront of community development since its inception. 
                We believe in fostering meaningful connections and creating lasting impact through 
                our various initiatives and programs.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to empower individuals, strengthen communities, and create positive 
                change through collaborative efforts and innovative solutions.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Society meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <Notices />

      <BoardMembers />
      <Footer />
    </div>
  );
}

export default App;