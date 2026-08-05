---
name: alex boulanger
description: An ASCII flowfield mounted and measured like laboratory instrumentation.
colors:
  ground: "#0a0a0a"
  foreground: "#ffffff"
  signal: "#0000ff"
  rule: "rgba(255, 255, 255, 0.15)"
  dim: "rgba(255, 255, 255, 0.68)"
  mark: "rgba(255, 255, 255, 0.55)"
  field-floor: "#161616"
  field-peak: "#c0c0c0"
typography:
  body:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(0.8125rem, 0.55vw + 0.6rem, 1rem)"
    fontWeight: 400
    lineHeight: 1.95
    letterSpacing: "0.035em"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.13em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(0.9rem, 2.2vw, 2rem)"
  inset: "clamp(1.1rem, 2.4vw, 2.25rem)"
  band-y: "0.55rem"
  band-x: "0.85rem"
  band-gap: "clamp(0.9rem, 2.6vw, 2.5rem)"
components:
  link:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.25em 0.45em"
  link-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "0.25em 0.45em"
  readout-label:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
  readout-value:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
  plate:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.none}"
---

# Design System: alex boulanger

## Overview

**Creative North Star: "The Observation Station"**

The site presents itself as an instrument, and the thing it observes is its own generative field. Four renderers can occupy the plate — advected currents, an ordered-dither halftone, a rasterized torus, and interfering wave gratings — and both the renderer and the field's seed are drawn fresh on every mount. Everything on screen is either the phenomenon or the apparatus around it: an identifier plate, a band of live readouts, a framed observation window with registration ticks, a crosshair probe, and a channel row. The person is the log entry at the foot of the plate — the largest type on the page, and the only thing on it written by a human.

The register is precise rather than loud. There is one typeface, one hue, one rule weight, and no corner is ever rounded. Density and tone do all the work that color and size normally do: labels recede by tone, values advance by tone, and the field's own 12-step grey ramp carries the depth. What makes it feel made rather than templated is that the instrument is not decorative — the numbers are real, read off the running simulation and the browser, and the field genuinely dims itself underneath type instead of the type wearing a glow to survive.

The confirmed anti-reference is the arrangement this replaced: a centered paragraph floating on an edge-to-edge canvas. A generative background with no edge is wallpaper; giving the field a frame is what turns it into an artifact under measurement.

**Key Characteristics:**
- One monospace voice at two sizes; hierarchy from tone and position, not scale steps
- Zero radius anywhere; hairline rules at a single weight
- A single hue, reserved for state
- Live values only — nothing on the chassis is authored
- Seed and render mode drawn fresh per mount; no two visits are the same field
- Depth carried by a wide grey ramp, never by shadow

## Colors

A near-black ground, a white foreground, one saturated blue reserved entirely for state, and a wide grey ramp that belongs to the field rather than the interface.

### Primary
- **Signal Blue** (`#0000ff`): the only hue in the system. It appears on exactly two things — a link's hover and focus inversion, and text selection. It never tints a rule, never carries body text, and never appears at rest. Its rarity is what makes an inverted link read as an event.

### Neutral
- **Ground** (`#0a0a0a`): the page ground and the canvas fill. Not pure black, so the field's darkest glyphs still have somewhere to sit below them.
- **Foreground** (`#ffffff`): the log entry, readout values, link labels, the identifier.
- **Chassis Rule** (`rgba(255, 255, 255, 0.15)`): every hairline in the system — the readout band's border and the plate's frame. One weight, one tone, no heavier variant exists.
- **Readout Label** (`rgba(255, 255, 255, 0.68)`): the small caps labels beside live values. Chosen to clear 4.5:1 against the ground rather than dimmed to taste; these are labels, not decoration.
- **Registration Mark** (`rgba(255, 255, 255, 0.55)`): corner ticks and the crosshair hairlines. The one tone in the system that carries marks but never text.

### Tertiary
- **Field Floor** (`#161616`) → **Field Peak** (`#c0c0c0`): a 12-step ramp interpolated at runtime, belonging to the canvas alone. No interface element may draw from it. The endpoints are fixed; the ten stops between them are spaced on an S-curve (`SHADE_CURVE`, 0.55 of a full smoothstep) rather than evenly — `#161616 #1f1f1f #2c2c2c #3c3c3c #4e4e4e #616161 #757575 #888888 #9a9a9a #aaaaaa #b7b7b7 #c0c0c0`.

### Named Rules

**The One Hue Rule.** `#0000ff` is reserved for state. If an element is not being hovered, focused, or selected, it is greyscale.

**The Wide Band Rule.** The field's ramp must span from near-ground to near-white. A narrow band of midtones is what makes a generative field read flat — every cell lands in the same tonal register regardless of what the simulation is doing. Depth is a range problem, not a brightness problem.

