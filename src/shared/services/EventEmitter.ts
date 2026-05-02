type EventCallback = (...args: unknown[]) => void;

export class EventEmitter {
  private events: Map<string, EventCallback[]> = new Map();

  on(eventName: string, callback: EventCallback): void {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName)!.push(callback);
  }

  once(eventName: string, callback: EventCallback): void {
    const onceWrapper = (...args: unknown[]) => {
      callback(...args);
      this.off(eventName, onceWrapper);
    };
    this.on(eventName, onceWrapper);
  }

  off(eventName: string, callback: EventCallback): void {
    if (!this.events.has(eventName)) return;

    const callbacks = this.events.get(eventName)!;
    const index = callbacks.indexOf(callback);

    if (index > -1) {
      callbacks.splice(index, 1);
    }
  }

  emit(eventName: string, ...args: unknown[]): void {
    if (!this.events.has(eventName)) return;

    const callbacks = this.events.get(eventName)!;
    callbacks.forEach(callback => callback(...args));
  }

  removeAllListeners(eventName?: string): void {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
  }
}
