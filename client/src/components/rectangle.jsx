import React from 'react';
import { Box } from '@mui/material';

const Rectangle = ({
  heightProportion = 1,
  children,
  sx,
  ...BoxProps
}) => (
  <Box
    sx={[
      {
        pt: `${heightProportion * 100}%`,
        position: 'relative',
      },
      ...(sx instanceof Array ? sx : [sx]),
    ]}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...BoxProps}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Rectangle;
