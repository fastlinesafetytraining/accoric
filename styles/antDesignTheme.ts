import type { ThemeConfig } from "antd";
import { globalLightGray, globalSecondaryColor, globalPrimaryColor, globalBlackToWhiteColor } from "./exportVariables";

const lightTheme: ThemeConfig = {
    token: {
        colorPrimary: '#0c0050',
    },
    components: {
        Segmented: {
            trackBg: globalLightGray,
        },
        Form: {
            labelColor: globalBlackToWhiteColor,
        },
        Input: {
            activeBorderColor: "#0c0050",
            hoverBorderColor: "#0c0050",
        },
        Slider: {
            trackBg: "#0c0050",
            trackHoverBg: "#0c0050",
        },
        Radio: {
            buttonSolidCheckedBg: "#0c0050",
            buttonSolidCheckedHoverBg: "#0c0050",
        },
    }
};

const darkTheme: ThemeConfig = {
    token: {
        colorBgElevated: '#1d2044',
        colorPrimaryHover: globalSecondaryColor,
    },
    components: {
        Segmented: {
            trackBg: '#222a51',
            itemColor: '#ffffff',
            itemHoverColor: '#ffffff',
            itemSelectedBg: globalSecondaryColor,
            itemSelectedColor: '#ffffff',
        },
        Form: {
            labelColor: globalLightGray,
        },
        Slider: {
            trackBg: globalPrimaryColor,
            trackHoverBg: globalPrimaryColor,
            dotBorderColor: '#ffffff',
            dotActiveBorderColor: globalPrimaryColor,
            handleColor: globalPrimaryColor,
        },
        Input: {
            activeBorderColor: globalPrimaryColor,
            hoverBorderColor: "#0c0050",
            activeBg: '#3e4162',
        },
        Radio: {
            buttonSolidCheckedBg: globalPrimaryColor,
            buttonSolidCheckedHoverBg: globalPrimaryColor,
            buttonBg: 'transparent',
            colorPrimary: globalPrimaryColor,
        }
    }
};

export { lightTheme, darkTheme };
