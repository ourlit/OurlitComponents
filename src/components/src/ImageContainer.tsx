import React from 'react';
import Box from '@mui/material/Box';
import { ImageContainerProps } from './types/types';

const OurlitImageContainer = ({
    src, alt, width, height, borderRadius
}: ImageContainerProps) => {

  const altInUse = alt ? alt : '';
  const widthInUse = width ? width : '100%';
  const heightInUse = height ? height : '100%';
  const borderRadiusInUse = borderRadius ? borderRadius : '0px';

  return (
    <Box
      component="div"
      sx={{
        display: 'inline-block',
        overflow: 'hidden',
        borderRadius: borderRadiusInUse,
        lineHeight: 0, // Remove extra space below the image
      }}
    >
      <img
        src={src}
        alt={altInUse}
        style={{
          width: widthInUse,
          height: heightInUse,
          display: 'block',
        }}
      />
    </Box>
  );
};

export default OurlitImageContainer;
