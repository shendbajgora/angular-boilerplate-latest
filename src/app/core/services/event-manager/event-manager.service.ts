import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  private events = new Map<string, BehaviorSubject<any>>();

  private subscriptions = new Map<string, Subscription>();

  register(name: string, value: any = null): void {
    const {events} = this;

    if (events.has(name)) {
      throw new Error(`Event: "${name}" already exists.`);
    }

    events.set(name, new BehaviorSubject<any>(value));
  }

  publish(name: string, data: any): void {
    const {events} = this;

    if (!events.has(name)) {
      throw new Error(`Event: "${name}" not found`);
    }

    events.get(name)?.next(data);
  }

  subscribe(name: string, callback: (data?: any) => void): Subscription {
    const {events, subscriptions} = this;

    if (!events.has(name)) {
      this.register(name);
    }

    const subject = events.get(name);
    const subscription = subject?.subscribe(callback) as Subscription;

    subscriptions.set(name, subscription);

    return subscription;
  }

  unsubscribe(name: string): void {
    const {events, subscriptions} = this;

    if (events.has(name)) {
      events.get(name)?.unsubscribe();
      events.delete(name);
    }

    if (subscriptions.has(name)) {
      subscriptions.get(name)?.unsubscribe();
      subscriptions.delete(name);
    }
  }
}
