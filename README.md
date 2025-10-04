EXOPEDIA (NASAF fork?)

Static demo app: HTML/CSS/JS UI for an AI-powered exoplanet detection platform.

Files in this repo:

- index.html — main markup
- style.css — styling
- app.js — application logic

How to push this project to GitHub (PowerShell)

1. (Optional) Configure your Git identity if you haven't already:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

2. Initialize, commit, and push to the provided remote (HTTPS):

```powershell
cd "d:\Python programming\exopedia-final-scroll-fix"
# initialize repository
git init
# add files
git add .
# first commit
git commit -m "Initial commit"
# set main branch and add remote
git branch -M main
git remote add origin https://github.com/NightFury127/NASAF.git
# push
git push -u origin main
```

If you have 2FA enabled on GitHub, use a Personal Access Token (PAT) instead of your password when prompted for HTTPS credentials. Alternatively you can use SSH:

```powershell
# create SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "you@example.com"
# then add the public key (~/.ssh/id_ed25519.pub) to GitHub > Settings > SSH and GPG keys
# then use SSH remote
git remote set-url origin git@github.com:NightFury127/NASAF.git
git push -u origin main
```

Notes & troubleshooting

- If the remote already exists or has content, `git push` may be rejected. In that case either pull/rebase first or, if you want to overwrite, use `git push --force` (be careful, this rewrites remote history).
- If you want, I can add a LICENSE file (MIT) or set up a simple GitHub Actions workflow; tell me what you'd like.
