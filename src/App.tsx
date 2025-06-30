import React from 'react'; // Добавлено
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DashboardLayout from './components/dashboard/DashboardLayout';
import PremiumHomePage from './pages/PremiumHomePage'; // Добавить
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CalculatorPage from './pages/CalculatorPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DashboardHome from './pages/dashboard/DashboardHome';
import './App.css';

const App: React.FC = () => {
  return (
    // Удаляем TierProvider, так как TierContext.tsx был удален
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Routes>
              {/* Заменяем NewHomePage на HomePage, так как NewHomePage.tsx был удален */}
              <Route path="/" element={<PremiumHomePage />} /> {/* Изменить HomePage на PremiumHomePage */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard-new" element={<DashboardPage />} />
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardHome />} />
                <Route path="profile" element={<div className="p-6"><h1 className="text-2xl font-bold">Профиль пользователя</h1></div>} />
                <Route path="application" element={<div className="p-6"><h1 className="text-2xl font-bold">Подача заявки</h1></div>} />
                <Route path="programs" element={<div className="p-6"><h1 className="text-2xl font-bold">Программы накопления</h1></div>} />
                <Route path="savings" element={<div className="p-6"><h1 className="text-2xl font-bold">Мои накопления</h1></div>} />
                <Route path="payments" element={<div className="p-6"><h1 className="text-2xl font-bold">Платежи</h1></div>} />
                {/* Удаляем маршрут "properties", так как PropertiesPage.tsx был удален */}
                {/* <Route path="properties" element={<div className="p-6"><h1 className="text-2xl font-bold">Недвижимость</h1></div>} /> */}
                <Route path="support" element={<div className="p-6"><h1 className="text-2xl font-bold">Поддержка</h1></div>} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
