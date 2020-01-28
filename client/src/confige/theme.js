import {createMuiTheme} from "@material-ui/core";


const theme = (() => {

    return createMuiTheme({
        direction: 'rtl',
        palette: {
            type: 'light',
        },
        typography: {
            fontFamily: [
                '"IRANSansWeb"',
            ].join(',')
        },
        overrides: {
            MuiSlider: {
                root: {
                    color: "#ca0c85"
                }
            }
        }
    });
})();
export default theme;