const i18n = {
  en: {
    navConcept: "Concept",
    navTracks: "Tracks",
    navMedia: "Media",
    navProgress: "Progress",
    navNotes: "Notes",
    heroEyebrow: "Emotional Multimedia Thesis Archive",
    heroSubtitle: "An emotional multimedia thesis project by Pongsant Chintanapakdee",
    heroDescription:
      "A personal dashboard for music, visuals, interaction, animation, sound-reactive design, and a peaceful game environment. The project follows love through memory, regret, nostalgia, emotional growth, and the quiet return to self-understanding.",
    overallProgress: "Overall Progress",
    statTracks: "Tracks",
    statMedia: "Media pieces",
    statFinished: "Finished",
    heroPlaceholder: "Hero image / city lights / rain video placeholder",
    conceptEyebrow: "Concept",
    conceptTitle: "Love as a cycle of returning",
    tracksEyebrow: "Tracklist",
    tracksTitle: "Song concepts",
    tracksNote: "Six songs, six emotional rooms, one return.",
    mediaEyebrow: "Media Plan",
    mediaTitle: "Outputs and placeholders",
    progressEyebrow: "Progress Tracker",
    progressTitle: "Checklist archive",
    resetChecks: "Reset checks",
    referencesEyebrow: "Inspiration",
    referencesTitle: "References",
    filmsTitle: "Films / Series",
    gamesTitle: "Games",
    notesEyebrow: "Notes",
    notesTitle: "Updates for later",
    savedLocally: "Saved locally",
    saving: "Saving...",
    notesLabel: "Project notes",
    notesPlaceholder: "Write thesis updates, production notes, emotional fragments, deadlines, references, or song ideas here...",
    footerText: "Love, Back To Me / emotional archive / thesis dashboard",
    backToTop: "Back to top",
    visualLabel: "Visual idea",
    mediaPlaceholder: "Image / video / audio placeholder",
    dropPrefix: "Drop",
    defaultNotes:
      "Current feeling: late-night reflection, rain, old memories, soft light.\n\nNext update:\n- Add demo links\n- Add visual references\n- Write production timeline",
    keywords: ["Dreamy", "Nostalgic", "Cinematic", "Late-night", "Reflective"],
    status: {
      "Not Started": "Not Started",
      "In Progress": "In Progress",
      "Demo Made": "Demo Made",
      Finished: "Finished",
    },
    conceptCards: [
      {
        title: "Cycle",
        tag: "Main idea",
        tone: "cycle",
        text:
          "Love moves outward toward family, friends, partners, memory, and art, then slowly circles back inward. Every form of love becomes a mirror for seeing the self more clearly.",
      },
      {
        title: "Memory & Regret",
        tag: "Archive",
        tone: "memory",
        text:
          "Childhood recordings, old footage, rain, wind, and remembered conversations become emotional evidence: imperfect fragments that carry tenderness, guilt, longing, and gratitude.",
      },
      {
        title: "Zen & Wabi-Sabi",
        tag: "Research",
        tone: "zen",
        text:
          "Zen Buddhism and Wabi-Sabi shape the project through acceptance, impermanence, quiet attention, and the beauty of things that are unfinished, fragile, or fading.",
      },
      {
        title: "Self-Understanding",
        tag: "Return",
        tone: "self",
        text:
          "The thesis asks how love changes a person. By moving through awareness, reflection, freedom, heartbreak, and peace, the work becomes a path back to emotional honesty.",
      },
    ],
    tracks: [
      {
        number: "Track 0",
        title: "Intro",
        theme: "Entering Memory",
        topic: "Memory",
        tone: "memory",
        description:
          "An ambient intro using real childhood recordings of my parents, rain, wind, and my mother asking “พรำๆ ได้ยินเสียงฝนตกไหม”. It represents memory awakening and the beginning of reflection.",
        visual: "Audio waveform / rain texture / family recording placeholder",
        status: "In Progress",
      },
      {
        number: "Track 1",
        title: "25 Dec",
        theme: "Mother's Love / Awareness",
        topic: "Mother",
        tone: "mother",
        description:
          "A song for my mother, whose birthday is December 25. It is about realizing her love, feeling regret, and wanting to give her something meaningful she can keep forever.",
        visual: "Reverse animation, ocean scene, old childhood footage, framed memory.",
        status: "In Progress",
      },
      {
        number: "Track 2",
        title: "Only You",
        theme: "Family Love / Reflection",
        topic: "Family",
        tone: "family",
        description:
          "A song for my parents, grandmother, and family. It is about realizing that the people who loved me most were always beside me, even when I acted badly.",
        visual: "TouchDesigner sound-reactive visual.",
        status: "In Progress",
      },
      {
        number: "Track 3",
        title: "Friend Song",
        theme: "Youth / Freedom / Memories",
        topic: "Friendship",
        tone: "friend",
        description:
          "A fun song about friendship, youth, talking about girls, driving at night, and remembering a time when life felt simple.",
        visual: "Interactive website memory experience.",
        status: "Not Started",
      },
      {
        number: "Track 4",
        title: "Wedding",
        theme: "Heartbreak / Attachment / Letting Go",
        topic: "Heartbreak",
        tone: "heartbreak",
        description:
          "A song about still loving someone after losing them, imagining going to an ex-lover's wedding, congratulating them, and still keeping the promise to support them.",
        visual: "Cinematic short film / MV.",
        status: "Demo Made",
      },
      {
        number: "Track 5",
        title: "Self Song",
        theme: "Peace / Self-Understanding / Acceptance",
        topic: "Self",
        tone: "self",
        description:
          "The final song about returning back to myself after love, regret, friendship, heartbreak, and emotional growth.",
        visual: "Peaceful explorable game world with no enemies or combat.",
        status: "Not Started",
      },
    ],
    mediaPlan: [
      { title: "Music EP", topic: "Sound", tone: "mother", status: "In Progress", placeholder: "Audio embeds / demos / final masters" },
      { title: "Website", topic: "Archive", tone: "memory", status: "In Progress", placeholder: "Interactive archive and dashboard" },
      { title: "Animation", topic: "Motion", tone: "family", status: "In Progress", placeholder: "25 Dec reverse ocean animation" },
      { title: "TouchDesigner Visual", topic: "Sound-reactive", tone: "friend", status: "In Progress", placeholder: "Sound-reactive visual capture" },
      { title: "Short Film / MV", topic: "Film", tone: "heartbreak", status: "In Progress", placeholder: "Wedding cinematic video" },
      { title: "Game Environment", topic: "World", tone: "self", status: "Not Started", placeholder: "Peaceful explorable world" },
      { title: "Poster", topic: "Print", tone: "zen", status: "Not Started", placeholder: "Print design / exhibition poster" },
      { title: "Album Cover", topic: "Artwork", tone: "cycle", status: "Not Started", placeholder: "Cover artwork / visual identity" },
    ],
    checklist: {
      Music: ["Intro", "25 Dec", "Only You", "Friend Song", "Wedding", "Self Song"],
      Visual: ["Album cover", "Poster", "25 Dec animation", "Wedding MV", "TouchDesigner visual", "Game environment", "Website design"],
      Research: ["Zen Buddhism", "Wabi-Sabi", "Memory and nostalgia", "Film references", "Game references"],
    },
  },
  th: {
    navConcept: "แนวคิด",
    navTracks: "เพลง",
    navMedia: "สื่อ",
    navProgress: "ความคืบหน้า",
    navNotes: "บันทึก",
    heroEyebrow: "คลังอารมณ์สำหรับโปรเจกต์ธีสิส",
    heroSubtitle: "โปรเจกต์ธีสิสมัลติมีเดียเชิงอารมณ์ โดย Pongsant Chintanapakdee",
    heroDescription:
      "แดชบอร์ดส่วนตัวสำหรับเพลง ภาพ อินเทอร์แอ็กชัน แอนิเมชัน งานภาพที่ตอบสนองต่อเสียง และโลกเกมที่สงบ โปรเจกต์นี้พาความรักเดินผ่านความทรงจำ ความเสียใจ ความคิดถึง การเติบโตทางอารมณ์ และการกลับมาเข้าใจตัวเองอย่างเงียบๆ",
    overallProgress: "ความคืบหน้ารวม",
    statTracks: "เพลง",
    statMedia: "ชิ้นงานสื่อ",
    statFinished: "เสร็จแล้ว",
    heroPlaceholder: "พื้นที่ใส่ภาพหลัก / แสงเมือง / วิดีโอฝน",
    conceptEyebrow: "แนวคิด",
    conceptTitle: "ความรักคือวัฏจักรของการกลับมา",
    tracksEyebrow: "รายชื่อเพลง",
    tracksTitle: "แนวคิดของเพลง",
    tracksNote: "หกเพลง หกห้องอารมณ์ หนึ่งการกลับมา",
    mediaEyebrow: "แผนสื่อ",
    mediaTitle: "ชิ้นงานและพื้นที่ใส่ไฟล์",
    progressEyebrow: "ตัวติดตามงาน",
    progressTitle: "เช็กลิสต์โปรเจกต์",
    resetChecks: "ล้างเช็กทั้งหมด",
    referencesEyebrow: "แรงบันดาลใจ",
    referencesTitle: "อ้างอิง",
    filmsTitle: "ภาพยนตร์ / ซีรีส์",
    gamesTitle: "เกม",
    notesEyebrow: "บันทึก",
    notesTitle: "อัปเดตไว้ดูภายหลัง",
    savedLocally: "บันทึกในเครื่องแล้ว",
    saving: "กำลังบันทึก...",
    notesLabel: "บันทึกโปรเจกต์",
    notesPlaceholder: "เขียนอัปเดตธีสิส โน้ตโปรดักชัน เศษความรู้สึก เดดไลน์ อ้างอิง หรือไอเดียเพลงได้ตรงนี้...",
    footerText: "Love, Back To Me / คลังอารมณ์ / แดชบอร์ดธีสิส",
    backToTop: "กลับขึ้นบน",
    visualLabel: "ไอเดียภาพ",
    mediaPlaceholder: "พื้นที่ใส่รูป / วิดีโอ / เสียง",
    dropPrefix: "วางไฟล์",
    defaultNotes:
      "ความรู้สึกตอนนี้: ดึก ฝน ความทรงจำเก่าๆ แสงนุ่มๆ\n\nอัปเดตถัดไป:\n- ใส่ลิงก์เดโม\n- เพิ่มภาพอ้างอิง\n- เขียนไทม์ไลน์การผลิต",
    keywords: ["เหมือนฝัน", "คิดถึงอดีต", "ภาพยนตร์", "กลางคืน", "ทบทวนใจ"],
    status: {
      "Not Started": "ยังไม่เริ่ม",
      "In Progress": "กำลังทำ",
      "Demo Made": "มีเดโมแล้ว",
      Finished: "เสร็จแล้ว",
    },
    conceptCards: [
      {
        title: "วัฏจักร",
        tag: "ใจความหลัก",
        tone: "cycle",
        text:
          "ความรักเคลื่อนออกไปหาครอบครัว เพื่อน คนรัก ความทรงจำ และศิลปะ ก่อนจะค่อยๆ วนกลับเข้ามาข้างใน ทุกความรักกลายเป็นกระจกที่ทำให้เห็นตัวเองชัดขึ้น",
      },
      {
        title: "ความทรงจำและความเสียใจ",
        tag: "คลังความทรงจำ",
        tone: "memory",
        text:
          "เสียงอัดวัยเด็ก ฟุตเทจเก่า ฝน ลม และบทสนทนาที่จำได้ กลายเป็นหลักฐานทางอารมณ์ เป็นเศษเสี้ยวที่ไม่สมบูรณ์แต่เต็มไปด้วยความอ่อนโยน ความรู้สึกผิด ความคิดถึง และความขอบคุณ",
      },
      {
        title: "เซนและวาบิ-ซาบิ",
        tag: "งานวิจัย",
        tone: "zen",
        text:
          "พุทธศาสนาแบบเซนและวาบิ-ซาบิช่วยกำหนดโทนของงานผ่านการยอมรับ ความไม่เที่ยง การสังเกตอย่างสงบ และความงามของสิ่งที่ยังไม่สมบูรณ์ เปราะบาง หรือกำลังเลือนหาย",
      },
      {
        title: "การเข้าใจตัวเอง",
        tag: "การกลับมา",
        tone: "self",
        text:
          "ธีสิสนี้ถามว่าความรักเปลี่ยนคนคนหนึ่งอย่างไร เมื่อเดินผ่านการตระหนัก การทบทวน อิสระ อกหัก และความสงบ งานนี้จึงกลายเป็นเส้นทางกลับสู่ความซื่อตรงกับใจตัวเอง",
      },
    ],
    tracks: [
      {
        number: "เพลงที่ 0",
        title: "Intro",
        theme: "การเข้าสู่ความทรงจำ",
        topic: "ความทรงจำ",
        tone: "memory",
        description:
          "อินโทรแอมเบียนต์ที่ใช้เสียงจริงจากวัยเด็กของพ่อแม่ เสียงฝน เสียงลม และเสียงแม่ถามว่า “พรำๆ ได้ยินเสียงฝนตกไหม” เป็นการปลุกความทรงจำและเริ่มต้นการทบทวน",
        visual: "เวฟฟอร์มเสียง / เท็กซ์เจอร์ฝน / พื้นที่ใส่เสียงครอบครัว",
        status: "In Progress",
      },
      {
        number: "เพลงที่ 1",
        title: "25 Dec",
        theme: "ความรักของแม่ / การตระหนักรู้",
        topic: "แม่",
        tone: "mother",
        description:
          "เพลงสำหรับแม่ที่เกิดวันที่ 25 ธันวาคม เกี่ยวกับการเพิ่งเข้าใจความรักของแม่ ความรู้สึกเสียใจ และความอยากมอบบางอย่างที่มีความหมายให้แม่เก็บไว้ตลอดไป",
        visual: "แอนิเมชันย้อนกลับ ฉากทะเล ฟุตเทจวัยเด็ก และความทรงจำในกรอบภาพ",
        status: "In Progress",
      },
      {
        number: "เพลงที่ 2",
        title: "Only You",
        theme: "ความรักของครอบครัว / การทบทวน",
        topic: "ครอบครัว",
        tone: "family",
        description:
          "เพลงสำหรับพ่อแม่ คุณยาย และครอบครัว เกี่ยวกับการได้รู้ว่าคนที่รักเราที่สุดอยู่ข้างเราเสมอ แม้ในวันที่เราเคยทำตัวไม่ดี",
        visual: "ภาพ TouchDesigner ที่ตอบสนองต่อเสียง",
        status: "In Progress",
      },
      {
        number: "เพลงที่ 3",
        title: "Friend Song",
        theme: "วัยรุ่น / อิสระ / ความทรงจำ",
        topic: "เพื่อน",
        tone: "friend",
        description:
          "เพลงสนุกเกี่ยวกับมิตรภาพ วัยรุ่น การคุยเรื่องผู้หญิง การขับรถกลางคืน และการจำช่วงเวลาที่ชีวิตเคยเรียบง่าย",
        visual: "เว็บไซต์อินเทอร์แอ็กทีฟแบบประสบการณ์ความทรงจำ",
        status: "Not Started",
      },
      {
        number: "เพลงที่ 4",
        title: "Wedding",
        theme: "อกหัก / การยึดติด / การปล่อยวาง",
        topic: "อกหัก",
        tone: "heartbreak",
        description:
          "เพลงเกี่ยวกับการยังรักใครบางคนหลังจากเสียเขาไป จินตนาการถึงการไปงานแต่งของแฟนเก่า แสดงความยินดี และยังรักษาสัญญาว่าจะคอยสนับสนุนเขา",
        visual: "หนังสั้น / มิวสิกวิดีโอแบบภาพยนตร์",
        status: "Demo Made",
      },
      {
        number: "เพลงที่ 5",
        title: "Self Song",
        theme: "ความสงบ / การเข้าใจตัวเอง / การยอมรับ",
        topic: "ตัวเอง",
        tone: "self",
        description:
          "เพลงสุดท้ายเกี่ยวกับการกลับมาหาตัวเอง หลังผ่านความรัก ความเสียใจ มิตรภาพ การอกหัก และการเติบโตทางอารมณ์",
        visual: "โลกเกมที่สงบ สำรวจได้ ไม่มีศัตรูหรือการต่อสู้",
        status: "Not Started",
      },
    ],
    mediaPlan: [
      { title: "Music EP", topic: "เสียง", tone: "mother", status: "In Progress", placeholder: "ไฟล์เสียง / เดโม / มาสเตอร์สุดท้าย" },
      { title: "Website", topic: "คลังงาน", tone: "memory", status: "In Progress", placeholder: "เว็บอินเทอร์แอ็กทีฟและแดชบอร์ด" },
      { title: "Animation", topic: "ภาพเคลื่อนไหว", tone: "family", status: "In Progress", placeholder: "แอนิเมชัน 25 Dec แบบย้อนกลับและทะเล" },
      { title: "TouchDesigner Visual", topic: "ตอบสนองเสียง", tone: "friend", status: "In Progress", placeholder: "บันทึกภาพที่ตอบสนองต่อเสียง" },
      { title: "Short Film / MV", topic: "ภาพยนตร์", tone: "heartbreak", status: "In Progress", placeholder: "วิดีโอ Wedding แบบภาพยนตร์" },
      { title: "Game Environment", topic: "โลก", tone: "self", status: "Not Started", placeholder: "โลกเกมที่สงบและสำรวจได้" },
      { title: "Poster", topic: "สิ่งพิมพ์", tone: "zen", status: "Not Started", placeholder: "โปสเตอร์สำหรับพิมพ์ / นิทรรศการ" },
      { title: "Album Cover", topic: "อาร์ตเวิร์ก", tone: "cycle", status: "Not Started", placeholder: "ปกอัลบั้ม / ภาพลักษณ์โปรเจกต์" },
    ],
    checklist: {
      เพลง: ["Intro", "25 Dec", "Only You", "Friend Song", "Wedding", "Self Song"],
      ภาพ: ["ปกอัลบั้ม", "โปสเตอร์", "แอนิเมชัน 25 Dec", "MV Wedding", "TouchDesigner visual", "Game environment", "ออกแบบเว็บไซต์"],
      วิจัย: ["Zen Buddhism", "Wabi-Sabi", "ความทรงจำและความคิดถึง", "อ้างอิงภาพยนตร์", "อ้างอิงเกม"],
    },
  },
};

