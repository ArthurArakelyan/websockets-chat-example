import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import { addMessage } from 'store/room/room.actions';

import { socket } from 'utilities';

import { IMessage } from 'types';

const useRoom = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const messagesRef = useRef<HTMLDivElement>(null);

  const { messages, room } = useAppSelector((state) => state.room);

  useEffect(() => {
    if (!room) {
      navigate(params.id ? `/?room=${params.id}` : '/');
    }

    const handleChat = (data: IMessage) => {
      dispatch(addMessage({
        ...data,
        from: 'user',
      }));
    };

    socket.on(`chat:${room?.id || params.id}`, handleChat);

    return () => {
      socket.off(`chat:${room?.id || params.id}`, handleChat);
    };
  }, [params, room]);

  useEffect(() => {
    setTimeout(() => {
      if (messagesRef.current) {
        messagesRef.current.scroll({ top: messagesRef.current.scrollHeight, behavior: 'auto' });
      }
    }, 0);
  }, [messages, room, params]);

  return {
    messages,
    messagesRef,
  };
};

export type UseRoomContainerType = ReturnType<typeof useRoom>;

export default useRoom;
