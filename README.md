# NEXUS ARENA

A GitHub-ready Next.js + React Three Fiber + Rapier 3D gaming-universe MVP.

## Included
- 3D futuristic NEXUS CITY lobby
- Procedural avatar and city blocks
- Real-time-feeling movement and camera
- Rapier physics world foundation
- Racing mode with vehicle movement, acceleration, braking, steering and collision-ready physics foundation
- Race HUD and finish transition
- Character Center
- Social Hub preview
- Leaderboard
- Responsive UI and mobile-friendly layout
- Graphics generated procedurally; no paid assets required
- Modular architecture prepared for multiplayer/backend expansion

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```
Open http://localhost:3000

Production:
```bash
npm run build
npm start
```

## GitHub / deployment
Push this folder to GitHub. A full production multiplayer deployment still requires a backend service (WebSocket/game servers), PostgreSQL, Redis, object storage and authentication provider. This repository intentionally ships a fully runnable client-side MVP without requiring external credentials.

## Controls
Lobby: WASD + mouse camera + click portals.
Racing: W/S throttle/brake, A/D steering. Reach the finish line.

## Production roadmap
1. Add authoritative Node/WebSocket game server.
2. Persist accounts/profile/inventory in PostgreSQL.
3. Add Redis presence/matchmaking.
4. Add secure authentication.
5. Add authoritative race validation and anti-cheat.
6. Add asset pipeline and optimized GLTF/Draco/KTX2 content.
