import { css } from '@linaria/core';

import { TEXT, COLOR } from 'uikit/vars';

import toastify from './vendor/toastify';

export default css`
  :global() {
    ${toastify};

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      box-shadow: none;
    }

    *:focus {
      outline: none;
    }

    body {
      margin: 0;
      height: 100%;

      background: var(${COLOR.BG});

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &.modal_opened {
        overflow: hidden;
      }
    }

    body,
    button,
    input {
      font-family: Play, arial, serif;
      ${TEXT.MAIN};
      color: var(${COLOR.MAIN});
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;
