import * as React from 'react';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { createTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Love from './Love';
import Neutral from './Neutral';
import Happy from './Happy';
import Worst from './Worst';
import Poor from './Poor';


const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <Worst />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <Poor />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <Neutral />,
    label: 'Neutral',
  },
  4: {
    icon: <Happy />,
    label: 'Satisfied',
  },
  5: {
    icon: <Love />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  padding: theme.spacing(),
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <Stack direction="row" spacing={20}>
        <Item>
          <Stack>
            <Typography>ADO Id</Typography>
            <Typography>109876389</Typography>
          </Stack>
        </Item>
        <Item>
          <Stack>
            <Typography>System Name</Typography>
            <Typography>Cybr Hub</Typography>
          </Stack>
        </Item>
        <Item>
          <Stack>
            <Typography>Requestor</Typography>
            <Typography>Sheriff, Kousher</Typography>
          </Stack>
        </Item>
      </Stack>
      <Box
        sx={{
          margin: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2}>
          <Typography>
            How was your end to end security architecture review process?
          </Typography>
          <Stack direction="row" spacing={2}>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={5}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Stack>
          <TextField
            id="outlined-multiline-static"
            label="Comments"
            multiline
            rows={2}
            placeHolder
          />
        </Stack>
      </Box>
      <Box
        sx={{
          margin: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2}>
          <Typography>
            How engaging was the security architect during the overall process?
          </Typography>
          <Stack direction="row" spacing={2}>
            <StyledRating
              name="highlight-selected-only"
              defaultValue={5}
              IconContainerComponent={IconContainer}
              getLabelText={(value: number) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Stack>
          <TextField
            id="outlined-multiline-static"
            label="Comments"
            multiline
            rows={2}
            placeHolder
          />
        </Stack>
      </Box>
      <Box
        sx={{
          margin: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2}>
          <Typography>Any other feedback if you would like to add</Typography>
          <TextField
            id="outlined-multiline-static"
            label="Comments"
            multiline
            rows={2}
            placeHolder
          />
        </Stack>
      </Box>
      <Box
        sx={{
          margin: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2}>
          <Typography>Would you like us to connect with you for your feedback?</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>No</Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>Yes</Typography>
          </Stack>
        </Stack>
      </Box>
      <center>
        <Button variant="outlined">Submit</Button>
      </center>
    </>
  );
}
