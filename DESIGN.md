# Design Notes

- Keep the page minimal: header, framed field, intro copy, footer links.
- Keep GlitchLink scrambling; it is part of the site identity.
- Do not add telemetry: no seed, density, angle, cursor readout, or decorative corner marks.
- Use one hue, `#0000ff`, only for hover, focus, and selection.
- No radius, shadows, nested panels, or extra UI chrome.
- The footer `change visual` link is the only canvas control.
- Foreground text uses `data-field-shadow` so the canvas dims underneath it.
