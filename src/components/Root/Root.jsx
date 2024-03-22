import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;