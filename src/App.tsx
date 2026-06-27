import { useState, useRef, useEffect } from "react";

const CATEGORIES = {
  kids: {
    name: "Kids",
    emoji: "🌈",
    color: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFB347 100%)",
    tagline: "Spark curiosity & self-expression",
    description: "Fun and thoughtful questions to help kids open up, share their world, and feel truly heard.",
    questions: [
      { depth: "light", q: "If you could have any superpower for one day, what would you pick and what's the first thing you'd do?", activity: "Draw your superhero costume together — give each other a superpower name!" },
      { depth: "light", q: "If animals could talk, which animal do you think would be the funniest to have a conversation with?", activity: "Take turns doing your best impression of that animal trying to talk." },
      { depth: "light", q: "If you could eat only one food forever and never get tired of it, what would it be?", activity: "Make or order that food this week as a special treat together." },
      { depth: "light", q: "You get to be the main character in any movie or show — which one do you choose?", activity: "Act out your favorite scene from that show together right now." },
      { depth: "light", q: "If you could build your dream treehouse, what cool things would it have inside?", activity: "Sketch the treehouse together — each person adds one feature." },
      { depth: "light", q: "You wake up and you're invisible for the whole day. What do you do first?", activity: "Play a quick round of hide-and-seek to celebrate the invisible theme!" },
      { depth: "light", q: "If you could invent a new holiday, what would it celebrate and how would people observe it?", activity: "Design a mini holiday right now — pick a name, a food, and one fun tradition." },
      { depth: "light", q: "What's the wackiest meal you could invent if you were a chef for a day?", activity: "Pick three random ingredients from the kitchen and make up a silly recipe name." },
      { depth: "light", q: "You can travel anywhere in the world right now — where are you going and who do you take?", activity: "Look up one fun fact about that destination together and plan what you'd do first." },
      { depth: "light", q: "If your stuffed animals came alive at night, what do you think they'd get up to?", activity: "Set up a little stuffed animal 'scene' before bed tonight." },
      { depth: "light", q: "What's something that always makes you laugh, no matter what kind of day you're having?", activity: "Try to make each other laugh right now — silliest face wins!" },
      { depth: "light", q: "If you could design your dream school, what would be totally different about it?", activity: "Each person adds one rule to the dream school rulebook. Write them down!" },
      { depth: "light", q: "What game would you invent if you could create any game in the world?", activity: "Make up a quick, simple version of that game and play it for five minutes." },
      { depth: "light", q: "What's your favorite thing about the season we're in right now?", activity: "Do one quick seasonal activity together — a walk, a snack, or something that fits the season." },
      { depth: "light", q: "What's the most fun thing you've done in the last week?", activity: "Take a photo together recreating or celebrating that moment right now." },
      { depth: "light", q: "If you could be any age for a whole week, which age would you pick and why?", activity: "Act out being that age together for five minutes — talk, walk, and play like it." },
      { depth: "light", q: "If you could have a pet that doesn't exist, like a dragon or a unicorn, what would you name it?", activity: "Draw the pet together and design the perfect home for it." },
      { depth: "light", q: "What's the funniest word to say out loud?", activity: "Take turns saying silly words in funny voices — whoever laughs first loses!" },
      { depth: "light", q: "If you could swap places with a grown-up for one day, whose job would you want to try?", activity: "Pretend-play that job together for ten minutes — costumes optional but encouraged." },
      { depth: "light", q: "If you could make one rule that everyone in the world had to follow, what would it be?", activity: "Write your rule on a sign and 'announce' it to the whole house." },
      { depth: "light", q: "If your bedroom could turn into any place in the world overnight, where would you want to wake up?", activity: "Decorate one little corner so it feels a tiny bit like that place." },
      { depth: "light", q: "What's the coolest thing you've ever built — with blocks, sand, snow, or anything?", activity: "Build something quick together right now out of whatever you can find nearby." },
      { depth: "light", q: "If you could ask your future self one question, what would it be?", activity: "Write the question on paper and tuck it away to open in a year." },
      { depth: "light", q: "What's a sound you love and a sound you can't stand?", activity: "Go on a 'sound hunt' around the house and find three of each." },
      { depth: "light", q: "If you got to plan our whole family's perfect day, what would we do from morning to night?", activity: "Sketch a 'menu' for the day and try to make one part of it happen this weekend." },
      { depth: "deep", q: "When you feel scared or worried, what helps you feel brave again?", activity: "Make a little 'bravery kit' together — fill a small bag with things that make them feel safe and strong." },
      { depth: "deep", q: "What's one thing about yourself that you're really proud of?", activity: "Write or draw that thing on a piece of paper and put it somewhere they can see it." },
      { depth: "deep", q: "If your feelings had colors, what color would you be feeling right now and why?", activity: "Grab some crayons or markers and each draw how your feelings look as colors or shapes today." },
      { depth: "deep", q: "What's the nicest thing someone has ever said to you that you still remember?", activity: "Write that person a quick thank-you note or picture to send them." },
      { depth: "deep", q: "What does being kind look like to you? Can you think of a time you saw someone being really kind?", activity: "Together, pick one kind thing to do for someone in your life this week and plan how to do it." },
      { depth: "deep", q: "What do you think makes someone a really good friend?", activity: "Write a 'good friend recipe' together: list the ingredients of a great friendship." },
      { depth: "deep", q: "Is there something you've been worried about lately that you haven't told anyone?", activity: "Sit close together, listen fully, and just say: 'I'm here. You can tell me anything.'" },
      { depth: "deep", q: "What's something you wish grown-ups understood better about being a kid?", activity: "Really listen without interrupting. Then tell them one way you'll try to understand better." },
      { depth: "deep", q: "What's something you think you're still figuring out about yourself?", activity: "Share something you're still figuring out about yourself too. Normalize that growth is lifelong." },
      { depth: "deep", q: "What's a dream you have that feels really big — maybe even impossible?", activity: "Write it down and put it in a special place. Say out loud: 'Big dreams are allowed here.'" },
      { depth: "deep", q: "Who is someone you really look up to, and what do you wish you could learn from them?", activity: "Help them write or record one question they'd love to ask that person someday." },
      { depth: "deep", q: "When you make a mistake, how do you feel — and what do you wish people would say to you?", activity: "Practice saying that kind thing to each other. Mistakes are how we grow." },
      { depth: "deep", q: "What does it feel like in your body when you're really happy? Where do you feel it?", activity: "Each draw a body outline and color in where your different feelings live." },
      { depth: "deep", q: "Is there a friend or classmate you feel a little sorry for sometimes? What makes you notice them?", activity: "Think of one small, kind thing you could do for that person this week." },
      { depth: "deep", q: "What's something hard about being you that you wish were easier?", activity: "Just listen fully, then say: 'Thank you for telling me — you don't have to carry that alone.'" },
      { depth: "deep", q: "When you grow up, what kind of person do you hope you become — not a job, but the kind of person?", activity: "Write three words for who they want to be and keep them somewhere special." },
      { depth: "deep", q: "What's something you can forgive easily, and something that's really hard to forgive?", activity: "Talk about a time forgiving someone made you feel lighter inside." },
      { depth: "deep", q: "Have you ever felt left out? What happened, and how did it feel?", activity: "Make a 'no one sits alone' plan together for the next time you see it happen." },
      { depth: "deep", q: "What makes you feel safe and calm when everything feels like too much?", activity: "Build a cozy 'calm-down corner' together with a few comforting things in it." },
      { depth: "deep", q: "What's something you're really good at now that you had to practice hard to learn?", activity: "Celebrate it — tell them exactly what you admire about how they stuck with it." },
      { depth: "deep", q: "If you could change one thing about the world to make it kinder, what would it be?", activity: "Pick one tiny version of that change you could actually do together this month." },
      { depth: "deep", q: "What does love feel like to you? How do you know when someone loves you?", activity: "Each share one way you can tell the other person loves you." },
      { depth: "deep", q: "Is there anything you've been curious or confused about that you've felt afraid to ask?", activity: "Answer honestly and gently — make it clear that no question is ever 'too much.'" },
      { depth: "deep", q: "What's a worry you have about growing up?", activity: "Reassure them, and share one thing you were nervous about growing up too." },
      { depth: "deep", q: "When you imagine being really happy as a grown-up, what does your life look like?", activity: "Draw that life together and put it on the fridge as a 'someday' picture." },
    ],
  },
  family: {
    name: "Family",
    emoji: "🏡",
    color: "#4ECDC4",
    gradient: "linear-gradient(135deg, #4ECDC4 0%, #44B09E 100%)",
    tagline: "Share, laugh & reminisce together",
    description: "Conversation starters to get the whole family sharing stories, laughing, and rediscovering each other.",
    questions: [
      { depth: "light", q: "If our family had a theme song, what would it be and why?", activity: "Play that song and have a spontaneous family dance party in the living room." },
      { depth: "light", q: "What's the funniest thing that's ever happened on a family trip or road trip?", activity: "Re-enact that moment together — laugh until it hurts." },
      { depth: "light", q: "If our family was on a reality show, what would it be called?", activity: "Film a 30-second 'intro montage' for your show — each person does a signature pose." },
      { depth: "light", q: "What's each person's most lovable quirk in this family?", activity: "Go around and give each person a funny, affectionate 'award' for their quirk." },
      { depth: "light", q: "If we got stranded on a deserted island, what role would each family member play?", activity: "Assign survival roles right now and explain why each person is perfect for theirs." },
      { depth: "light", q: "What's a toy, game, or activity from your childhood that kids today would love?", activity: "Try to play or recreate that game together tonight or this weekend." },
      { depth: "light", q: "What's the best meal our family has ever shared together? What made it special?", activity: "Plan to recreate that meal this month." },
      { depth: "light", q: "If we could all learn a new skill together, what should it be?", activity: "Look up a beginner tutorial for that skill and try the first step together." },
      { depth: "light", q: "What's the silliest argument we've ever had as a family?", activity: "Recreate the argument in the silliest way possible — accents, slow motion, dramatic voices." },
      { depth: "light", q: "What's your all-time favorite family photo? What was happening that day?", activity: "Pull out that photo and display it somewhere new in the house this week." },
      { depth: "light", q: "What's the last thing that made the whole family laugh at the same time?", activity: "Try to recreate that moment or find something new to laugh at together right now." },
      { depth: "light", q: "If you could rename each person in the family with a nickname that really fits them, what would it be?", activity: "Everyone gets their new nickname revealed — and has to use them for the rest of the evening." },
      { depth: "light", q: "If our family started a business together, what would we sell and who'd be in charge of what?", activity: "Design a quick logo and slogan for your imaginary family business." },
      { depth: "light", q: "What's a movie or show our whole family can quote line for line?", activity: "Have a quick quote-off — whoever blanks first does a silly forfeit." },
      { depth: "light", q: "If we had to describe our family in three emojis, which ones and why?", activity: "Everyone picks their three, then combine them into one official 'family emoji combo.'" },
      { depth: "light", q: "What's the weirdest food combination someone in this family swears by?", activity: "Brave volunteers actually try it right now and rate it out of ten." },
      { depth: "light", q: "If our family had a mascot, what animal or character would it be?", activity: "Each draw your version of the mascot, then vote on the winner." },
      { depth: "light", q: "What household chore does everyone secretly hate the most?", activity: "Gang up and knock out the worst one together in fifteen minutes." },
      { depth: "light", q: "What's a vacation or day trip we keep saying we'll take but never have?", activity: "Pick a date right now and put it on the calendar before you forget." },
      { depth: "light", q: "If we made a family time capsule today, what would each person put in it?", activity: "Grab a box and have everyone actually add one thing to it this week." },
      { depth: "light", q: "What's the best gift anyone in this family has ever given or received?", activity: "Tell the story of why it meant so much." },
      { depth: "light", q: "What song instantly makes someone in this family want to dance?", activity: "Play it and have a two-minute kitchen dance party right now." },
      { depth: "light", q: "What's a game that always ends in happy chaos at our house?", activity: "Play one round tonight — chaos encouraged." },
      { depth: "light", q: "What's a small, everyday moment with this family that always makes you happy?", activity: "Try to recreate that little moment together right now." },
      { depth: "light", q: "What's a phrase or saying that's basically the unofficial motto of our family?", activity: "Put it on a sign or the fridge and make it official." },
      { depth: "deep", q: "What moment in our family's history made you feel most proud to be part of it?", activity: "Write that story down together in a shared notebook — the beginning of your family's story book." },
      { depth: "deep", q: "What value or principle do you think is most important for our family to live by?", activity: "Craft a one-sentence family mission statement together and put it somewhere visible." },
      { depth: "deep", q: "What's something about you that you feel the rest of the family doesn't fully understand?", activity: "Give everyone five uninterrupted minutes to share — practice listening with zero advice." },
      { depth: "deep", q: "What's a challenge our family went through that actually brought us closer?", activity: "Acknowledge how you grew — each person names one strength it gave the family." },
      { depth: "deep", q: "What does 'home' mean to you beyond a physical place?", activity: "Each person shares what makes your family feel like home. Write these on sticky notes." },
      { depth: "deep", q: "What's a sacrifice someone in our family made for the rest of us that doesn't get acknowledged enough?", activity: "Stop and thank that person specifically, out loud, with detail." },
      { depth: "deep", q: "What's a dream you have for our family's future that you haven't said out loud yet?", activity: "Each person writes their dream on paper and shares it. Together, pick one to actively work toward." },
      { depth: "deep", q: "What legacy do you want our family to leave — in our community, in each other, or in the world?", activity: "Write your family's legacy statement together and sign it. Keep it somewhere meaningful." },
      { depth: "deep", q: "What do you hope your kids (or future kids) say about what it was like to grow up in our family?", activity: "Let the kids answer: 'What would you tell your friends about our family?' — and really hear it." },
      { depth: "deep", q: "What have you learned about love from watching the people in this family?", activity: "Tell each family member one thing they have taught you about love, specifically." },
      { depth: "deep", q: "What's a quality you see in another family member that you wish you had more of yourself?", activity: "Tell that person directly — and ask how they built it." },
      { depth: "deep", q: "Is there something you've wanted to say to someone in this family but haven't found the right moment for?", activity: "Create the moment now — give them the floor, no interruptions." },
      { depth: "deep", q: "What's a way our family has changed over the years that you've had to make peace with?", activity: "Name one thing you're grateful endured through the change." },
      { depth: "deep", q: "When was a time you felt truly supported by this family?", activity: "Thank the people who showed up for you, specifically." },
      { depth: "deep", q: "What's a fear you have for someone you love in this family?", activity: "Share it gently, then ask them what they need from you." },
      { depth: "deep", q: "What family tradition do you most want to pass down, and why does it matter to you?", activity: "Write down how it started and how to keep it going." },
      { depth: "deep", q: "Is there anyone in our family you wish you were closer to? What's gotten in the way?", activity: "Plan one small step toward closing that gap this month." },
      { depth: "deep", q: "What's something you've forgiven a family member for that you've never talked about?", activity: "Decide together whether it's worth saying out loud — sometimes the saying is the healing." },
      { depth: "deep", q: "What do you think each person brings to this family that no one else could?", activity: "Go around and name each person's irreplaceable gift." },
      { depth: "deep", q: "What's a hard thing you went through that this family didn't fully know about at the time?", activity: "Let them share it now — just listen and hold it with them." },
      { depth: "deep", q: "How do you want to be remembered by the people in this room?", activity: "Each person tells someone how they already see that quality in them." },
      { depth: "deep", q: "What's a belief or value you hold that's different from how you were raised?", activity: "Talk about what shaped the change — without judgment." },
      { depth: "deep", q: "When do you feel most like yourself within this family?", activity: "Each person names one way the family can protect that feeling for them." },
      { depth: "deep", q: "What's something you're carrying right now that you could use this family's help with?", activity: "As a group, offer one concrete way to help — then actually follow through." },
      { depth: "deep", q: "If you could relive one ordinary day with this family, which would you choose?", activity: "Describe that day in detail. Notice what made the ordinary feel precious." },
    ],
  },
  friends: {
    name: "Friends",
    emoji: "✨",
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
    tagline: "Laugh harder, talk deeper",
    description: "Questions to help friends move past small talk and into the conversations that actually matter.",
    questions: [
      { depth: "light", q: "If our friend group had a reality show, what would it be called and what would the drama be?", activity: "Film a 30-second 'confessional cam' each — dramatic reality show style." },
      { depth: "light", q: "What's the most spontaneous thing you've ever done — and would you do it again?", activity: "Plan one spontaneous thing to do together in the next two weeks. Just commit." },
      { depth: "light", q: "If our friend group was a heist team, what role would each person play?", activity: "Plan an actual 'heist' — could be a surprise party, a food run, or a prank." },
      { depth: "light", q: "What's the funniest thing that's ever happened to you that still makes you laugh?", activity: "Tell the story and let everyone react — whoever laughs hardest has to tell theirs next." },
      { depth: "light", q: "If you had to describe your life right now as a movie genre, what would it be?", activity: "Each person pitches their life movie title and the group votes on the best one." },
      { depth: "light", q: "What's your go-to karaoke song — and are you any good at it?", activity: "Perform it. Right now. Even acapella. No excuses." },
      { depth: "light", q: "What's an inside joke in our friend group that would need way too much explanation to outsiders?", activity: "Tell it to someone who wasn't there for the original moment." },
      { depth: "light", q: "What's a weird or niche interest of yours that you don't talk about much?", activity: "Give a 2-minute TED talk on that interest — make the group become a temporary fan." },
      { depth: "light", q: "What's a completely useless skill you have that you're weirdly proud of?", activity: "Demonstrate it. Make the group try to match it." },
      { depth: "light", q: "What's the most embarrassing phase you went through that you can laugh about now?", activity: "Find photographic evidence if possible. Display it with pride." },
      { depth: "light", q: "What's a bucket list item you haven't crossed off yet?", activity: "Pick one from the group and actually plan it — even loosely. Put it in the calendar." },
      { depth: "light", q: "What's an app or website you use way more than you'd admit?", activity: "Share screen for 60 seconds and let the group see your most-used apps. No hiding." },
      { depth: "light", q: "If we all had to get matching tattoos, what would we (regrettably) get?", activity: "Design the group tattoo on paper — the worst idea wins by default." },
      { depth: "light", q: "What's a completely trivial hill you'll die on?", activity: "Each defend your trivial hill for 30 seconds; the group judges the most unhinged take." },
      { depth: "light", q: "If our group went on a road trip tomorrow, who's driving, who's DJ, and who's getting us lost?", activity: "Assign every road-trip role and start a shared playlist right now." },
      { depth: "light", q: "What celebrity or fictional character would round out our friend group perfectly?", activity: "Cast them and decide exactly what they'd add to the dynamic." },
      { depth: "light", q: "What's a trend you fully fell for that you now regret?", activity: "Find the photo evidence and present it to the group like a confession." },
      { depth: "light", q: "If we opened a restaurant together, what would it be and what would go horribly wrong?", activity: "Name the restaurant and have each person design one cursed menu item." },
      { depth: "light", q: "What's your most controversial food opinion?", activity: "Poll the group and watch the friendships strain in real time." },
      { depth: "light", q: "Who in the group would survive longest in a zombie apocalypse, and who's gone first?", activity: "Rank the whole group and let everyone argue their case." },
      { depth: "light", q: "What's a small thing that instantly makes your whole day better?", activity: "Do one of those things for someone in the group right now." },
      { depth: "light", q: "What's the pettiest reason you've ever held a grudge?", activity: "Confess it — the pettiest grudge wins immunity from teasing tonight." },
      { depth: "light", q: "If you could swap lives with someone in the group for a week, who would you pick?", activity: "Each say who and why; the chosen person gets to veto or gloat." },
      { depth: "light", q: "What's a 'guilty pleasure' you've decided to stop feeling guilty about?", activity: "Declare it proudly — the group cheers, no shame allowed." },
      { depth: "light", q: "What's the most chaotic moment our group chat has ever produced?", activity: "Scroll back, find it, and read it aloud dramatically." },
      { depth: "deep", q: "What's something you've never told me that you think I'd find surprising?", activity: "After sharing, each person asks a follow-up question — no judgment, just curiosity." },
      { depth: "deep", q: "What do you think people misunderstand about you the most?", activity: "Each person shares their answer; the group reflects back what they actually see — affirming only." },
      { depth: "deep", q: "What's something you're actively working on in yourself right now?", activity: "Share your growth goal and ask the group to hold you to a small weekly check-in." },
      { depth: "deep", q: "What's the most valuable lesson you've learned from a friendship that ended?", activity: "Share without bitterness — then ask: 'Is any of that lesson shaping my friendships now?'" },
      { depth: "deep", q: "What does vulnerability look like for you — when does it feel safe and when does it feel risky?", activity: "Practice a small act of vulnerability right now: share one thing you rarely say out loud." },
      { depth: "deep", q: "How did we become close friends? Do you remember the moment things clicked?", activity: "Tell the origin story as a group. Let each person add details the others forgot." },
      { depth: "deep", q: "What's a way this friendship has changed you — for the better or just differently?", activity: "Tell each person one specific way they've influenced you. Make it specific, not vague." },
      { depth: "deep", q: "What's a goal or dream you've been carrying quietly that you haven't said out loud yet?", activity: "Say it out loud. The group's job: celebrate it, not advise it. Just witness it." },
      { depth: "deep", q: "What do you hope our friendship looks like in 10 years?", activity: "Each person writes a letter to the group from 10 years in the future. Read them aloud." },
      { depth: "deep", q: "What are you most proud of in yourself right now — even if no one knows about it?", activity: "Celebrate it properly. Make a toast. This deserves acknowledgment." },
      { depth: "deep", q: "When in your life have you felt the most alone, and what helped you through it?", activity: "Let the group simply witness it — no fixing, just presence." },
      { depth: "deep", q: "Is there something in your life right now that you've been downplaying when people ask how you are?", activity: "Give them the space to actually answer 'how are you' honestly." },
      { depth: "deep", q: "What's a fear about your future that you don't usually say out loud?", activity: "Each share one; the group reflects back the strengths they see for facing it." },
      { depth: "deep", q: "Who has shaped the person you are today, and have you ever told them?", activity: "Draft a message to that person right now, even if you don't send it yet." },
      { depth: "deep", q: "What's something you needed to hear when you were younger that no one ever said to you?", activity: "Say it to each other now. Sometimes it still lands, even late." },
      { depth: "deep", q: "When do you feel most like you can be fully yourself, and when do you feel like you're performing?", activity: "Name one place each of you wishes you could drop the performance." },
      { depth: "deep", q: "What's a regret you carry that you've never really talked about?", activity: "Share it without seeking absolution — just let it be known." },
      { depth: "deep", q: "How do you actually know when you can trust someone?", activity: "Each share a moment someone earned — or broke — your trust." },
      { depth: "deep", q: "What's something you're grieving right now, even if it's not a death — a version of life, a relationship, a dream?", activity: "Hold space for it. Name what was good about what's gone." },
      { depth: "deep", q: "What does this friendship give you that you don't get anywhere else?", activity: "Tell each person one thing they uniquely provide in your life." },
      { depth: "deep", q: "Is there anything unspoken between any of us that would feel better said?", activity: "Open the floor gently — honesty offered with care strengthens, it doesn't break." },
      { depth: "deep", q: "What's a way you've changed that you're proud of, and a way you're still struggling?", activity: "Celebrate the first; ask the group for support with the second." },
      { depth: "deep", q: "When was the last time you cried, and what was it about?", activity: "No commentary — just receive it and thank them for trusting the group." },
      { depth: "deep", q: "If this were the last time we were all together, what would you want each person to know?", activity: "Actually tell them. Don't save it for an occasion that may not come." },
      { depth: "deep", q: "What's something you admire about each person here that you've never said out loud?", activity: "Go around the circle and say it to each face directly." },
    ],
  },
  couples: {
    name: "Couples",
    emoji: "💕",
    color: "#E11D48",
    gradient: "linear-gradient(135deg, #E11D48 0%, #BE185D 100%)",
    tagline: "Deepen your connection",
    description: "Thoughtful questions to help you and your partner rediscover each other and strengthen your bond.",
    questions: [
      { depth: "light", q: "What's the most ridiculous argument we've ever had — can we laugh about it now?", activity: "Recreate the argument in silly voices or slow motion. Laughter heals more than apologies." },
      { depth: "light", q: "If our relationship was a movie genre, what would it be — and what's the title?", activity: "Design the movie poster together: title, tagline, and who plays you both." },
      { depth: "light", q: "What's my most endearing habit — and my most annoying one? (Be honest!)", activity: "Both share, both laugh, both commit to one funny 'tolerance pact' for the annoying one." },
      { depth: "light", q: "If we met for the first time today, do you think we'd still end up together?", activity: "Role-play meeting for the first time tonight — same coffee shop energy, fresh eyes." },
      { depth: "light", q: "What's a date we've never done that you've always wanted to try?", activity: "Look it up right now and put it on the calendar before the night is over." },
      { depth: "light", q: "What's a skill or talent of mine that you find unexpectedly attractive?", activity: "Ask them to do that thing — watch them shine, and say exactly what you love about seeing it." },
      { depth: "light", q: "What song feels most like us right now, in this season of our relationship?", activity: "Play it. Slow dance to it in the kitchen. No occasion needed." },
      { depth: "light", q: "What's something about me that you don't think I know you find attractive?", activity: "Tell them with full eye contact. No qualifiers." },
      { depth: "light", q: "What's your love language — and do you feel like I speak it?", activity: "Do one deliberate act in their love language before the night is over." },
      { depth: "light", q: "What's something we should do together that we've never done?", activity: "Do it. Tonight if possible. Silly is underrated in long relationships." },
      { depth: "light", q: "What's a tradition we have that you hope we never stop?", activity: "Write it down officially. 'This is ours. We protect it.'" },
      { depth: "light", q: "What's something about our life right now that you're genuinely grateful for?", activity: "Each write down three things. Share them. Then put the lists somewhere you'll see them." },
      { depth: "light", q: "What was your very first impression of me — honestly?", activity: "Reenact the moment you met, exaggerated for comedy." },
      { depth: "light", q: "If we could teleport anywhere for a single dinner tonight, where would we go?", activity: "Cook or order something from that place and pretend you're there." },
      { depth: "light", q: "What's a tiny thing I do that you secretly find adorable?", activity: "Catch them doing their adorable thing later and point it out with a kiss." },
      { depth: "light", q: "If our relationship had a theme song for each year together, what's this year's?", activity: "Build a shared playlist — one song for every year you've known each other." },
      { depth: "light", q: "What's something on your bucket list that you'd love me to be part of?", activity: "Pick one and sketch out a first step together tonight." },
      { depth: "light", q: "If we could instantly be amazing at one thing as a couple, what would you pick?", activity: "Try a beginner version of it together this week — badly and happily." },
      { depth: "light", q: "What's the most fun we've ever had on a completely ordinary day?", activity: "Plan an intentionally ordinary 'nothing' day together soon." },
      { depth: "light", q: "What nickname have you secretly always wanted me to call you?", activity: "Try it out for the rest of the night and see if it sticks." },
      { depth: "light", q: "If we hosted a dinner party, what's your role and what's mine?", activity: "Plan a real one — pick a date and a guest list right now." },
      { depth: "light", q: "What's a photo of us that you love, and what do you remember about that moment?", activity: "Find it, print it or set it as a screen, and relive the day." },
      { depth: "light", q: "What's something new you'd love us to try together this year?", activity: "Write it on a shared list and commit to a date for the first one." },
      { depth: "light", q: "What's your favorite way I show you I love you, even when I don't say it?", activity: "Do that exact thing for them before bed tonight." },
      { depth: "light", q: "If we wrote a tiny instruction manual for loving each other, what's rule number one?", activity: "Each write your top three 'rules,' then compare and laugh at the overlap." },
      { depth: "deep", q: "What's something about you that you feel I still don't fully understand?", activity: "Listen without interrupting. After they're done: 'What would help me understand this better?'" },
      { depth: "deep", q: "When do you feel the most loved by me? And when do you feel least loved — even if I don't mean it?", activity: "Make one specific change based on what they share. Name it out loud so they know you heard them." },
      { depth: "deep", q: "What's a dream you've been holding quietly that you haven't shared with me yet?", activity: "Witness it without immediately problem-solving. Just say: 'I love that you have that dream. Tell me more.'" },
      { depth: "deep", q: "What's an insecurity you carry that you wish you could let go of?", activity: "Hold space. Then share yours. Vulnerability is offered better in pairs." },
      { depth: "deep", q: "What's a part of your past that still shapes how you show up in our relationship today?", activity: "Listen as a partner, not a fixer. Then ask: 'What do you need from me when that part shows up?'" },
      { depth: "deep", q: "What moment in our relationship made you most certain this was right?", activity: "Tell the story to each other — even if you've heard it before. Let it land fresh." },
      { depth: "deep", q: "How do you think we handle conflict — and what's one thing that would make it healthier?", activity: "Make one agreement about how you'll handle the next disagreement before it happens." },
      { depth: "deep", q: "What does 'growing old together' look like in your mind — what do you hope our life feels like?", activity: "Each paint a picture of that life in words. Look for the overlap — those are your shared values." },
      { depth: "deep", q: "What's the most meaningful sacrifice you've made for our relationship?", activity: "Acknowledge it. Properly. Specifically. This kind of thing deserves to be seen." },
      { depth: "deep", q: "What do you want our life to feel like five years from now — not look like, but feel like?", activity: "Close your eyes and describe it to each other. Then ask: 'What's one thing we change now to feel that way sooner?'" },
      { depth: "deep", q: "What's something you need more of from me right now that you haven't asked for?", activity: "Name one concrete way to give it this week, starting today." },
      { depth: "deep", q: "When you picture us at our best, what are we doing and how do we treat each other?", activity: "Each name one habit that gets you closer to that picture." },
      { depth: "deep", q: "Is there a hurt between us that hasn't fully healed?", activity: "Take turns speaking and reflecting back — heal it, don't relitigate it." },
      { depth: "deep", q: "What do you think I've sacrificed for us that I might not realize you noticed?", activity: "Thank each other specifically for the quiet sacrifices." },
      { depth: "deep", q: "What does feeling truly safe with me look like? When do you feel it most?", activity: "Commit to one thing that increases that sense of safety." },
      { depth: "deep", q: "Is there a part of yourself you've hidden from me out of fear of how I'd react?", activity: "Receive it with gratitude, not alarm. Make it safe to have been shared." },
      { depth: "deep", q: "How has being with me changed who you are — for better or in ways you didn't expect?", activity: "Tell each other one specific way the other has helped you grow." },
      { depth: "deep", q: "What's a worry about our future that you carry but rarely voice?", activity: "Hold it together instead of alone — ask: 'How do we face this as a team?'" },
      { depth: "deep", q: "When did you last feel truly seen by me?", activity: "Practice seeing them now — describe one thing you deeply admire and rarely say." },
      { depth: "deep", q: "What's something you're still healing from that affects us, even subtly?", activity: "Ask: 'What helps when this comes up?' — and remember the answer." },
      { depth: "deep", q: "If we could rewrite one chapter of our relationship, which would you choose and why?", activity: "Talk about what you'd keep, even from the hard parts." },
      { depth: "deep", q: "What do you most want me to understand about how you love?", activity: "Each share your 'love instructions,' then commit one to memory." },
      { depth: "deep", q: "What are you most afraid to lose about us as life gets busier?", activity: "Name one ritual you'll protect no matter what, and schedule it." },
      { depth: "deep", q: "When have you felt most proud to be with me?", activity: "Tell the story; let your partner feel how deeply they're seen." },
      { depth: "deep", q: "What promise would you make to us today, knowing everything you know now?", activity: "Each say your promise out loud, like a tiny private vow." },
    ],
  },
  lifeStory: {
    name: "Life Story",
    emoji: "📖",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    tagline: "Preserve memories for generations",
    description: "Deep, reflective questions to capture someone's life story — their memories, wisdom, and legacy.",
    questions: [
      { depth: "light", q: "What did you love doing most as a child — your favorite way to spend a free afternoon?", activity: "Try to do a version of that activity together, or spend time talking about what made it magical." },
      { depth: "light", q: "What was your childhood home like? Walk me through it as if I'm standing at the front door.", activity: "Draw a rough floor plan together. Label the rooms with a memory from each one." },
      { depth: "light", q: "Who was your best friend growing up and what did you do together?", activity: "Help them find and reach out to that friend — even a short note or message." },
      { depth: "light", q: "What did your family do for fun when you were a kid? What were weekend traditions?", activity: "Recreate one of those traditions together, even loosely." },
      { depth: "light", q: "What was your favorite subject in school — and why?", activity: "Look up one interesting thing about that subject and share it, reigniting that old curiosity." },
      { depth: "light", q: "What was the first job you ever had — and what do you remember most about it?", activity: "Look at an old photo from that era, if there is one, and tell the stories behind it." },
      { depth: "light", q: "What's a meal or food from your childhood that instantly takes you back?", activity: "Make or order that food this week and enjoy it together while sharing the memory." },
      { depth: "light", q: "What did you want to be when you grew up — and when did that dream change?", activity: "Trace the career path together — how did you get from there to here?" },
      { depth: "light", q: "What's a story about your grandparents that you were told growing up?", activity: "Write it down or record it — even a voice memo. Family stories disappear if they're not captured." },
      { depth: "light", q: "What were you like as a teenager — how would your friends have described you?", activity: "Find a photo from that era if possible. Ask about who's in it and what that day was like." },
      { depth: "light", q: "What's something about your childhood that kids today would find hard to believe?", activity: "Contrast it with life today — find the humor and appreciation in the difference." },
      { depth: "light", q: "What's the best trip you ever took? Where did you go and what do you remember most?", activity: "Look at photos from that trip together. Let the memories flow without rushing." },
      { depth: "light", q: "What music did you love when you were young, and what song still takes you right back?", activity: "Play that song together and let them tell you where it transports them." },
      { depth: "light", q: "What was your neighborhood like growing up — who were the characters everyone knew?", activity: "Draw a rough map of the neighborhood and label it with the people and stories." },
      { depth: "light", q: "What's a fashion or hairstyle you wore back then that you'd never admit to now?", activity: "Hunt down a photo and laugh about it together." },
      { depth: "light", q: "How did you and your closest friends spend a typical summer?", activity: "Pick one of those summer activities and do a small version of it together." },
      { depth: "light", q: "What was the first big thing you ever saved up to buy?", activity: "Talk about what it took to earn it and how it felt to finally get it." },
      { depth: "light", q: "What movies or TV shows did your family gather around when you were young?", activity: "Find a clip of one and watch a few minutes together." },
      { depth: "light", q: "What's a slang word or saying from your generation that's basically extinct now?", activity: "Teach it to a younger family member and bring it back for the day." },
      { depth: "light", q: "What was your wedding day, or another big celebration, like — what do you remember most?", activity: "Look through photos from that day and let the stories pour out." },
      { depth: "light", q: "Who taught you a skill you still use today, and how did they teach you?", activity: "Have them show you that skill, passing it one more generation forward." },
      { depth: "light", q: "What did a perfect Sunday look like in your house growing up?", activity: "Recreate one piece of that Sunday together this weekend." },
      { depth: "light", q: "What was the first car you ever owned or drove, and what was it like?", activity: "Look up a photo of that model and hear the road-trip stories it holds." },
      { depth: "light", q: "What hobby or pastime have you loved the longest in your life?", activity: "Spend a little time doing it together today." },
      { depth: "light", q: "What chores or responsibilities did you have growing up that shaped who you became?", activity: "Compare them to chores today and trade stories about what they taught you." },
      { depth: "deep", q: "What is your earliest memory? Describe it in as much detail as you can.", activity: "Record this one — it's irreplaceable. Use your phone to capture it in their own voice." },
      { depth: "deep", q: "What's a decision you made that completely changed the course of your life?", activity: "Map the 'what ifs' together — what would life look like if you had chosen differently?" },
      { depth: "deep", q: "What was the happiest period of your life? What was present then that made it so?", activity: "Identify the key ingredients — and ask: 'Is any version of that available to you now?'" },
      { depth: "deep", q: "What's the biggest risk you ever took — and how did it turn out?", activity: "Record this story in full — it's the kind of wisdom younger generations need." },
      { depth: "deep", q: "What's the hardest loss you've experienced — and how did you find a way forward?", activity: "Hold space. Don't rush to the resolution. Let the grief be as present as the healing." },
      { depth: "deep", q: "What do you know now that you wish you had known at 20?", activity: "Write it down as a 'letter to your 20-year-old self.' Read it aloud. Record it." },
      { depth: "deep", q: "What do you want your grandchildren or great-grandchildren to know about who you really were?", activity: "Record this in their own words — voice, video, or writing. This is their legacy." },
      { depth: "deep", q: "What are you most grateful for when you look back on your whole life?", activity: "Record this. Fully. Without rushing. These words are the ones loved ones will return to." },
      { depth: "deep", q: "What's a prayer, quote, or belief that has guided you through the hardest parts of your life?", activity: "Write it down beautifully — frame it, embroider it, or pass it on as a keepsake." },
      { depth: "deep", q: "What's the story about our family that you're afraid will disappear when you're gone?", activity: "Write it down together. This is the most important thing you can do with this time." },
      { depth: "deep", q: "Who influenced you the most in your life, and what did they teach you?", activity: "Record this in full — name them and the lesson, in their own words." },
      { depth: "deep", q: "What's a moment you felt truly proud of yourself that you've rarely talked about?", activity: "Let them savor it; ask what made it matter so much." },
      { depth: "deep", q: "What was the hardest decision you ever had to make for someone you loved?", activity: "Hold space for the weight of it, and thank them for carrying it." },
      { depth: "deep", q: "Is there something you've always wanted people to understand about you but never said?", activity: "Give them all the time they need; record it word for word." },
      { depth: "deep", q: "What's a mistake you made that taught you the most?", activity: "Ask what they'd tell someone facing that same choice today." },
      { depth: "deep", q: "Who did you love that you never got to fully say goodbye to?", activity: "Help them say it now, out loud or in writing. It still counts." },
      { depth: "deep", q: "What's a belief you held strongly when you were young that life eventually changed?", activity: "Trace what changed it — the story behind the shift is the gift." },
      { depth: "deep", q: "What are you most proud of having built or created in your life?", activity: "Capture it in detail, and record why it mattered to you." },
      { depth: "deep", q: "When did you feel most afraid in your life, and how did you find your courage?", activity: "Record this — it's the kind of strength the next generation needs to hear." },
      { depth: "deep", q: "What's something you forgave that took you years to make peace with?", activity: "Let the story breathe; don't rush from the pain to the resolution." },
      { depth: "deep", q: "What do you wish you'd said to someone while you still had the chance?", activity: "Write it as a letter to them, even now. Read it aloud and keep it." },
      { depth: "deep", q: "What does a life well-lived mean to you, looking back?", activity: "Record their definition — it's a compass you'll return to for years." },
      { depth: "deep", q: "What's a piece of advice you'd want read aloud at every family gathering after you're gone?", activity: "Write it down and put it somewhere it will actually be found." },
      { depth: "deep", q: "When did you feel most loved in your life?", activity: "Capture the moment fully — who, where, and what made it land so deeply." },
      { depth: "deep", q: "If you could leave the people you love with just one sentence, what would it be?", activity: "Record that sentence on video. This is the one they'll replay." },
    ],
  },
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CategoryCard({ id, onSelect }) {
  const cat = CATEGORIES[id];
  const lightCount = cat.questions.filter(q => q.depth === "light").length;
  const deepCount = cat.questions.filter(q => q.depth === "deep").length;

  return (
    <button
      onClick={() => onSelect(id)}
      style={{
        background: "#fff",
        border: "2px solid #eee",
        borderRadius: 20,
        padding: "24px 20px",
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        minHeight: 200,
        transition: "all 0.2s ease",
        width: "100%",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = cat.gradient;
        e.currentTarget.style.border = "2px solid transparent";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 16px 40px ${cat.color}30`;
        e.currentTarget.querySelectorAll(".cat-text").forEach(el => el.style.color = "#fff");
        e.currentTarget.querySelectorAll(".cat-badge").forEach(el => {
          el.style.background = "rgba(255,255,255,0.2)";
          el.style.color = "#fff";
          el.style.border = "1px solid rgba(255,255,255,0.3)";
        });
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.border = "2px solid #eee";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.querySelectorAll(".cat-text").forEach(el => el.style.color = "");
        e.currentTarget.querySelectorAll(".cat-badge").forEach(el => {
          el.style.background = "#f5f5f3";
          el.style.color = "#777";
          el.style.border = "1px solid #e8e8e6";
        });
      }}
    >
      <span style={{ fontSize: 30 }}>{cat.emoji}</span>
      <h3 className="cat-text" style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, margin: "4px 0 0", color: "#1a1a1a" }}>{cat.name}</h3>
      <p className="cat-text" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#888", margin: 0 }}>{cat.tagline}</p>
      <p className="cat-text" style={{ fontSize: 13, lineHeight: 1.5, color: "#666", margin: "4px 0 0" }}>{cat.description}</p>
      <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", gap: 8 }}>
        <span className="cat-badge" style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 100, background: "#f5f5f3", color: "#777", border: "1px solid #e8e8e6" }}>😊 {lightCount} Light</span>
        <span className="cat-badge" style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 100, background: "#f5f5f3", color: "#777", border: "1px solid #e8e8e6" }}>❤️ {deepCount} Deep</span>
      </div>
    </button>
  );
}

function Card({ card, cat, index, total, onNext, onPrev, onShuffle }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => { setFlipped(false); }, [index]);

  return (
    <div style={{ width: "100%", maxWidth: 440, margin: "0 auto" }}>
      {/* Card flip container */}
      <div
        onClick={() => setFlipped(f => !f)}
        style={{
          width: "100%",
          aspectRatio: "3/4",
          maxHeight: "60vh",
          cursor: "pointer",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Front */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(0deg)",
          opacity: flipped ? 0 : 1,
          transition: "opacity 0s linear 0.275s",
          background: cat.gradient,
          borderRadius: 24,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "space-between",
          padding: "28px 26px 22px",
          color: "#fff",
          textAlign: "center",
          boxShadow: `0 20px 60px ${cat.color}33`,
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -30, left: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />

          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
            <span style={{ fontSize: 26 }}>{cat.emoji}</span>
            <span style={{
              fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em",
              background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 100, padding: "3px 10px",
            }}>
              {card.depth === "light" ? "😊 Light" : "❤️ Deep"}
            </span>
          </div>

          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(16px, 4vw, 22px)",
            fontWeight: 700,
            lineHeight: 1.5,
            margin: 0,
            zIndex: 1,
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}>
            {card.q}
          </p>

          <p style={{ fontSize: 11, opacity: 0.6, letterSpacing: "0.05em", textTransform: "uppercase", zIndex: 1, margin: 0 }}>Tap to flip</p>
        </div>

        {/* Back */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          opacity: flipped ? 1 : 0,
          transition: "opacity 0s linear 0.275s",
          background: "#FAFAF8",
          borderRadius: 24,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          overflow: "hidden",
          textAlign: "center",
        }}>
          <div style={{ width: "100%", height: 6, background: cat.gradient, flexShrink: 0 }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 26px", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>{card.depth === "light" ? "🎯" : "🌱"}</span>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: cat.color }}>
                {card.depth === "light" ? "Try This Together" : "Go Deeper"}
              </span>
            </div>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(14px, 3.2vw, 18px)",
              color: "#1a1a1a",
              lineHeight: 1.65,
              fontStyle: "italic",
              fontWeight: 500,
              margin: 0,
            }}>
              {card.activity}
            </p>
            <span style={{
              fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em",
              background: cat.gradient, color: "#fff",
              borderRadius: 100, padding: "5px 13px", marginTop: 4,
              boxShadow: `0 3px 10px ${cat.color}40`,
            }}>
              {card.depth === "light" ? "😊 Light" : "❤️ Deep"}
            </span>
          </div>
          <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.05em", textTransform: "uppercase", paddingBottom: 18, margin: 0 }}>Tap to flip back</p>
        </div>
      </div>

      {/* Nav controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 24 }}>
        <button onClick={onPrev} aria-label="Previous" style={btnStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span style={{ fontSize: 14, color: "#999", fontWeight: 500, minWidth: 56, textAlign: "center" }}>
          {index + 1} / {total}
        </span>
        <button onClick={onNext} aria-label="Next" style={btnStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button onClick={onShuffle} aria-label="Shuffle" title="Shuffle" style={{ ...btnStyle, marginLeft: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  width: 44, height: 44, borderRadius: "50%",
  border: "1.5px solid #e0e0e0", background: "#fff",
  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  color: "#555", boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
};

export default function App() {
  const [category, setCategory] = useState(null);
  const [filter, setFilter] = useState("all");
  const [cards, setCards] = useState([]);
  const [idx, setIdx] = useState(0);
  const touchStart = useRef(null);

  const cat = category ? CATEGORIES[category] : null;
  const filtered = filter === "all" ? cards : cards.filter(c => c.depth === filter);
  const current = filtered[idx] || null;

  const selectCategory = (id) => {
    setCards(shuffle(CATEGORIES[id].questions));
    setIdx(0);
    setFilter("all");
    setCategory(id);
  };

  const changeFilter = (f) => { setFilter(f); setIdx(0); };
  const next = () => setIdx(i => (i + 1) % filtered.length);
  const prev = () => setIdx(i => (i - 1 + filtered.length) % filtered.length);
  const doShuffle = () => { setCards(shuffle(CATEGORIES[category].questions)); setIdx(0); };

  useEffect(() => {
    if (!category) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [category, filtered.length]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  const lightCount = cards.filter(c => c.depth === "light").length;
  const deepCount = cards.filter(c => c.depth === "deep").length;

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 900, margin: "0 auto" }}>
        <button onClick={() => setCategory(null)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, padding: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #FF6B6B 0%, #A78BFA 50%, #4ECDC4 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "Georgia, serif",
            boxShadow: "0 4px 12px rgba(167,139,250,0.3)",
          }}>C</div>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "#1a1a1a" }}>Converse</span>
        </button>
        {category && (
          <button onClick={() => setCategory(null)} style={{ background: "#f0f0ed", border: "none", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#666" }}>
            ← All Decks
          </button>
        )}
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
        {!category ? (
          <div>
            {/* Hero */}
            <div style={{ textAlign: "center", padding: "36px 0 32px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#A78BFA", marginBottom: 10 }}>Conversation Cards</p>
              <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 700, lineHeight: 1.18, color: "#1a1a1a", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                Questions that spark<br />
                <span style={{ background: "linear-gradient(135deg, #FF6B6B, #A78BFA, #4ECDC4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>real conversations</span>
              </h1>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#777", maxWidth: 420, margin: "0 auto 18px" }}>
                Choose a deck. Draw a card. Flip it for an activity. Start light — go as deep as you're ready for.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                {[{ icon: "😊", label: "Light", desc: "Easy & fun" }, { icon: "❤️", label: "Deep", desc: "Meaningful & real" }].map(d => (
                  <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 100, background: "#f0f0ec", border: "1px solid #e8e8e4" }}>
                    <span style={{ fontSize: 14 }}>{d.icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#555" }}>{d.label}</span>
                    <span style={{ fontSize: 11, color: "#aaa" }}>· {d.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {Object.keys(CATEGORIES).map(id => <CategoryCard key={id} id={id} onSelect={selectCategory} />)}
            </div>

            {/* How to play */}
            <div style={{ marginTop: 44, padding: "32px 24px", background: "#fff", borderRadius: 20, border: "1px solid #eee" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, textAlign: "center", marginBottom: 24, color: "#1a1a1a" }}>How to Play</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20 }}>
                {[
                  { icon: "🎴", title: "Choose a Deck", desc: "Pick kids, family, friends, couples, or life story." },
                  { icon: "😊❤️", title: "Pick Your Depth", desc: "Filter by Light, Deep, or leave it mixed for variety." },
                  { icon: "🗣️", title: "Draw & Ask", desc: "Read the question aloud. Everyone takes a turn." },
                  { icon: "🎯", title: "Flip for Activity", desc: "Flip the card for something to do together." },
                ].map(s => (
                  <div key={s.title} style={{ textAlign: "center" }}>
                    <span style={{ fontSize: 26 }}>{s.icon}</span>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: 600, margin: "8px 0 4px", color: "#1a1a1a" }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ paddingTop: 16 }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {/* Category label */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <span style={{ display: "inline-block", padding: "5px 14px", background: `${cat.color}15`, borderRadius: 100, fontSize: 12, fontWeight: 700, color: cat.color, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {cat.emoji} {cat.name} Edition
              </span>
            </div>

            {/* Depth filter */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24, flexWrap: "wrap" }}>
              {[
                { id: "all", label: "All", icon: "🃏", count: cards.length },
                { id: "light", label: "Light", icon: "😊", count: lightCount },
                { id: "deep", label: "Deep", icon: "❤️", count: deepCount },
              ].map(f => {
                const active = filter === f.id;
                return (
                  <button key={f.id} onClick={() => changeFilter(f.id)} style={{
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "8px 16px", borderRadius: 100,
                    border: active ? "none" : "1.5px solid #e0e0e0",
                    background: active ? cat.color : "#fff",
                    color: active ? "#fff" : "#666",
                    cursor: "pointer", fontSize: 13, fontWeight: 600,
                    boxShadow: active ? `0 4px 12px ${cat.color}33` : "none",
                  }}>
                    <span style={{ fontSize: 13 }}>{f.icon}</span>
                    {f.label}
                    <span style={{
                      fontSize: 11, borderRadius: 100, padding: "1px 6px", fontWeight: 700,
                      background: active ? "rgba(255,255,255,0.25)" : "#f0f0ec",
                      color: active ? "#fff" : "#999",
                    }}>{f.count}</span>
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
                <p style={{ fontSize: 36, marginBottom: 12 }}>🃏</p>
                <p style={{ fontSize: 15 }}>No cards for this filter.</p>
              </div>
            ) : current ? (
              <Card
                card={current}
                cat={cat}
                index={idx}
                total={filtered.length}
                onNext={next}
                onPrev={prev}
                onShuffle={doShuffle}
              />
            ) : null}

            <p style={{ textAlign: "center", fontSize: 12, color: "#bbb", marginTop: 18 }}>
              Swipe or use arrow keys · Tap card to reveal activity
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
