/*function uncheckBaggageFalseIfNoBagsFilterExists() {
    const baggageDiv = document.querySelector(
        'div[title="Include flights with no bags"]'
    );

    if (baggageDiv) {
        const checkbox = document.getElementById("BaggageFalse");

        if (checkbox) {
            checkbox.checked = false;
            checkbox.removeAttribute("checked");

            // Remove disabled state if present
            checkbox.disabled = false;
            checkbox.removeAttribute("disabled");
        }
    }
}

// Run 5 seconds after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(uncheckBaggageFalseIfNoBagsFilterExists, 3000);
});
*/
if (window.location.href.includes('book.jtacruise.co.uk/web/cruises/farecodes.aspx')) {
    document.querySelectorAll('label.custom-control.custom-checkbox input')
        .forEach(input => {
            if (!input.checked) input.click();
        });
}
