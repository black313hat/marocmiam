import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { onForegroundMessage } from './firebase';
import toast from 'react-hot-toast';
// Handle foreground notifications
onForegroundMessage((payload) => {
  const { title, body } = payload.notification;
  toast(
    <div>
      <p style={{ fontWeight: '700', marginBottom: '4px' }}>{title}</p>
      <p style={{ fontSize: '13px', color: '#666' }}>{body}</p>
    </div>,
    {
      duration: 5000,
      icon: '🔔',
      style: { borderRadius: '12px', padding: '12px 16px' },
    }
  );
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)