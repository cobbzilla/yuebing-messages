import { describe, it } from "mocha";
import { expect, assert } from "chai";

import * as msg from "../lib/esm/index.js";

describe("template message test", async () => {
    it("properly renders a message with a templated value", async () => {
        const m = msg.MESSAGES["en"];
        const template = m["error_field_required"];
        const rendered = msg.parseMessage(template, m["en"], { field: "TEST" });
        expect(rendered).eq("TEST is required");
    });
    it("properly renders a message with a missing template value", async () => {
        const m = msg.MESSAGES["en"];
        const template = m["error_field_required"];
        const rendered = msg.parseMessage(template, m["en"], {});
        expect(rendered).eq("?!field is required");
    });
});
