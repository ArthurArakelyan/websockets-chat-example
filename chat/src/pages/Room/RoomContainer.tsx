import Room from './Room';

import useRoom from './useRoom';

const RoomContainer = () => {
  const props = useRoom();

  return (
    <Room {...props} />
  );
};

export default RoomContainer;
