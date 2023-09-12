import * as React from 'react';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { createTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
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
      <center>
        <Button variant="outlined">Submit</Button>
      </center>
    </>
  );
}
