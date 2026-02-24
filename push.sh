#!/bin/bash
echo "Paste your GitHub personal access token:"
read -s TOKEN

git config http.postBuffer 157286400
git remote set-url origin "https://${TOKEN}@github.com/justinmwolz/tarlon-anniversary.git"
git push --force origin main
git remote set-url origin "https://github.com/justinmwolz/tarlon-anniversary.git"
echo "Done! Check your repo at https://github.com/justinmwolz/tarlon-anniversary"
