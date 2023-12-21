document.addEventListener("mousemove", event => {
    const x = (event.clientX / document.body.clientWidth - 0.5) * 2, y = (event.clientY / document.body.clientHeight - 0.5) * 2;
    const banner = document.getElementById("banner");

    banner.children[0].style.transform = `translateX(${x * 1}%) translateY(${y * 1}%)`;
    banner.children[1].style.transform = `translateX(${x * 2}%) translateY(${y * 2}%)`;
    banner.children[2].style.transform = `translateX(${x * 3}%) translateY(${y * 3}%)`;
});

function updateTimer(timer, remaining) {
    const parts = [
        Math.floor((remaining % 86400) / 3600),
        Math.floor(((remaining % 86400) % 3600) / 60),
        Math.floor(((remaining % 86400) % 3600) % 60),
        Math.floor(remaining / 86400),
    ];

    timer.innerHTML = (parts[3] > 0 ? `${parts[3]}.` : "") + parts.slice(0, 3).map(v => v.toString().padStart(2, "0")).join(":");
}

window.addEventListener("load", () => {
    // Dates
    const dates = [
        ["to work on your games", new Date("2023-12-21T23:59Z")],
        ["to finish and submit your games", new Date("2023-12-22T00:59Z")],
        [`to <a href="/rating">rank submissions</a>`, new Date("2023-12-28T23:59Z")],
    ];

    [...document.getElementsByClassName("date")].forEach(e => {
        const when = e.getAttribute("data-date");
        e.innerHTML = !Date.parse(when) ? "DATE PARSE ERROR" : new Date(when).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            hour12: true,
            minute: "2-digit",
            timeZoneName: "short"
        });
    });

    // Closest date
    let i = 0;
    let next = dates[0];
    while (next[1] <= Date.now()) {
        next = dates[++i];
    }

    let el_next = document.getElementById("next-event");
    el_next.innerHTML = next[0];

    // Countdown
    const timer = document.getElementById("clock");
    setInterval(() => {
        if (Date.parse(next[1])) {
            const diff = Math.max(0, (next[1] - Date.now()) / 1000);
            updateTimer(timer, diff);

            // Update closest date
            if (diff < 1) {
                next = dates[++i];
                el_next.innerHTML = next[0];
            }
        } else {
            timer.innerHTML = next[1];
        }
    }, 1000);

    if (Date.parse(next[1])) {
        updateTimer(timer, Math.max(0, (next[1] - Date.now()) / 1000));
    } else {
        timer.innerHTML = next[1];
    }
});
