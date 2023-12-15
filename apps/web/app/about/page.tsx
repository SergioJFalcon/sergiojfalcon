import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export default function AboutPage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" gutterBottom>
            About Page
        </Typography>
        <Typography variant="body1" gutterBottom>
            Sergio Falcon
        </Typography>
        <Typography variant="body2" gutterBottom>
            Full Stack Developer
        </Typography>
        {/* TODO: Add bio here */}
        <Typography variant="body2" gutterBottom>
            Climbing and developing be my passion
        </Typography>
        {/* TODO: Add Resume */}
        <br />
        <Stack direction="row" spacing={1}>
            <IconButton href='https://www.github.com/sergiojfalcon'>
                <GithubIcon />
            </IconButton>
            <IconButton href='https://www.youtube.com/@powersergio'>
                <YouTubeIcon />
            </IconButton>
            <IconButton href='https://www.twitter.com/sergiojfalcon'>
                <TwitterIcon />
            </IconButton>
            <IconButton href='https://www.instagram.com/sergiojfalcon'>
                <InstagramIcon />
            </IconButton>
            <IconButton href='https://www.facebook.com/sergiojfalcon'>
                <FacebookIcon />
            </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}