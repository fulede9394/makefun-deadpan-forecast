// Deadpan forecast for the invented city of New Borington.
//
// The forecast is assembled from its two broadcast beats — today's
// conditions and tomorrow's outlook — so the line reads like a
// straight-faced meteorologist delivering the least eventful weather
// report ever aired.

import { promises as fsp } from "node:fs";
import { join } from "node:path";

// Everything the entry needs lives in one place so the broadcast
// can be tweaked without touching the plumbing below.
const broadcast = {
  destinationDir: "/output",
  fileName: "entry.txt",
  maxChars: 160,
  today: "In New Borington today: cloudy with a 100% chance of nothing happening, highs of mild, lows of also mild.",
  tomorrow: "Tomorrow: the same, but with wind.",
};

// The gate requires 1-160 UTF-8 characters and more than whitespace.
function validate(forecast: string, ceiling: number): void {
  if (forecast.length < 1 || forecast.length > ceiling) {
    throw new Error(`forecast must be 1-${ceiling} characters, got ${forecast.length}`);
  }
  if (forecast.trim().length === 0) {
    throw new Error("forecast must not be only whitespace");
  }
  // The judge reads a single broadcast line: reject any stray newline.
  if (forecast.includes("\n")) {
    throw new Error("forecast must be a single line");
  }
}

async function publishForecast(): Promise<void> {
  const segments = [broadcast.today, broadcast.tomorrow];
  const forecast = segments.join(" ");
  validate(forecast, broadcast.maxChars);
  await fsp.mkdir(broadcast.destinationDir, { recursive: true });
  await fsp.writeFile(join(broadcast.destinationDir, broadcast.fileName), forecast, "utf8");
}

await publishForecast();
