export const parseMessage = (msg, messages, ctx) => msg
    ? "" +
        msg.replace(/{{[^}]+}}/g, (match) => {
            const expression = match.slice(2, -2).trim();
            return ctx[expression] ? `${ctx[expression]}` : `?!${expression}`;
        })
    : "";
export const parseDateMessage = (msg, millis, messages) => {
    if (typeof millis === "undefined" || millis === null || millis === 0)
        return messages.label_date_undefined;
    const date = new Date(millis);
    const context = {
        YYYY: "" + date.getFullYear(),
        YY: "" + (date.getFullYear() % 100 < 10 ? "0" + (date.getFullYear() % 100) : date.getFullYear() % 100),
        MMMM: messages["label_date_month_" + date.getMonth()],
        MMM: messages["label_date_month_short_" + date.getMonth()],
        MM: date.getMonth() < 10
            ? "0" + messages["label_date_month_number_" + date.getMonth()]
            : messages["label_date_month_number_" + date.getMonth()],
        M: messages["label_date_month_number_" + date.getMonth()],
        EEE: messages["label_date_day_" + date.getDay()],
        E: messages["label_date_day_short_" + date.getDay()],
        dd: "" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()),
        d: "" + date.getDate(),
        H: "" + date.getHours(),
        h: "" + (date.getHours() > 12 ? date.getHours() - 12 : date.getHours() === 0 ? 12 : date.getHours()),
        A: (date.getHours() >= 12
            ? messages["label_date_day_half_pm"].toUpperCase()
            : messages["label_date_day_half_am"]).toUpperCase(),
        a: (date.getHours() >= 12
            ? messages["label_date_day_half_pm"].toLowerCase()
            : messages["label_date_day_half_am"]).toLowerCase(),
        m: "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
        s: "" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()),
    };
    return msg
        ? "" +
            msg.replace(/{{\w+?}}/g, (match) => {
                const expression = match.slice(2, -2).trim();
                return context[expression] ? `${context[expression]}` : `?!${expression}`;
            })
        : "";
};
