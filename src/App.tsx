import { Suspense, type Component } from 'solid-js';

import AppRouter from './router';

const App: Component = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
