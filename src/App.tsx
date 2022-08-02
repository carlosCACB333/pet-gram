import { AuthProvider } from './contexts/AuthContext';
import { MainRoutes } from './routes/MainRoutes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <AuthProvider>
      <Toaster />
      <MainRoutes />
    </AuthProvider>
  );
}

export default App;
