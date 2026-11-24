[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/zeinrefo-code/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/zeinrefo-code/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# The World in One Day — 24 November 2026

An entry for make.fun's **news-image-20261124** bounty ($100, 50 places).
The whole entry is a single 1024×1024 image that sums up one day of world
news — the front page of 24 November 2026, designed to be read at a glance.

## What's in the image

- **HUANG IS BACK** — the lead story. Nvidia's board reinstated Jensen
  Huang as CEO, and Donald Trump took credit for the reversal: "I made
  the deal."
- **CLIMATE TALKS IN RUINS** — COP31 closed without a fossil-fuel deal,
  leaving UN chief António Guterres "deeply disappointed."
- **INDONESIA FACTORY FIRE — 24 DEAD** — a fire tore through a candy
  factory in Indonesia; 24 people confirmed dead and around 30 still
  missing.
- **EU HITS RUSSIA WITH 22ND SANCTIONS** — Brussels rolled out its 22nd
  sanctions package, adding sports bans alongside banks and crypto
  platforms.
- **RUSSIAN SHIP ABLAZE OFF FINLAND** — the sanctioned cargo ship
  Sparta II was hit by drones and caught fire in the Gulf of Finland.

## How it is delivered

`entry.png` is the artwork itself (1024×1024). `main.ts` is a small
Node.js program that hands it to the grader: it resolves the output
directory, confirms the source file exists and starts with a valid PNG
signature, copies the image over byte-identically, and then compares
SHA-256 digests of the source and the copy so a damaged delivery fails
instead of slipping through. It also supports a `--check` dry-run mode
that validates the image without writing anything.

## License

MIT — see `LICENSE`.
