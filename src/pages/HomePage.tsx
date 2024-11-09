import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import CourseList from '../components/CourseList';
import Footer from '../components/Footer';

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Bienvenido, {user?.name}!
          </h1>
          <p className="text-lg text-gray-600">
            Explora nuestros cursos y comienza tu viaje de aprendizaje
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Cursos Destacados
          </h2>
          <CourseList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;