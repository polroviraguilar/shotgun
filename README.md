# Shotgun Battle Grid

A compact tactical duel where movement, ammunition management and simultaneous actions turn a familiar mind game into readable spatial combat.

**Shotgun Battle Grid** was designed and developed as a two-week solo project in **Unity 6**. The game expands the classic reload, shoot and shield decision loop by placing both fighters on separate three-by-three grids, where row alignment determines whether a shot can connect.

## Play the browser demo

[Play Shotgun Battle Grid](https://polroviraguilar.github.io/shotgun/)

The WebGL build is intended primarily for current desktop browsers. For the best experience, use hardware acceleration and enable sound.

## Project overview

Each turn combines two layers of decision-making:

1. **Movement** — choose a new position on the grid.
2. **Combat action** — reload, shoot or shield.

Both fighters resolve their choices as part of the same controlled sequence. Positioning changes the tactical value of every action, while animation, projectiles, sound and interface feedback make each outcome easy to read.

### Core rules

- A fighter must have ammunition before shooting.
- A shot is only dangerous when both fighters share the same row.
- A shield blocks an incoming aligned projectile.
- If both fighters shoot while aligned, the projectiles collide in the centre.
- Movement happens before the combat action and can create or break a line of fire.

## Key features

- Two independent three-by-three tactical grids
- Simultaneous action resolution
- Reload, shoot, shield and movement decisions
- Enemy AI
- Health and ammunition systems
- Projectile clashes
- Victory, defeat, draw and restart states
- Pixel-art characters and interface
- Custom shaders and visual effects
- Screen shake, particles and layered audiovisual feedback
- Browser-playable Unity WebGL build

## Technical information

| Category | Details |
|---|---|
| Engine | Unity 6000.0.65f1 |
| Language | C# |
| Platform | WebGL / desktop browser |
| Development time | 2 weeks |
| Team | Solo project |
| Status | Complete combat prototype |
| Responsibilities | Programming, game design, pixel art, shaders, UI, effects and integration |

## Repository contents

This repository currently hosts the **compiled WebGL build**, its presentation page and the GitHub Pages deployment workflow.

```text
.github/
└── workflows/
    └── deploy-pages.yml

site/
├── Build/
│   ├── site.data.unityweb
│   ├── site.framework.js.unityweb
│   ├── site.loader.js
│   └── site.wasm.unityweb
├── assets/
├── index.html
├── shotgun-page.js
└── style.css
```

The Unity source project is not included in this repository unless it is added separately in a future update.

## GitHub Pages deployment

Deployment is handled through GitHub Actions.

The workflow:

1. Checks out the repository.
2. Configures GitHub Pages.
3. Uploads the contents of `site/`.
4. Deploys the uploaded artifact to GitHub Pages.

The public build is available at:

```text
https://polroviraguilar.github.io/shotgun/
```

## Running the deployed site locally

Because the Unity loader fetches build files, the page should be served through a local HTTP server rather than opened directly from the file system.

From the repository root:

```powershell
cd site
py -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl + C`.

## Browser notes

- A current desktop browser is recommended.
- WebGL and hardware acceleration must be enabled.
- The experience is designed around the in-game interface.
- Loading time depends on connection speed and browser caching.
- Mobile devices are not the primary target for this build.

## Project status

The current version is a complete and polished combat prototype. Possible future directions include:

- Smarter AI profiles
- Additional actions and abilities
- Grid hazards
- Multiple-round matches
- Further WebGL optimisation
- Additional arenas and visual themes

## Portfolio case study

A detailed breakdown of the design, combat logic, architecture and feedback systems is available in the portfolio:

[Read the Shotgun Battle Grid case study](https://polroviraguilar.github.io/portfolio/#/portfolio/shotgun)

## Credits and licence

The game code, original pixel art, shaders and custom visual assets were created by **Pol Rovira** unless otherwise credited.

Some supporting assets may come from free-to-use third-party sources and remain subject to their original licences.

No general open-source licence is currently declared for this repository. The compiled build is published for portfolio and demonstration purposes.

## Author

**Pol Rovira**  
Multidisciplinary Game Developer

- [Portfolio](https://polroviraguilar.github.io/portfolio/)
- [GitHub](https://github.com/polroviraguilar)
- [LinkedIn](https://www.linkedin.com/in/pol-rovira-aguilar-4257961b1/)
