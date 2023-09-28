import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoIubenda.web.ts
// and on native platforms to ExpoIubenda.ts
import ExpoIubendaModule from './ExpoIubendaModule';
import ExpoIubendaView from './ExpoIubendaView';
import { ChangeEventPayload, ExpoIubendaViewProps } from './ExpoIubenda.types';

// Get the native constant value.
export const PI = ExpoIubendaModule.PI;

export function hello(): string {
  return ExpoIubendaModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoIubendaModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoIubendaModule ?? NativeModulesProxy.ExpoIubenda);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoIubendaView, ExpoIubendaViewProps, ChangeEventPayload };
