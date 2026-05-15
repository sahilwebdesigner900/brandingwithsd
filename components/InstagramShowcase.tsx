"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

/**
 * InstagramShowcase Component
 */

type Account =
  | string
  | {
      username: string;
      label?: string;
      image?: string;
    };

interface InstagramShowcaseProps {
  title?: string;
  subtitle?: string;
  accounts: Account[];
}

function extractUsername(input: string): string {
  const cleaned = input.trim().replace(/^@/, "");

  const match = cleaned.match(/instagram\.com\/([^/?#]+)/i);

  return (match ? match[1] : cleaned).replace(/\/+$/, "");
}

function AccountCard({ account }: { account: Account }) {
  const raw = typeof account === "string" ? account : account.username;

  const username = extractUsername(raw);

  const label =
    typeof account === "object" && account.label
      ? account.label
      : `@${username}`;

  const customImage =
    typeof account === "object" ? account.image : undefined;

  const profileUrl = `https://www.instagram.com/${username}/`;

  const sources = [
    customImage,
    `https://unavatar.io/instagram/${username}`,
    `https://unavatar.io/${username}`,
    `https://api.dicebear.com/7.x/initials/svg?seed=${username}`,
  ].filter(Boolean) as string[];

  const [idx, setIdx] = useState(0);

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Hover Border Gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={sources[idx]}
          alt={`${label} Instagram Profile`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
          onError={() => {
            if (idx < sources.length - 1) {
              setIdx(idx + 1);
            }
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Instagram Icon */}
        <div className="absolute right-3 top-3 flex h-9 w-9 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <Instagram className="h-5 w-5 text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="truncate font-semibold text-foreground">{label}</p>

        <p className="truncate text-sm text-muted-foreground">
          instagram.com/{username}
        </p>
      </div>
    </a>
  );
}

export default function InstagramShowcase({
  title = "Featured on Instagram",
  subtitle = "Brands & creators we've worked with",
  accounts,
}: InstagramShowcaseProps) {
  return (
    <section className="w-full bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <Instagram className="h-4 w-4" />
            Instagram
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accounts.map((acc, i) => (
            <AccountCard
              key={`${typeof acc === "string" ? acc : acc.username}-${i}`}
              account={acc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}