export declare const localesForAccount: (account: any, browserLocale?: string | null, anonLocale?: string | null, defaultLocale?: string | null) => string[];
export declare const localesList: (account: any, browserLocale: string | null, anonLocale: string | null) => Record<string, string>[];
export declare const FALLBACK_DEFAULT_LANG = "en";
export declare const accountLocale: (account: any, browserLocale: string | null, anonLocale: string | null) => Record<string, string>;
export declare const currentLocaleForAccount: (account: any, browserLocale: string | null, anonLocale: string | null) => string;
export declare const localeMessagesForAccount: (account: any, browserLocale: string | null, anonLocale: string | null) => Record<string, string>;
export declare const fieldErrorMessage: (field: string | {
    name: string;
    label?: string;
}, error: string | string[], messages: Record<string, string>, labelPrefixes?: string | string[]) => string;
export declare const findMessage: (key: string, messages: Record<string, string>, labelPrefixes?: string | string[]) => string;
export declare const localeLang: (locale: string) => string;
export declare const localeEmoji: (locale: string) => string | undefined;
export declare const stopWords: () => string[];
