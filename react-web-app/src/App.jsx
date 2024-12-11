import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './components/ModalContext'; // Импорт провайдера
import HomePage from './components/HomePage';
import ContactPage from './components/contacts/ContactPage';
import CustomModal from './components/Modal'; // Импорт модального окна

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <CustomModal /> {/* Модальное окно */}
      </Router>
    </ModalProvider>
  );
}

export default App;