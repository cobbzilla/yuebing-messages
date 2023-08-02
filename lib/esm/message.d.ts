export type AccountWithLocale = {
    locale?: string;
};
export declare const localesForAccount: (account: AccountWithLocale, browserLocale?: string | null, anonLocale?: string | null, defaultLocale?: string | null) => string[];
export declare const localesList: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => Record<string, string>[];
export declare const FALLBACK_DEFAULT_LANG = "en";
export declare const accountLocale: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => Record<string, string>;
export declare const currentLocaleForAccount: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => string;
export declare const localeMessagesForAccount: (account: AccountWithLocale, browserLocale: string | null, anonLocale: string | null) => Record<string, string>;
export declare const fieldErrorMessage: (field: string | {
    name: string;
    label?: string;
}, error: string | string[], messages: Record<string, string>, labelPrefixes?: string | string[]) => string;
export declare const findMessageKey: (key: string, messages: Record<string, string>, labelPrefixes?: string | string[]) => string | null;
export declare const findMessage: (key: string, messages: Record<string, string>, labelPrefixes?: string | string[]) => string;
export declare const localeLang: (locale: string) => string;
export declare const localeEmoji: (locale: string) => string | undefined;
export declare const stopWords: () => string[];
