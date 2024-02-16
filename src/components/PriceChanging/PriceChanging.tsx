import { Percentage, Wrapper } from './styled';

interface PriceChangingProps {
  percentage: number;
}

const PriceChanging: React.FC<PriceChangingProps> = ({ percentage }) => {
  const loss = percentage < 0;

  return (
    <Wrapper data-loss={loss || undefined}>
      <Percentage>
        {loss ? '' : '+'}
        {percentage}%
      </Percentage>
    </Wrapper>
  );
};

export default PriceChanging;
