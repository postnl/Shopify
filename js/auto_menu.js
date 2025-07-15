$(document).ready(function () {
    // Menu-opbouw en scrollspy-instellingen

    // Scroll pas nadat de pagina volledig is geladen
    setTimeout(waitForHashTargetAndScroll, 500);
});

function waitForHashTargetAndScroll() {
    var id = window.location.hash.substring(1);
    if (!id) return;

    var maxAttempts = 50;
    var attempts = 0;

    function isVisible(el) {
        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    }

    function tryScroll() {
        var el = document.getElementById(id);
        if (el && isVisible(el)) {
            el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryScroll, 500);
        }
    }

    tryScroll();
}

// Scroll ook bij hash-verandering binnen pagina
$(window).on('hashchange', waitForHashTargetAndScroll);
