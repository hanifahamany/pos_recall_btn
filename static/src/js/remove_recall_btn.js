/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PreparationDisplayHeader } from "@pos_preparation_display/components/preparation_display_header/preparation_display_header";

patch(PreparationDisplayHeader.prototype, {
    setup() {
        super.setup();

        if (Array.isArray(this.headerButtons)) {
            console.log("Before filtering:", this.headerButtons.map(b => b.label));
            this.headerButtons = this.headerButtons.filter(button => button.label !== "Recall");
            console.log("After filtering:", this.headerButtons.map(b => b.label));
        } else {
            console.warn("❌ headerButtons not found or not an array");
        }
    }
});
