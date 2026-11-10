# CILO site — image map (drop-in guide)

Every image slot on the site reads from a **fixed path** below. A labeled
placeholder currently sits at each one, so you can see exactly which slot is
which on the live site. **To use your own photo, replace the file at the same
path with the same filename** — no code changes, no renaming, no guessing.

- Photos: **JPG** (or WebP). Logos: **PNG/SVG with transparent background**.
- `cover` = the image fills the box and is cropped to fit (put the subject near
  the center). `contain` = the whole image shows, never cropped (logos).
- Sizes are recommended minimums — bigger is fine, keep the aspect ratio.

## Folder structure

```
public/assets/images/cilo/
├── hero/
│   ├── hero-reel.mp4        ← YOUR brand film (only video on the site)
│   └── hero-poster.jpg      ← still shown before/if the video can't play
├── services/
│   ├── build.jpg
│   ├── create.jpg
│   └── grow.jpg
├── work/
│   ├── project-one.jpg
│   ├── project-two.jpg
│   └── project-three.jpg
├── team/
│   ├── team-band.jpg
│   ├── member-1.jpg
│   ├── member-2.jpg
│   ├── member-3.jpg
│   └── member-4.jpg
├── about/
│   └── about-band.jpg
└── logos/
    └── logo-1.png … logo-6.png
```

## What goes where

| File | Appears on | Size (min) | Aspect | Fit |
|---|---|---|---|---|
| `hero/hero-reel.mp4` | Home — full-screen hero background (muted, autoplay, loops) | 1920×1080, < 8 MB | 16:9 | video |
| `hero/hero-poster.jpg` | Home — hero still frame before the video loads | 1920×1080 | 16:9 | cover |
| `services/build.jpg` | Home "Build" panel **and** /services → Build row | 1200×1500 | 4:5 | cover |
| `services/create.jpg` | Home "Create" panel **and** /services → Create row | 1200×1500 | 4:5 | cover |
| `services/grow.jpg` | Home "Grow" panel **and** /services → Grow row | 1200×1500 | 4:5 | cover |
| `work/project-one.jpg` | Home Selected Work + /work card + the project's own page | 1600×1067 | 3:2 | cover |
| `work/project-two.jpg` | same, for project two | 1600×1067 | 3:2 | cover |
| `work/project-three.jpg` | same, for project three | 1600×1067 | 3:2 | cover |
| `team/team-band.jpg` | Home — wide "team behind CILO" band | 1920×840 | 16:7 | cover |
| `team/member-1.jpg` … `-4.jpg` | /team — the four portrait cards | 1200×1500 | 4:5 | cover |
| `about/about-band.jpg` | /about — wide studio photo band | 1920×840 | 16:7 | cover |
| `logos/logo-1.png` … `-6.png` | Home — "Brands we've worked with" bar | ~480×220 | ~12:5 | contain (transparent) |

## The two links you should know about

1. **Work images are matched to projects by filename.** A project lives in
   `src/content/projects/<name>.md`; its image is `work/<name>.jpg`. The three
   projects are currently `project-one`, `project-two`, `project-three`. If you
   rename a project file (e.g. to `harbor-cafe.md`), rename its image to match
   (`work/harbor-cafe.jpg`). To **add** a project: add one `.md` + one matching
   image — nothing else to touch.

2. **Adding/removing team members or logos** is a small code change (the number
   of slots is set in `src/pages/team.astro` and `src/pages/index.astro`). Tell
   me the count and I'll adjust.

## Still needed from you (text, not images)
- The three Work case write-ups (in `src/content/projects/*.md`).
- Real testimonials (3) for the home page.
- Real client logos (the 6 above are placeholders).

_Note: two old files, `cilo/hero.jpg` and `cilo/about.jpg`, are leftovers from
the previous design and are no longer used — safe to ignore or delete._
