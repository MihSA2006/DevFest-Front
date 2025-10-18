import { useState } from 'react';
import { startLogin } from '../api';
import GoogleLoginButton from './GoogleLoginButton';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await startLogin(form);
      const userId = res.data.user_id;
      localStorage.setItem('user_id', userId); // stock temporaire pour 2FA
      alert("Code envoyé par e-mail");
      navigate('/verify-code');
    } catch (err) {
      alert(err.response?.data?.error || 'Erreur de connexion');
    }
  };

  const handleGoToRegister = () => {
    navigate('/register');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Connexion</h2>

      {/* Connexion manuelle */}
      <form onSubmit={handleSubmit}>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          type="email"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Mot de passe"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <button type="submit" style={{ width: '100%' }}>
          Se connecter
        </button>
      </form>

      <button onClick={handleGoToRegister} style={{ marginTop: '1rem', width: '100%' }}>
        Créer un compte
      </button>

      <hr style={{ margin: '2rem 0' }} />

      {/* Connexion avec Google */}
      <GoogleLoginButton />
    </div>
  );
}
