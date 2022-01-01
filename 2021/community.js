#!/bin/node

// Downloads and calculates data for community ratings

// Commandline switches:
//  --alphabetical: Sorts packages alphabetically by title instead of score
//  --unfiltered: Doesn't filter unhelpful reviews
//  --scoresonly: Only lists scores (no table)

const https = require("https");
const deadline = new Date(Date.UTC(2022));

const fetch = (url, callback) => https.get(url, res => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => callback(JSON.parse(data)));
}).on("error", console.log);

const graph = data => {
    if (process.argv.includes("--alphabetical")) {
        data.sort((a, b) => b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 1);
    } else {
        data.sort((a, b) => b.score - a.score);
    }

    if (process.argv.includes("--scoresonly")) {
        for (const score of data) {
            console.log(score.score);
        }
        return
    }

    let table = [];
    for (const score of data) {
        const r = score.ratings;
        let data = {};

        data["Package"] = score.title;
        data["Total"] = r.total;
        data["Ratings"] = `+${r.positive} / -${r.negative}`;
        data["Discarded"] = `+${r.positive - r.positive_valid} / -${r.negative - r.negative_valid}`;
        data["Kept"] = `+${r.positive_valid} / -${r.negative_valid}`;
        data["Score"] = score.score;

        table.push(data);
    }
    console.table(table);
}

fetch("https://content.minetest.net/api/packages/?tag=jam_game_2021", async packages => {
    let scores = [];

    for (const package of packages) {
        let ratings = {
            total: 0,
            total_valid: 0,
            negative: 0,
            negative_valid: 0,
            positive: 0,
            positive_valid: 0,
        };

        const reviews = await new Promise(resolve => fetch(`https://content.minetest.net/api/packages/${package.author}/${package.name}/reviews/`, resolve));

        for (const review of reviews) {
            if (new Date(review.created_at + "Z") < deadline) {
                const valid = process.argv.includes("--unfiltered") ? true : review.votes.unhelpful <= review.votes.helpful;
                if (review.is_positive) {
                    ratings.positive++;
                    if (valid) ratings.positive_valid++;
                } else {
                    ratings.negative++;
                    if (valid) ratings.negative_valid++;
                }
                ratings.total++;
                if (valid) ratings.total_valid++;
            }
        }

        scores.push({
            name: package.name,
            author: package.author,
            title: package.title,
            ratings: ratings,
            score: Math.round(((ratings.positive_valid + 1) / (ratings.total_valid + 2)) * 100) / 100,
        });
    }

    graph(scores);
});
