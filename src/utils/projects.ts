export interface ProjectRepo {
  label: string;
  url: string;
}

export interface CodingProject {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  technologies: string[];
  repos?: ProjectRepo[];
  liveUrl?: string;
  thumbnailPath: string;
  featured?: boolean;
}

const codingProjects: CodingProject[] = [
  {
    slug: "mc-manager",
    name: "MC Manager",
    description: "Self-hosted web dashboard for managing a Minecraft server, built for my homelab.",
    longDescription: `## Why I built it
I used to run the Minecraft server on my own gaming rig, right alongside the client. That meant the server was competing with the game itself for CPU and RAM — resources I'd rather have spent on higher render distances and framerate than on hosting. It also meant the server only existed when my machine was on: a rig that runs hot and loud, and one I couldn't just leave on 24/7 for a couple friends to play whenever they felt like it. On top of that, I was the only one who could ever touch server settings, since doing so meant physically being at my computer.

Moving the server onto a dedicated homelab box solved the hosting half of that problem, but it traded one bottleneck for another: now I was the one who had to SSH in and run commands every time someone needed a setting changed, a plugin updated, or a backup restored. MC Manager is what I built to close that gap — a Go API that talks to the Minecraft process directly, paired with a React frontend, so any of the other players can make changes themselves from a browser, without needing terminal access or waiting on me.

## How the API is put together
The backend is a single Go binary on Gin, with a JWT-protected \`/api\` group covering server lifecycle, the file manager, backups, \`server.properties\`, user/invitation management, and the console WebSocket — plus a separate API-key-gated \`/api/admin\` group and a few public routes for register/login/invitations.

Persistence is a single embedded SQLite database with three tables (\`users\`, \`invitations\`, \`backup_config\`), no ORM, and migrations embedded straight into the binary with Go's \`embed\` package.

The React frontend talks to it through a small typed \`apiFetch\` wrapper instead of axios, which classifies every response (\`ok\`, \`unauthorized\`, \`unsupported\`, \`network\`, \`error\`) so the UI can tell an old server build missing an endpoint apart from the server just being unreachable.

## Auth & the live console
Access is invitation-only: an admin generates a link, the new user registers with it, and everything after that is JWT-authenticated. The live console is a WebSocket that streams the server's stdout in real time and lets the dashboard send commands back over the same connection, which is what makes the in-browser console, player management panel (op/whitelist/ban/kick/teleport/run-as), and file editor all feel instant instead of like a polling admin panel.

## Deployment & networking
Deployment is fully self-hosted on an Ubuntu Server box in my homelab. Caddy handles TLS and routing on the host: it reverse-proxies \`/api/*\` (including the console WebSocket) to the Go container and serves the built React app for everything else, with an \`index.html\` fallback for client-side routing.

A Cloudflare Tunnel fronts Caddy so the dashboard is reachable on a custom subdomain without opening any inbound ports — only the Minecraft game port itself is forwarded directly on the router, since that traffic isn't HTTP and has no business going through Caddy.

GitHub Actions handles the whole release path: pushes to \`main\` lint, type-check, build, and test the client, then SSH into the homelab over a Cloudflare Access tunnel to pull the new code and restart the containers.

## Integration with Selton Mello Bot
MC Manager doesn't just serve the web dashboard, either — its console and player APIs are the backbone of a second project of mine, [Selton Mello Bot](/projects/selton-mello-bot), which bridges the same Minecraft server into Discord: live chat and events flow both ways, and a linked, verified server operator can run commands against the server straight from Discord.`,
    highlights: [
      "Go API + React dashboard for full server control from a browser",
      "Decoupled Go supervisor keeps the JVM alive independently of API redeploys",
      "Invitation-only registration with JWT-authenticated everything after",
      "Live WebSocket console, player management, file editing, and backups",
      "Self-hosted behind Caddy + Cloudflare Tunnel, deployed via GitHub Actions",
      "Powers the Discord integration in my Selton Mello Bot project",
    ],
    technologies: [
      "Go",
      "Gin",
      "React 19",
      "TypeScript",
      "Vite",
      "SQLite",
      "Docker",
      "WebSockets",
      "JWT",
      "Ubuntu Server",
      "Caddy",
      "Cloudflare Tunnel",
      "GitHub Actions",
    ],
    repos: [
      { label: "Backend", url: "https://github.com/lomokwa/mc-manager-server" },
      { label: "Frontend", url: "https://github.com/lomokwa/mc-manager-client" },
    ],
    thumbnailPath: "/assets/pictures/project-thumbnails/mcmanager.png",
    featured: true,
  },
  {
    slug: "selton-mello-bot",
    name: "Selton Mello Bot",
    description: "A Discord utility bot that also bridges chat, moderation, and account linking with my Minecraft server.",
    longDescription: `## Origins
Selton Mello Bot didn't start with any of this in mind. It began as a joke — a silly little bot named after a Brazillian actor, thrown together purely so people in our Discord server had something dumb to mess around with. There was no homelab yet, no Minecraft server to speak of; it was just a fun side project with some novelty commands.

The MC Manager integration came much later, once the homelab and the Minecraft server existed and it became obvious the bot was the natural bridge between the two. What was originally a joke bot ended up growing into the piece that ties [MC Manager](/projects/mc-manager) to the community using it.

## Overview
These days, the bot's most interesting part is how deeply it's wired into [MC Manager](/projects/mc-manager). Rather than treating the Minecraft server as a separate world, the bot connects to MC Manager's live console over WebSocket and turns Minecraft chat, joins, leaves, deaths, and advancements into real-time Discord messages — and relays Discord chat back into the game the same way.

## Bridging chat & events safely
Parsing that console stream carefully mattered more than it sounds like it should. Every chat/event pattern is anchored to the server's real log-line prefix, because the Discord→Minecraft relay itself writes into the console (via a \`data get storage\` round trip, since \`tellraw\` prints nothing to the log on its own) — without anchoring, someone could embed a fake log line inside a Discord message and have it echoed back as if a real player said or did it.

The stream also drops the console's replay burst on reconnect (mc-manager-server replays recent history to new subscribers) using receive-time rather than the log's own local timestamp, since guessing the server's timezone from a bare \`HH:MM:SS\` turned out to silently break chat relaying entirely on a server not set to UTC.

## Account linking
Linking a Discord account to a Minecraft account is deliberately proof-of-possession based: whichever side starts the request (\`/link start <username>\` in Discord, or typing \`!link\` in-game), a one-time code is whispered privately to that player with \`tellraw\` — never \`/tell\` or \`/msg\`, since those echo a line to the console that a plugin (this bot included) could otherwise pick up and leak the code.

The player then confirms with \`/link confirm\` in Discord, and because the code is only ever visible in their own private chat, completing that loop proves they actually control the account.

## Commands & live status
Once linked, a verified server operator can run raw commands against their own Minecraft server straight from Discord with \`/mc\`, which calls back into [MC Manager](/projects/mc-manager)'s console API the same way the web dashboard would. Presence status, \`/serverinfo\`, and the \`!whitelist\` trigger all pull live player/whitelist data from MC Manager's REST API too, with a short shared cache so a burst of near-simultaneous calls (a presence tick landing next to a chat command, for instance) doesn't turn into a burst of real requests against the Minecraft server's console.

## Reliability & deployment
Because the bot's entire value depends on that connection staying alive, the WebSocket client reconnects with exponential backoff, refreshes its JWT automatically on expiry or a 401, and runs a ping/pong heartbeat to catch a connection that silently died without ever firing a close event (which idle connections behind a tunnel/proxy tend to do).

It's self-hosted as a systemd service on the same homelab box as [MC Manager](/projects/mc-manager), with its own GitHub Actions pipeline that tests and builds on every push, then deploys over the same Cloudflare Access SSH tunnel.`,
    highlights: [
      "Two-way Discord ↔ Minecraft chat/event bridge over MC Manager's console WebSocket",
      "Proof-of-possession account linking via one-time in-game whispered codes",
      "/mc lets linked server operators run commands from Discord",
      "Resilient WebSocket client: auto-reconnect, heartbeat, JWT refresh",
      "Self-hosted alongside MC Manager, deployed via GitHub Actions",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Discord.js",
      "WebSockets",
      "better-sqlite3",
      "Express",
      "Ubuntu Server",
      "GitHub Actions",
    ],
    repos: [
      { label: "Repo", url: "https://github.com/lomokwa/selton-mello-bot" },
    ],
    thumbnailPath: "/assets/pictures/project-thumbnails/seltonmello.png",
    featured: true,
  },
  {
    slug: "maid-in-florida",
    name: "Maid in Florida",
    description: "A client website for a cleaning service company.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "NodeJS", "ExpressJS", "Github Actions", "GCP"],
    liveUrl: "https://maidinfloridaservices.com/",
    thumbnailPath: "/assets/pictures/project-thumbnails/maidinflorida.jpg",
  },
  {
    slug: "portfolio",
    name: "This Portfolio!",
    description: "The website you are currently on.",
    technologies: ["Vite", "React", "TypeScript", "TailwindCSS", "SCSS"],
    repos: [{ label: "Repo", url: "https://github.com/lomokwa/lomokwa-portfolio" }],
    liveUrl: "https://lomokwa.com",
    thumbnailPath: "/assets/pictures/project-thumbnails/portfolio.png"
  },
  {
    slug: "chess-cli-game",
    name: "Chess CLI Game",
    description: "A chess game in the terminal.",
    technologies: ["Java"],
    repos: [{ label: "Repo", url: "https://github.com/lomokwa/chess-system" }],
    thumbnailPath: "/assets/pictures/project-thumbnails/chess.png"
  },
  {
    slug: "collectors-car-hub",
    name: "Collector's Car Hub",
    description: "An user-curated marketplace aggregator.",
    technologies: ["NextJS", "JavaScript", "TailwindCSS", "MongoDB", "ExpressJS", "NodeJS", "Firebase"],
    repos: [{ label: "Repo", url: "https://github.com/lomokwa/car-marketplace-web" }],
    thumbnailPath: "/assets/pictures/project-thumbnails/collectorscarhub.jpg",
  },
  {
    slug: "checkov-todo",
    name: "Checkov Todo",
    description: "A fullstack todo application.",
    technologies: ["React", "JavaScript", "Firebase", "ReactNative"],
    repos: [{ label: "Repo", url: "https://github.com/lomokwa/checkov-web" }],
    thumbnailPath: "/assets/pictures/project-thumbnails/checkov.png"
  },
];

export default codingProjects;