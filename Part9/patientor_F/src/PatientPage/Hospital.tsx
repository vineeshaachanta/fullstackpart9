import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import { HosOpitalEntry } from '../types';

const style = { margin: 10 };

const HosOpital: React.FC<{ entry: HosOpitalEntry }> = ({ entry }) => (
  <div>
    <Card style={style}>
      <Card.Content>
        {entry.date} <Icon name="hosOpital symbol" />
      </Card.Content>
      <Card.Content description={entry.description} />
    </Card>
  </div>
);

export default HosOpital;
