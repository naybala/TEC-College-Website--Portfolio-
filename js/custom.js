const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    const updateCounter = () => {
        const speed = 300;
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const incrementRate = target / speed;

        if (count < target) {
            counter.innerText = Math.round(count + incrementRate);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
// Refresh or reload page.
// window.setInterval('refresh()', 10000);
// function refresh() {
//     window.location.reload();
// }
