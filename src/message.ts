import { YUEBING_LOCALES, MESSAGES, isUnknownMessage } from "./messages/index.js";
import { parseMessage } from "./locale.js";

export const localesForUser = (
    user: any,
    browserLocale: string | null = null,
    anonLocale: string | null = null,
    defaultLocale: string | null = null
): string[] => {
    const locales: string[] = [];
    if (user && user.locale && !locales.includes(user.locale)) {
        locales.push(user.locale);
    }
    if (anonLocale && !locales.includes(anonLocale)) {
        locales.push(anonLocale);
    } else {
        const stored = localStorage.getItem("anon_locale");
        if (stored && !locales.includes(stored)) {
            locales.push(stored);
        }
    }

    if (browserLocale && !locales.includes(browserLocale)) {
        locales.push(browserLocale);
    }
    if (defaultLocale && !locales.includes(defaultLocale)) {
        locales.push(defaultLocale);
    }
    // console.log(`localesForUser returning: ${JSON.stringify(locales)}`)
    return locales;
};

export const localesList = (
    user: any,
    browserLocale: string | null,
    anonLocale: string | null
): Record<string, string>[] => {
    const messages = findFirstLocaleMatch(localesForUser(user, browserLocale, anonLocale));
    return YUEBING_LOCALES.map((loc: string) => {
        const localeDescription = messages["locale_" + loc];
        const description =
            MESSAGES[loc] && MESSAGES[loc]["locale_" + loc]
                ? `${MESSAGES[loc]["locale_" + loc]} (${localeDescription})`
                : localeDescription;
        return {
            name: loc,
            value: description,
        };
    });
};

export const FALLBACK_DEFAULT_LANG = "en";

const findFirstLocaleNameMatch = (locales: string[], defaultLocale?: string): string => {
    for (const loc of locales) {
        if (typeof MESSAGES[loc] !== "undefined") {
            // console.log(`findFirstLocaleMatch(${JSON.stringify(locales)}) returning MESSAGES[${loc}]`)
            return loc;
        }
    }
    // console.log(`findFirstLocaleMatch(${JSON.stringify(locales)}) returning DEFAULT_LOCALE [${DEFAULT_LOCALE}]`)
    if (defaultLocale) return defaultLocale;
    if (MESSAGES[FALLBACK_DEFAULT_LANG]) return FALLBACK_DEFAULT_LANG;

    const all = Object.keys(MESSAGES);
    if (all.length > 0) {
        return all[0]; // just return something valid
    }
    throw new Error("findFirstLocaleMatch: no languages defined in MESSAGES!");
};

const findFirstLocaleMatch = (locales: string[]): Record<string, string> => {
    return MESSAGES[findFirstLocaleNameMatch(locales)];
};

export const userLocale = (
    user: any,
    browserLocale: string | null,
    anonLocale: string | null
): Record<string, string> => {
    const locales = localesForUser(user, browserLocale, anonLocale);
    const match = findFirstLocaleMatch(locales);
    return {
        name: match.id,
        description: match["locale_" + match.id],
    };
};

export const currentLocaleForUser = (user: any, browserLocale: string | null, anonLocale: string | null): string => {
    const locales = localesForUser(user, browserLocale, anonLocale);
    return findFirstLocaleNameMatch(locales);
};

export const localeMessagesForUser = (
    user: any,
    browserLocale: string | null,
    anonLocale: string | null
): Record<string, string> => {
    // console.log(`localeMessagesForUser(user=${user ? user.locale : null}, browser=${browserLocale}, anon=${anonLocale}} RETURNING: ${match.id || 'default'}`)
    const locales = localesForUser(user, browserLocale, anonLocale);
    return findFirstLocaleMatch(locales);
};

const findBaseErrorMessage = (err: string, messages: Record<string, string>) => {
    const msg = "error_field_" + err;
    if (!isUnknownMessage(messages[msg])) return msg;
    const idx = err.lastIndexOf("_");
    const baseMsg = idx === -1 || idx === err.length - 1 ? null : "error_field_" + err.substring(idx + 1);
    if (!baseMsg || isUnknownMessage(messages[baseMsg])) return "?!!" + err;
    return baseMsg;
};

export const fieldErrorMessage = (
    field: string | { name: string; label?: string },
    error: string | string[],
    messages: Record<string, string>,
    labelPrefixes: string | string[] = ["", "label_"]
) => {
    let fieldObject = null;
    if (typeof field === "object") {
        fieldObject = field;
        field = field.name;
    }
    if (typeof labelPrefixes === "string") {
        labelPrefixes = [labelPrefixes];
    }
    const fieldMessage =
        fieldObject && fieldObject.label && !isUnknownMessage(messages[fieldObject.label])
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
    } else {
        return parseMessage(findBaseErrorMessage(error, messages), messages, {
            field: fieldMessage,
        });
    }
};

export const findMessage = (
    key: string,
    messages: Record<string, string>,
    labelPrefixes: string | string[] = ["label_"]
): string => {
    if (typeof labelPrefixes === "string") {
        labelPrefixes = [labelPrefixes];
    }
    if (!Array.isArray(labelPrefixes)) {
        throw new TypeError(
            `findMessage: unexpected type for labelPrefixes param, expected a string or array. typeof(labelPrefixes)=${typeof labelPrefixes}, Array.isArray(labelPrefixes)=${Array.isArray(
                labelPrefixes
            )}`
        );
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

export const localeLang = (locale: string): string =>
    locale.includes("_") ? locale.substring(0, locale.indexOf("_")) : locale;

export const localeEmoji = (locale: string): string | undefined =>
    MESSAGES[locale] && MESSAGES[locale].emoji ? MESSAGES[locale].emoji : undefined;

let STOP_WORDS: string[] | null = null;
export const stopWords = (): string[] => {
    if (STOP_WORDS !== null) {
        return STOP_WORDS;
    }
    const stops: string[] = [];
    for (const locale of YUEBING_LOCALES) {
        if (
            MESSAGES[locale] &&
            MESSAGES[locale].search_stop_words &&
            !isUnknownMessage(MESSAGES[locale].search_stop_words)
        ) {
            stops.push(...MESSAGES[locale].search_stop_words.split(","));
        }
    }
    STOP_WORDS = [...new Set(stops)];
    return STOP_WORDS;
};
