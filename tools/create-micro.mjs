#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: create-micro.mjs <slug>");
  process.exit(1);
}

const dir = path.join("apps", slug);
if (fs.existsSync(dir)) {
  console.error("Already exists:", dir);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(
  path.join(dir, "README.md"),
  `# ${slug}

## Run in 2 minutes
\`\`\`bash
pnpm i
pnpm dev
\`\`\`

## Before/After (≤20 LOC)
\`\`\`tsx
// BEFORE

// AFTER
\`\`\`

## Proof
- Lighthouse/Network: expected <add metric or header>
`
);

fs.writeFileSync(
  path.join(dir, "package.json"),
  JSON.stringify(
    {
      name: slug,
      private: true,
      scripts: { dev: "node server.js" },
    },
    null,
    2
  )
);

fs.writeFileSync(
  path.join(dir, "server.js"),
  `// minimal http server for demo
import http from "node:http";
const server = http.createServer((req,res)=>{ res.end("ok"); });
server.listen(3000, ()=> console.log("http://localhost:3000"));
`
);

console.log("Created:", dir);
