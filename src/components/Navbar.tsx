import React from 'react';
import { GraduationCap, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-semibold text-emerald-600">EduPlatform</span>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <NavLink href="#actividades">Actividades</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#emprendimiento">Emprendimiento</NavLink>
            <NavLink href="#institucion">Suma tu Institución</NavLink>
            <button
              onClick={logout}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export default Navbar;