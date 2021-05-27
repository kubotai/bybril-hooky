export interface INotificationManager {
  register(userId?: number): void;
  unregister(): void;
}

export class NotificationManager implements INotificationManager {
  private _lastUserId?: number = undefined;

  register(userId?: number): void {
    this._lastUserId = userId;
    console.log(`notification registered${this.getUserIdInfo()}`);
  }

  unregister(): void {
    console.log(`notification unregistered${this.getUserIdInfo()}`);
  }

  private getUserIdInfo(): string {
    if (!this._lastUserId) {
      return "";
    }

    return ` for userId ${this._lastUserId.toString()}`;
  }
}
