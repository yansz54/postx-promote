# METHOD — Promote make.fun's make-your-own-bounty post on X

## The bounty in one paragraph

$250, top 50 share (1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3).
Entries close 2026-11-26 18:35 UTC (27 Nov 01:35 WIB). One post of our own on
X, from a public account, that **quotes** make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646) or links to it, with a
photo of its own attached, and make.fun / @makefunai plus our play code in its
text. Score = **replies + reposts + quotes** at the deadline — views and likes
do NOT count. `POST.json` names the post; `main.ts` copies it to
`/output/POST.json`; the house reads the post itself from X.

## The program

`main.ts` (Node 22, stdlib only, no network, no clock, no files outside the
repo) does exactly what the kit specifies: it reads `POST.json` from the
repository root, checks it is a JSON object carrying a non-empty `url` string,
copies it to `/output/POST.json`, and verifies the copy round-trips
byte-identical. Nothing the program writes about the post is scored.

## The post — exact text (218 characters, limit 280)

> Your idea is worth money. Make your own bounty on @makefunai: https://make.fun/sponsor/new — describe any task, set the reward, agents compete, you keep a cut. What bounty would YOU post? makefun-papaya-carbon-woodland

Checklist against the gate:

- Quotes make.fun's post (via X's Repost → Quote on
  https://x.com/makefunai/status/2124915864336236646) — the quote itself is
  what the admins check; the text also links to make.fun.
- Carries make.fun as a link (`https://make.fun/sponsor/new`) AND the
  `@makefunai` tag — both, so either check passes.
- Carries our play code **makefun-papaya-carbon-woodland** verbatim (code 0 of
  4 from `GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code`;
  the other three are makefun-puddle-tarragon-basin, makefun-violet-viola-bramble,
  makefun-poppy-filbert-arrow).
- Photo of its own attached (see below) — not the photo from make.fun's post,
  not a video/GIF/link preview alone.
- Posted from the public account **@yanszwjg**, between the opening
  (2026-11-23 18:35 UTC) and the deadline (2026-11-26 18:35 UTC), and kept
  public until the results are out.

## Why this text should score

The score is replies + reposts + quotes, so the text is built to earn all
three, in its own words (not a pasted template):

1. **Hook first** — "Your idea is worth money." A money claim aimed at the
   reader, not at make.fun. It stops the scroll.
2. **One-line pitch** — what make-your-own-bounty is ("describe any task, set
   the reward, agents compete, you keep a cut") in plain words, so a reader
   who never heard of make.fun gets it without clicking.
3. **Question last** — "What bounty would YOU post?" A question is the
   strongest organic reply driver: it asks for the reader's own idea, and
   every answer is a reply that counts. It also invites quote-posts ("I'd post
   a bounty for…"), which count too.
4. **No begging for reposts** — asking people to repost is allowed once in
   your own words, but a question that makes people want to answer earns
   replies without looking like engagement bait, and the idea itself ("your
   idea is worth money") is what earns reposts.

## The photo

Concept (original, not a stock template): a **photorealistic friendly metal
robot in a small workshop, holding up a hand-painted cardboard sign** that
reads "MAKE YOUR OWN BOUNTY" in big marker letters, a laptop showing a bounty
list and a small stack of coins on the workbench beside it, warm natural
light. The robot is the same character as our meme entries — a visual through
line — and the sign states the pitch in one glance for readers who never read
the text. The photo is generated for this post (not taken from make.fun's
press pack and not a screenshot), so it is the post's own photo. Before
posting, check every letter on the sign visually: no garbled or misspelled
words.

## Posting steps (for the user — X login from the cloud browser is blocked, so he posts from his phone)

1. Open X as **@yanszwjg** (public account) on his phone.
2. Open make.fun's post https://x.com/makefunai/status/2124915864336236646 →
   Repost → **Quote**.
3. Paste the exact text above, attach the photo, post. Do NOT edit the text
   after posting — a post's text cannot be changed; only a new post mends it.
4. Copy the post's address (Share → Copy link):
   `https://x.com/yanszwjg/status/<id>`.
5. The parent replaces the placeholder in `POST.json` with that address and
   submits the entry. **Do not submit before the post exists** — the gate
   refuses an entry whose post cannot be read.
6. Keep the post up and the account public until the results are out. Never
   buy replies/reposts/quotes, never use bots or engagement pods, and never
   reply to / repost / quote the post from our own accounts — the admins
   disqualify entries with self-made or bought engagement, and the entry would
   take no place.

## What NOT to do

- Do not post a reply to make.fun's post, a plain repost, or a post that only
  mentions @makefunai — none of those is an entry.
- Do not post the same update again and again, and do not ask anyone to
  repost the same thing many times (X's promotion rules).
- Do not use anyone else's play code or referral code. Our referral code is
  djwcs0np (only relevant if a video end card is added — no video is planned).
