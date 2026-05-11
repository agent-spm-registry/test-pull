/**
 * test-pull — Starter Skill
 *
 * This is your skill's main entry point.
 * AI agents will call the `run()` function with structured input.
 *
 * Getting started:
 *   1. Edit the `run()` function below with your skill logic
 *   2. Update prompt.md with your AI instructions
 *   3. Test locally: node index.js
 *   4. Publish: spm push
 */

/**
 * Main skill function called by AI agents.
 *
 * @param {Object} input - The input provided by the AI agent
 * @returns {Object} The skill's output
 */
export async function run(input) {
  const { query } = input;

  // TODO: Replace this with your actual skill logic
  return {
    success: true,
    result: `Processed: ${query}`,
    timestamp: new Date().toISOString(),
  };
}

// ── Local Testing ──────────────────────────────────────────────────────
// Run directly with: node index.js
if (import.meta.url === `file://${process.argv[1]}`) {
  run({ query: 'hello world' })
    .then((result) => console.log('✅ Output:', JSON.stringify(result, null, 2)))
    .catch((error) => console.error('❌ Error:', error));
}
