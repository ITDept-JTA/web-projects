(function () {
    const formUrl = "https://form.jotform.com/263154652149358";

    function showLoginHelpPopup() {
        // Prevent duplicate popups
        if (document.getElementById("login-help-popup")) return;

        const overlay = document.createElement("div");
        overlay.id = "login-help-popup";

        overlay.innerHTML = `
            <div class="login-help-box">
                <button class="login-help-close" aria-label="Close">&times;</button>
                <p>
                    Are you having trouble logging in?
                    Please <a href="${formUrl}" target="_blank" rel="noopener noreferrer">click here</a>
                    to fill out a login issues form and our team will work to restore your account.
                </p>
            </div>
        `;

        document.body.appendChild(overlay);

        overlay.querySelector(".login-help-close").addEventListener("click", function () {
            overlay.remove();
        });
    }

    function checkForLoginError() {
        if (document.querySelector("div.normal.login-error")) {
            showLoginHelpPopup();
            observer.disconnect();
        }
    }

    const observer = new MutationObserver(checkForLoginError);

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // Check immediately in case the error already exists
    checkForLoginError();

    // Add popup styling
    const style = document.createElement("style");
    style.textContent = `
        #login-help-popup {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            padding: 20px;
            box-sizing: border-box;
        }

        .login-help-box {
            position: relative;
            background: #ffffff;
            color: #333333;
            padding: 35px 30px;
            border-radius: 10px;
            max-width: 480px;
            width: 100%;
            text-align: center;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }

        .login-help-box a {
            color: #007bff;
            font-weight: bold;
            text-decoration: underline;
        }

        .login-help-box a:hover {
            color: #0056b3;
        }

        .login-help-close {
            position: absolute;
            top: 8px;
            right: 14px;
            border: none;
            background: none;
            font-size: 28px;
            cursor: pointer;
            color: #666666;
        }
    `;

    document.head.appendChild(style);
})();