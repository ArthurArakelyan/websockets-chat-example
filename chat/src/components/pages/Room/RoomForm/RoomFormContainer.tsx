import RoomForm from './RoomForm';

import useRoomForm from './useRoomForm';

const RoomFormContainer = () => {
  const props = useRoomForm();

  return (
    <RoomForm {...props} />
  );
};

export default RoomFormContainer;
