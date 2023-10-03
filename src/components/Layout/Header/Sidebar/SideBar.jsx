import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import { NavLink } from 'react-router-dom';
import ContactContainer from '../../Footer/Contact/ContactContainer';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NavItem from '../Navbar/NavItem';



const SideBar = () => {

    const [t] = useTranslation('global')

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className='font-semibold'>

                <ListItem disablePadding>
                    <ListItemButton>
                        <NavItem nombre={t('navbar.about')} to='/about' className={'w-full'}/>
                    </ListItemButton>
                </ListItem>
                
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavItem nombre={t('navbar.puppies')} to='/puppies' className={'w-full'}/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <NavItem nombre={t('navbar.contact')} to='/contact' className={'w-full'}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            {/* <ContactContainer/> */}
        </Box>
    );
    
    return (
        <div className='lg:hidden'>
            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>
                    <ListIcon fontSize='large' color='action'/>
                </Button>
                <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                >
                {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default SideBar

