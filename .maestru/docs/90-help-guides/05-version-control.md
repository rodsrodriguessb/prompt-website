---
maestru: "0.4"
type: doc
id: 05-version-control
title: "Git & Version Control"
description: "Using git, branching, PRs, and worktrees in Maestru"
created: 2026-05-28
updated: 2026-05-28
tags: [git, version-control, worktrees]
---

# Git & Version Control

<!-- maestru:summary -->
How to use git with Maestru — branching, commits, pull requests, and worktrees.
<!-- /maestru:summary -->

## Version Control Tab

The **Version Control** tab provides a visual interface for common git operations:
- View changed files and diffs
- Stage and unstage changes
- Write commit messages and commit
- Switch and create branches

## Branching

Use descriptive branch names that reference work items:

```
<item-id>-<short-description>
```

Examples:
- `t1-add-auth`
- `t5-fix-login-redirect`

## Commits

Keep commits small and atomic. Reference the work item ID in the commit message:

```
T1: add login endpoint

T1: add JWT middleware
```

## Pull Requests

Create PRs from your feature branch to `main`. Include:
- What the PR does
- How to test it
- Which work item it addresses

## Worktrees

The **Worktrees** tab lets you work on multiple branches simultaneously. Each worktree is an isolated copy of the repository with its own working directory.

Use worktrees when you need to:
- Work on a bug fix while a feature branch is in progress
- Run two branches side by side for comparison
- Avoid stashing uncommitted changes when switching context

## Best Practices

- Keep `main` stable — only merge reviewed, working code
- Commit frequently with clear messages
- Pull before pushing to avoid conflicts
- Use the **Review** tab to inspect diffs before committing
