import {AsyncStorage} from "react-native";

/**
 *
 * @param {string} key
 * @param {*} value
 * @returns {Promise<void>}
 */
export const storeData = async (key, value) => {
    try {
        if (typeof value === "string") {
            await AsyncStorage.setItem(key, value);
        } else {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        // Error saving data
    }
};

/**
 *
 * @param {string} key
 * @returns {Promise<string>}
 */
export const retrieveData = async key => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        // Error retrieving data
    }
};
