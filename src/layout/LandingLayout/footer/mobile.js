import { Link, Typography, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const items = [
    {
        content: 'Features',
        url: '#'
    },
    {
        content: 'Pricing',
        url: '#'
    },
    {
        content: 'Careers',
        url: '#'
    },
    {
        content: 'Help',
        url: '#'
    },
    {
        content: 'Privacy',
        url: '#'
    },
    {
        content: 'Terms',
        url: '#'
    },
    {
        content: 'Cookies',
        url: '#'
    }
];

const MobileFooter = () => {
    return (
        <>
            <Typography color="#D9D9D9" fontSize="18px">
                sales@aiadvert.net
            </Typography>
            <Stack paddingTop="60px" direction="row" justifyContent="space-between" width="100%">
                <Stack direction="column" spacing={4.5}>
                    {items.map((item, index) => (
                        <Typography
                            variant="subtitle2"
                            key={index}
                            component={Link}
                            underline="hover"
                            target="_blank"
                            href={item.url}
                            color="white"
                            fontSize="18px"
                        >
                            {item.content}
                        </Typography>
                    ))}
                </Stack>
                <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={12} height="100%" width="170px">
                    <Stack direction="column" spacing={4} paddingRight="10px">
                        <Typography variant="subtitle2" component={Link} underline="hover" target="_blank" href={'#'} color="#FFB946">
                            <InstagramIcon fontSize="large" />
                        </Typography>
                        <Typography variant="subtitle2" component={Link} underline="hover" target="_blank" href={'#'} color="#FFB946">
                            <TwitterIcon fontSize="large" />
                        </Typography>
                        <Typography variant="subtitle2" component={Link} underline="hover" target="_blank" href={'#'} color="#FFB946">
                            <FacebookRoundedIcon fontSize="large" />
                        </Typography>
                    </Stack>
                    <Typography color="#D9D9D9" fontSize="18px">
                        © 2023 AI Advert. All rights reserved
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default MobileFooter;
