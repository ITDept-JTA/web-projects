document.addEventListener("DOMContentLoaded", function () {
    const url = window.location.href;
    const path = window.location.pathname;
    const title = document.title;

    // =====================================================
    // PAGE CHECKS
    // =====================================================
    const isCheckoutPage =
        url.includes("checkout.aspx") ||
        path.includes("checkout.aspx") ||
        title.includes("Choose Extras and Book : JTA Cruise");

    const isBookingDetailsPage = url.includes("booking_details.aspx");

    // =====================================================
    // SCRIPT 1:
    // SHOW / HIDE .addprod BUTTONS
    // =====================================================
    const allowedPages = ["checkout.aspx", "booking_details.aspx"];
    const buttons = document.querySelectorAll("a.addprod");

    const shouldShow = allowedPages.some(function (page) {
        return url.includes(page);
    });

    buttons.forEach(function (button) {
        button.style.setProperty(
            "display",
            shouldShow ? "inline-block" : "none",
            "important"
        );
    });

    // END SCRIPT 1
    // =====================================================



    // =====================================================
    // SCRIPT 2:
    // ADD "ADD A PACKAGE" LINK ABOVE ITINERARY ROW
    // =====================================================
    if (isCheckoutPage) {
        const targetRow = document.querySelector("tr.package-itinerary-node");

        // Prevent duplicates
        if (targetRow && !document.querySelector(".custom-link1")) {
            const link = document.createElement("a");
            link.className = "custom-link1 nav-links addprod-2";
            link.target = "_blank";
            link.href =
                "https://www.jtaholidays.co.uk/enhance-your-cruise/?utm_source=cruise";
            link.textContent = "Add a Package";

            const wrapper = document.createElement("div");
            wrapper.style.marginBottom = "10px";
            wrapper.appendChild(link);

            targetRow.parentNode.insertBefore(wrapper, targetRow);
        }
    }

    // END SCRIPT 2
    // =====================================================



    // =====================================================
    // SCRIPT 3:
    // ADD STICKY QUICK LINKS
    // =====================================================
    if (isCheckoutPage) {
        const header = document.getElementById("header");

        // Prevent duplicates
        if (header && !document.getElementById("checkout-quicklinks")) {
            const buttonHtml = `
                <div id="checkout-quicklinks" class="sticky-ctr" style="position:absolute; right:0;">
                    
                    <div class="flexbox btn-container" style="flex-direction: column;">
                        <button class="bf_btn btn-right flexbox"
                                style="align-items:center; justify-content:center;">
                            <a class="flexbox"
                               style="gap:10px; align-items:center; flex-wrap:nowrap; color:#fff; justify-content:center;"
                               href="#st-accordion">
                                <span class="txt-hidden fbx-100">
                                    Add your details
                                </span>
                            </a>
                        </button>
                    </div>

                    <div class="flexbox btn-container" style="flex-direction: column;">
                        <button class="bf_btn btn-right flexbox"
                                style="align-items:center; justify-content:center;">
                            <a target="_blank"
                               class="flexbox"
                               style="gap:10px; align-items:center; flex-wrap:nowrap; color:#fff; justify-content:center;"
                               href="https://www.jtaholidays.co.uk/enhance-your-cruise">
                                <span class="txt-hidden fbx-100">
                                    Add a Package
                                </span>
                            </a>
                        </button>
                    </div>

                </div>
            `;

            header.insertAdjacentHTML("beforeend", buttonHtml);
        }
    }

    // END SCRIPT 3
    // =====================================================

});
