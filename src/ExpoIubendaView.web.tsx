import * as React from 'react';

import { ExpoIubendaViewProps } from './ExpoIubenda.types';

export default function ExpoIubendaView(props: ExpoIubendaViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
