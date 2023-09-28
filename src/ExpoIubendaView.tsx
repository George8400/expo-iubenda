import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoIubendaViewProps } from './ExpoIubenda.types';

const NativeView: React.ComponentType<ExpoIubendaViewProps> =
  requireNativeViewManager('ExpoIubenda');

export default function ExpoIubendaView(props: ExpoIubendaViewProps) {
  return <NativeView {...props} />;
}
