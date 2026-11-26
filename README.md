# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/fulede9394/makefun-deadpan-forecast/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/fulede9394/makefun-deadpan-forecast/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

One absurd but believable deadpan weather line for the invented city of
New Borington, entered in the
[Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
bounty on make.fun.

## The entry

> In New Borington today: cloudy with a 100% chance of nothing happening, highs of mild, lows of also mild. Tomorrow: the same, but with wind.

## How it works

`main.ts` assembles the forecast from its two broadcast beats (today's
conditions and tomorrow's outlook), validates it against the gate
(1–160 characters, not only whitespace, a single line), and writes it to
`/output/entry.txt`.

Run it with Node 22+:

```sh
node main.ts
```
