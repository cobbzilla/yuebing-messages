import { HOKEY } from "./messages/index.js";
import { AccountWithLocale, HokeyLocaleMessages } from "hokey-runtime";

export const DESCRIPTION_MESSAGE_SUFFIX = "_description";
export const HINT_MESSAGE_SUFFIX = DESCRIPTION_MESSAGE_SUFFIX;

export const accountLocale = (
    account: AccountWithLocale,
    browserLocale: string | null,
    anonLocale: string | null
): HokeyLocaleMessages => HOKEY.accountLocale(account, browserLocale, anonLocale);

export const currentLocaleForAccount = (
    account: AccountWithLocale,
    browserLocale: string | null,
    anonLocale: string | null
): string => HOKEY.currentLocaleForAccount(account, browserLocale, anonLocale);

export const localeMessagesForAccount = (
    account: AccountWithLocale,
    browserLocale: string | null,
    anonLocale: string | null
): HokeyLocaleMessages => HOKEY.localeMessagesForAccount(account, browserLocale, anonLocale);

export const localeEmoji = (locale: string): string | undefined => HOKEY.localeEmoji(locale);

export const stopWords = (): string[] => HOKEY.stopWords();

export const capitalize = (s: string): string =>
    s && s.length > 0 ? s.substring(0, 1).toUpperCase() + s.substring(1) : "";

export const uncapitalize = (s: string): string =>
    s && s.length > 0 ? s.substring(0, 1).toLowerCase() + s.substring(1) : "";
