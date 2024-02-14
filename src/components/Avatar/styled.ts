import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const colors = [
  '#EF6C00',
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF5722',
];

export const Wrapper = styled.div<{
  borderSize: number;
  background: string;
  size: number;
}>`
  position: relative;

  display: flex;
  margin: 2px;
  min-width: ${p => p.size}px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;

  border-radius: 50%;
  overflow: hidden;
  background: ${p => p.background};
  border: ${p => p.borderSize}px solid var(${COLOR.PALE});
  outline: 1px solid var(${COLOR.MAIN});
  outline-offset: 1px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  min-width: 100%;
  object-fit: cover; // for avatars with different height and width
`;

export const Initials = styled.p`
  margin: auto;

  ${TEXT.MAIN};
  text-align: center;
  color: var(${COLOR.WHITE});
`;
