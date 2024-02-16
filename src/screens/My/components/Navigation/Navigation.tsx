import * as React from 'react';
import type { To } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Content, Icon, Item, List, Title, Wrapper } from './styled';

export interface NagivationItem {
  id: string;
  to: To;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
}

interface NavigationProps {
  items: NagivationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => (
  <Wrapper>
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <NavLink to={item.to}>
            {({ isActive }) => (
              <Content data-active={isActive || undefined}>
                <Icon data-active={isActive || undefined}>{item.icon({})}</Icon>

                <Title data-active={isActive || undefined}>{item.title}</Title>
              </Content>
            )}
          </NavLink>
        </Item>
      ))}
    </List>
  </Wrapper>
);

export default Navigation;
