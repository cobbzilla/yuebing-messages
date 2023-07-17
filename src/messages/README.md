Locale Resources
================
These are the string tables that define every message that appears in the web interface.

Everything other than English was generated using [hokeylization](https://github.com/cobbzilla/hokeylization),
so they're all from Google Translate and are guaranteed to have mistakes!

Corrections are very welcome! Send a [pull request on GitHub](https://github.com/cobbzilla/yuebing/pulls),
or if you're not comfortable doing that, [open an issue](https://github.com/cobbzilla/yuebing/issues)

When you create a new GitHub issue about a translation, please do:
* include the page URL (copy/paste from browser address bar)
* include the exact text that is wrong (copy/paste from browser) 
* kindly offer a suggestion of a better translation
* **Thank you!**

## Adding new translations
New translations are very welcome!

There are two main places that translations are stored:
 * `util/messages/<lang>_messages.ts` contains UI strings for `<lang>`
 * `server/templates/email` contains email templates for `<lang>`

To add a new translation of Yuebing:
 * Translate UI strings:
   * Copy `util/messages/en_messages.ts` to `util/messages/<lang>_messages.ts` and translate/adjust as needed
   * Edit `util/messages/index.ts`:
     * At the top of the file, where all the other messages are imported, import your new locale file.
     * Near the bottom of the file, add your locale to the MESSAGES Record object, following the example of the other locales.
 * For email/outbound message templates:
   * Copy the server/templates/email/en directory to a directory named after the new locale, then edit the files and translate/adjust as needed
