(async () => {

const force_fetch_json = async (...args) => {
    while (true) {
        try {
            console.log(...args);
            return await (await fetch(args)).json();
        } catch {}
    }
}

const fs = require("fs");
const CDB_API_URL = "https://content.minetest.net/api";

const db = require("better-sqlite3")("scores.sqlite");
const record = db.prepare("SELECT user, pkg_order FROM scores").all();

const users = require("./users.json");
const games = {};

// Fetch metadata for all submissions
const entries = await force_fetch_json(`${CDB_API_URL}/packages/?tag=jam_game_2023`);
for (const entry of entries) {
    const metadata = await force_fetch_json(`${CDB_API_URL}/packages/${entry.author}/${entry.name}`);
    const data = {
        metadata: {
            maintainers: metadata.maintainers,
            name: metadata.name,
            no_repo: !metadata.repo ? 1 : 0,
            non_free: (metadata.license.match("NC") || metadata.media_license.match("NC")) ? 1 : 0,
            complex: metadata.tags.includes("complex_installation") ? 1 : 0,
        },
        scores: [],
    };

    // Penalty is a multiplier (1 - 0.2 for every failed criteria)
    data.metadata.penalty = 1 - (data.metadata.no_repo * 0.2) - (data.metadata.non_free * 0.2) - (data.metadata.complex * 0.2);

    games[entry.name] = data;
}

for (const row of record) {
    const order = row.pkg_order.split(",");
    const weighted = users[row.user] ? 1 : 0; // 0: Regular 1: Weighted

    let i = 0;
    let j = order.length;
    while (i < j) {
        const game = games[order[i]];

        if (!game.metadata.maintainers.includes(row.user)) {
            game.scores.push([i + 1, weighted]);
            i++;
        } else {
            j--; // If maintainer, decrease list length
        }
    }

    // Mark unrated games
    for (const name in games) {
        if (!order.includes(name) && !games[name].metadata.maintainers.includes(row.user)) {
            games[name].scores.push([i + 1, -1]); // -1: Unrated
            i++;
        }
    }
}

// Naive shuffle (for kicks)
for (const i in games) {
    games[i].scores.sort(() => 0.5 - Math.random());
}

fs.writeFile("./games.json", JSON.stringify(games), () => {});

})();
