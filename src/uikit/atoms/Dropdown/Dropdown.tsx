import * as React from 'react';
import Popover from '@yumkit/popover';

import { Content, Transition } from './components';
import { modifiers } from './utils';

const triggerMap = {
  focus: 'focus',
  click: 'click-autoclose',
  hover: 'hover-interactive',
};

type PopoverProps = React.ComponentProps<typeof Popover>;

export interface DropdownProps {
  opened?: PopoverProps['opened'];
  usePortal?: PopoverProps['usePortal'];
  placement?: PopoverProps['placement'];
  trigger?: 'click' | 'manual' | 'focus' | 'hover';
  tether?: boolean;
  overflowBoundary?: PopoverProps['overflowBoundary'];
  children: PopoverProps['children'];
  className?: string;
  hideOnClick?: boolean;
  renderContent: PopoverProps['renderContent'];
  maxWidth?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  opened,
  /*
  This prop is disabled by default, because
  due to our custom scroll behaviour it causes
  dropdown to lag on normal pages during scroll.

  However, it is useful in containers with small
  height which prevent overflow, e.g. <Modal />
  */
  usePortal = true,
  placement = 'bottom',
  trigger = 'click',
  tether,
  overflowBoundary,
  children,
  className,
  hideOnClick = false,
  renderContent,
  maxWidth,
  ...rest
}) => (
  <Popover
    usePortal={usePortal}
    placement={placement}
    // @ts-ignore
    trigger={triggerMap[trigger]}
    opened={opened}
    tether={tether}
    modifiers={modifiers}
    overflowBoundary={overflowBoundary}
    portalTarget={document.getElementById('portal') || undefined}
    renderDropdown={props => <Transition usePortal={usePortal} {...props} />}
    renderContent={props => (
      <Content
        {...props}
        maxWidth={maxWidth}
        className={className}
        hideOnClick={hideOnClick}
        {...rest}
      >
        {renderContent(props)}
      </Content>
    )}
  >
    {children}
  </Popover>
);

export default Dropdown;
