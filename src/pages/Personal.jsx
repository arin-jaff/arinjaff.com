import React from "react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";
import raceDayPhoto from "../assets/RaceDay.jpeg";

function ItemLink({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="group ml-2 inline-flex items-center gap-1 whitespace-nowrap text-sm transition-colors hover:text-accent"
    >
      {link.label}
      <span className="font-mono transition-transform duration-200 group-hover:translate-x-1">↗</span>
    </a>
  );
}

export default function Personal() {
  const categories = Object.entries(profile.personal);

  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader number="04" name="personal" title="beyond the code" />

      <div className="max-w-3xl">
        <p className="mb-12 text-sm leading-relaxed text-muted-foreground">
          Beyond software engineering, I am deeply involved in athletics, music, and community
          leadership. As a D1 rower at Columbia, I balance the demands of competitive athletics with
          academic excellence. My diverse interests—from performing jazz music to leading Eagle Scout
          projects—shape my approach to problem-solving and teamwork in both technical and personal
          pursuits.
        </p>

        <div className="space-y-14">
          {categories.map(([key, category], i) => (
            <section key={key} aria-label={category.title}>
              <div className="mb-3 flex items-baseline gap-4">
                <h2 className="label-strong">{category.title.toLowerCase()}</h2>
                {category.link && (
                  <span className="ml-auto">
                    <ItemLink link={category.link} />
                  </span>
                )}
              </div>

              <div className="border-y border-border py-5 md:py-6">
                <div className="mb-3 flex items-baseline gap-4">
                  <span className="specimen-index">{String(i + 1).padStart(2, "0")}</span>
                  {category.description && <span className="label">{category.description}</span>}
                </div>

                {key === "rowing" && (
                  <figure className="mb-5 max-w-md">
                    <div className="archive-mat">
                      <img
                        src={raceDayPhoto}
                        alt="Columbia Lightweight Rowing Race Day"
                        className="w-full object-cover"
                      />
                    </div>
                    <figcaption className="label mt-3 block text-center">
                      race day, ira national championships
                    </figcaption>
                  </figure>
                )}

                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="specimen-index shrink-0 pt-0.5">—</span>
                      <span>
                        {item.text}
                        {item.detail && <span className="ml-2 opacity-70">({item.detail})</span>}
                        {item.link && <ItemLink link={item.link} />}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
