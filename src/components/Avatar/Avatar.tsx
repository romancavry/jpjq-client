import * as React from 'react';

import { getRandomIndex } from 'modules/common';

import { Wrapper, Image, Initials, colors } from './styled';

export interface AvatarProps {
  src?: string;
  className?: string;
  title?: string;
  size?: number;
  borderSize?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  onClick,
  size = 40,
  title,
  borderSize = 0,
  ...rest
}) => {
  const [noAvatar, setNoAvatar] = React.useState(false);

  const initials = React.useMemo(() => {
    if (!title) return 'QQ';

    const initials = title.length > 1 ? `${title[0]}${title[1]}` : title[0];

    return initials.toUpperCase();
  }, [title]);

  return (
    <Wrapper
      size={size}
      borderSize={borderSize}
      onClick={onClick}
      className={className}
      background={colors[getRandomIndex(colors.length)]}
      {...rest}
    >
      <Initials>{initials}</Initials>

      {src && !noAvatar ? (
        <Image onError={() => setNoAvatar(true)} src={src} loading='lazy' />
      ) : null}
    </Wrapper>
  );
};

export default React.memo(Avatar);
