import { describe, it } from "mocha";
import { expect, assert } from "chai";

import * as msg from "../lib/esm/index.js";

describe("template message test", async () => {
    it("properly renders a message with a templated value", async () => {
        const m = msg.MESSAGES["en"];
        const rendered = msg.parseMessage("error_field_required", m, { field: "TEST" });
        expect(rendered).eq("TEST is required");
    });
    it("properly renders a message with a missing template value", async () => {
        const m = msg.MESSAGES["en"];
        const rendered = msg.parseMessage("error_field_required", m, {});
        expect(rendered).eq("?!field is required");
    });
    it("fieldErrorMessage properly renders an error message", async () => {
        const m = msg.MESSAGES["en"];
        const err = msg.fieldErrorMessage("usernameOrEmail", "required", m);
        expect(err).eq("Username or email is required");
    });
});
