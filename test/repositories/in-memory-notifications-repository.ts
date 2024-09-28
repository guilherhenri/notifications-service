import type { Notification } from '@app/entities/notification';
import type { NotificationsRepository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(id: string) {
    const notification = this.notifications.find((n) => n.id === id);

    if (!notification) {
      return null;
    }

    return notification;
  }

  async countManyByRecipientId(recipientId: string) {
    const count = this.notifications.filter(
      (n) => n.recipientId === recipientId,
    ).length;

    return count;
  }

  async findManyByRecipientId(recipientId: string) {
    const notifications = this.notifications.filter(
      (n) => n.recipientId === recipientId,
    );

    return notifications;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification) {
    const index = this.notifications.findIndex((n) => n.id === notification.id);

    if (index >= 0) {
      this.notifications[index] = notification;
    }
  }
}