**The Grouped Extremes Rule.** Stops cluster at both ends of the field ramp and spread across its middle. Faint haze should read as one dim mass and lit cores as one bright mass; only the middle, where structure lives, earns tonal resolution. This is a compositional choice, not a perceptual correction — sRGB steps across this band are already close to even in L*.

**The Marks-Not-Text Rule.** `mark` is for ticks and hairlines only. Any tone that carries text starts at `dim` and is verified against the ground.

## Typography

**Display Font:** none. The system has no display tier.
**Body Font:** system monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`)
**Label/Mono Font:** the same stack

**Character:** one voice throughout, and deliberately so — the field is drawn from the same monospace glyphs the interface is set in, so type and texture share an alphabet. The page reads as a printout of itself.

### Hierarchy
- **Body / log** (400, `clamp(0.8125rem, 0.55vw + 0.6rem, 1rem)`, 1.95, `0.035em`, max 62ch): the log entry at the foot of the plate. The only prose on the page and the largest type on it.
- **Label** (400, `0.6875rem`, `0.13em`, lowercase or uppercase per band): the identifier, locale pair, readout cells, channel row. Everything that is not the log.

### Named Rules

**The Two Sizes Rule.** The system has exactly two type sizes: the log and everything else. New elements pick one; they do not introduce a third. Hierarchy is built from tone, position, and spacing.

**The Fixed Footprint Rule.** Any element whose text changes at runtime — readout values, scrambling link labels, the crosshair reading — sets `white-space: pre` and pads to a stable width, so no live value can reflow the row it sits in.

**The Decode Rule.** Text that resolves on load resolves out of the field's own glyph alphabet (`$@B%8&WM#*...`), left to right, rerolling on a ~45ms tick rather than every frame. A faster reroll reads as noise instead of a decode.

## Layout

A single non-scrolling viewport. `html, body` are `overflow: hidden` and the chassis is a four-row CSS grid at `100dvh`: identifier, readout band, plate, channels — with the plate taking `minmax(0, 1fr)`, every pixel the other three leave.

The outer gutter is `clamp(0.9rem, 2.2vw, 2rem)`; content inside the plate insets by `clamp(1.1rem, 2.4vw, 2.25rem)`. The readout band sits flush against the plate with no gap and no bottom border, so band and plate read as one mounted object rather than two stacked panels.

Content inside the plate is anchored bottom-left via an absolutely positioned flex container, never centered. The log is capped at 62ch.

The readout band carries two cells and no more: the running renderer, and the seed it was drawn with. Grid size, mean density and local time were all measurable and all removed — an instrument that reports everything it can measure is a dashboard, not a design. Both surviving cells fit at every width, so the band never sheds anything. The crosshair and its reading are removed on coarse pointers and below 520px. The grid itself never changes shape.

**The Two Readings Rule.** The band shows what the visitor can act on and what identifies the run. A reading that changes nothing and identifies nothing does not earn a cell, however real it is.

## Elevation & Depth

No shadows exist in this system, and none may be added. Depth is carried three ways: the field's own 12-step tonal ramp, a single hairline frame, and a runtime attenuation mask.

The mask is the system's signature depth device. Elements that must stay readable mark themselves `data-field-shadow`; the canvas reads their boxes on resize and navigation, and multiplies its own per-cell density down across a smoothstep feather. The feather and depth scale with viewport (150px/0.75 on desktop, 110px at tablet, 64px/0.68 on phones, where the log spans nearly the full width). The depth is deliberately partial: the field stays faintly legible under the copy, because a well that goes fully black reads as a panel dropped over the plate rather than as the field receding.

The only `text-shadow` permitted is a single short stop (`0 0 10px` in the ground color) covering the feathered edge. The three-stop scrim this build removed read as fog around the letterforms.

**The Field Recedes Rule.** Type never wears a glow to survive the field. The field dims itself underneath the type. This is also the mechanism that holds text contrast — the field's bright end reaches `#c0c0c0`, which would fail against white type without it.

## Shapes

Zero radius, everywhere, with no exception. Every border in the system is exactly 1px.

The recurring silhouette is the framed plate: a 1px rectangle with four L-shaped registration ticks set 9px inside its corners, each tick 13px on a side and drawn from two 1px borders. The ticks are the system's one ornament and the mark of the instrument metaphor.

**The Cut, Not Moulded Rule.** Instruments are cut. No corner is rounded, no border exceeds 1px, and no element gets a second border weight to signal importance.

## Components

