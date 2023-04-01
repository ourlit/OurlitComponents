import React from 'react';
import { SvgIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';

import { OurlitIconProps } from './types/types';


const OurlitIcon = ({ size, type }: OurlitIconProps) => {

    const iconSize = (() => {
        switch (size) {
            case 'small':
                return 30;
            case 'medium':
                return 38;
            case 'large':
                return 52;
            default:
                if (size && parseInt(size)) return parseInt(size);
                return 30;
        }
    })();

    const icon = (() => {
        switch (type) {
            case 'home':
                return <HomeIcon />;
            case 'menu':
                return <MenuIcon />;
            case 'search':
                return <SearchIcon />;
            case 'account':
                return <AccountCircleIcon />;
            case 'settings':
                return <SettingsIcon />;
            case 'add':
                return <AddIcon />;
            case 'edit':
                return <EditIcon />;
            case 'delete':
                return <DeleteIcon />;
            case 'check':
                return <CheckIcon />;
            case 'close':
                return <CloseIcon />;
            case 'refresh':
                return <RefreshIcon />;
            case 'star':
                return <StarIcon />;
            case 'notifications':
                return <NotificationsIcon />;
            case 'send':
                return <SendIcon />;
            default:
                return <HomeIcon />;
        }
    })();

    return (
        <SvgIcon sx={{ fontSize: iconSize }}>
            {icon}
        </SvgIcon>
    );
};

export default OurlitIcon;
