import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Typography } from '@mui/material';
import SessionTitle from './SessionTitle';

export default function OnlineFriends() {
  return (
    <div>
        <SessionTitle>Online Friends</SessionTitle>
        <AvatarGroup total={24} sx={{justifyContent: "start"}}>
          <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/81265552?v=4" />
          <Avatar alt="Travis Howard" src="https://avatars.githubusercontent.com/u/81265552?v=4" />
          <Avatar alt="Agnes Walker" src="https://avatars.githubusercontent.com/u/81265552?v=4" />
          <Avatar alt="Trevor Henderson" src="https://avatars.githubusercontent.com/u/81265552?v=4" />
        </AvatarGroup>
    </div>
  );
}