const references = {
  films: ["Perfect Days", "Aftersun", "The Tree of Life", "Her", "5 Centimeters per Second", "Vinland Saga Season 2"],
  games: ["Journey", "GRIS"],
};

const statusWeights = {
  "Not Started": 0,
  "In Progress": 50,
  "Demo Made": 65,
  Finished: 100,
};

let currentLang = localStorage.getItem("loveBackLanguage") || "en";

const statusClass = (status) => status.toLowerCase().replace(/\s+/g, "-");
const t = () => i18n[currentLang];

function applyStaticText() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t()[key];
  });
  document.querySelector("#notes-area").placeholder = t().notesPlaceholder;
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });
}

function renderKeywords() {
  document.querySelector("#keyword-row").innerHTML = t().keywords.map((keyword) => `<span>${keyword}</span>`).join("");
}

function renderConcepts() {
  document.querySelector("#concept-grid").innerHTML = t().conceptCards
    .map(
      (card) => `
        <article class="concept-card topic-${card.tone}">
          <div class="topic-tag">${card.tag}</div>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");
}

function renderTracks() {
  const grid = document.querySelector("#track-grid");
  grid.innerHTML = t().tracks
    .map(
      (track) => `
        <article class="track-card topic-${track.tone}">
          <div class="card-top">
            <span class="track-number">${track.number}</span>
            <span class="status ${statusClass(track.status)}">${t().status[track.status]}</span>
          </div>
          <span class="topic-pill">${track.topic}</span>
          <h3>${track.title}</h3>
          <p class="theme">${track.theme}</p>
          <p>${track.description}</p>
          <div class="visual-idea"><strong>${t().visualLabel}:</strong> ${track.visual}</div>
          <div class="media-placeholder">${t().mediaPlaceholder}</div>
        </article>
      `
    )
    .join("");
}

function renderMedia() {
  const grid = document.querySelector("#media-grid");
  grid.innerHTML = t().mediaPlan
    .map(
      (item) => `
        <article class="media-card topic-${item.tone}">
          <div>
            <div class="card-top">
              <h3>${item.title}</h3>
              <span class="status ${statusClass(item.status)}">${t().status[item.status]}</span>
            </div>
            <span class="topic-pill">${item.topic}</span>
            <p>${item.placeholder}</p>
          </div>
          <div class="media-placeholder">${t().dropPrefix} ${item.title}</div>
        </article>
      `
    )
    .join("");
}

function savedChecklist() {
  return JSON.parse(localStorage.getItem("loveBackChecklist") || "{}");
}

function itemId(categoryIndex, itemIndex) {
  return `task-${categoryIndex}-${itemIndex}`;
}

function renderChecklist() {
  const grid = document.querySelector("#checklist-grid");
  const saved = savedChecklist();

  grid.innerHTML = Object.entries(t().checklist)
    .map(([category, items], categoryIndex) => {
      const checks = items
        .map((item, itemIndex) => {
          const id = itemId(categoryIndex, itemIndex);
          const checked = saved[id] ? "checked" : "";

          return `
            <div class="check-item">
              <label for="${id}">
                <input id="${id}" type="checkbox" ${checked} />
                <span>${item}</span>
              </label>
            </div>
          `;
        })
        .join("");

      return `
        <article class="checklist-column">
          <h3>${category}</h3>
          ${checks}
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", () => {
      const next = savedChecklist();
      next[input.id] = input.checked;
      localStorage.setItem("loveBackChecklist", JSON.stringify(next));
      updateProgress();
    });
  });
}

