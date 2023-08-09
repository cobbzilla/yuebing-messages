import { AccountWithLocale, HokeyLocaleMessages } from "hokey-runtime";
export declare const DESCRIPTION_MESSAGE_SUFFIX = "_description";
export declare const HINT_MESSAGE_SUFFIX = "_description";
export declare const accountLocale: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => HokeyLocaleMessages;
export declare const currentLocaleForAccount: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => string;
export declare const localeMessagesForAccount: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => HokeyLocaleMessages;
export declare const localeEmoji: (locale: string) => string | undefined;
export declare const stopWords: () => string[];
