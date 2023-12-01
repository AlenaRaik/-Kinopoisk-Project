import { Button } from '#ui/button';
import { useState } from 'react';

type Props = {
  items: Array<{
    id: string;
    title: string;
  }>;
};

export const Menu: React.FC<Props> = ({ items }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? 'Close menu' : 'Open menu'}
      </Button>
      {isOpened && (
        <ul>
          {items.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
