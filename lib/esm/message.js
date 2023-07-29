import { YUEBING_LOCALES, MESSAGES, isUnknownMessage } from "./messages/index.js";
import { parseMessage } from "./locale.js";
export const localesForAccount = (account, browserLocale = null, anonLocale = null, defaultLocale = null) => {
    const locales = [];
    if (account && account.locale && !locales.includes(account.locale)) {
        locales.push(account.locale);
    }
    if (anonLocale && !locales.includes(anonLocale)) {
        locales.push(anonLocale);
    }
    if (browserLocale && !locales.includes(browserLocale)) {
        locales.push(browserLocale);
    }
    if (defaultLocale && !locales.includes(defaultLocale)) {
        locales.push(defaultLocale);
    }
    // console.log(`localesForAccount returning: ${JSON.stringify(locales)}`)
    return locales;
};
export const localesList = (account, browserLocale, anonLocale) => {
    const messages = findFirstLocaleMatch(localesForAccount(account, browserLocale, anonLocale));
    return YUEBING_LOCALES.map((loc) => {
        const localeDescription = messages["locale_" + loc];
        const description = MESSAGES[loc] && MESSAGES[loc]["locale_" + loc]
            ? `${MESSAGES[loc]["locale_" + loc]} (${localeDescription})`
            : localeDescription;
        return {
            name: loc,
            value: description,
        };
    });
};
export const FALLBACK_DEFAULT_LANG = "en";
const findFirstLocaleNameMatch = (locales, defaultLocale) => {
    for (const loc of locales) {
        if (typeof MESSAGES[loc] !== "undefined") {
            // console.log(`findFirstLocaleMatch(${JSON.stringify(locales)}) returning MESSAGES[${loc}]`)
            return loc;
        }
    }
    // console.log(`findFirstLocaleMatch(${JSON.stringify(locales)}) returning DEFAULT_LOCALE [${DEFAULT_LOCALE}]`)
    if (defaultLocale)
        return defaultLocale;
    if (MESSAGES[FALLBACK_DEFAULT_LANG])
        return FALLBACK_DEFAULT_LANG;
    const all = Object.keys(MESSAGES);
    if (all.length > 0) {
        return all[0]; // just return something valid
    }
    throw new Error("findFirstLocaleMatch: no languages defined in MESSAGES!");
};
const findFirstLocaleMatch = (locales) => {
    return MESSAGES[findFirstLocaleNameMatch(locales)];
};
export const accountLocale = (account, browserLocale, anonLocale) => {
    const locales = localesForAccount(account, browserLocale, anonLocale);
    const match = findFirstLocaleMatch(locales);
    return {
        name: match.id,
        description: match["locale_" + match.id],
    };
};
export const currentLocaleForAccount = (account, browserLocale, anonLocale) => {
    const locales = localesForAccount(account, browserLocale, anonLocale);
    return findFirstLocaleNameMatch(locales);
};
export const localeMessagesForAccount = (account, browserLocale, anonLocale) => {
    // console.log(`localeMessagesForAccount(account=${account ? account.locale : null}, browser=${browserLocale}, anon=${anonLocale}} RETURNING: ${match.id || 'default'}`)
    const locales = localesForAccount(account, browserLocale, anonLocale);
    return findFirstLocaleMatch(locales);
};
const findBaseErrorMessage = (err, messages) => {
    const msg = "error_field_" + err;
    if (!isUnknownMessage(messages[msg]))
        return msg;
    const idx = err.lastIndexOf("_");
    const baseMsg = idx === -1 || idx === err.length - 1 ? null : "error_field_" + err.substring(idx + 1);
    if (!baseMsg || isUnknownMessage(messages[baseMsg]))
        return "?!!" + err;
    return baseMsg;
};
export const fieldErrorMessage = (field, error, messages, labelPrefixes = ["", "label_"]) => {
    let fieldObject = null;
    if (typeof field === "object") {
        fieldObject = field;
        field = field.name;
    }
    if (typeof labelPrefixes === "string") {
        labelPrefixes = [labelPrefixes];
    }
    const fieldMessage = fieldObject && fieldObject.label && !isUnknownMessage(messages[fieldObject.label])
        ? messages[fieldObject.label]
        : findMessage(field, messages, labelPrefixes);
    if (Array.isArray(error)) {
        let message = "";
        for (const e of error) {
            if (message.length > 0) {
                message += ", ";
            }
            message += parseMessage(findBaseErrorMessage(e, messages), messages, {
                field: fieldMessage,
            });
        }
        return message;
    }
    else {
        return parseMessage(findBaseErrorMessage(error, messages), messages, {
            field: fieldMessage,
        });
    }
};
export const findMessage = (key, messages, labelPrefixes = ["label_"]) => {
    if (typeof labelPrefixes === "string") {
        labelPrefixes = [labelPrefixes];
    }
    if (!Array.isArray(labelPrefixes)) {
        throw new TypeError(`findMessage: unexpected type for labelPrefixes param, expected a string or array. typeof(labelPrefixes)=${typeof labelPrefixes}, Array.isArray(labelPrefixes)=${Array.isArray(labelPrefixes)}`);
    }
    for (const prefix of labelPrefixes) {
        const msgKey = prefix + key;
        const msg = messages[msgKey];
        if (!isUnknownMessage(msg)) {
            return msg;
        }
    }
    // It's unknown by all prefixes, punt and return the first message as an unknown message
    return messages[labelPrefixes[0] + key];
};
export const localeLang = (locale) => locale.includes("_") ? locale.substring(0, locale.indexOf("_")) : locale;
export const localeEmoji = (locale) => MESSAGES[locale] && MESSAGES[locale].emoji ? MESSAGES[locale].emoji : undefined;
let STOP_WORDS = null;
export const stopWords = () => {
    if (STOP_WORDS !== null) {
        return STOP_WORDS;
    }
    const stops = [];
    for (const locale of YUEBING_LOCALES) {
        if (MESSAGES[locale] &&
            MESSAGES[locale].search_stop_words &&
            !isUnknownMessage(MESSAGES[locale].search_stop_words)) {
            stops.push(...MESSAGES[locale].search_stop_words.split(","));
        }
    }
    STOP_WORDS = [...new Set(stops)];
    return STOP_WORDS;
};
