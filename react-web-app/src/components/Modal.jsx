import * as React from 'react';
import { Modal, Fade, Backdrop, Box, Typography, Button } from '@mui/material';
import { useModal } from './ModalContext'; // Импорт контекста

function CustomModal() {
  const { openModal, handleModalClose } = useModal();

  return (
    <Modal
      open={openModal}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant='h6' component='h2'>
            Вход / Регистрация
          </Typography>
          <Typography variant='body2' sx={{ mt: 2 }}>
            Здесь можно добавить форму для входа или регистрации.
          </Typography>
          <Button variant='contained' color='primary' onClick={handleModalClose} sx={{ mt: 2 }}>
            Закрыть
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CustomModal;