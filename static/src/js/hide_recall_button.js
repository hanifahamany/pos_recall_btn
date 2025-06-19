/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PreparationDisplayScreen } from "@pos_preparation_display/screens/preparation_display_screen";

patch(PreparationLine.prototype, {
    /**
     * Override setup to remove the Recall button from DOM.
     */
    setup() {
        super.setup();

        // Hide the Recall button after render
        this.env.bus.addEventListener('DOM_UPDATED', () => {
            setTimeout(() => {
                const buttons = this.el?.querySelectorAll("button");
                buttons?.forEach((btn) => {
                    if (btn.textContent?.includes("Recall")) {
                        btn.style.display = "none";
                        console.log("Recall button hidden by component patch.");
                    }
                });
            }, 100);
        });
    }
});
/**
 * This code patches the PreparationLine component to hide the Recall button
 * by setting its display style to 'none' after the component is rendered.
 * It listens for the 'DOM_UPDATED' event to ensure the button is hidden
 * after the DOM is fully updated.
 */