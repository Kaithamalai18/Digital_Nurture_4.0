What is Recursion?

Recursion is a programming concept where a function calls itself to solve a problem in smaller chunks.

For example:
- To calculate future value for `N` years,
- We calculate the value for `N-1` years,
- Then multiply it by `(1 + growthRate)`,
- Until we reach year 0 (base case).


Output for Financial Forecasting :


Base Value : 10000.0

Future Value after 5 years: ₹16105.10


Time Complexity:

O(n) → one recursive call per year (e.g., for 5 years → 5 calls)

This recursion is already optimal because: 
There's no overlapping sub problems.
