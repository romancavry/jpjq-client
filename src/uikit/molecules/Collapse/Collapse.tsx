import * as React from 'react';
import { Collapse as ReactCollapse, UnmountClosed } from 'react-collapse';

import { OpeningArrow } from 'uikit/molecules';

import { Content, Header, Title, Wrapper } from './styled';

export interface CollapseProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  forceOpened?: boolean;
  noContentPadding?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChangeCallback?: (newOpened: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  hideIcon?: boolean;
  unmountClosed?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

const Collapse: React.FC<CollapseProps> = ({
  children,
  defaultOpen = false,
  forceOpened,
  title,
  noContentPadding = false,
  onChangeCallback,
  onClick,
  icon,
  hideIcon,
  unmountClosed,
  headerClassName,
  contentClassName,
  ...rest
}) => {
  const [opened, setOpened] = React.useState(defaultOpen);

  React.useEffect(() => {
    if (typeof forceOpened === 'boolean') {
      setOpened(forceOpened);
    }
  }, [forceOpened]);

  const handleClick = () => {
    if (typeof forceOpened !== 'boolean') {
      setOpened(!opened);
    }

    if (onChangeCallback) {
      onChangeCallback(!opened);
    }
  };

  return (
    <Wrapper onClick={onClick} {...rest}>
      <Header
        data-opened={opened ? true : undefined}
        onClick={handleClick}
        className={headerClassName}
      >
        <Title data-opened={opened ? true : undefined}>{title}</Title>

        {!hideIcon && (
          <OpeningArrow icon={icon} setOpened={setOpened} opened={opened} />
        )}
      </Header>

      {unmountClosed ? (
        <UnmountClosed isOpened={opened}>
          <Content
            data-opened={opened ? true : undefined}
            data-no-padding={noContentPadding ? true : undefined}
            className={contentClassName}
          >
            {children}
          </Content>
        </UnmountClosed>
      ) : (
        <ReactCollapse isOpened={opened}>
          <Content
            data-opened={opened ? true : undefined}
            data-no-padding={noContentPadding ? true : undefined}
            className={contentClassName}
          >
            {children}
          </Content>
        </ReactCollapse>
      )}
    </Wrapper>
  );
};

export default Collapse;
