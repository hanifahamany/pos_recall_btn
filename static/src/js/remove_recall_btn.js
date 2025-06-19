/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PreparationDisplayHeader } from "@pos_preparation_display/components/preparation_display_header/preparation_display_header";

patch(PreparationDisplayHeader.prototype, {
    setup() {
        super.setup();

        if (Array.isArray(this.headerButtons)) {
            this.headerButtons = this.headerButtons.filter(button => button.label !== "Recall");
        }
    }
});
