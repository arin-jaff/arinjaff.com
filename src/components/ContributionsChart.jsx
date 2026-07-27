import React, { useEffect, useState } from "react";

// GitHub's classic green ramp (levels 1–4), as in sallar/github-contributions-chart.
const GREEN = ["#d6e685", "#8cc665", "#44a340", "#1e6823"];
// Blue gradient reserved for the phia work mirror.
const BLUE = ["#c6dbf0", "#7fb2e5", "#3b7dd8", "#0a3d91"];

const EMPTY = "var(--archive-empty-cell)";
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// ponytail: a day picks one side rather than splitting the cell — blue once the
// mirror accounts for at least half of it. Split cells if mixed days matter.
function cellColor(day) {
  if (!day.level) return EMPTY;
  return (day.phia * 2 >= day.count ? BLUE : GREEN)[day.level - 1];
}

function Ramp({ colors }) {
  return (
    <span className="inline-flex gap-[3px] align-middle">
      {colors.map((color) => (
        <span
          key={color}
          className="h-[10px] w-[10px] rounded-[2px]"
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}

export default function ContributionsChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let live = true;
    fetch(`${import.meta.env.BASE_URL}contributions.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json) => live && setData(json))
      .catch(() => {}); // no snapshot yet — the section just stays hidden
    return () => {
      live = false;
    };
  }, []);

  if (!data) return null;

  const weeks = [];
  for (let i = 0; i < data.days.length; i += 7) weeks.push(data.days.slice(i, i + 7));

  // Label a column when a new month starts in it, skipping the leading partial
  // week and the last column so labels never collide.
  const monthLabels = weeks.map((week, i) => {
    if (i === 0 || i === weeks.length - 1) return null;
    const month = week[0].date.slice(5, 7);
    return weeks[i - 1][0].date.slice(5, 7) === month ? null : MONTHS[Number(month) - 1];
  });

  return (
    <section aria-label="GitHub contributions">
      <h2 className="label-strong mb-3">contributions</h2>
      <div className="border-y border-border py-6">
        <div className="mb-4 flex flex-wrap items-baseline gap-4">
          <span className="specimen-index">{data.total}</span>
          <span className="label">public contributions in the last year</span>
          <span className="label ml-auto">github · {data.username}</span>
        </div>

        <div className="overflow-x-auto pb-1">
          <div className="inline-block">
            <div
              className="mb-1 grid gap-[3px]"
              style={{ gridAutoFlow: "column", gridTemplateRows: "12px" }}
            >
              {monthLabels.map((month, i) => (
                <span key={i} className="relative w-[10px]">
                  {month && <span className="label absolute left-0 top-0">{month}</span>}
                </span>
              ))}
            </div>

            <div
              className="grid gap-[3px]"
              style={{ gridAutoFlow: "column", gridTemplateRows: "repeat(7, 10px)" }}
            >
              {data.days.map((day) => (
                <span
                  key={day.date}
                  className="h-[10px] w-[10px] rounded-[2px]"
                  title={
                    `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}` +
                    (day.phia ? ` · ${day.phia} in ${data.repo}` : "")
                  }
                  style={{ backgroundColor: cellColor(day) }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="label inline-flex items-center gap-2">
            <Ramp colors={GREEN} />
            personal
          </span>
          <span className="label inline-flex items-center gap-2">
            <Ramp colors={BLUE} />
            phia
          </span>
        </div>
      </div>
    </section>
  );
}
