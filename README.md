# California Primary Neutral Voter Worksheet

This is a static, offline browser app intended to help a voter compare California statewide and local primary candidates through blinded, source-backed issue/record/endorsement statements.

## How to run

Open `index.html` directly in a browser. No build step or server is required.

## What the app currently does

- Presents blinded statements tied to candidate records, policy positions, background, and endorsements.
- Starts on a three-phase Survey page: blinded cards, optional source trust ratings, then fit scores.
- Defaults the blinded card flow to main-candidate cards first, with a filter to show all card candidates.
- Lets the user rate agreement and candidate-research interest separately.
- Lets the user record an overall 1-5 impression for every candidate in the candidate list.
- Shows candidate fit scores based only on the user's own ratings and answered cards.
- Filters crowded races by recent polling where available and by transparent viability/coverage signals where polling is not available, while preserving a full official-list view.
- Allows optional reveal of candidate identity after responses.
- Tracks responses locally in browser memory/local storage.
- Exports responses as CSV or JSON.
- Includes statewide races and a San Mateo County/San Carlos starter set.

## Important constraints

- Keep the app politically neutral. It should not recommend whom to vote for.
- It may summarize fit based on the user's own ratings, but it should frame output as a research aid, not a voting recommendation.
- Preserve source URLs and clear source attribution for any factual claim.
- Flag candidate-supplied statements as candidate-supplied and not independently verified.
- Candidate/ballot data should be treated as time-sensitive and verified against official county/state sources before use.
- Poll and viability filters are time-sensitive snapshots and should be refreshed before relying on them for ballot research.

## Suggested Codex refinement tasks

1. Split the remaining app behavior and styles out of `index.html` while keeping a no-build static deployment option.
2. Add a clearer scoring model that separately reports:
   - issue agreement,
   - experience/record interest,
   - endorsement/coalition interest,
   - source confidence.
3. Add an import path for updated candidate JSON.
4. Add per-office completion progress and a printable shortlist report.
5. Add tests for scoring/export logic.
6. Add source freshness warnings for any link older than a chosen cutoff date.
7. Improve mobile UX for the rating controls.
8. Add a 'compare only candidates I have rated' mode.

## Files

- `index.html` — app markup, styles, and behavior.
- `data/sources.js` — source metadata and URLs.
- `data/candidates.js` — candidate roster.
- `data/cards.js` — blinded survey cards and card expansions.
- `data/poll-filters.js` — main-candidate filter rules.
- `data/glossary.js` — glossary terms used for inline definitions.
- `ballot-photo.jpeg` — original ballot photo used to infer the rough jurisdiction context.
