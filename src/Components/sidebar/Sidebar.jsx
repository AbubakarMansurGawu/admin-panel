import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className="logo">Lamadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <Person2OutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        <li>
                            <AddBusinessIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <InventoryIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <LogoDevIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
            </div>
        </div>
    )
}

export default Sidebar