
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
const Home = () => {
  return (
    <Container sx= {{ width: '100%', height: '100%'}}>
      <h3 style={{ position: 'absolute', left: '44%', top: '50%'}}>under construction...</h3>
      <Outlet />
    </Container>
  );
};

export default Home;
