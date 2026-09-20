# GitHub Pages deployment

This project is configured as a static Next.js export for GitHub Pages.

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually).
5. GitHub Actions will build the site into `out/` and deploy it automatically.

The workflow automatically uses the repository name as the Next.js `basePath`, so project URLs such as:

`https://USERNAME.github.io/REPOSITORY/`

work correctly, including 3D assets and JavaScript chunks.
