import { FC } from 'react';
import { Avatar } from '@material-ui/core';

import { formatMessageDate } from 'helpers';

import { IUserMessageProps } from './types';

import styles from './UserMessage.module.scss';

const UserMessage: FC<IUserMessageProps> = ({ message }) => {
  return (
    <div className={styles['user-message']}>
      <Avatar className={styles['user-message__avatar']}>
        {message.userName[0]}
      </Avatar>

      <div className={styles['user-message__content-wrapper']}>
        <div className={styles['user-message__display-name']}>
          {message.userName}
        </div>

        <div className={styles['user-message__content']}>
          <div>
            <p className={styles['user-message__text']}>
              {message.message}
            </p>
          </div>

          <span className={styles['user-message__date']}>
            {formatMessageDate(message.date)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
