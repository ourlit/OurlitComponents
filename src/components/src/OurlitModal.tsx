import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';

import OurlitButton from './OurlitButton';
import { ModalFadeProps, OurlitModalProps } from './types/types';


const Fade = React.forwardRef<HTMLDivElement, ModalFadeProps>((props, ref) => {
  
  // unpack props
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ...other
  } = props;
  
  // create style for the fade animation
  const animationStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });


  return (
    <animated.div ref={ref} style={animationStyle} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});


const OurlitModal = ({ text, color, size, variant, modalSize, content }: OurlitModalProps) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // resolve size of the modal
  const { modalWidth, modalHeight } = (() => {
    switch (modalSize) {
      case 'small':
        return { modalWidth: '15vw', modalHeight: '15vh' };
      case 'medium':
        return { modalWidth: '30vw', modalHeight: '35vh' };
      case 'large':
        return { modalWidth: '45vw', modalHeight: '50vh' };
      default:
        return { modalWidth: '30vw', modalHeight: '35vh' };
    }
  })();

  const boxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: modalWidth,
    height: modalHeight,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <OurlitButton
        text={text}
        color={color}
        size={size}
        variant={variant}
        onClick={handleOpen}
      />
      
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            {content}
          </Box>
        </Fade>
      </Modal>

    </div>
  );
};


export default OurlitModal;
