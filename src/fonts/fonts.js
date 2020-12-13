import { createGlobalStyle } from 'styled-components';

import Cinematografica from './Cinematografica-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Cinematografica';
        src: local('./CinematograficaRegular.ttf'), local('./Cinematografica-Regular.ttf'),
        url(${Cinematografica}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;