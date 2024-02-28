import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Button } from 'uikit/atoms';
import { variables } from 'uikit/theme';

import { Actions, Content, InfoContainer, Msg, Title, Wrapper } from './styled';

interface ErrorPageProps {
  title: string;
  children?: React.ReactNode;
  msg?: string;
  canUpdatePage?: boolean;
  canMoveToMainPage?: boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  title,
  msg,
  canUpdatePage,
  canMoveToMainPage = true,
  children,
}) => {
  const onReload = React.useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Wrapper>
      <InfoContainer>
        <Content>
          <Title>{title}</Title>

          <Helmet>
            <body className={variables} />
            <title>{title}</title>
          </Helmet>

          {msg && <Msg>{msg}</Msg>}

          {children}

          <Actions>
            {canMoveToMainPage && (
              <a href='/'>
                <Button variant='primary'>На главную</Button>
              </a>
            )}

            {canUpdatePage && (
              <Button onClick={onReload} variant='outline'>
                Обновить страницу
              </Button>
            )}
          </Actions>
        </Content>
      </InfoContainer>
    </Wrapper>
  );
};

export default ErrorPage;
