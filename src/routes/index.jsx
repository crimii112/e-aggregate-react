import { Routes, Route } from 'react-router-dom';

import URL from '@/constants/url';

import Main from '@/pages/main/Main';

const RootRoutes = () => {
  return (
    <>
      <Routes>
        {/* MAIN */}
        <Route path={URL.MAIN} element={<Main />} />
      </Routes>
    </>
  );
};

export default RootRoutes;
