#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")" || exit 1

echo "Starting deployment in $(pwd)"

echo "--- Files ---"
ls -la

# Initialize git if needed
if [ -d .git ]; then
  echo "Git repository already initialized."
else
  git init
  echo "Initialized new git repository."
fi

# Ensure git user.name/email set (only if absent)
if ! git config --get user.name >/dev/null; then
  git config user.name "uuummi-deploy"
  echo "Set git user.name to uuummi-deploy"
fi
if ! git config --get user.email >/dev/null; then
  git config user.email "uuummi-deploy@example.com"
  echo "Set git user.email to uuummi-deploy@example.com"
fi

# Add and commit changes
git add .
if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "Deploy retirement-calculator" || true
  echo "Committed changes."
fi

# Use gh CLI to create or push to repo
if command -v gh >/dev/null 2>&1; then
  echo "gh CLI found. Checking auth..."
  if gh auth status >/dev/null 2>&1; then
    echo "gh is authenticated."
  else
    echo "gh not authenticated. Please run 'gh auth login' and retry." >&2
    exit 2
  fi

  if gh repo view uuummi/uuummi.github.io >/dev/null 2>&1; then
    echo "Repository uuummi/uuummi.github.io already exists."
    if git remote get-url origin >/dev/null 2>&1; then
      echo "origin remote exists: $(git remote get-url origin)"
    else
      git remote add origin git@github.com:uuummi/uuummi.github.io.git || git remote add origin https://github.com/uuummi/uuummi.github.io.git
      echo "Added origin remote."
    fi
    git branch -M main || true
    echo "Attempting 'git push origin main'..."
    if git push origin main; then
      echo "Pushed to existing repo successfully."
    else
      echo "Initial push failed—remote history may differ. To force overwrite, run:" >&2
      echo "  git push -f origin main" >&2
      exit 3
    fi
  else
    echo "Repository does not exist. Creating via gh..."
    if gh repo create uuummi/uuummi.github.io --public --source=. --remote=origin --push; then
      echo "Created repository and pushed successfully."
    else
      echo "gh repo create failed." >&2
      exit 4
    fi
  fi
else
  echo "gh CLI not found. Install gh or create the repo manually and add remote." >&2
  exit 5
fi

echo "Deployment script finished successfully."
