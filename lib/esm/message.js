import { HOKEY } from "./messages/index.js";
export const DESCRIPTION_MESSAGE_SUFFIX = "_description";
export const HINT_MESSAGE_SUFFIX = DESCRIPTION_MESSAGE_SUFFIX;
export const accountLocale = (account, browserLocale, anonLocale) => HOKEY.accountLocale(account, browserLocale, anonLocale);
export const currentLocaleForAccount = (account, browserLocale, anonLocale) => HOKEY.currentLocaleForAccount(account, browserLocale, anonLocale);
export const localeMessagesForAccount = (account, browserLocale, anonLocale) => HOKEY.localeMessagesForAccount(account, browserLocale, anonLocale);
export const localeEmoji = (locale) => HOKEY.localeEmoji(locale);
export const stopWords = () => HOKEY.stopWords();
//# sourceMappingURL=message.js.map