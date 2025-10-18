import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import GoogleLoginButton from './components/GoogleLoginButton';
import Profile from './components/Profile';
import VerifyCode from './components/VerifyCode';
import ChatBot from './components/bot';
import Steps1 from './components/QuizzSteps/Steps1';
import Steps2 from './components/QuizzSteps/Steps2';
import Steps3 from './components/QuizzSteps/Steps3';
import Steps4 from './components/QuizzSteps/Steps4';
import Steps5 from './components/QuizzSteps/Steps5';


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


           <Route path="/step1" element={<Steps1 />} />
           <Route path="/step2" element={<Steps2 />} />
           <Route path="/step3" element={<Steps3 />} />
           <Route path="/step4" element={<Steps4 />} />
           <Route path="/step5" element={<Steps5 />} />


        </Routes>
      </BrowserRouter>
  </GoogleOAuthProvider>
  
);

export default App;
