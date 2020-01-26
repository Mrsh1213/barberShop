import {createMuiTheme, createPalette} from "@material-ui/core";
import IRANSansWeb from "../assets/fonts/iransans/IRANSansWeb.ttf";


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