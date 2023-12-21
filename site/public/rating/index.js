const SERVER_ADDR = "https://contabo.greenxenith.com";
const CDB_URL = "https://content.minetest.net";
const RATING_URL = `${location.protocol}//${location.host}/rating/`;
const OAUTH_CLIENT_ID = "ec984104ccdddfcee223e2b4";
const OAUTH_URL = `${CDB_URL}/oauth/authorize/?response_type=code&client_id=${OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(RATING_URL)}`;
const RATELIMIT_MSG = "Ratelimit exceeded (wait 5 minutes)";
const JAM_TAG = "jam_game_2022"; // TESTING

const status_types = {
    wait: "&#x1F504;",
    error: "&#x26D4;",
    success: "&#x2705;",
}

const setStatus = (type, message) => {
    document.getElementById("status-msg").innerHTML = `${status_types[type]} ${message}`;
};

// Check for authentication request
const params = new URLSearchParams(window.location.search);
if (params.has("code")) {
    fetch(`${SERVER_ADDR}/auth?code=${params.get("code")}`).then(async res => {
        if (res.ok) {
            res.json().then(auth => {
                if (auth.ok) {
                    localStorage.setItem("jam_auth_token", auth.token);
                    localStorage.setItem("cdb_username", auth.username);
                    window.location = RATING_URL;
                }
            });
        } else {
            setStatus("error", res.status == 429 ? RATELIMIT_MSG : await res.text());
        }
    }).catch(err => {
        console.error(err);
        setStatus("error", "Fetch error (err01). Please check console.");
    });
}

// Modify elements if logged in
const jam_auth_token = localStorage.getItem("jam_auth_token");
let query_sorted;

if (jam_auth_token) {
    const el_logout = document.getElementById("logout");

    document.getElementById("login").classList.add("hidden");
    el_logout.classList.remove("hidden");

    document.getElementById("logout").innerText = `Log Out (${localStorage.getItem("cdb_username")})`;

    document.getElementById("info").innerText = "Changes are saved automatically.";

    el_logout.addEventListener("click", () => {
        localStorage.removeItem("jam_auth_token");
        localStorage.removeItem("cdb_username");
    });

    setStatus("wait", "Fetching saved list...")
    query_sorted = fetch(`${SERVER_ADDR}/list`, {
        headers: {
            "Authorization": jam_auth_token,
        }
    }).catch(err => {
        console.error(err);
        setStatus("error", "Fetch error (err02). Please check console.");
    });
} else {
    document.getElementById("login").setAttribute("href", OAUTH_URL);
}

// Populate packages
let package_elements = {};

const randomize_elements = (parent) => {
    let sorted = Object.values(package_elements);

    for (let i = sorted.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const k = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = k;
    }

    parent.replaceChildren(...sorted)
}

fetch(`${CDB_URL}/api/packages/?tag=${JAM_TAG}`).then(res => {
    res.text().then(text => {
        // Add package tiles
        const pkg_list = document.getElementById("packages");
        const json = JSON.parse(text);

        for (const idx in json) {
            const pkg = json[idx];

            const el_pkg = document.createElement("div");
            el_pkg.classList.add("package");
            el_pkg.classList.add(`pkg_${idx}`);
            el_pkg._pkg_name = pkg.name;

            const el_img = document.createElement("img");
            el_img.src = pkg.thumbnail;
            el_pkg.appendChild(el_img);

            const el_info = document.createElement("div");
            el_pkg.appendChild(el_info);

            const el_title = document.createElement("h1");
            el_title.innerText = pkg.title;
            el_info.appendChild(el_title);

            const el_desc = document.createElement("p");
            el_desc.innerText = pkg.short_description;
            el_info.appendChild(el_desc);

            if (jam_auth_token) {
                el_pkg.classList.add("movable");

                el_pkg.addEventListener("mousedown", e => {
                    move_target = e.target;
                    move_target.origin = e.clientY;
                    move_target.classList.add("moving");
                });
            }

            pkg_list.appendChild(el_pkg);
            package_elements[pkg.name] = el_pkg;
        }

        // Sort package tiles if logged in
        if (jam_auth_token) {
            query_sorted.then(async res => {
                if (res.ok) {
                    const list = await res.json();
                    if (list.order) {
                        let sorted = [];
                        for (const name of list.order) {
                            sorted.push(package_elements[name]);
                        }
                        pkg_list.replaceChildren(...sorted);
                        setStatus("success", "Loaded saved list.");

                        return;
                    }

                    setStatus("success", "No saved list yet. Move a tile to update.");
                } else {
                    setStatus("error", res.status == 429 ? RATELIMIT_MSG : await res.text());
                }

                // If query failed or no order returned, randomize
                randomize_elements(pkg_list);
            });
        } else {
            randomize_elements(pkg_list);
        }
    });
}).catch(err => {
    console.error(err);
    setStatus("error", "Fetch error (err03). Please check console.");
});

