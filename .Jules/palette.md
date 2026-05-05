## 2025-05-15 - [Screen Reader Accessibility in Forms]
**Learning:** Placeholders are not a substitute for labels. Screen readers need explicit labels associated with input IDs to correctly announce the purpose of each field. Using `sr-only` labels provides this accessibility without altering the visual design.
**Action:** Always include `<label>` elements for form inputs, even if visually hidden, and ensure they are correctly linked via `htmlFor` and `id`.

## 2025-05-20 - [Mobile Interactivity Affordance]
**Learning:** Hover states are insufficient for mobile devices. Interactive components (like project cards) must have clear, high-contrast visual indicators (buttons, icons, borders) that are visible by default. Full-card interactivity also requires proper semantic roles (`role="button"`) and keyboard event handling for inclusive design.
**Action:** Use prominent "Call-To-Action" elements on mobile-first interfaces and implement accessible click/keypress handlers on container elements.
