import Home from './Home';

import useHome from './useHome';

const HomeContainer = () => {
  const props = useHome();

  return (
    <Home {...props} />
  );
};

export default HomeContainer;
