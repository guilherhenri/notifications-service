import { randomUUID } from 'node:crypto';

import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade.'),
      category: 'notification',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
