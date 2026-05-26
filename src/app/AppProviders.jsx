import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AppRoutes } from '../routes/AppRoutes.jsx';

export function AppProviders() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        theme="dark"
        richColors
        position="top-right"
        toastOptions={{
          classNames: {
            toast: 'bg-surface-card border border-white/10 text-content shadow-glass',
          },
        }}
      />
    </BrowserRouter>
  );
}
