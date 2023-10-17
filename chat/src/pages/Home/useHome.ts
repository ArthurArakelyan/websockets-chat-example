import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from 'store';
import { createRoom } from 'store/room/room.actions';

import { roomSchema } from 'utilities';

import { IRoomData } from 'types';

const useHome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
  } = useForm<IRoomData>({
    defaultValues: {
      userName: '',
    },
    resolver: yupResolver(roomSchema),
  });

  const handleFormSubmit = (data: IRoomData) => {
    const id = uuid();

    dispatch(createRoom({
      ...data,
      id,
    }));

    navigate('/room');
  };

  return {
    handleSubmit,
    handleFormSubmit,
    control,
  };
};

export type UseHomeContainerType = ReturnType<typeof useHome>;

export default useHome;
