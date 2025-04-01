// utils/auth.ts
export const getUserRole = (): 'admin' | 'staff' | 'professional' | 'client' => {
    return (localStorage.getItem('userRole') as any) || 'client';
  };
  
  export const setUserRole = (role: 'admin' | 'staff' | 'professional' | 'client') => {
    localStorage.setItem('userRole', role);
    window.location.reload(); // recarga para que RoleBasedRoutes se actualice
  };
  