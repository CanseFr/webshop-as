import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: any) => {
  const { role } = useSelector((store: any) => store.authentication);

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'ADMIN') navigate('/');
  }, [role, navigate]);

  return role ? children : null;
};
