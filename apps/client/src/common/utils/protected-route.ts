import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: any) => {
  const { role } = useSelector((store: any) => store.authentication);
  const user = useSelector((store: any) => store.authentication);

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'ADMIN') {
      // navigate('/')
      console.log(role);
      console.log(user);
    }
  }, [role, navigate, user]);

  return role ? children : null;
};
