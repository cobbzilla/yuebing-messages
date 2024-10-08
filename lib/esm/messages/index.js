import ar_messages from "./ar_messages.js";
import bn_messages from "./bn_messages.js";
import de_messages from "./de_messages.js";
import en_messages from "./en_messages.js";
import es_messages from "./es_messages.js";
import fr_messages from "./fr_messages.js";
import ha_messages from "./ha_messages.js";
import hi_messages from "./hi_messages.js";
import id_messages from "./id_messages.js";
import it_messages from "./it_messages.js";
import ja_messages from "./ja_messages.js";
import ko_messages from "./ko_messages.js";
import mr_messages from "./mr_messages.js";
import pl_messages from "./pl_messages.js";
import pt_messages from "./pt_messages.js";
import ru_messages from "./ru_messages.js";
import sw_messages from "./sw_messages.js";
import tl_messages from "./tl_messages.js";
import tr_messages from "./tr_messages.js";
import ur_messages from "./ur_messages.js";
import vi_messages from "./vi_messages.js";
import zh_messages from "./zh_messages.js";
import { Hokey, wrapMessages } from "hokey-runtime";
export const MESSAGES = {
    ar: wrapMessages(ar_messages),
    bn: wrapMessages(bn_messages),
    de: wrapMessages(de_messages),
    en: wrapMessages(en_messages),
    es: wrapMessages(es_messages),
    fr: wrapMessages(fr_messages),
    ha: wrapMessages(ha_messages),
    hi: wrapMessages(hi_messages),
    id: wrapMessages(id_messages),
    it: wrapMessages(it_messages),
    ja: wrapMessages(ja_messages),
    ko: wrapMessages(ko_messages),
    mr: wrapMessages(mr_messages),
    pl: wrapMessages(pl_messages),
    pt: wrapMessages(pt_messages),
    ru: wrapMessages(ru_messages),
    sw: wrapMessages(sw_messages),
    tl: wrapMessages(tl_messages),
    tr: wrapMessages(tr_messages),
    ur: wrapMessages(ur_messages),
    vi: wrapMessages(vi_messages),
    zh: wrapMessages(zh_messages),
};
export const YUEBING_LOCALES = Object.keys(MESSAGES);
export const FALLBACK_DEFAULT_LANG = "en";
export const HOKEY = new Hokey(MESSAGES, FALLBACK_DEFAULT_LANG, Object.keys(MESSAGES));
//# sourceMappingURL=index.js.map