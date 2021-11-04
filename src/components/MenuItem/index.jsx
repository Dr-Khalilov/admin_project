import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';
import UserIcon from '@material-ui/icons/Group';
import ImageIcon from '@material-ui/icons/Image';
import PortIcon from '@material-ui/icons/Bookmark';
import TagIcon from '@material-ui/icons/TagFaces';
import RoleIcon from '@material-ui/icons/Public';

export const MenuItem = (props) => (
    <Menu {...props} >
        <DashboardMenuItem />
        <MenuItemLink to='/posts' primaryText='Posts' leftIcon={<BookIcon />} />
        <MenuItemLink to='/user' primaryText='Users' leftIcon={<UserIcon />} />
        <MenuItemLink to='/contact' primaryText='Contacts' leftIcon={<PeopleIcon />} />
        <MenuItemLink to='/portfolio' primaryText='Portfolios' leftIcon={<PortIcon />} />
        <MenuItemLink to='/media' primaryText='Media' leftIcon={<ImageIcon />} />
        <MenuItemLink to='/tags' primaryText='Tags' leftIcon={<TagIcon />} />
        <MenuItemLink to='/role' primaryText='Roles' leftIcon={<RoleIcon />} />
    </Menu>
);