export async function reviewAgent(code) {
  return {
    score: 92,
    issues: [
      "Potential async memory leak",
      "Missing error handling"
    ]
  };
}