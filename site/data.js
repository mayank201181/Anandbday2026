/*
 * data.js — All curated content for Anand's 45th birthday tribute.
 *
 * Every quote here is transcribed verbatim from "The Beatles" WhatsApp group
 * (2014–2026). Edit freely. To add photos later, drop image files into
 * assets/photos/ and reference them in the `photo:` fields below.
 */

window.TRIBUTE = {
  meta: {
    name: "Anand",
    fullName: "Anand Rajaram",
    handle: "Anand 1806",
    age: 45,
    birthday: "18 June 2026",
    group: "The Beatles",
    members: ["Mayank", "Vighanesh", "Paras"],
    spanFrom: 2014,
    spanTo: 2026,
    // The group was renamed "The Beatles" by Vighanesh in April 2015,
    // after a Steve Jobs quote about the band.
    jobsQuote:
      "My model for business is The Beatles. They were four guys who kept each other's kind of negative tendencies in check. They balanced each other, and the total was greater than the sum of the parts.",
  },

  // ── Anand, in his own words ────────────────────────────────────────────
  // His best lines across twelve years — wise, witty, warm.
  quotes: [
    { text: "When u hav everything u NEED nothing.. you actually need to go towards nothing. If u r ok with nothing.. everything will come to u.", date: "2014-06-20", year: 2014 },
    { text: "It may sound fawning or like another stunt but am most despo amongst all of us to stay connected, share, meet, my best friends.", date: "2014-09-06", year: 2014 },
    { text: "We r not thots. Not feelings.", date: "2015-02-19", year: 2015 },
    { text: "And in the end the king and pawn enter the same box.", date: "2015-08-10", year: 2015 },
    { text: "You don't have to prove anything to anybody; including yourself.", date: "2015-08-03", year: 2015 },
    { text: "If u can't find pleasure in simple or the mundane then you won't find pleasure anywhere.", date: "2015-08-03", year: 2015 },
    { text: "Keep life simple meanwhile. Trying to understand life mentally won't be possible. We can wonder and be in awe of it.", date: "2016-02-07", year: 2016 },
    { text: "Cry not coz u r weak but coz pretending to be strong is fatal. Don't stop ur tears. If he has got u to it he will get u thru it.", date: "2016-08-25", year: 2016 },
    { text: "If u hav decided u will find it 😇", date: "2017-01-13", year: 2017 },
    { text: "Just a medium. Things happen on their own … Plough and sow it. Keep it fertile and free. Life will sprout if it has to with divine grace.", date: "2017-10-15", year: 2017 },
    { text: "Most of the times I still can't control the waves. May be I hav learnt to swim or just float when it hits.", date: "2017-09-16", year: 2017 },
    { text: "Sat-chit-anand is always around even when you are not looking for it.", date: "2020-04-10", year: 2020 },
    { text: "Rishte fursat nahi tavajjo ke mohtaj hote hain … and thats a scarce commodity nowadays.", date: "2020-04-26", year: 2020, translation: "Relationships don't ask for our spare time — they ask for our attention. And that is the scarce thing now." },
    { text: "Here's a hot tip: There is no legacy. Your life is a firefly blink in a night. You're here for such a brief period of time … this is a game. But it's a fun game.", date: "2020-10-29", year: 2020 },
    { text: "Zinda hoon yaaar kaafi hai.", date: "2020-11-15", year: 2020, translation: "I'm alive, friend — that's enough." },
    { text: "Best way to be happy is to want what you already have.", date: "2022-05-22", year: 2022 },
    { text: "May 4 of us always be 1 whether it's 41 or 51 .. or 71.", date: "2022-11-20", year: 2022, weight: 2 },
    { text: "Life is a tragedy close-up but a comedy in the long shot. Let's choose our lens wisely. Have a fun trip number 2023. Take it easy. Enjoy the ride.", date: "2022-12-31", year: 2022 },
    { text: "If you find a reason why you and someone are friends, you are not friends.", date: "2023-05-11", year: 2023 },
    { text: "Just a dot in this vast expanse 🌎 … And the pic doesn't show the past 12 hours … the journey and the arduous steps taken.", date: "2024-06-22", year: 2024 },
    { text: "Kids hav grown up .. some people haven't.", date: "2023-10-29", year: 2023 },
    { text: "Knowledge is knowing tomato 🍅 is a fruit, wisdom is in knowing it doesn't go in fruit salad.", date: "2026-04-08", year: 2026 },
    { text: "Freedom is scary … some animals are happy in zoo some in jungle.", date: "2025-10-26", year: 2025 },
    { text: "A real friend offers something profoundly rare: unoptimised presence … Friendship survives purely through mutual choosing. Nobody has to stay. And yet some people do.", date: "2026-05-18", year: 2026, weight: 2 },
    { text: "For me to sing is a win for me and all around me.", date: "2026-02-08", year: 2026 },
    { text: "One need not be the best singer and it's fine … as long as one has best true friends.", date: "2026-02-07", year: 2026 },
    { text: "Let's do something AI can't .. eat the mangoes 🥭", date: "2026-05-23", year: 2026 },
  ],

  // ── The Beatles Years ──────────────────────────────────────────────────
  // One headline per year, 2014 → 2026. The spine of the page.
  timeline: [
    { year: 2014, age: 33, title: "The group is born", note: "Four friends, one chat. Vighanesh would soon name it after a Steve Jobs line about a band that was greater than the sum of its parts. Anand, even then, was the one chasing everyone to stay close — \"am most despo amongst all of us to stay connected.\"" },
    { year: 2015, age: 34, title: "Certified to dive anywhere in the world", note: "Anand joined a group of strangers from Facebook, flew to the Andamans and came back scuba-certified. \"I can dive anywhere in the world upto 18 m.\" The same year, he quietly opened up to the group about his hardest years — and how they made him kinder." },
    { year: 2016, age: 35, title: "The Benjamin Button year", note: "\"How does Andy get younger all the time!!\" The group genuinely could not explain it. Paras had a theory: \"because he likes and lives in the present.\"" },
    { year: 2017, age: 36, title: "The silent catalyst", note: "Without anyone noticing, Anand kept Vighanesh and Sneha quietly aware of each other — and a marriage happened. \"He has been a part of all major / important phases of my life — good and bad.\" Then he picked up a guitar and played at their sangeet." },
    { year: 2018, age: 37, title: "Gudi Padwa — a daughter", note: "On Gudi Padwa, Akshara arrived. Vighanesh's line said it all: \"Gods grace — gudi padwa maalik gifted with gudiya!\"" },
    { year: 2019, age: 38, title: "Off the grid", note: "A quieter chapter — Anand stepped away from the group for a while. The friends kept a chair warm for him the whole time." },
    { year: 2020, age: 39, title: "Returns as \"Anand 1806\" — and teaches 150 kids", note: "He came back to the group under a new name carrying his birthday — 1806. Then, mid-lockdown, he joined Thinksharp Foundation, rallied ten volunteers and was personally teaching maths to 150 rural children every Saturday." },
    { year: 2021, age: 40, title: "Praise me now instead", note: "He shared a poem he lived by: \"You will say words of praise / but I won't hear. Praise me now instead.\" Presence over ceremony — always." },
    { year: 2022, age: 41, title: "The Beatles, together again", note: "After years apart, the four reunited in Mumbai. Anand booked the place, organised the food, offered to bring a home-cooked dabba for a recovering friend. \"May 4 of us always be 1 whether it's 41 or 51 .. or 71.\"" },
    { year: 2023, age: 42, title: "20 years a CA, 25 years a fanboy", note: "Two decades since the four passed CA together. And 25 years after first-day-first-show of Dil Se in 1998, he was back in the front row for Jawan: \"He is bald, he is bad and he is back.\"" },
    { year: 2024, age: 43, title: "Just a dot in the vast expanse", note: "He spent his birthday on a mountain, posting a humble aerial photo — and a reminder that the picture never shows the twelve hard hours of climbing behind it." },
    { year: 2025, age: 44, title: "Valley of Flowers", note: "22 years a CA, a new senior role, his son Aarush winning first prize at a science fest — and Anand still out trekking the Valley of Flowers at 44, \"doing stuff which we used to do at 23.\"" },
    { year: 2026, age: 45, title: "He found his voice again", note: "After two years of vocal-cord pain that stole his voice, Anand sang in public again. Vighanesh secretly flew in to cheer from the crowd. \"One need not be the best singer … as long as one has best true friends.\"" },
  ],

  // ── What the Beatles say about you ─────────────────────────────────────
  about: [
    { text: "Boss andy was in full form today … Feel and flow of a wise man. It was fun listening to him.", who: "Vighanesh", date: "2014-09-06" },
    { text: "Honestly i think andy was always like this … mast ekdum!", who: "Vighanesh", date: "2015-12-20" },
    { text: "How does Andy get younger all the time!!", who: "Mayank", date: "2016-07-23" },
    { text: "He is also something you love and intuitively good at — teaching, guiding.", who: "Vighanesh", date: "2020-07-27" },
    { text: "Every time he spoke with me he would update on whats happening in Sneha's life and vice versa … Allah maalik!", who: "Vighanesh", date: "2017-09-16" },
    { text: "Anand — your one liners are still rocking. Getting better with age.", who: "Paras", date: "2017-12-03" },
    { text: "He has been a part of all major / important phases of my life — good and bad.", who: "Vighanesh", date: "2017-10-15" },
    { text: "Everyone of us has some unique qualities … but you have all the qualities :)", who: "Paras", date: "2020-08-17" },
    { text: "How do you manage so many things man — social, family, networking, work, religious stuff. Quite commendable.", who: "Vighanesh", date: "2023-02-25" },
    { text: "Bachpan se hi the most articulate and cogent speaker.", who: "Mayank", date: "2023-02-25" },
    { text: "@Anand 1806 doing stuff which we used to do at 23-25 years 👍", who: "Paras", date: "2024-06-22" },
    { text: "Grace maalik … what precious moments in life … both days … pure gold.", who: "Vighanesh", date: "2026-02-15" },
    { text: "Only you can connect the ignorant one to the evolved one — via the right analogies and examples — to complete our understanding.", who: "Mayank", date: "2025-11-13" },
    { text: "I felt like a true fan cheering from the crowd. He almost had tears in his eyes.", who: "Vighanesh", date: "2026-02-08" },
  ],

  // ── The Legends (running jokes & group mythology) ──────────────────────
  legends: [
    { emoji: "⏳", title: "Benjamin Button", body: "Every new photo set off the same argument: how is Anand getting <em>younger</em>? \"Not a single grey hair.\" \"What's he gonna become in 10 years — a school boy?\" Paras's verdict: it's because he actually lives in the present." },
    { emoji: "🎬", title: "The SRK Fanboy", body: "First-day-first-show of <em>Dil Se</em> in 1998. First-day-first-show of <em>Jawan</em> in 2023. Twenty-five years, same front row. \"He is bald, he is bad and he is back … ready?\"" },
    { emoji: "🌅", title: "Manori", body: "Anand's coastal happy place. His answer to every big question, every boys' meetup, every sunrise. When life gets loud, Anand goes to Manori." },
    { emoji: "🔢", title: "Anand 1806", body: "He left the group for nearly two years — and when he returned, it was under a new name carrying his own birthday: 1806. A quiet signature of who he is." },
    { emoji: "🙏", title: "Allah maalik", body: "His catchphrase and his philosophy in two words — surrender, trust, grace. The group started calling <em>him</em> \"maalik\" right back." },
    { emoji: "☕", title: "Coffee for friends, diesel for…", body: "When Vighanesh complained he only ever got \"diesel\" from Mayank while Anand got a personalised mug, Anand landed it in three words: \"Coffee ☕ for friends … diesel ⛽ for …\"" },
    { emoji: "💍", title: "Kabab mein haddi", body: "Having quietly engineered Vighanesh and Sneha's marriage, Anand then turned up on the same honeymoon trek by pure chance — the loveable bone in the kebab, immortalised on video." },
    { emoji: "📈", title: "Looking up at the markets", body: "Caught staring at his phone mid-philosophy: \"Since they are discussing the purpose of life, I might as well look up — when Sensex is 80k will S&P be 6k?\"" },
  ],

  // ── Milestones & happy news ────────────────────────────────────────────
  milestones: [
    { date: "Jul 2003", title: "Chartered Accountant", body: "Anand, Mayank and Paras all qualified as CAs on the same day — 13 July 2003. The foundation of a friendship measured now in decades." },
    { date: "2015", title: "Scuba certified, Andaman Islands", body: "Flew off with a group of strangers and came back able to \"dive anywhere in the world upto 18 m.\"" },
    { date: "Mar 2018", title: "Akshara is born", body: "A daughter, on Gudi Padwa. \"Gudi padwa maalik gifted with gudiya!\"" },
    { date: "2020", title: "Teaching 150 children", body: "Through Thinksharp Foundation, Anand recruited ten volunteers and taught maths to 150 rural students every Saturday through the pandemic — charging tablets before class because the village had no reliable power." },
    { date: "Apr 2025", title: "Aarush wins first prize", body: "His son Aarush took first place at the Nehru Science Cosmic Fest 2025 — across 20 schools and 60 students." },
    { date: "Jul 2025", title: "Valley of Flowers trek", body: "Still climbing at 44 — a Himalayan trek with friends visiting from the UK, after an office trip to Rishikesh." },
    { date: "Feb 2026", title: "His voice came back", body: "After two years of vocal-cord pain, Anand sang in public again — with his son Aarush singing a bhajan beside him, and Vighanesh secretly flown in to watch." },
  ],

  // ── Birthday wishes through the years ──────────────────────────────────
  wishes: [
    { year: 2016, items: [{ who: "Mayank", text: "Happy bday Andy" }] },
    { year: 2017, items: [
      { who: "Vighanesh", text: "Happy birthday maalik — I will be up till 830 am your time or later still — lemme know when you can talk." },
      { who: "Paras", text: "Happy Birthday Anand!" },
      { who: "Anand", text: "Tx for the wishes. Phone ya video banta hai. Whoever is free — would be nice to see all who matter to me." },
    ] },
    { year: 2020, items: [{ who: "Mayank", text: "Many many happy returns of the day Anand !!" }] },
    { year: 2023, items: [
      { who: "Vighanesh", text: "Grace — happy birthday maalik. God bless 🙌" },
      { who: "Paras", text: "@Anand 1806 Happy birthday !!" },
      { who: "Anand", text: "Making the most of the moment." },
    ] },
    { year: 2024, items: [
      { who: "Vighanesh", text: "Prabhu wishing at Brahma muhurta! Andy couldn't ask for more on his birthday 😁" },
      { who: "Anand", text: "Thank you brothers." },
    ] },
    { year: 2025, items: [
      { who: "Vighanesh", text: "Happy birthday maalik — God bless." },
      { who: "Mayank", text: "Many many happy returns of the day Andy 🎂🎂" },
      { who: "Anand", text: "Coffee ☕ for friends … diesel ⛽ for …" },
    ] },
  ],

  // ── Closing note ───────────────────────────────────────────────────────
  closing: {
    heading: "Happy 45th, Andy",
    body: [
      "Twelve years. Around twenty thousand messages. One group that never quite explained its own name.",
      "Across all of it, you've been the constant — the one who chases us to stay close, who turns up unplanned with sambar-rice warmth, who reads the book and shares the line, who lands the joke in three words and then quietly checks in on the friend who's having a hard week.",
      "You taught 150 kids you'd never met. You learnt to dive, to climb, to sing again after losing your voice. You keep getting younger while the rest of us don't. And you keep reminding us that it's all just a firefly blink in a vast, beautiful night.",
      "So — from your three Beatles — happy 45th. Here's to 51, and 61, and 71.",
      "May the 4 of us always be 1.",
    ],
    signoff: "— Mayank, Vighanesh & Paras",
  },
};
