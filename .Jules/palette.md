## 2025-05-15 - [Screen Reader Accessibility in Forms]
**Learning:** Placeholders are not a substitute for labels. Screen readers need explicit labels associated with input IDs to correctly announce the purpose of each field. Using `sr-only` labels provides this accessibility without altering the visual design.
**Action:** Always include `<label>` elements for form inputs, even if visually hidden, and ensure they are correctly linked via `htmlFor` and `id`.
