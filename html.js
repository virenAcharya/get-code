    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("pre").forEach(pre => {
            pre.textContent = pre.innerHTML;
        });
    });
