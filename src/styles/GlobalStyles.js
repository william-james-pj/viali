import { createGlobalStyle } from 'styled-components';
import * as color from '../config/colors';

export default createGlobalStyle`
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
