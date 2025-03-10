import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { DarkMode as DarkIcon, LightMode as LightIcon } from '@mui/icons-material';
import { ColorModeContext } from '../../App';

const ThemeSwitcher: React.FC = () => {
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {localStorage.getItem('theme') === 'dark' ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
