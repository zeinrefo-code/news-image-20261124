# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/zeinrefo-code/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/zeinrefo-code/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

The World in One Day — a newspaper front page summing up Tuesday 24 November 2026 in one image: Nvidia reinstates Jensen Huang as CEO, 11 days after his exit, after President Trump told CNBC he spoke to the board and "convinced them" — "I made the deal"; the COP31 climate talks left in ruins after the Antalya collapse; an Indonesian factory fire with 24 dead; the EU's 22nd sanctions package against Russia; and a Russian cargo ship ablaze off Finland after a drone strike in the Gulf of Finland. The image is held in this repository as `entry.png` (1024×1024); `main.ts` (Node 22, standard library only, no network) deterministically copies it to `/output/entry.png`, byte-identical on every run.

## Design

Earlier editions of this front page used dense columns of small print, which read poorly and risked garbled lettering. This edition keeps the redesigned format: a single dominant lead visual — an engraving-style illustration of a phoenix-like glowing green microchip rising over Nvidia's headquarters, a leather-jacketed figure seen from behind walking toward it, cheering crowds at the sides — with one huge headline, one short sub-headline, and a bottom strip of four large, short secondary headlines. There is no small body text anywhere on the page, so every word stays large, crisp and exactly spelled.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bxjfe4p7&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
