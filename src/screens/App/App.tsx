import * as React from 'react';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Wrapper } from './styled';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <Wrapper data-text-error>
      <h1>Vite + React + Redux + Found + Linaria</h1>

      <p>+ custom uikit</p>

      <Button
        type='button'
        variant='primary'
        onClick={() => setCount(count => count + 1)}
      >
        count is {count}
      </Button>

      <Button
        type='button'
        variant='outline'
        onClick={() => {
          alert.success({
            title: 'Sample message',
            msg: 'Sample description',
          });
        }}
      >
        toast
      </Button>
    </Wrapper>
  );
}

export default App;
