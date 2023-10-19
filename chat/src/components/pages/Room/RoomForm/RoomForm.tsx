import { FC } from 'react';
import { Button, TextField } from '@material-ui/core';

import { UseRoomFormContainerType } from './useRoomForm';

import styles from './RoomForm.module.scss';
import { Controller } from 'react-hook-form';

const RoomForm: FC<UseRoomFormContainerType> = ({ control, handleSubmit, handleFormSubmit }) => {

  return (
    <form
      autoComplete="off"
      className={styles['room-form']}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Controller
        control={control}
        name="message"
        render={({ field: { onChange, value } }) => {
          return (
            <TextField
              onChange={onChange}
              value={value}
              label="Message"
              className={styles['room-form__input']}
            />
          );
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        aria-label="Send"
      >
        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#ffffff">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </Button>
    </form>
  );
};

export default RoomForm;
