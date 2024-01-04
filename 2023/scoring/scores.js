const games = require("./games.json");
const WEIGHTS = [
    1, // Normal user
    1.1, // Helpful user
];

/*
 * Simple Weighted Average
 */
const results = Object.entries(games).map(([title, data]) => {
    // Filter out unrated games
    const scores = data.scores.filter(([, weighted]) => weighted > -1);

    // Divide by total weight rather than number of votes, to make the average correct.
    const totalWeight = scores.reduce((acc, [, weighted]) => acc + WEIGHTS[weighted], 0);

    // Calculate the mean
    const sum = scores.reduce((acc, [rank, weighted]) => acc + WEIGHTS[weighted] * (15 - rank), 0)
    const mean = sum / totalWeight;

    const penalty = data.metadata.penalty;
    return [title, penalty * mean];
}).sort((a, b) => b[1] - a[1]);

console.log(results);

/*
 * Histogram
 */

// Build data
const histograms = Object.fromEntries(Object.entries(games).map(([title, data]) => {
    const ret = Array(Object.keys(games).length).fill(0);
    data.scores.filter(([, weighted]) => weighted > -1).forEach(([x,]) => { ret[x - 1]++ });
    return [title, ret];
}));

// Print out in RMS order
results.map(([title]) => [title, histograms[title]]).forEach(([title, histo]) => {
    console.log(`\n\n${title}`);
    for (let i = 0; i < 14; i++) {
        console.log(`${i + 1}: ${"#".repeat(histo[i])}`);
    }
});
