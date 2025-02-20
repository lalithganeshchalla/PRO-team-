import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedRole(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        pl: 36,
      }}
    >
      <Box
        sx={{
          bgcolor: '#a3ff8f',
          borderRadius: '50px',
          padding: '5px',
          display: 'flex',
          width: '350px',
          height: '50px',
          alignItems: 'center',
        }}
      >
        <Tabs
          value={selectedRole}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { display: 'none' },
          }}
          sx={{
            width: '100%',
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 'bold',
              minWidth: 'auto',
              flex: 1,
              height: '50%',
              fontSize: '14px',
            },
            '& .Mui-selected': {
              color: '#fff !important',
              backgroundColor: '#008000',
              borderRadius: '30px',
            },
          }}
        >
          <Tab label="Candidate" />
          <Tab label="Judge" />
          <Tab label="Recruiter" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default RoleSelector;
