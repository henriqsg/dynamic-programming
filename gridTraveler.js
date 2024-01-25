// Calculate on how many ways we can travel from top left position
// to the right bottom of a M x N grid (only down or right moves)

const gridTraveler = (m, n, memo = {}) => {

    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

console.log(gridTraveler(2,3));
console.log(gridTraveler(7,5));
console.log(gridTraveler(12,14));
console.log(gridTraveler(18,18));