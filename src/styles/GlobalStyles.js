import { createGlobalStyle } from 'styled-components';
import * as color from '../config/colors';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        width: 100%;
        height: 100%;
        background-color: ${color.white2};
    }
`;
