import { defaultTheme } from 'react-admin';
import createMuiTheme from '@material-ui/core/styles/MuiThemeProvider';
import createPalette from '@material-ui/core/styles/createPalette';
import defaultMuiTheme from '@material-ui/core/styles/defaultTheme';
import merge from 'lodash/merge';

const palette = createPalette(
    merge({}, defaultTheme.palette, {
        primary: {
            main: '#ff0266',
        },
        secondary: {
            main: '#00ba00',
        },
    }),
);

const typography = {
    fontFamilySecondary: '\'Poppins\', sans-serif',
    fontFamily: '"Comic Neue", cursive',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    color: palette.text.primary,
};

const rawTheme = {
    palette,
    overrides: {
        RaSidebar: {
            drawerPaper: {
                backgroundColor: palette.common.white,
                color: palette.primary.main,
                height: '100%',
                boxShadow:
                    '2px 0px 1px -1px rgba(0,0,0,0.2), 1px 0px 3px 0px rgba(0,0,0,0.1)',
            },
        },
        MuiButton: {
            root: {
                color: palette.primary.main,
                paddingTop: defaultMuiTheme.spacing(1),
                paddingRight: defaultMuiTheme.spacing(4),
                paddingBottom: defaultMuiTheme.spacing(1),
                paddingLeft: defaultMuiTheme.spacing(4),
                borderRadius: defaultMuiTheme.spacing(4),
            },
            sizeSmall: {
                paddingTop: defaultMuiTheme.spacing(0),
                paddingRight: defaultMuiTheme.spacing(2),
                paddingBottom: defaultMuiTheme.spacing(0),
                paddingLeft: defaultMuiTheme.spacing(2),
            },
            sizeLarge: {
                paddingTop: defaultMuiTheme.spacing(2),
                paddingRight: defaultMuiTheme.spacing(6),
                paddingBottom: defaultMuiTheme.spacing(2),
                paddingLeft: defaultMuiTheme.spacing(6),
            },
            contained: {
                boxShadow: 'none',
            },
            containedPrimary: {
                color: palette.common.white,
                backgroundColor: palette.primary.main,
            },
            containedSecondary: {
                color: palette.common.white,
                backgroundColor: palette.secondary.main,
            },
            RaMenuItemLink: {
                active: {
                    borderLeftStyle: 'none',
                    borderRightColor: palette.secondary.main,
                    borderRightWidth: defaultMuiTheme.spacing(0.5),
                    borderRightStyle: 'solid',
                    backgroundColor: palette.action.selected,
                    color: palette.primary.main,
                    fontWeight: typography.fontWeightBold,
                },
                icon: {
                    color: 'inherit',
                },
            },
        },
    },
};

export const theme = createMuiTheme(
    merge({}, defaultTheme, rawTheme),
);