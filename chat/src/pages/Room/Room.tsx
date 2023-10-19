import { FC } from 'react';
import { Box, Container, Paper } from '@material-ui/core';

import { MyMessage, UserMessage, RoomForm } from 'components';

import { UseRoomContainerType } from './useRoom';

import styles from './Room.module.scss';

const Room: FC<UseRoomContainerType> = ({ messagesRef, messages }) => {
  const messagesContent = (
    messages.map((message) => {
      if (message.from === 'user') {
        return (
          <UserMessage key={message.id} message={message} />
        );
      }

      return (
        <MyMessage key={message.id} message={message} />
      );
    })
  );

  return (
    <Box paddingY="20px" display="flex" alignItems="center" justifyContent="center" minHeight="100dvh">
      <Container>
        <Box className={styles['room-container']}>
          <div>
            <Paper>
              <Box paddingX="20px" paddingTop="20px">
                <Paper>
                  <div
                    ref={messagesRef}
                    className={`${styles['room-messages']} ${!messages.length ? styles['room-messages--empty'] : ''}`}
                  >
                    {messagesContent}
                  </div>
                </Paper>
              </Box>

              <RoomForm />
            </Paper>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Room;
