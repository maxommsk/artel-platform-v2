import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  Users, 
  UserCheck,
  LogIn
} from 'lucide-react';
import PageTitle from '../components/PageTitle';
import { useAuth } from '../contexts/AuthContext'; // <-- ИМПОРТИРУЕМ useAuth

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- ПОЛУЧАЕМ ФУНКЦИЮ login ИЗ КОНТЕКСТА
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // <-- ДОБАВЛЕНО: Состояние для ошибок

  const demoAccounts = [
    {
      email: 'client@artel.ru',
      password: '123456',
      role: 'prospect', // Изменено на 'prospect' для соответствия AuthContext
      name: 'Иван Петров',
      description: 'Потенциальный клиент'
    },
    {
      email: 'member@artel.ru',
      password: '123456',
      role: 'member_accumulator', // Изменено на 'member_accumulator'
      name: 'Анна Сидорова',
      description: 'Пайщик-накопитель'
    },
    {
      email: 'admin@artel.ru',
     
