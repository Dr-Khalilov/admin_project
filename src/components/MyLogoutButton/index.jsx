import { Logout } from 'react-admin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const MyLogoutButton = props => <Logout {...props} icon={<ExitToAppIcon />} />;
