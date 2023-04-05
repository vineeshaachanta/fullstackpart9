import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import { OccupationalOHealthcareEntry } from '../types';

const style = { margin: 10 };

const OccupationalOHealthcare: React.FC<{
  entry: OccupationalOHealthcareEntry;
}> = ({ entry }) => (
  <div>
    <Card style={style}>
      <Card.Content>
        {entry.date} <Icon name="user doctor" />
      </Card.Content>
      <Card.Content description={entry.description} />
    </Card>
  </div>
);

export default OccupationalOHealthcare;
