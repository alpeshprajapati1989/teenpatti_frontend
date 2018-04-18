import Login from 'views/Login/Login';
import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';
import Upgrade from 'views/Upgrade/Upgrade';
import AdminProfile from 'views/AdminProfile/AdminProfile';

const appRoutes = [
    { path: "/login", name: "Login", icon: "pe-7s-user", component: Login },
    { path: "/user", name: "Add User", icon: "pe-7s-user", component: UserProfile },
    { path: "/admin", name: "Add Admin", icon: "pe-7s-user", component: AdminProfile },

    { redirect: true, path:"/", to:"/login", name: "Login" }
];

export default appRoutes;
