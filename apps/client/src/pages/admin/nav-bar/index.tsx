import { Grid } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';

export const AdminNav = () => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(true);
  const nav = useNavigate();

  const listIcon = [
    [<GroupIcon />, 'Users'],
    [<CategoryIcon />, 'Products'],
    [<AutoStoriesIcon />, 'Orders'],
    [<ReceiptLongIcon />, 'Invoices'],
    [<SupportAgentIcon />, 'Support'],
    [<BarChartIcon />, 'Stats'],
  ];

  return (
    <Grid
      display="flex"
      flexDirection="column"
      bgcolor="#f7a2ab"
      sx={{ objectFit: 'contain', width: !isBarOpen ? 'unset' : '8vh' }}
    >
      {isBarOpen ? (
        <Button onClick={() => setIsBarOpen(!isBarOpen)}>
          <ArrowForward />
        </Button>
      ) : (
        <Button onClick={() => setIsBarOpen(!isBarOpen)}>
          <ArrowBack />
        </Button>
      )}
      {isBarOpen &&
        listIcon.map((icon, index) => (
          <Button sx={{ marginTop: '4vh' }} onClick={() => nav(listIcon[index][1].toString().toLowerCase())}>
            {icon[0]}
          </Button>
        ))}
      {!isBarOpen &&
        listIcon.map((section, index) => (
          <Button sx={{ marginTop: '4vh' }} onClick={() => nav(listIcon[index][1].toString().toLowerCase())}>
            {section[0]}&nbsp;&nbsp;{section[1]}
          </Button>
        ))}
    </Grid>
  );
};
