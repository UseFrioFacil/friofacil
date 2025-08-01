import { Navigate } from 'react-router-dom';
import { useState, type ReactNode } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('accessToken');
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (!token) {
      toast.error("Você precisa estar logado para acessar essa página!");

      setTimeout(() => setRedirect(true), 50);
    }
  }, [token]);

  if (redirect == true) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;