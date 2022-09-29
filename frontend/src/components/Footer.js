import { Link } from 'react-router-dom';
import {
    IconButton,
    Grid
} from '@mui/material';

import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {  
    return (
        <footer>
            <Grid container sx={{ display: 'flex', flexWrap: 'nowrap'}}>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <span>
                        Copyright 2022<br />
                        Falcon Inc.
                    </span>
                </Grid>
                <Grid className={"social-media"} sx={{ display: 'flex' }}>
                    <IconButton href='https://www.youtube.com/channel/UCJIWiRX8XXC5CPP06seKf6w'>
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
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to='/contact' style={{ color: 'black', textDecoration: 'none' }}>Contact</Link>
                </Grid>
            </Grid>
        </footer>
    )
};

export default Footer;
