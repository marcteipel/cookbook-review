# Cookbook review app

An installable, offline-first web app for reviewing a separately imported cookbook.

This repository contains only the generic application shell. It contains no cookbook
scans, transcription, review pack, saved answers, backups, or model credentials.
Imported content and decisions are stored in the user's browser, not in this repository.

## Use on an iPhone

1. Open the published HTTPS address in Safari and choose Share > Add to Home Screen.
2. Open the Home Screen app and wait for "Offline shell ready".
3. Import your private review ZIP from Files. Do not upload it to GitHub.
4. Review passages and save a backup JSON after each session.

Browser storage is not a permanent backup. Save backup files outside the app.
Removing the website can prevent reinstallation; cached files and local answers
can also be lost if the device or browser clears storage.

## Publication boundary

Publish only the application files already present in this repository.
Never add private review packs, cookbook files, photographs, answers, or backups.
The ignore rules are a precaution, not a substitute for checking every upload.
