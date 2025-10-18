import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

export default function Register() {
  const [form, setForm] = useState({ email: '', username: '', password: '' });
  const navigate = useNavigate(); // ✅ Nécessaire pour rediriger

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Inscription réussie");
      navigate('/'); // ✅ Redirection vers login
    } catch (err) {
      alert(err.response?.data?.error || 'Erreur d’inscription');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="Nom" />
      <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Mot de passe" />
      <button type="submit">S’inscrire</button>
    </form>
  );
}
