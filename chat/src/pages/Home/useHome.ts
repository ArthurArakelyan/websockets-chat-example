import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from 'store';
import { createRoom } from 'store/room/room.actions';

import { roomSchema } from 'utilities';

import { IRoomData } from 'types';

const useHome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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
    const id = searchParams.get('room') || uuid();

    dispatch(createRoom({
      ...data,
      id,
    }));

    setTimeout(() => {
      navigate(`/room/${id}`);
    }, 0);
  };

  return {
    handleSubmit,
    handleFormSubmit,
    control,
    isJoin: !!searchParams.get('room'),
  };
};

export type UseHomeContainerType = ReturnType<typeof useHome>;

export default useHome;
