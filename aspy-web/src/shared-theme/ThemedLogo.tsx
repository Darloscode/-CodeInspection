import React from 'react';
import { useColorScheme } from '@mui/material/styles';

const ThemedLogo = () => {
  const { mode } = useColorScheme();

  // Define las imágenes para los modos light y dark
  const lightImage = 'src/assets/logo mediano.png';
  const darkImage = 'src/assets/logo aspy negativo mediano.png';

  // Selecciona la imagen según el modo actual
  const imageSrc = mode === 'light' ? lightImage : darkImage;

  return (
    <img
      src={imageSrc}
      alt="Themed"
      /* style={{ width: '100%', height: 'auto' }} */
    />
  );
};

export default ThemedLogo;