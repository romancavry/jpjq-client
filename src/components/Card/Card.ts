import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT } from 'uikit/vars';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;

  background: var(${COLOR.WHITE});
  border-radius: 20px;

  &[data-row] {
    flex-direction: row;
  }

  &[data-with-margin] {
    margin-bottom: 20px;
  }

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 30px;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 24px;

  ${TEXT.H4};
  font-weight: 600;
  color: var(${COLOR.MAIN});

  &[data-no-margin] {
    margin-bottom: 0;
  }
`;
