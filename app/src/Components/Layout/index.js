import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <p>
                this is the main layout
            </p>

            <Outlet />
        </div>

    );
}

export default Layout;