import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "PK Plumbing";
export const HOURS: Hours = null;
export const FLAP_IDLE = "";
export const SCENE: Scene = "leak";
export const VISIT_IMG = "/img/p3.jpg";
export const VISIT_ALT = "Fittings showroom used by PK Plumbing Services, Sector 38";
export const FALLBACK_IMG = "/img/p2.jpg";
export const ORDER: SectionKey[] = ["feature", "work", "map", "reviews", "visit"];

export const PHONE = "+917678529137";
export const PHONE_DISPLAY = "76785 29137";
export const WA = "917678529137";
export const SHOP = { lat: 28.4325067, lon: 77.0398718 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["s38", "medi", "s39", "s40", "s46", "s47", "sohna", "s50", "s31", "s14", "s45"]);
export const DEFAULT_AREA = "s46";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "He arrived quickly in 30 mins, was very polite, and fixed the blocked bathroom sink without any hassle",
  "send help within 30 minutes. True to his words.",
  "called them at 10 o'clock in the evening and they came",
  "fixed my leaking RO and washbasin pipe effortlessly",
  "Cleaned the tanks very well, came on time",
  "came from a long distance… didn't hesitate to provide late-night service",
  "Excellent plumbing service provider in sector 38",
];

export const RATINGS = [
  { stars: 5, count: 323 },
  { stars: 4, count: 4 },
  { stars: 3, count: 0 },
  { stars: 2, count: 2 },
  { stars: 1, count: 8 },
];

export const STATUSES = ["CALL AT 10PM", "CLOCK STARTED", "AT YOUR DOOR", "SINK FLOWING"];

export const FEATURE: Feature = {
  kind: "clock",
  minutes: 30,
  title: { en: "Thirty minutes. Customers timed it.", hi: "तीस मिनट। ग्राहकों ने ख़ुद गिना।" },
  body: {
    en: "The same number keeps showing up in PK's Google reviews, on festival days and late evenings alike.",
    hi: "PK के गूगल रिव्यू में यही बात बार बार आती है, त्योहार का दिन हो या देर शाम।",
  },
  moments: [
    { when: { en: "On Holi", hi: "होली के दिन" }, quote: "Today in holi celebration where no one came… he will be there within 30mins" },
    { when: { en: "10pm", hi: "रात 10 बजे" }, quote: "called them at 10 o'clock in the evening and they came" },
    { when: { en: "A week blocked", hi: "हफ़्ते भर से जाम" }, quote: "My kichet pipe was chocked for 7-10 days, they fixed it in 20 minutes." },
    { when: { en: "On his word", hi: "जैसा कहा" }, quote: "send help within 30 minutes. True to his words." },
  ],
};

