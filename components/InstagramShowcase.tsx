import { Instagram } from "lucide-react";

/**
 * InstagramShowcase
 * -----------------
 * Drop-in section for a portfolio page. Pass a list of Instagram usernames
 * (or full profile URLs) and it will render attractive cards in a 4-column
 * responsive grid. Each card shows the profile avatar (auto-fetched via
 * unavatar.io) and links out to the Instagram profile in a new tab.
 *
 * Usage:
 *   <InstagramShowcase
 *     accounts={[
 *       "outreachautoworks",
 *       "brandingwithsd",
 *       "https://www.instagram.com/someoneelse/",
 *     ]}
 *   />
 */

type Account = string | { username: string; label?: string };

interface InstagramShowcaseProps {
  title?: string;
  subtitle?: string;
  accounts: Account[];
}

function extractUsername(input: string): string {
  // Accept full URL or bare username; strip @, slashes, query.
  const cleaned = input.trim().replace(/^@/, "");
  const match = cleaned.match(/instagram\.com\/([^/?#]+)/i);
  return (match ? match[1] : cleaned).replace(/\/+$/, "");
}

export default function InstagramShowcase({
  title = "Featured on Instagram",
  subtitle = "Brands & creators we’ve worked with",
  accounts,
}: InstagramShowcaseProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            Instagram
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accounts.map((acc, i) => {
            const raw = typeof acc === "string" ? acc : acc.username;
            const username = extractUsername(raw);
            const label =
              typeof acc === "object" && acc.label ? acc.label : `@${username}`;
            const profileUrl = `https://www.instagram.com/${username}/`;
            const avatarUrl = `https://unavatar.io/instagram/${username}`;

            return (
              <a
                key={`${username}-${i}`}
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Instagram-style gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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

                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={avatarUrl}
                    alt={`${label} on Instagram`}
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://api.dicebear.com/7.x/initials/svg?seed=${username}`;
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                    <Instagram className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-semibold text-foreground truncate">
                    {label}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    instagram.com/{username}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
