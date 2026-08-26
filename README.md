# Mallorcan Bricks

Placeholder page. One file, `index.html`, no build step.

The point right now is only to prove the pipeline: **push to GitHub → the live site
updates.** The real website comes later.

## Publishing a change

```bash
git add -A && git commit -m "Update page" && git push
```

## The full site

An earlier draft of the complete website — three languages, product formats, process,
spec table, gallery, contact form — is parked on the `full-site` branch. Nothing is
lost. To look at it:

```bash
git checkout full-site
```

To bring it back to the live site when you are ready:

```bash
git checkout main && git merge full-site
```