const updateList = () => {
    if (!jam_auth_token) return;

    const children = Array.from(document.getElementById("packages").children)
    let list = [];

    for (const el of children) {
        list.push(el._pkg_name)
    }

    setStatus("wait", "Updating list...");
    fetch(`${SERVER_ADDR}/list`, {
        method: "POST",
        headers: {
            "Authorization": localStorage.getItem("jam_auth_token") || "",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({order: list}),
    }).then(async res => {
        if (res.ok) {
            setStatus("success", "List updated.");
        } else {
            setStatus("error", res.status == 429 ? RATELIMIT_MSG : await res.text());
        }
    });
}

// Tile movement handlers
let move_target;
let mouseY = 0;
const MOVE_SPEED = 0.15;
const TRANSITION = `transition: top ${MOVE_SPEED}s ease-out;`;

const moveElement = () => {
    if (move_target) {
        const children = Array.from(move_target.parentNode.children);
        const idx = children.indexOf(move_target);

        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let distance = mouseY - move_target.origin;

        // Swap elements when moved by one tile
        if (move_target.nextSibling && distance > move_target.nextSibling.clientHeight) {
            const sibling = children[idx + 1];
            const height = sibling.clientHeight;

            sibling.style = `top: calc(${height}px + 1rem);`;
            setTimeout(() => sibling.style = `top: 0; ${TRANSITION};`, 0); // Start transition on next frame

            sibling.after(children[idx]);
            move_target.origin += height + rem; // Offset origin by sibling element height

            setTimeout(() => {sibling.removeAttribute("style");}, MOVE_SPEED * 1000);
        } else if (move_target.previousSibling && distance < -move_target.previousSibling.clientHeight) {
            const sibling = children[idx - 1];
            const height = sibling.clientHeight;

            sibling.style = `top: calc(-${height}px - 1rem);`;
            setTimeout(() => sibling.style = `top: 0; ${TRANSITION};`, 0);

            sibling.before(children[idx]);
            move_target.origin -= height + rem;

            setTimeout(() => {sibling.removeAttribute("style");}, MOVE_SPEED * 1000);
        }

        move_target.style = `top: ${mouseY - move_target.origin}px;`;
    }
}

document.body.addEventListener("mousemove", e => {
    if (jam_auth_token) {
        mouseY = e.clientY;
        moveElement();
    }
});

document.body.addEventListener("mouseup", () => {
    if (move_target && jam_auth_token) {
        move_target.classList.remove("moving");
        move_target.removeAttribute("style");
        move_target = null;

        updateList();
    }
});

// const doScroll = () => {
//     const zone = mouseY / window.innerHeight;
//     if (move_target && zone > 0.9) {
//         const rate = 20 * ((zone - 0.9) * 10);
//         window.scrollBy({top: rate, behavior: "instant"});
//         move_target.origin -= rate / 2;
//         moveElement();
//     }

//     setTimeout(doScroll, 10);
// }

// doScroll();
