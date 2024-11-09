import React from 'react';
import { Book, Users, Lightbulb, Trophy } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Introducción al Emprendimiento Digital',
    description: 'Aprende los fundamentos para crear tu negocio en línea',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 2,
    title: 'Marketing Digital Avanzado',
    description: 'Estrategias efectivas para promocionar tu marca',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80',
  },
  {
    id: 3,
    title: 'Liderazgo y Gestión de Equipos',
    description: 'Desarrolla habilidades para liderar equipos efectivos',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    title: 'Innovación y Desarrollo de Productos',
    description: 'Metodologías ágiles para crear productos innovadores',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

function CourseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
              <course.icon className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <button className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200">
              Ver Curso
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;