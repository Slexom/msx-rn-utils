import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isTablet} from "../isTablet";

/**
 * Scale font size based on device OS and type
 * @param {number} size
 * @returns {number}
 */
export const normalizeSize = size => {
    const {width, height} = Dimensions.get('window');
    /* Based on Honor 8X screen */
    const scale = width / 360;
    const newSize = size * scale;
    const fontSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
    const tabletModifier = -8;
    const iOSModifier = 2;
    return isTablet()
        ? Platform.OS === "ios"
            ? fontSize + tabletModifier + iOSModifier
            : fontSize + tabletModifier
        : Platform.OS === "ios"
            ? fontSize + iOSModifier
            : fontSize;
};