### Links
- **Shape:** no radius, no border. `0.25em 0.45em` padding cancelled by an equal negative margin, so the hover block has room without shifting anything around it.
- **Default:** white on ground, no underline, `white-space: pre`.
- **Hover / Focus:** inverts to a solid `#0000ff` block behind white text; the text-shadow scrim drops to none. Simultaneously the label scrambles once out of the field's alphabet over ~420ms and settles back.
- **Current page:** 1px underline at `0.4em` offset via `aria-current="page"`.
- **Behavior:** a single global `a` selector styles every link on the site regardless of how it was authored — component, markdown, or hand-written. There is no opt-in class.

### Readout cells
- **Style:** an `i` label at `dim` and a `b` value at `foreground`, `0.5em` apart, both at label size. Label and value differ by tone only, never by size — at 11px a second size step reads as a mistake.
- **State:** values render as `·` placeholder glyphs until the field publishes a real grid, then decode into position.

### Navigation
- **Identifier band:** name left, locale pair right, baseline-aligned, no border.
- **Channel row:** destinations left, crosshair reading right, separated by `space-between`. This is the growth slot — new destinations join this row.

### Mode control
- **Character:** the instrument's one switch, and the system's only control.
- **Style:** a bare `<button>` carrying the same label/value pair as a readout cell — `mode` at `dim`, the running renderer at `foreground`. No border, no radius, no background at rest.
- **Hover / Focus:** inverts to a solid `#0000ff` block, identical to a link. The label lifts to `foreground` so both halves invert together.
- **On change:** the value re-decodes out of the glyph alphabet, so swapping the phenomenon reads as the instrument re-acquiring rather than a value blinking.
- **Position:** first cell in the readout band. It survives every breakpoint, because it is the page's only interaction.

### The observation plate (signature)
A 1px-framed, `overflow: hidden` region holding the canvas, the registration ticks, the crosshair, and the content slot. The canvas sizes to the plate via `ResizeObserver`, not to the window, and pointer coordinates are converted to plate-local space. It is marked `transition:persist` so client-side navigation never restarts the simulation.

Four renderers share the plate. Each owns its state and writes one normalized value per cell; the ramp, shade band, attenuation mask, gamma, and pointer are shared, so swapping a renderer changes the phenomenon without changing the instrument. Each responds to the pointer in its own terms — currents are repelled, the halftone's domain warps, the torus tilts, a grating centre follows the cursor.

**The One Control Rule.** The system has exactly one interactive treatment: the blue inversion plus a one-shot glyph decode. Links use it and the mode control uses it. A new control adopts that treatment; it never arrives with a border, a fill, or a radius of its own.

**The Shared Instrument Rule.** A new renderer supplies field values and nothing else. It may not introduce its own palette, its own glyph set, or its own chrome; if it cannot be expressed as one value per cell, it does not belong on this plate.

### The crosshair (signature)
Two 1px hairlines at `mark`, tracking the pointer across the plate, with the numeric reading landing in a fixed cell in the channel row rather than floating beside the cursor. An instrument reports to its panel; it does not follow you with a tooltip. Fine pointers only.

## Do's and Don'ts

### Do:
- **Do** measure every value shown on the chassis. Read it off the running field or the browser; if it cannot be measured, it does not appear.
- **Do** give any new region an edge. A generative surface without a frame is wallpaper.
- **Do** mark new foreground text with `data-field-shadow` so the field recedes beneath it.
- **Do** keep new elements at one of the two existing type sizes.
- **Do** set `white-space: pre` on anything whose text changes at runtime.
- **Do** draw the seed and the mode fresh on each mount; a constant printed as a reading is the one thing this chassis must never do.
- **Do** give a new renderer a pointer response in its own terms, so the probe perturbs whatever is running.
- **Do** orchestrate motion as one power-on sequence — plate draws, readouts decode, log lands — rather than giving each new component its own entrance.

### Don't:
- **Don't** add a radius, a second border weight, or a shadow.
- **Don't** introduce a second hue, or use `#0000ff` anywhere but hover, focus, and selection.
- **Don't** let an interface element draw from the field's grey ramp.
- **Don't** raise the field's ambient floor to add texture; ambient lifts every cell into one tone and erases the voids the currents are read against.
- **Don't** set a fixed particle floor. Traces scale to the grid (~1 per 30 cells); a fixed floor saturates a phone-sized grid into a solid block.
- **Don't** restore a multi-stop text-shadow scrim. The attenuation mask is the contrast mechanism.
- **Don't** let a renderer's spatial frequency approach the cell pitch. A grating whose period falls inside a few cells aliases into noise; rings and bands must span many cells to resolve.
- **Don't** drop the mode control at any breakpoint. Readouts are expendable; the page's only interaction is not.
- **Don't** add a readout because the value is available. It earns a cell only if the visitor can act on it or it identifies the run.
- **Don't** quantize a renderer's output into the middle of the glyph ramp and call it dithering. Ordered dither is one bit: every lit cell carries the same mark and tone comes from how densely the marks fall.
