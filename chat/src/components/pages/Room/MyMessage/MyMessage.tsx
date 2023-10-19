import { FC } from 'react';

import { formatMessageDate } from 'helpers';

import { IMyMessageProps } from './types';

import styles from './MyMessage.module.scss';

const MyMessage: FC<IMyMessageProps> = ({ message }) => {
  return (
    <div className={styles['my-message-wrapper']}>
      <div className={styles['my-message']}>
        <p className={styles['my-message__text']}>
          {message.message}
        </p>

        <span className={styles['my-message__date']}>
          {formatMessageDate(message.date)}
        </span>
      </div>
    </div>
  );
};

export default MyMessage;
