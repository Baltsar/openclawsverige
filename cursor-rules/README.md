# Cursor AI Agent - Setup Instructions

## 📦 Files Included

```
.cursor/rules/
  ├── core.mdc                    # Main AI instructions
  ├── typescript.mdc              # TypeScript rules
  ├── react.mdc                   # React patterns
  ├── shadcn.mdc                  # ShadCN UI rules
  ├── testing.mdc                 # Auto-testing
  ├── git.mdc                     # Git workflow
  ├── anti-hallucination.mdc      # Prevent AI mistakes
  └── workflow.mdc                # Task management

AGENTS.md                         # Project context
.cursorignore                     # Files to ignore
```

## 🚀 Installation

### 1. Copy Files to Your Project

```bash
# In your Next.js project root:
mkdir -p .cursor/rules
```

Copy all `.mdc` files to `.cursor/rules/`
Copy `AGENTS.md` to project root
Copy `.cursorignore` to project root

### 2. Folder Structure

Your project should look like:

```
my-project/
├── .cursor/
│   └── rules/
│       ├── core.mdc
│       ├── typescript.mdc
│       ├── react.mdc
│       ├── shadcn.mdc
│       ├── testing.mdc
│       ├── git.mdc
│       ├── anti-hallucination.mdc
│       └── workflow.mdc
├── AGENTS.md
├── .cursorignore
├── app/
├── components/
├── package.json
└── ...
```

### 3. Verify Setup

Open Cursor AI and check:
- Settings → Rules → You should see all 8 rules listed
- The rules should show as "Always Apply" (core, testing, git, anti-hallucination)

## 💬 How to Use

### Example 1: Simple Feature

**You:**
```
Add a hero section with heading and CTA button
```

**AI:**
```
I'll add a hero section with heading and CTA.

Plan:
1. Create hero component
2. Add to homepage
3. Style with Tailwind

Proceed?
```

**You:** `yes`

**AI:** [builds, tests, commits automatically]

### Example 2: Complex Feature

**You:**
```
Build a blog with posts, categories, and search
```

**AI:**
```
This is complex. I'll create a plan.

[Creates detailed task breakdown]

Proceed?
```

**You:** `yes`

**AI:** [builds autonomously, shows progress, asks to push when done]

## ✅ What AI Does Automatically

- ✅ Builds complete features
- ✅ Runs tests (type-check, lint, build)
- ✅ Fixes its own errors
- ✅ Commits with proper messages
- ✅ Never shows you code (unless you ask)

## 🎯 Your Role

1. Describe what you want (plain English)
2. Approve the plan ("yes")
3. Approve push to production ("yes")

That's it!

## ⚠️ Important Notes

### AI Will Ask Permission Only Twice:

1. **Before building:** "Should I proceed?"
2. **Before pushing:** "Push to production?"

### AI Will NOT:

- ❌ Show you code (unless you ask)
- ❌ Ask you to fix errors
- ❌ Ask mid-implementation questions
- ❌ Invent packages or APIs

### If AI Shows Code:

Say: **"Don't show code. Build it and test it autonomously."**

### If AI Asks You to Fix Errors:

Say: **"You fix all errors autonomously."**

## 📋 Common Commands

```
"Add [feature]"
"Fix [bug]"
"Make [X] look better"
"Build [page/component]"
"Change [X] to [Y]"
"Update [element]"
```

## 🔧 Troubleshooting

### Rules Not Loading?

1. Check files are in `.cursor/rules/` (not `.cursor/` directly)
2. Restart Cursor
3. Open Settings → Rules → Verify they appear

### AI Still Showing Code?

Remind it:
```
Follow your core.mdc rules. Don't show code. Build autonomously.
```

### AI Not Testing?

Remind it:
```
You must run type-check, lint, and build before EVERY commit.
Fix errors yourself.
```

## 🎓 Tips

1. **Be specific:** Instead of "make it nice", say "add gradient background and rounded corners"

2. **Complex features:** Let AI create the plan first, then approve

3. **Trust the process:** AI will test and fix errors autonomously

4. **Review results, not code:** Check the live result, not the implementation

## 📚 Resources

- [Cursor Docs](https://cursor.com/docs)
- [ShadCN/UI](https://ui.shadcn.com)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

## 🆘 Support

If something doesn't work:

1. Check this README
2. Verify file structure
3. Restart Cursor
4. Check Settings → Rules

---

**Made for vibe coding - describe what you want, AI builds it!**
