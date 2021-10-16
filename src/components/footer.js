import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import StyledFab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';

const Footer = () => {
  return (
    <footer>
      <div>
        <Toolbar>
          <div className="tabIcon">
            <Badge badgeContent={4} color="primary">
              <LocalPhoneIcon color="action" />
            </Badge>
          </div>
          <div className="tabIcon">
            <PersonOutlineIcon />
          </div>
          <div className="tabIcon">
            <StyledFab color="secondary" aria-label="keypad">
              <AppsIcon />
            </StyledFab>
          </div>
          <div className="tabIcon">
            <SettingsOutlinedIcon />
          </div>
          <div className="tabIcon">
            <VoicemailIcon />
          </div>
        </Toolbar>
      </div>
    </footer>
  );
};

export default Footer;