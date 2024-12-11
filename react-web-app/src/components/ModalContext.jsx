import * as React from 'react';

const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, handleModalOpen, handleModalClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => React.useContext(ModalContext);