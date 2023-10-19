import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from 'store';
import { sendMessage } from 'store/room/room.actions';

import { roomChatSchema } from 'utilities';

import { IMessageData } from 'types';

const useRoomForm = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    reset,
  } = useForm<IMessageData>({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(roomChatSchema),
  });

  const handleFormSubmit = (data: IMessageData) => {
    reset();

    dispatch(sendMessage(data));
  };

  return {
    handleSubmit,
    handleFormSubmit,
    control,
  };
};

export type UseRoomFormContainerType = ReturnType<typeof useRoomForm>;

export default useRoomForm;
