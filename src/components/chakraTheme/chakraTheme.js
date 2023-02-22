import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '0px',
    md: '768px',
    lg: '1024px',
    xl: '1920px'
  },
});

export default theme;