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
              background: `${cat.color}15`, color: cat.color,
              border: `1px solid ${cat.color}25`,
              borderRadius: 100, padding: "4px 12px", marginTop: 4,
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