function renderReferences() {
  document.querySelector("#film-list").innerHTML = references.films.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#game-list").innerHTML = references.games.map((item) => `<li>${item}</li>`).join("");
}

function updateProgress() {
  const items = [...t().tracks, ...t().mediaPlan];
  const totalStatus = items.reduce((sum, item) => sum + statusWeights[item.status], 0);
  const checklistInputs = [...document.querySelectorAll("#checklist-grid input")];
  const checklistScore = checklistInputs.length
    ? (checklistInputs.filter((input) => input.checked).length / checklistInputs.length) * 100
    : 0;
  const percent = Math.round((totalStatus / items.length) * 0.7 + checklistScore * 0.3);

  document.querySelector("#overall-percent").textContent = `${percent}%`;
  document.querySelector("#overall-progress").style.width = `${percent}%`;
  document.querySelector("#stat-tracks").textContent = t().tracks.length;
  document.querySelector("#stat-media").textContent = t().mediaPlan.length;
  document.querySelector("#stat-complete").textContent = items.filter((item) => item.status === "Finished").length;
}

function setupNotes() {
  const notes = document.querySelector("#notes-area");
  const saveState = document.querySelector("#save-state");
  const noteKey = `loveBackNotes-${currentLang}`;
  notes.value = localStorage.getItem(noteKey) || t().defaultNotes;

  notes.oninput = () => {
    localStorage.setItem(`loveBackNotes-${currentLang}`, notes.value);
    saveState.textContent = t().saving;
    window.clearTimeout(setupNotes.timer);
    setupNotes.timer = window.setTimeout(() => {
      saveState.textContent = t().savedLocally;
    }, 450);
  };
}

function setupFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fade-in").forEach((section) => observer.observe(section));
}

function renderPage() {
  applyStaticText();
  renderKeywords();
  renderConcepts();
  renderTracks();
  renderMedia();
  renderChecklist();
  renderReferences();
  setupNotes();
  updateProgress();
}

document.querySelector("#reset-checklist").addEventListener("click", () => {
  localStorage.removeItem("loveBackChecklist");
  renderChecklist();
  updateProgress();
});

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("loveBackLanguage", currentLang);
    renderPage();
  });
});

renderPage();
setupFadeIn();
