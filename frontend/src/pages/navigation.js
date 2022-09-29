import { Fragment } from 'react';
import { Outlet} from 'react-router-dom';

import Header from '../components/Header'
import Footer from '../components/Footer';

const Navigation = () => {

    return (
        <Fragment>
            <Header />
            <div className="body-with-topnav" style={{ height: '80vh', width: '100vw'}}>
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Navigation;
