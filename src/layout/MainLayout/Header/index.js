import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Logo from 'components/Logo';
import { AppBar, IconButton, Toolbar, useMediaQuery, Stack, Chip } from '@mui/material';

// project import
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { MiniHeaderIcon } from 'icons/MiniHeaderIcon';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

    const iconBackColor = 'grey.100';
    const iconBackColorOpen = 'grey.200';

    // common header
    const mainHeader = (
        <Toolbar>
            <Stack width="100%" direction="row" justifyContent="space-between" padding="20px">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Logo />
                    <Chip label="AIAdvert" className="text-[24px] bg-white" component="a" clickable />
                </Stack>
                <IconButton
                    disableRipple
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    color="secondary"
                    sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 } }}
                >
                    {!open ? <MiniHeaderIcon /> : <MiniHeaderIcon />}
                </IconButton>
            </Stack>
            {/* <HeaderContent /> */}
        </Toolbar>
    );

    // app-bar params
    const appBar = {
        position: 'fixed',
        color: 'inherit',
        elevation: 0,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`
            // boxShadow: theme.customShadows.z1
        }
    };

    return <>{matchDownMD && <AppBar {...appBar}>{mainHeader}</AppBar>}</>;
};

Header.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func
};

export default Header;
