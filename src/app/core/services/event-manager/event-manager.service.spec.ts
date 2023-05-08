import { TestBed } from '@angular/core/testing';

import { EventManagerService } from '@core/services';

describe('EventManagerService', () => {
  const data: any = {message: 'Hello, world!'};
  const eventName = 'test';
  const callback = jasmine.createSpy('callback');
  let service: EventManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register', () => {
    it('should register a new event', () => {
      service.register(eventName);
      expect(service['events'].has(eventName)).toBeTrue();
    });

    it('should throw an error if event already exists', () => {
      service.register(eventName);
      expect(() => service.register(eventName)).toThrowError('Event: "test" already exists.');
    });
  });

  describe('publish', () => {
    it('should publish to an existing event', () => {
      service.register(eventName);
      service.subscribe(eventName, callback);
      service.publish(eventName, data);
      expect(callback).toHaveBeenCalledWith(data);
    });

    it('should throw an error if event does not exist', () => {
      expect(() => service.publish(eventName, null)).toThrowError('Event: "test" not found');
    });
  });

  describe('subscribe', () => {
    it('should subscribe to an existing event', () => {
      service.register(eventName);
      service.subscribe(eventName, callback);
      service.publish(eventName, data);
      expect(callback).toHaveBeenCalledWith(data);
    });

    it('should register and subscribe to a new event', () => {
      service.subscribe(eventName, callback);
      service.publish(eventName, data);
      expect(callback).toHaveBeenCalledWith(data);
    });
  });

  describe('unsubscribe', () => {
    it('should unsubscribe from an existing event', () => {
      service.subscribe(eventName, callback);
      service.unsubscribe(eventName);
      expect(service['subscriptions'].has(eventName)).toBeFalse();
    });

    it('should do nothing if event does not exist', () => {
      service.unsubscribe(eventName);
      expect(service['subscriptions'].has(eventName)).toBeFalse();
    });
  });
});
