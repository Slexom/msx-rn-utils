import {Dimensions, PixelRatio} from "react-native";

/**
 * Check if device is a tablet or not
 * @returns {boolean|boolean}
 */
export const isTablet = () => {
    const {width: w, height: h} = Dimensions.get("window");
    let pixelDensity = PixelRatio.get();
    const adjustedWidth = w * pixelDensity;
    const adjustedHeight = h * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else
        return (
            pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
        );
};
