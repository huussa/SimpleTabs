const tabs = document.querySelectorAll("nav button");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {t.classList.remove("active")});
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        let tabNumber = tab.getAttribute("tabNumber");

        const activeContent = document.querySelector(`.content[contentNumber="${tabNumber}"]`)
        activeContent.classList.add("active")

    });
});