const en = {
  banner: "Concept preview made for PK Plumbing Services by LocalLift. Not live yet.",
  brandSub: "Plumbing, Sector 38",
  live: "Shatrughan ji's team, on call 24 hours",
  shopLabel: "PK Plumbing",
  call: "Call PK Plumbing",
  callShort: "Call now",
  whatsapp: "WhatsApp",
  waHello: "Hi, I need a plumber. Can someone come?",
  heroTitle: ["Blocked at night?", "Help in 30 minutes."],
  heroProof: "4.9 stars from 337 Google reviews. Islampur, Sector 38. Open 24 hours.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "Call any hour.", body: "Holi, a Sunday, ten at night. The phone gets answered.", quote: REVIEWS[2] },
    { title: "Someone is on the way.", body: "From Islampur village, across Sectors 38 to 50 and Sohna Road.", quote: REVIEWS[1] },
    { title: "Fixed politely, without fuss.", body: "Sinks, RO lines, tanks, washing machine taps. Small jobs, done properly.", quote: REVIEWS[0] },
  ],
  googleReview: "Google review",
  distTitle: "Will they reach you in 30?",
  distBody: "Pick your area. Straight-line distance from Islampur Village, Sector 38.",
  distUnit: "km from Sector 38",
  distAsk: "Ask on WhatsApp",
  distWa: (area: string) => `Hi, I'm in ${area}. Can you send a plumber now?`,
  workTitle: "Real jobs from their Google listing.",
  workBody: "Concealed lines, WCs, tanks, sinks. Every photo here was posted on PK's own profile.",
  services: [
    { img: "/img/p2.jpg", title: "Concealed CPVC lines", body: "New pipelines laid inside the wall, joints sealed before plastering." },
    { img: "/img/p11.jpg", title: "Blocked sinks and drains", body: "Kitchen and bathroom blockages cleared, often the same hour." },
    { img: "/img/p10.jpg", title: "Water tank cleaning", body: "Overhead and underground tanks emptied, scrubbed and refilled." },
    { img: "/img/p7.jpg", title: "WC fitting", body: "Wall-hung, floor-mounted and one-piece toilets fitted and sealed." },
    { img: "/img/p4.jpg", title: "Diverters and showers", body: "Shower diverters and mixers replaced in tiled walls." },
    { img: "/img/p12.jpg", title: "Pumps and RO lines", body: "Booster pumps, RO and washbasin leaks traced and fixed." },
  ],
  revTitle: "337 reviews. 323 of them five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Knowledgeable staff", n: 13 },
    { label: "Polite staff", n: 5 },
    { label: "Sink work", n: 5 },
    { label: "Affordable fees", n: 4 },
  ],
  stars: "stars",
  visitTitle: "Find them in Sector 38.",
  address: "131, Islampur Village, Sector 38, Gurugram",
  hours: "Open 24 hours, 7 days",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for PK Plumbing Services, Gurugram. Photos and reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा PK प्लंबिंग सर्विसेज़ के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबिंग, सेक्टर 38",
  live: "शत्रुघ्न जी की टीम, 24 घंटे कॉल पर",
  shopLabel: "PK प्लंबिंग",
  call: "PK प्लंबिंग को कॉल करें",
  callShort: "अभी कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते, मुझे प्लंबर चाहिए। क्या कोई आ सकता है?",
  heroTitle: ["रात में जाम?", "30 मिनट में मदद।"],
  heroProof: "337 गूगल रिव्यू में 4.9 स्टार। इस्लामपुर, सेक्टर 38। 24 घंटे खुला।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "किसी भी समय कॉल करें।", body: "होली हो, रविवार हो, या रात के दस बजे। फ़ोन उठता है।", quote: REVIEWS[2] },
    { title: "कोई रास्ते में है।", body: "इस्लामपुर गाँव से सेक्टर 38 से 50 और सोहना रोड तक।", quote: REVIEWS[1] },
    { title: "तमीज़ से, बिना झंझट के ठीक।", body: "सिंक, RO लाइन, टंकी, वॉशिंग मशीन की टोंटी। छोटे काम, सही तरीके से।", quote: REVIEWS[0] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "क्या 30 मिनट में पहुँचेंगे?",
  distBody: "अपना इलाका चुनें। इस्लामपुर गाँव, सेक्टर 38 से सीधी दूरी।",
  distUnit: "किमी सेक्टर 38 से",
  distAsk: "व्हाट्सऐप पर पूछें",
  distWa: (area: string) => `नमस्ते, मैं ${area} में हूँ। क्या अभी प्लंबर भेज सकते हैं?`,
  workTitle: "उनकी गूगल लिस्टिंग से असली काम।",
  workBody: "कंसील्ड लाइन, WC, टंकी, सिंक। यहाँ की हर फ़ोटो PK की अपनी प्रोफ़ाइल पर डाली गई है।",
  services: [
    { img: "/img/p2.jpg", title: "कंसील्ड CPVC लाइन", body: "दीवार के अंदर नई पाइपलाइन, प्लास्टर से पहले जोड़ सील।" },
    { img: "/img/p11.jpg", title: "जाम सिंक और नाली", body: "किचन और बाथरूम का जाम, अक्सर उसी घंटे में साफ़।" },
    { img: "/img/p10.jpg", title: "पानी की टंकी की सफ़ाई", body: "छत और ज़मीन की टंकी खाली, घिसाई, और फिर भराई।" },
    { img: "/img/p7.jpg", title: "WC फ़िटिंग", body: "वॉल-हंग, फ़्लोर और वन-पीस टॉयलेट फ़िट और सील।" },
    { img: "/img/p4.jpg", title: "डाइवर्टर और शावर", body: "टाइल वाली दीवार में डाइवर्टर और मिक्सर बदले।" },
    { img: "/img/p12.jpg", title: "पंप और RO लाइन", body: "बूस्टर पंप, RO और वॉशबेसिन की लीकेज ढूँढकर ठीक।" },
  ],
  revTitle: "337 रिव्यू। 323 पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "जानकार स्टाफ़", n: 13 },
    { label: "विनम्र स्टाफ़", n: 5 },
    { label: "सिंक का काम", n: 5 },
    { label: "किफ़ायती फ़ीस", n: 4 },
  ],
  stars: "स्टार",
  visitTitle: "सेक्टर 38 में पता।",
  address: "131, इस्लामपुर गाँव, सेक्टर 38, गुरुग्राम",
  hours: "24 घंटे, सातों दिन खुला",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा PK प्लंबिंग सर्विसेज़, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
