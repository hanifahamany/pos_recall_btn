/** @odoo-module **/
import { patch } from 'web.utils';
import { useListener } from 'web.custom_hooks';
import { Registries } from '@web/core/registry';
import { whenReady } from "@web/core/utils/dom";

whenReady(() => {
    const observer = new MutationObserver(() => {
        document.querySelectorAll("button.btn.btn-light.btn-lg").forEach((btn) => {
            if (btn.textContent.includes("Recall")) {
                btn.style.display = "none";
                // Optional: console log for debugging
                console.log("Recall button hidden.");
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
});
