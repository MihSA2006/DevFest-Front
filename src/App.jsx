import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import GoogleLoginButton from './components/GoogleLoginButton';
import Profile from './components/Profile';
import VerifyCode from './components/VerifyCode';
import ChatBot from './components/bot';


const App = () => (
  <GoogleOAuthProvider clientId="895200014569-n5k1d5ogmr3of6v5ui08ltkeo9ovu58q.apps.googleusercontent.com">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/google-login" element={<GoogleLoginButton />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/verify-code" element={<VerifyCode />} />
           <Route path="/bot" element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
  </GoogleOAuthProvider>
  
);

export default App;
