const SIZE_ADJUST = {
  A: 1.0,
  B: 1.0,
  C: 1.0,
  D: 1.0,
  E: 1.0,
  F: 1.0,
  G: 1.0,
  H: 1.0,
  I: 1.0,
  J: 1.0,
  K: 1.0,
  L: 1.0,
  M: 1.0,
  N: 1.0,
  O: 1.0,
  P: 1.0,
  Q: 1.0,
  R: 1.0,
  S: 1.0,
  T: 1.0,
  U: 1.0,
  V: 1.0,
  "\u25D1": 1.0,
  "\u2298": 1.0,
  W: 1.0,
  X: 1.0,
  "\u2726": 1.0,
  Y: 1.0,
  "\u25CE": 1.0,
  Z: 1.0
};

const LAYOUT_MODE = "graft";
const IR_LINE_Y = 0.12;

const MASTER_SEQUENCE = [
  { key: "A", file: "01.png", type: "letter", year: 1976, name: "Braun Calculator ET22",
    pxW: 648, pxH: 713, origin: { x: 0.355, y: 0.777 } },
  { key: "B", file: "02.png", type: "letter", year: 1977, name: "Atari 2600 Paddle Controller",
    pxW: 426, pxH: 531, origin: { x: 0.398, y: 0.510 } },
  { key: "C", file: "03.png", type: "letter", year: 1983, name: "Atari 2600 Wireless Receiver",
    pxW: 912, pxH: 518, origin: { x: 0.490, y: 0.346 } },
  { key: "D", file: "04.png", type: "letter", year: 1985, name: "Vintage Remote Transmitter",
    pxW: 255, pxH: 929, origin: { x: 0.508, y: 0.079 } },
  { key: "E", file: "05.png", type: "letter", year: 1988, name: "Sony RMT-506",
    pxW: 264, pxH: 519, origin: { x: 0.508, y: 0.513 } },
  { key: "F", file: "06.png", type: "letter", year: 1989, name: "Fisher REM-M480",
    pxW: 343, pxH: 1015, origin: { x: 0.359, y: 0.332 } },
  { key: "G", file: "07.png", type: "letter", year: 1990, name: "USSR Elektron TV Remote",
    pxW: 344, pxH: 740, origin: { x: 0.841, y: 0.660 } },
  { key: "H", file: "08.png", type: "letter", year: 1990, name: "RadioShack Universal 6-in-1",
    pxW: 287, pxH: 1040, origin: { x: 0.250, y: 0.800 } },
  { key: "I", file: "09.png", type: "letter", year: 1993, name: "Samsung AA59-00854A",
    pxW: 285, pxH: 1016, origin: { x: 0.555, y: 0.390 } },
  { key: "J", file: "10.png", type: "letter", year: 1993, name: "Quasar VSQS1490 VCR Remote",
    pxW: 280, pxH: 1009, origin: { x: 0.275, y: 0.056 } },
  { key: "K", file: "11.png", type: "letter", year: 1995, name: "RadioShack Universal 7-in-1",
    pxW: 285, pxH: 930, origin: { x: 0.729, y: 0.091 } },
  { key: "L", file: "12.png", type: "letter", year: 1999, name: "Sharp G1494SA",
    pxW: 340, pxH: 973, origin: { x: 0.506, y: 0.070 } },
  { key: "M", file: "13.png", type: "letter", year: 1999, name: "Sony VTR RMT-708",
    pxW: 323, pxH: 795, origin: { x: 0.776, y: 0.235 } },
  { key: "N", file: "14.png", type: "letter", year: 2002, name: "Panasonic Camcorder Remote",
    pxW: 480, pxH: 921, origin: { x: 0.553, y: 0.075 } },
  { key: "O", file: "15.png", type: "letter", year: 2001, name: "Sony RMT-814",
    pxW: 337, pxH: 697, origin: { x: 0.845, y: 0.188 } },
  { key: "P", file: "16.png", type: "letter", year: 2003, name: "Sony RM-V402T",
    pxW: 257, pxH: 1025, origin: { x: 0.358, y: 0.697 } },
  { key: "Q", file: "17.png", type: "letter", year: 2004, name: "LG 6710CMAP01A",
    pxW: 278, pxH: 915, origin: { x: 0.271, y: 0.127 } },
  { key: "R", file: "18.png", type: "letter", year: 2006, name: "Videotron RT-U63P-15",
    pxW: 273, pxH: 1010, origin: { x: 0.516, y: 0.441 } },
  { key: "S", file: "19.png", type: "letter", year: 2006, name: "Polaroid LTD-6",
    pxW: 242, pxH: 1000, origin: { x: 0.370, y: 0.261 } },
  { key: "T", file: "20.png", type: "letter", year: 2006, name: "Polaroid 845-042-GF1XAPH",
    pxW: 214, pxH: 961, origin: { x: 0.539, y: 0.397 } },
  { key: "U", file: "21.png", type: "letter", year: 2006, name: "Suder Son-99E Combo",
    pxW: 284, pxH: 955, origin: { x: 0.558, y: 0.653 } },
  { key: "V", file: "22.png", type: "letter", year: 2007, name: "Teac RC-400",
    pxW: 327, pxH: 869, origin: { x: 0.285, y: 0.685 } },

  { key: "\u25D1", file: "24.png", type: "symbol", year: null, name: "Handicare Stairlift Remote",
    pxW: 327, pxH: 740, origin: { x: 0.51, y: 0.26 }, identity: "lineage-exile" },
  { key: "\u2298", file: "23.png", type: "symbol", year: null, name: "LED Neon Dimmer Remote",
    pxW: 299, pxH: 622, origin: { x: 0.48, y: 0.13 }, identity: "lineage-exile" },

  { key: "W", file: "25.png", type: "letter", year: 2013, name: "LG AKB73755450",
    pxW: 222, pxH: 1031, origin: { x: 0.258, y: 0.223 } },
  { key: "X", file: "26.png", type: "letter", year: 2016, name: "Videotron URC-RF224000",
    pxW: 265, pxH: 960, origin: { x: 0.488, y: 0.349 } },

  { key: "\u2726", file: "27.png", type: "symbol", year: 2026, name: "Mind Control Remote Prop",
    pxW: 327, pxH: 812, origin: { x: 0.465, y: 0.654 }, identity: "fictional-generated" },

  { key: "Y", file: "28.png", type: "letter", year: null, name: "RCA RCU410MS",
    pxW: 384, pxH: 989, origin: { x: 0.507, y: 0.034 } },

  { key: "\u25CE", file: "29.png", type: "symbol", year: null, name: "Spectrum Big-Button Remote",
    pxW: 310, pxH: 1001, origin: { x: 0.392, y: 0.341 }, identity: "mutant-variant" },

  { key: "Z", file: "30.png", type: "letter", year: null, name: "Genuine Prima PDP Remote",
    pxW: 255, pxH: 1017, origin: { x: 0.237, y: 0.257 } }
];

const COMBO_DIR_ORIGINAL = "assets/original";
const COMBO_DIR_XRAY = "assets/xray";

const COMBO_SEQUENCE = [
  { pair: ["Q", "U"], code: "qu", file: "qu.png", label: "QU",
    name: "라틴어 결합 규칙 (Q는 언제나 U를 동반)",
    nameEn: "Latin rule — Q is always followed by U",
    pxW: 483, pxH: 1165, group: "latin-rule", landscape: false },
  { pair: ["T", "H"], code: "th", file: "th.png", label: "TH",
    name: "그리스 문자 Θ(theta)의 로마자 전사",
    nameEn: "Romanization of the Greek letter Θ (theta)",
    pxW: 675, pxH: 1389, group: "greek", landscape: false },
  { pair: ["C", "H"], code: "ch", file: "ch.png", label: "CH",
    name: "그리스 문자 Χ(chi)의 로마자 전사",
    nameEn: "Romanization of the Greek letter Χ (chi)",
    pxW: 517, pxH: 1406, group: "greek", landscape: true },
  { pair: ["P", "H"], code: "ph", file: "ph.png", label: "PH",
    name: "그리스 문자 Φ(phi)의 로마자 전사",
    nameEn: "Romanization of the Greek letter Φ (phi)",
    pxW: 487, pxH: 1477, group: "greek", landscape: false },
  { pair: ["P", "S"], code: "ps", file: "ps.png", label: "PS",
    name: "그리스 문자 Ψ(psi)의 로마자 전사",
    nameEn: "Romanization of the Greek letter Ψ (psi)",
    pxW: 652, pxH: 1398, group: "greek", landscape: false },
  { pair: ["R", "H"], code: "rh", file: "rh.png", label: "RH",
    name: "그리스 문자 Ρ(rho, 유기음 표시 ῥ)의 로마자 전사",
    nameEn: "Romanization of the Greek letter Ρ (rho, rough breathing ῥ)",
    pxW: 537, pxH: 1323, group: "greek", landscape: true },
  { pair: ["P", "N"], code: "pn", file: "pn.png", label: "PN",
    name: "그리스어 πν(pn) 어두 자음군의 로마자 전사",
    nameEn: "Romanization of the Greek initial cluster πν (pn)",
    pxW: 464, pxH: 1444, group: "greek", landscape: false },
  { pair: ["P", "T"], code: "pt", file: "pt.png", label: "PT",
    name: "그리스어 πτ(pt) 어두 자음군의 로마자 전사",
    nameEn: "Romanization of the Greek initial cluster πτ (pt)",
    pxW: 629, pxH: 1420, group: "greek", landscape: false },
  { pair: ["S", "H"], code: "sh", file: "sh.png", label: "SH",
    name: "고대영어 sc의 정서법 변화형 — 전용 낱글자가 없어 정착한 조합",
    nameEn: "Old English sc respelled — no single letter was ever made for it",
    pxW: 561, pxH: 1402, group: "old-english", landscape: true },
  { pair: ["W", "H"], code: "wh", file: "wh.png", label: "WH",
    name: "고대영어 hw의 음소도치(metathesis) — 전용 낱글자가 없어 정착한 조합",
    nameEn: "Old English hw, metathesized — no single letter was ever made for it",
    pxW: 345, pxH: 1423, group: "old-english", landscape: false },
  { pair: ["G", "H"], code: "gh", file: "gh.png", label: "GH",
    name: "게르만조어 후두마찰음 표기 — 전용 낱글자가 없어 정착한 조합",
    nameEn: "Proto-Germanic guttural fricative — no single letter was ever made for it",
    pxW: 606, pxH: 1455, group: "old-english", landscape: false },
  { pair: ["N", "G"], code: "ng", file: "ng.png", label: "NG",
    name: "연구개 비음 /ŋ/ — 라틴 알파벳에 없는 소리라 두 글자로 대신함",
    nameEn: "The velar nasal /ŋ/ — a sound the Latin alphabet had no letter for",
    pxW: 474, pxH: 1351, group: "old-english", landscape: true },
  { pair: ["C", "K"], code: "ck", file: "ck.png", label: "CK",
    name: "짧은 모음 뒤 /k/ 표기 관행 — C 뒤에 K를 덧붙인 정서법",
    nameEn: "/k/ after a short vowel — a K added after C",
    pxW: 530, pxH: 1446, group: "old-english", landscape: false },
  { pair: ["K", "N"], code: "kn", file: "kn.png", label: "KN",
    name: "knight의 K — 한때 실제로 발음되던 소리가 철자로 화석화됨",
    nameEn: "The K in knight — a once-spoken sound fossilized in spelling",
    pxW: 293, pxH: 890, group: "silent-fossil", landscape: false },
  { pair: ["W", "R"], code: "wr", file: "wr.png", label: "WR",
    name: "write의 W — 한때 실제로 발음되던 소리가 철자로 화석화됨",
    nameEn: "The W in write — a once-spoken sound fossilized in spelling",
    pxW: 619, pxH: 1338, group: "silent-fossil", landscape: true },
  { pair: ["G", "N"], code: "gn", file: "gn.png", label: "GN",
    name: "gnome의 G — 한때 실제로 발음되던 소리가 철자로 화석화됨",
    nameEn: "The G in gnome — a once-spoken sound fossilized in spelling",
    pxW: 292, pxH: 918, group: "silent-fossil", landscape: false },
  { pair: ["M", "B"], code: "mb", file: "mb.png", label: "MB",
    name: "lamb의 B — 한때 실제로 발음되던 소리가 철자로 화석화됨",
    nameEn: "The B in lamb — a once-spoken sound fossilized in spelling",
    pxW: 402, pxH: 1375, group: "silent-fossil", landscape: false },
  { pair: ["M", "N"], code: "mn", file: "mn.png", label: "MN",
    name: "autumn의 N — 한때 실제로 발음되던 소리가 철자로 화석화됨",
    nameEn: "The N in autumn — a once-spoken sound fossilized in spelling",
    pxW: 413, pxH: 1399, group: "silent-fossil", landscape: true }
];

const AMP_NODE = {
  key: "&", code: "amp", file: "amp.png", type: "symbol",
  name: "앰퍼샌드 — 라틴어 'et'(그리고)의 필기체 합자(合字)",
  nameEn: "Ampersand — the cursive ligature of Latin 'et' (and)",
  pxW: 600, pxH: 505, origin: { x: 0.5, y: 0.5 },
  identity: "combo-genesis"
};

const AMP_TRIGGER_PAIR = ["E", "T"];

const comboMap = new Map();
COMBO_SEQUENCE.forEach((c) => comboMap.set(`${c.pair[0]}|${c.pair[1]}`, c));

const SEQUENCE_STEP_MS = 460;

const ORIGINAL_DIR = "assets/original";
const XRAY_DIR = "assets/xray";

const XRAY_BODY_DIR = "assets/xray-body";
const XRAY_BUTTON_DIR = "assets/xray-buttons";

function webpFile(file) {
  return file.replace(/\.png$/i, ".webp");
}

const NO_PAIR_KEYS = new Set(["A", "B", "E", "J", "L", "O", "S", "\u2298"]);

const BUTTON_POOL = MASTER_SEQUENCE.filter((n) => !NO_PAIR_KEYS.has(n.key));

function assemblyCountFor(index) {
  return seededRandom(index * 9.13 + 41) < 0.5 ? 4 : 5;
}

function pickButtonPieces(node, index, count) {
  const pool = BUTTON_POOL.filter((n) => n.key !== node.key);
  const picks = [];
  const used = new Set();
  let attempt = 0;
  while (picks.length < count && attempt < count * 12 && pool.length) {
    const r = seededRandom(index * 5.53 + attempt * 2.9 + 17);
    const pick = Math.floor(r * pool.length) % pool.length;
    if (!used.has(pick)) {
      used.add(pick);
      picks.push(pool[pick]);
    }
    attempt++;
  }
  return picks;
}

function buttonPieceJitterFor(index, slot) {
  const seed = index * 11.7 + slot * 23.3;
  const r1 = seededRandom(seed + 1);
  const r2 = seededRandom(seed + 2);
  const r3 = seededRandom(seed + 3);
  const r4 = seededRandom(seed + 4);
  const r5 = seededRandom(seed + 5);

  const rotate = 0;
  const dropPct = 6 + r5 * 10;
  return {
    targetWFrac: 0.30 + r1 * 0.14,
    targetHFrac: 0.28 + r2 * 0.12,
    centerXPct: 22 + r3 * 56,
    centerYPct: 18 + r4 * 60,
    rotate,
    dropPct,
    opacity: 0.78 + seededRandom(seed + 6) * 0.22
  };
}

const XRAY_CANVAS_W = 811;
const XRAY_CANVAS_H = 900;

const XRAY_BODY_BBOX = {
  "01.png": [0.1, 4.9, 807.9, 891.1],
  "02.png": [82.2, 406.1, 745.8, 825.9],
  "03.png": [11.0, 221.9, 811, 685.1],
  "04.png": [280.8, 0, 534.2, 900],
  "05.png": [234.3, 110.0, 577.7, 782.0],
  "06.png": [242.0, 15.4, 559.0, 847.5],
  "07.png": [178.1, 0, 632.9, 900],
  "08.png": [283.7, 0, 541.3, 900],
  "09.png": [276.6, 0, 539.4, 900],
  "10.png": [278.7, 1.2, 535.3, 900],
  "11.png": [264.0, 0, 546.0, 900],
  "12.png": [287.6, 344.8, 513.4, 421.2],
  "13.png": [243.9, 33.8, 566.1, 819.2],
  "14.png": [156.2, 0, 644.8, 900],
  "15.png": [186.7, 0, 622.3, 899.5],
  "16.png": [288.4, 0, 521.6, 900],
  "17.png": [268.4, 9.2, 536.6, 883.8],
  "18.png": [277.9, 0, 530.1, 900],
  "19.png": [282.0, 0, 529.0, 900],
  "20.png": [286.7, 0, 508.3, 900],
  "21.png": [265.3, 0, 537.7, 900],
  "22.png": [228.1, 0, 577.9, 900],
  "23.png": [256.9, 132.2, 577.1, 760.8],
  "24.png": [226.0, 46.4, 579.0, 845.6],
  "25.png": [305.4, 4.2, 504.6, 900],
  "26.png": [271.8, 0, 527.2, 900],
  "27.png": [223.7, 7.0, 586.3, 900],
  "28.png": [222.6, 0, 589.4, 900],
  "29.png": [262.9, 0, 549.1, 899.8],
  "30.png": [290.5, 0, 520.5, 900],
};

const XRAY_BUTTON_BBOX= {
  "03.png": [5.4, 220.7, 811, 688.3],
  "04.png": [321.9, 79.5, 486.1, 444.5],
  "06.png": [241.2, 9.4, 559.8, 836.6],
  "07.png": [205.0, 15.9, 609.0, 900],
  "08.png": [295.0, 0, 511.0, 763.4],
  "09.png": [278.3, 0, 540.7, 900],
  "11.png": [263.5, 0, 547.5, 900],
  "13.png": [244.0, 29.1, 567.0, 809.9],
  "14.png": [171.3, 0, 648.7, 894.2],
  "16.png": [289.4, 0, 521.6, 900],
  "17.png": [271.0, 7.2, 540.0, 892.8],
  "18.png": [279.7, 0, 530.3, 900],
  "20.png": [294.8, 0, 517.2, 900],
  "21.png": [270.0, 0, 541.0, 899.2],
  "22.png": [228.0, 0, 578.0, 900],
  "24.png": [236.0, 46.1, 586.0, 853.9],
  "25.png": [306.7, 0, 504.3, 900],
  "26.png": [272.6, 0, 526.4, 900],
  "27.png": [249.8, 472.6, 470.2, 860.4],
  "28.png": [228.9, 0, 582.1, 900],
  "29.png": [262.4, 0, 548.6, 871.2],
  "30.png": [290.5, 0, 520.5, 900],
};

const BUTTON_ONLY_RENDER_FILES = new Set(["02.png", "12.png"]);

function xrayFitTransform(bboxTable, file, targetW, targetH) {
  const box = BUTTON_ONLY_RENDER_FILES.has(file) ? null : bboxTable[file];
  if (!box) {
    const scale = Math.min(targetW / XRAY_CANVAS_W, targetH / XRAY_CANVAS_H);
    return { scale, cx: (XRAY_CANVAS_W * scale) / 2, cy: (XRAY_CANVAS_H * scale) / 2 };
  }
  const [bx0, by0, bx1, by1] = box;
  const bboxW = bx1 - bx0;
  const bboxH = by1 - by0;
  const scale = Math.min(targetW / bboxW, targetH / bboxH);
  return { scale, cx: ((bx0 + bx1) / 2) * scale, cy: ((by0 + by1) / 2) * scale };
}

function xrayBodyPlacement(node, dispW, dispH) {
  const t = xrayFitTransform(XRAY_BODY_BBOX, node.file, dispW, dispH);
  return { scale: t.scale, left: dispW / 2 - t.cx, top: dispH / 2 - t.cy };
}

function buildGraftPiece(piece, jitter, dispW, dispH) {
  const own = mainDisplaySize(piece);
  const t = xrayFitTransform(XRAY_BODY_BBOX, piece.file, own.w, own.h);
  const b = XRAY_BUTTON_BBOX[piece.file];
  const bcx = b ? ((b[0] + b[2]) / 2) * t.scale : (XRAY_CANVAS_W * t.scale) / 2;
  const bcy = b ? ((b[1] + b[3]) / 2) * t.scale : (XRAY_CANVAS_H * t.scale) / 2;
  const canvasW = XRAY_CANVAS_W * t.scale;
  const canvasH = XRAY_CANVAS_H * t.scale;
  const centerX = (jitter.centerXPct / 100) * dispW;
  const centerY = (jitter.centerYPct / 100) * dispH;

  const img = document.createElement("img");
  img.decoding = "async";
  img.className = "graft-piece";
  img.src = `${XRAY_BUTTON_DIR}/${webpFile(piece.file)}`;
  img.alt = "";
  img.style.width = `${canvasW}px`;
  img.style.height = `${canvasH}px`;
  img.style.left = `${centerX - bcx}px`;
  img.style.top = `${centerY - bcy}px`;
  img.style.transform = "none";
  img.style.opacity = String(jitter.opacity);
  return img;
}

function buildPhotoGraftPiece(piece, jitter, dispW, dispH) {
  const own = mainDisplaySize(piece);
  const centerX = (jitter.centerXPct / 100) * dispW;
  const centerY = (jitter.centerYPct / 100) * dispH;

  const img = document.createElement("img");
  img.decoding = "async";
  img.className = "graft-piece";
  img.src = `${ORIGINAL_DIR}/${webpFile(piece.file)}`;
  img.alt = `${piece.name} 사진 조각`;
  img.style.width = `${own.w}px`;
  img.style.height = `${own.h}px`;
  img.style.left = `${centerX - own.w / 2}px`;
  img.style.top = `${centerY - own.h / 2}px`;
  img.style.objectFit = "contain";
  img.style.transform = "none";

  img.style.opacity = String(jitter.opacity * 0.42);
  return img;
}

function appendGrafts(container, node, index, forceGlitch, dispW, dispH, mode) {
  if (typeof index !== "number") return;
  if (NO_PAIR_KEYS.has(node.key) || forceGlitch) return;

  const count = assemblyCountFor(index);
  const pieces = pickButtonPieces(node, index, count);
  pieces.forEach((piece, slot) => {
    const jitter = buttonPieceJitterFor(index, slot);
    const el =
      mode === "original"
        ? buildPhotoGraftPiece(piece, jitter, dispW, dispH)
        : buildGraftPiece(piece, jitter, dispW, dispH);

    const finalOpacity = el.style.opacity;
    el.style.opacity = "0";
    el.style.transform = `translateY(-${jitter.dropPct}%) scale(1.06)`;
    el.style.transition = "opacity 220ms ease, transform 420ms cubic-bezier(0.3, 1.5, 0.5, 1)";
    el.dataset.slot = String(slot);
    container.appendChild(el);
    const delay = 90 + slot * 130;
    setTimeout(() => {
      el.style.opacity = finalOpacity;
      el.style.transform = "none";
    }, delay);
  });
}

function buildXrayAssembly(node, index, forceGlitch, dispW, dispH) {
  const el = document.createElement("div");
  el.className = "img-xray xray-assembly";

  if (typeof index !== "number") {
    const img = document.createElement("img");
    img.decoding = "async";
    img.className = "assembly-body";
    img.src = `${XRAY_DIR}/${webpFile(node.file)}`;
    img.alt = `${node.name} (x-ray)`;
    img.onerror = () => img.remove();
    el.appendChild(img);
    return el;
  }

  const isSingle = NO_PAIR_KEYS.has(node.key) || forceGlitch;
  const place = xrayBodyPlacement(node, dispW, dispH);
  const canvasW = XRAY_CANVAS_W * place.scale;
  const canvasH = XRAY_CANVAS_H * place.scale;

  if (isSingle) {
    el.classList.add("assembly-glitch");
    const img = document.createElement("img");
    img.decoding = "async";
    img.src = `${XRAY_BODY_DIR}/${webpFile(node.file)}`;
    img.alt = `${node.name} (x-ray · 미조립)`;
    img.style.position = "absolute";
    img.style.width = `${canvasW}px`;
    img.style.height = `${canvasH}px`;
    img.style.left = `${place.left}px`;
    img.style.top = `${place.top}px`;
    el.appendChild(img);
    return el;
  }

  const bodyImg = document.createElement("img");
  bodyImg.decoding = "async";
  bodyImg.className = "assembly-body";
  bodyImg.src = `${XRAY_BODY_DIR}/${webpFile(node.file)}`;
  bodyImg.alt = `${node.name} (x-ray 몸체)`;
  bodyImg.style.width = `${canvasW}px`;
  bodyImg.style.height = `${canvasH}px`;
  bodyImg.style.left = `${place.left}px`;
  bodyImg.style.top = `${place.top}px`;
  el.appendChild(bodyImg);

  appendGrafts(el, node, index, forceGlitch, dispW, dispH, "xray");

  return el;
}

function buildOriginalLayer(node, index, forceGlitch, dispW, dispH) {
  const el = document.createElement("div");
  el.className = "img-original original-assembly";

  const img = document.createElement("img");
  img.decoding = "async";
  img.className = "original-photo";
  img.src = `${ORIGINAL_DIR}/${webpFile(node.file)}`;
  img.alt = node.name;
  el.appendChild(img);

  appendGrafts(el, node, index, forceGlitch, dispW, dispH, "original");

  return el;
}

const MELT_IN_MS = 1300;

const XRAY_OVERLAP_BASE_LETTER = 0.7;
const XRAY_OVERLAP_BASE_SYMBOL = 0.84;
const XRAY_OVERLAP_FLOOR = 0.5;
const XRAY_OVERLAP_GAP_DECAY = 0.03;

function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function lineageJitterFor(node, index) {
  const r1 = seededRandom(index * 3.17 + 1);
  const r2 = seededRandom(index * 7.71 + 2);
  const r3 = seededRandom(index * 13.31 + 3);

  const isExile = node.type === "symbol";
  const branchSign = index % 2 === 0 ? 1 : -1;

  const jx = branchSign * (isExile ? 34 : 20) * (0.55 + r1 * 0.45);
  const jy = (isExile ? 24 : 15) * (0.5 + r2 * 0.5);
  const jr = branchSign * (isExile ? 14 : 7) * (0.5 + r3 * 0.5);

  return { jx, jy, jr };
}

const MAIN_ANCHOR = { x: 0.5, y: 0.46 };
const TOUCH_UI = document.documentElement.classList.contains("touch-ui");
const mainViewEl = document.getElementById("main-view");
const viewW = () => (mainViewEl && mainViewEl.clientWidth) || window.innerWidth;
const viewH = () => (mainViewEl && mainViewEl.clientHeight) || window.innerHeight;

function computeGlobalScale(maxW, maxH) {
  let scale = Infinity;
  MASTER_SEQUENCE.forEach((n) => {
    scale = Math.min(scale, maxW / n.pxW, maxH / n.pxH);
  });
  return scale;
}

let MAIN_SCALE = 1;
function recomputeScale() {
  MAIN_SCALE = TOUCH_UI
    ? computeGlobalScale(viewW() * 0.74, Math.max(160, viewH() - irLineY() - 14))
    : computeGlobalScale(window.innerWidth * 0.62, window.innerHeight * 0.6);
}
recomputeScale();

function preloadAllImages() {
  MASTER_SEQUENCE.forEach((node) => {
    const imgOriginal = new Image();

    imgOriginal.src = `${ORIGINAL_DIR}/${webpFile(node.file)}`;
    if (LAYOUT_MODE === "graft") return;
    const imgBody = new Image();
    imgBody.src = `${XRAY_BODY_DIR}/${webpFile(node.file)}`;
  });
  if (LAYOUT_MODE !== "graft") BUTTON_POOL.forEach((node) => {
    const imgBtn = new Image();
    imgBtn.src = `${XRAY_BUTTON_DIR}/${webpFile(node.file)}`;
  });
  COMBO_SEQUENCE.forEach((c) => {
    const imgOriginal = new Image();
    imgOriginal.src = `${COMBO_DIR_ORIGINAL}/${webpFile(c.file)}`;
    const imgXray = new Image();

    imgXray.src = LAYOUT_MODE === "graft" ? `assets/parts/x-${c.code}.webp` : `${COMBO_DIR_XRAY}/${c.file}`;
  });
  const ampOriginal = new Image();
  ampOriginal.src = `${ORIGINAL_DIR}/${webpFile(AMP_NODE.file)}`;
  const ampXray = new Image();
  ampXray.src = LAYOUT_MODE === "graft" ? "assets/parts/x-amp.webp" : `${XRAY_DIR}/${webpFile(AMP_NODE.file)}`;
}
preloadAllImages();
if (LAYOUT_MODE === "graft") {
  Object.keys(window.REMOTE_PARTS || {}).forEach((file) => {
    const base = file.replace(/\.png$/i, "");
    ["shell", "shell-x", "btn", "btn-x"].forEach((k) => {
      const im = new Image();
      im.src = `assets/parts/${base}-${k}.webp`;
    });
  });
}

const keyIndex = new Map();
MASTER_SEQUENCE.forEach((node, i) => keyIndex.set(node.key, i));

function sizeAdjustFor(node) {
  return SIZE_ADJUST[node.key] ?? 1.0;
}

function mainDisplaySize(node) {
  const adj = sizeAdjustFor(node);
  return { w: node.pxW * MAIN_SCALE * adj, h: node.pxH * MAIN_SCALE * adj };
}

function anchorScreenPos() {
  return { x: viewW() * MAIN_ANCHOR.x, y: viewH() * MAIN_ANCHOR.y };
}

const I18N = {
  en: {
    typePrompt: "TYPE A–Z",
    bodies: "bodies",
    buttons: "buttons",
    migrated: "migrated",
    spare: "spare",
    unassembled: "unassembled — empty body",
    fit: "Fit",
    layoutSide: "Row",
    layoutMerge: "Stack",
    tZoomOut: "Zoom out  ( − key / wheel )",
    tZoomIn: "Zoom in  ( + key / wheel )",
    tFit: "Show everything  ( \\ key )",
    tReset: "Reset zoom · back to the latest remote  ( 0 / Esc )",
    tLayout: "Letters side by side ↔ stacked in one place  ( Space key )",
    tTyped: "Click a letter to go to its remote · ← → to step through",
    tSound: "Sound on / off",
    tLang: "한국어로 보기",
    tXray: "Original ↔ X-ray  ( Tab key )",
    langBtn: "한",
    coords: "Coordinates",
    receipt: "Receipt",
    tCoords: "Show the grid, the IR baseline and each remote's coordinates",
    tReceipt: "Typing history — which bodies and buttons each letter is made of",
    rTitle: "REMOTE-TYPE RECEIPT",
    rEmpty: "Nothing typed yet.",
    rLetters: "LETTERS",
    rBodies: "BODIES",
    rButtons: "BUTTONS",
    rOwn: "OWN",
    rHint: "click a line or a node to go to that remote",
    lineage: "lineage",
    lineageBtn: "Lineage",
    tLineage: "Lineage graph — which letters each letter took its buttons and bodies from",
    gTitle: "LINEAGE GRAPH",
    gLegend: "arc = buttons moved from an earlier letter · + = extra bodies",
    download: "Download",
    tDownload: "Save the whole composition as a PNG image",
    saving: "Saving…",
    saved: "Saved",
    savedHint: "The image was saved to your Downloads folder. Send it by email:",
    email: "Email",
    saveAgain: "Save again",
    mailSubject: "Remote-Type System",
    mailBody: "Typed: {typed}\nFile: {file}\n\n(Please attach the downloaded image to this email.)",
    saveFail: "Could not create the image.",
  },
  ko: {
    typePrompt: "A–Z를 입력하세요",
    bodies: "몸통",
    buttons: "버튼",
    migrated: "이주",
    spare: "예비",
    unassembled: "미조립 — 빈 몸체",
    fit: "전체",
    layoutSide: "나란히",
    layoutMerge: "포개기",
    tZoomOut: "축소  ( − 키 / 휠 )",
    tZoomIn: "확대  ( + 키 / 휠 )",
    tFit: "전체 보기  ( \\ 키 )",
    tReset: "처음 배율 · 최신 리모컨으로  ( 0 / Esc )",
    tLayout: "글자들을 옆으로 나란히 ↔ 한 자리에 포개기  ( Space 키 )",
    tTyped: "글자를 누르면 그 리모컨으로 이동 · ← → 키로 앞뒤 이동",
    tSound: "소리 켜기/끄기",
    tLang: "View in English",
    tXray: "원본 ↔ X-RAY  ( Tab 키 )",
    langBtn: "EN",
    coords: "좌표",
    receipt: "영수증",
    tCoords: "모눈·적외선 기준선·리모컨마다 좌표 보기",
    tReceipt: "타이핑 내역 — 글자마다 어떤 몸통과 버튼으로 조합됐는지",
    rTitle: "REMOTE-TYPE 영수증",
    rEmpty: "아직 타이핑한 글자가 없습니다.",
    rLetters: "글자",
    rBodies: "몸통",
    rButtons: "버튼",
    rOwn: "자기 버튼",
    rHint: "줄이나 점을 누르면 그 리모컨으로 이동",
    lineage: "계보",
    lineageBtn: "계보",
    tLineage: "계보 그래프 — 글자마다 어느 글자에서 버튼·몸통을 받았는지",
    gTitle: "계보 그래프",
    gLegend: "호 = 앞 글자에서 옮겨 온 버튼 · + = 겹친 몸통",
    download: "다운로드",
    tDownload: "지금까지 만든 전체 화면을 PNG 이미지로 저장",
    saving: "저장 중…",
    saved: "저장됨",
    savedHint: "이미지가 다운로드 폴더에 저장됐어요. 메일로 보내기:",
    email: "메일 보내기",
    saveAgain: "다시 저장",
    mailSubject: "Remote-Type System",
    mailBody: "타이핑: {typed}\n파일: {file}\n\n(다운로드한 이미지를 이 메일에 첨부해 주세요.)",
    saveFail: "이미지를 만들지 못했어요.",
  },
};
let LANG = "en";
try { if (localStorage.getItem("remote-type-lang") === "ko") LANG = "ko"; } catch (e) {}
function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
}
function nameOf(item) {
  if (!item) return "";
  return LANG === "en" && item.nameEn ? item.nameEn : item.name;
}

const mainView = document.getElementById("main-view");
const world = document.getElementById("world");
const rootsLayer = document.getElementById("roots-layer");
const meltLayer = document.getElementById("melt-layer");
const xrayStripLayer = document.getElementById("xray-strip-layer");
const anchorMarker = document.getElementById("anchor-marker");
const mainLabel = document.getElementById("main-label");
const typedDisplay = document.getElementById("typed-display");
const keyCapture = document.getElementById("key-capture");
const xrayToggleBtn = document.getElementById("xray-toggle");
const zoomOutBtn = document.getElementById("zoom-out-btn");
const zoomInBtn = document.getElementById("zoom-in-btn");
const zoomResetBtn = document.getElementById("zoom-reset-btn");
const zoomLabel = document.getElementById("zoom-label");

let typedIndices = [];
let currentWrap = null;
let currentNodeData = null;
let currentNodeIndex = null;
let rootTrail = [];
let generation = 0;
let meltTimeoutId = null;
let meltFilterRaf = null;

let xrayMode = false;
function setXrayMode(on) {
  xrayMode = on;
  document.body.classList.toggle("xray-mode", xrayMode);
  xrayToggleBtn.setAttribute("aria-pressed", String(xrayMode));

  if (LAYOUT_MODE === "graft") return;
  clearXrayStrip();
  followCamera = true;
  if (!on) {
    animatePanTo(0, 0);
  }
}
function toggleXrayMode() {
  setXrayMode(!xrayMode);
}
xrayToggleBtn.addEventListener("click", () => {
  toggleXrayMode();
  keyCapture.focus();
});

if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => { zoomBy(1 / 1.3); keyCapture.focus(); });
if (zoomInBtn) zoomInBtn.addEventListener("click", () => { zoomBy(1.3); keyCapture.focus(); });
if (zoomResetBtn) zoomResetBtn.addEventListener("click", () => {
  resetView();
  keyCapture.focus();
});
const zoomFitBtn = document.getElementById("zoom-fit-btn");
if (zoomFitBtn) zoomFitBtn.addEventListener("click", () => { fitAll(); keyCapture.focus(); });
const bodyLayoutBtn = document.getElementById("body-layout-btn");
if (bodyLayoutBtn) {
  bodyLayoutBtn.addEventListener("click", () => {
    setBodyLayout(BODY_LAYOUT === "merge" ? "side" : "merge");
    keyCapture.focus();
  });
}

function positionAnchorMarker() {
  const a = anchorScreenPos();
  anchorMarker.style.left = `${a.x}px`;
  anchorMarker.style.top = `${LAYOUT_MODE === "graft" ? irLineY() : a.y}px`;
}
positionAnchorMarker();
addIrLine();

let panX = 0;
let panY = 0;
let isPanning = false;
let panStartX = 0;
let panStartY = 0;
let panOriginX = 0;
let panOriginY = 0;
let panDidMove = false;

let followCamera = true;

const ZOOM_MIN = 0.12;
const ZOOM_MAX = 3;
let zoomScale = 1;

function applyPan() {
  world.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
}
applyPan();

function clampZoom(z) {
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));
}

function setZoom(z, animate = true) {
  zoomScale = clampZoom(z);
  world.classList.toggle("world-animated", animate);
  applyPan();
  updateZoomLabel();
}

function stepZoom(delta) {
  setZoom(zoomScale + delta, true);
}

function updateZoomLabel() {
  if (zoomLabel) zoomLabel.textContent = `${Math.round(zoomScale * 100)}%`;
}

const activePointers = new Set();
mainView.addEventListener("pointerdown", (e) => {
  activePointers.add(e.pointerId);
  if (activePointers.size > 1) { endPan(); return; }

  e.preventDefault();
  isPanning = true;
  panDidMove = false;
  panStartX = e.clientX;
  panStartY = e.clientY;
  panOriginX = panX;
  panOriginY = panY;
  mainView.classList.add("dragging");
  world.classList.remove("world-animated");
  mainView.setPointerCapture(e.pointerId);

  keyCapture.focus();
});
mainView.addEventListener("pointermove", (e) => {
  if (!isPanning || activePointers.size > 1) return;
  panX = panOriginX + (e.clientX - panStartX);
  panY = panOriginY + (e.clientY - panStartY);
  if (Math.abs(e.clientX - panStartX) > 3 || Math.abs(e.clientY - panStartY) > 3) {
    panDidMove = true;
    followCamera = false;
  }
  applyPan();
});
function endPan() {
  isPanning = false;
  mainView.classList.remove("dragging");
}
mainView.addEventListener("pointerup", (e) => { activePointers.delete(e.pointerId); endPan(); });
mainView.addEventListener("pointercancel", (e) => { activePointers.delete(e.pointerId); endPan(); });

function resetPan() {
  panX = 0;
  panY = 0;
  applyPan();
}

function viewCenter() {
  return { x: viewW() / 2, y: viewH() / 2 };
}
function zoomAround(newZ, mx, my) {
  newZ = clampZoom(newZ);
  const c = viewCenter();
  const r = newZ / zoomScale;
  panX = mx - c.x - (mx - c.x - panX) * r;
  panY = my - c.y - (my - c.y - panY) * r;
  zoomScale = newZ;
  world.classList.remove("world-animated");
  applyPan();
  updateZoomLabel();
}
let viewAnimId = null;
function animateViewTo(z, px, py, duration = 520) {
  cancelAnimationFrame(viewAnimId);
  cancelAnimationFrame(panAnimId);
  world.classList.remove("world-animated");
  const z0 = zoomScale, x0 = panX, y0 = panY;
  z = clampZoom(z);
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, Math.max(0, (now - start) / duration));
    const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    zoomScale = z0 + (z - z0) * e;
    panX = x0 + (px - x0) * e;
    panY = y0 + (py - y0) * e;
    applyPan();
    updateZoomLabel();
    if (t < 1) viewAnimId = requestAnimationFrame(step);
  }
  viewAnimId = requestAnimationFrame(step);
}
function zoomBy(factor) {
  const z = clampZoom(zoomScale * factor);
  const r = z / zoomScale;
  animateViewTo(z, panX * r, panY * r, 260);
}
function resetView() {
  followCamera = true;
  animateViewTo(1, 0, 0);
}
function wrapRect(w) {
  return {
    x: parseFloat(w.style.left), y: parseFloat(w.style.top),
    w: parseFloat(w.style.width), h: parseFloat(w.style.height),
  };
}

function focusWrap(w, minZoom = 0.8) {
  const r = wrapRect(w);
  const c = viewCenter();
  const z = Math.max(zoomScale, minZoom);
  const px = r.x + r.w / 2;
  const py = r.y + r.h / 2;
  animateViewTo(z, -(px - c.x) * z, -(py - c.y) * z - viewH() * 0.04);
}

function fitAll() {
  const wraps = [];
  if (currentHost) wraps.push(currentHost.wrap);
  rootTrail.forEach((g) => g.wrap && wraps.push(g.wrap));
  if (!wraps.length) { resetView(); return; }
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  wraps.forEach((w) => {
    const r = wrapRect(w);
    x0 = Math.min(x0, r.x); y0 = Math.min(y0, r.y);
    x1 = Math.max(x1, r.x + r.w); y1 = Math.max(y1, r.y + r.h);
  });
  const c = viewCenter();
  const top = TOUCH_UI ? irLineY() : 0;
  const z = clampZoom(Math.min((viewW() * 0.92) / (x1 - x0), (viewH() - (TOUCH_UI ? top + 24 : 190)) / (y1 - y0)));
  const px = (x0 + x1) / 2;
  const py = (y0 + y1) / 2;
  const ty = TOUCH_UI ? (top + viewH()) / 2 : c.y - 30;
  followCamera = false;
  animateViewTo(z, -(px - c.x) * z, -(py - c.y) * z + (ty - c.y));
}

mainView.addEventListener("wheel", (e) => {
  e.preventDefault();
  cancelAnimationFrame(viewAnimId);
  if (!e.ctrlKey && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    panX -= e.deltaX;
    world.classList.remove("world-animated");
    applyPan();
    followCamera = false;
    return;
  }
  const unit = e.deltaMode === 1 ? 16 : 1;
  const factor = Math.exp(-e.deltaY * unit * (e.ctrlKey ? 0.01 : 0.0018));
  zoomAround(zoomScale * factor, e.clientX, e.clientY);
}, { passive: false });

let pinchStartDist = null;
let pinchStartZoom = 1;
let pinchMid = null;
mainView.addEventListener("touchstart", (e) => {
  if (e.touches.length === 2) {
    const [a, b] = e.touches;
    pinchStartDist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    pinchStartZoom = zoomScale;
    pinchMid = { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
    cancelAnimationFrame(viewAnimId);
    world.classList.remove("world-animated");
    followCamera = false;
  }
}, { passive: true });
mainView.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2 && pinchStartDist) {
    const [a, b] = e.touches;
    const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    const mid = { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
    const r = mainView.getBoundingClientRect();
    panX += mid.x - pinchMid.x;
    panY += mid.y - pinchMid.y;
    pinchMid = mid;
    zoomAround(pinchStartZoom * (dist / pinchStartDist), mid.x - r.left, mid.y - r.top);
  }
}, { passive: true });
mainView.addEventListener("touchend", (e) => {
  if (e.touches.length < 2) pinchStartDist = null;
});

let panAnimId = null;
function animatePanTo(targetX, targetY, duration = 480) {
  cancelAnimationFrame(panAnimId);
  const startX = panX;
  const startY = panY;
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    panX = startX + (targetX - startX) * eased;
    panY = startY + (targetY - startY) * eased;
    applyPan();
    if (t < 1) panAnimId = requestAnimationFrame(step);
  }
  panAnimId = requestAnimationFrame(step);
}

const PARTS_DIR = "assets/parts";
const PARTS = window.REMOTE_PARTS || {};
const MIGRATE_SHARE_LETTER = 0.62;
const MIGRATE_SHARE_SYMBOL = 0.8;
const MIGRATE_FROM_GHOSTS = 7;
const SPARE_SHARE = 0.22;
const SPARE_DONORS = 6;
const OWN_SHUFFLE = true;
const SNAP_START_MS = 160;
const SNAP_INTERVAL_MS = 58;
const SNAP_TOTAL_MAX_MS = 1500;
const BUTTON_SOUND = true;
const ROOT_OVERLAP = 0.38;

const BODY_EXTRA_LETTER_2 = 0.4;
const BODY_EXTRA_SYMBOL = 2;
const BODY_OFFSET_MIN = 0.14;
const BODY_OFFSET_MAX = 0.36;

const BODY_NOTCH = false;
const BODY_NOTCH_MIN = 0.32;
const BODY_NOTCH_MAX = 0.58;
let BODY_LAYOUT = "side";
const COMBO_GAP_PX = 2;

if (LAYOUT_MODE === "graft") document.body.classList.add("layout-graft");

function irLineY() {
  if (TOUCH_UI) return window.TOUCH_TOP_PX || viewH() * IR_LINE_Y;
  return window.innerHeight * IR_LINE_Y;
}

let currentHost = null;
let rootPushCount = 0;
let lastGraftInfo = null;
let assemblyTimers = [];
let pendingSnaps = [];

function partsFor(node) {
  return node && PARTS[node.file] ? PARTS[node.file] : null;
}

function makeButton(originNode, pieceIndex) {
  const parts = partsFor(originNode);
  const b = parts.btns[pieceIndex];
  const size = mainDisplaySize(originNode);
  const kx = size.w / parts.w;
  const ky = size.h / parts.h;
  const base = originNode.file.replace(/\.png$/i, "");
  const el = document.createElement("div");
  el.className = "rbtn";
  el.style.width = `${b[2] * kx}px`;
  el.style.height = `${b[3] * ky}px`;
  el.style.setProperty("--bo", `url("${PARTS_DIR}/${base}-btn.webp")`);
  el.style.setProperty("--bx", `url("${PARTS_DIR}/${base}-btn-x.webp")`);
  el.style.backgroundSize = `${parts.sw * kx}px ${parts.sh * ky}px`;
  el.style.backgroundPosition = `${-b[0] * kx}px ${-b[1] * ky}px`;
  el._btn = { origin: originNode, piece: pieceIndex, w: b[2] * kx, h: b[3] * ky };
  return el;
}

function seatButton(host, socketIdx, el) {
  const so = host.sockets[socketIdx];
  el.style.left = `${so.cx - el._btn.w / 2}px`;
  el.style.top = `${so.cy - el._btn.h / 2}px`;
  host.slots[socketIdx] = el;
  host.wrap.appendChild(el);
}

function bodyPartnersFor(node, index) {
  if (typeof index !== "number") return [];
  const count = node.type === "symbol"
    ? BODY_EXTRA_SYMBOL
    : (seededRandom(index * 2.71 + 9) < BODY_EXTRA_LETTER_2 ? 2 : 1);
  const picks = [];
  const ancestor = index > 0 ? index - 1 : 1;
  if (partsFor(MASTER_SEQUENCE[ancestor])) picks.push(ancestor);
  let guard = 0;
  while (picks.length < count && guard < 40) {
    const r = Math.floor(seededRandom(index * 6.13 + guard * 3.7 + 21) * MASTER_SEQUENCE.length);
    if (r !== index && !picks.includes(r) && partsFor(MASTER_SEQUENCE[r])) picks.push(r);
    guard++;
  }
  return picks.slice(0, count).map((i) => MASTER_SEQUENCE[i]);
}

function shellLayer(node, x, y, w, h, isMasterParts) {
  const base = node.file.replace(/\.png$/i, "");
  const el = document.createElement("div");
  el.className = "rshell";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.width = `${w}px`;
  el.style.height = `${h}px`;
  if (isMasterParts) {
    el.style.setProperty("--so", `url("${PARTS_DIR}/${base}-shell.webp")`);
    el.style.setProperty("--sx", `url("${PARTS_DIR}/${base}-shell-x.webp")`);
  } else {
    el.style.setProperty("--so", `url("${ORIGINAL_DIR}/${webpFile(node.file)}")`);
    el.style.setProperty("--sx", `url("${PARTS_DIR}/x-${base}.webp")`);
  }
  return el;
}

function buildHost(node, index, comboNode, forceGlitch) {
  const own = mainDisplaySize(node);
  const anchor = anchorScreenPos();
  const parts = typeof index === "number" ? partsFor(node) : null;

  const bodies = [{ node, x: 0, y: 0, w: own.w, h: own.h, main: true }];
  if (parts && !forceGlitch) {
    const baseSide = index % 2 === 0 ? 1 : -1;
    bodyPartnersFor(node, index).forEach((pn, k) => {
      const sz = mainDisplaySize(pn);
      const side = k % 2 === 0 ? baseSide : -baseSide;
      const r1 = seededRandom(index * 4.4 + k * 9.1 + 3);
      const r2 = seededRandom(index * 7.9 + k * 2.3 + 5);
      const dx = (BODY_OFFSET_MIN + r1 * (BODY_OFFSET_MAX - BODY_OFFSET_MIN)) * (own.w + sz.w) / 2;
      const cx = own.w / 2 + side * dx;
      bodies.push({ node: pn, x: cx - sz.w / 2, y: r2 * 0.14 * own.h, w: sz.w, h: sz.h, main: false });
    });
  }

  let combo = null;
  if (comboNode) {
    const { dxFrac, dyFrac, scaleJitter } = comboJitterFor(comboNode);
    const compH = own.h * 0.78 * scaleJitter;
    const compW = compH * (comboNode.pxW / comboNode.pxH);
    const side = dxFrac >= 0 ? 1 : -1;
    const bx0 = Math.min(...bodies.map((b) => b.x));
    const bx1 = Math.max(...bodies.map((b) => b.x + b.w));
    combo = {
      side, compW, compH,
      x: side > 0 ? bx1 + COMBO_GAP_PX : bx0 - COMBO_GAP_PX - compW,
      top: Math.max(0, (dyFrac + 0.25) * 0.3 * own.h),
    };
  }

  const xs = bodies.map((b) => b.x).concat(combo ? [combo.x] : []);
  const xe = bodies.map((b) => b.x + b.w).concat(combo ? [combo.x + combo.compW] : []);
  const ye = bodies.map((b) => b.y + b.h).concat(combo ? [combo.top + combo.compH] : []);
  const shift = -Math.min(...xs);
  const wrapW = Math.max(...xe) + shift;
  const wrapH = Math.max(...ye);
  const hostX = shift;

  const wrap = document.createElement("div");
  wrap.className = "main-node graft-node" + (node.type === "symbol" ? " is-symbol" : "");
  wrap.style.width = `${wrapW}px`;
  wrap.style.height = `${wrapH}px`;
  wrap.style.left = `${anchor.x - hostX - own.w / 2}px`;
  wrap.style.top = `${irLineY()}px`;

  const notches = [];
  if (BODY_NOTCH) {
    bodies.slice(1).forEach((b, k) => {
      const ix0 = Math.max(0, b.x), ix1 = Math.min(own.w, b.x + b.w);
      const iy0 = Math.max(0, b.y), iy1 = Math.min(own.h, b.y + b.h);
      if (ix1 - ix0 < 4 || iy1 - iy0 < 20) return;
      const r1 = seededRandom(index * 3.3 + k * 8.8 + 1);
      const r2 = seededRandom(index * 5.1 + k * 4.4 + 2);
      const bandH = (iy1 - iy0) * (BODY_NOTCH_MIN + r1 * (BODY_NOTCH_MAX - BODY_NOTCH_MIN));
      const y0 = iy0 + r2 * (iy1 - iy0 - bandH);

      const maxDepth = own.w * 0.7;
      let x0 = ix0, x1 = ix1;
      if (b.x + b.w / 2 > own.w / 2) x0 = Math.max(ix0, own.w - maxDepth);
      else x1 = Math.min(ix1, maxDepth);
      notches.push({ x0, y0, x1, y1: y0 + bandH });
    });
  }
  const inNotch = (x, y) => notches.some((n) => x > n.x0 && x < n.x1 && y > n.y0 && y < n.y1);

  bodies.slice(1).forEach((b) => wrap.appendChild(shellLayer(b.node, b.x + shift, b.y, b.w, b.h, true)));
  const mainShell = shellLayer(node, hostX, 0, own.w, own.h, !!parts);
  if (notches.length) {
    const pts = [`0px 0px`, `${own.w}px 0px`, `${own.w}px ${own.h}px`, `0px ${own.h}px`, `0px 0px`];
    notches.forEach((n) => {
      pts.push(`${n.x0}px ${n.y0}px`, `${n.x1}px ${n.y0}px`, `${n.x1}px ${n.y1}px`, `${n.x0}px ${n.y1}px`, `${n.x0}px ${n.y0}px`, `0px 0px`);
    });
    mainShell.style.clipPath = `polygon(evenodd, ${pts.join(", ")})`;
  }
  wrap.appendChild(mainShell);

  if (combo) {
    const cbase = comboNode.file.replace(/\.png$/i, "");
    const layer = document.createElement("div");
    layer.className = "rshell combo-shell";
    const cx = combo.x + shift;
    layer.style.left = `${cx}px`;
    layer.style.top = `${combo.top}px`;
    layer.style.width = `${combo.compW}px`;
    layer.style.height = `${combo.compH}px`;
    layer.style.setProperty("--so", `url("${COMBO_DIR_ORIGINAL}/${webpFile(comboNode.file)}")`);
    layer.style.setProperty("--sx", `url("${PARTS_DIR}/x-${cbase}.webp")`);
    wrap.appendChild(layer);

    const joinX = combo.side > 0 ? cx - COMBO_GAP_PX / 2 : cx + combo.compW + COMBO_GAP_PX / 2;
    const tapeW = Math.min(own.w, combo.compW) * 0.95;
    const y0 = combo.top;
    const y1 = Math.min(own.h, combo.top + combo.compH);
    const tapeH = Math.max(12, own.h * 0.04);
    const tSeed = seededRandom(comboNode.code.charCodeAt(0) * 7.3 + comboNode.code.charCodeAt(1));
    [0.18 + tSeed * 0.12, 0.66 + tSeed * 0.1].forEach((f) => {
      const tape = document.createElement("div");
      tape.className = "rtape";
      tape.style.width = `${tapeW}px`;
      tape.style.height = `${tapeH}px`;
      tape.style.left = `${joinX - tapeW / 2}px`;
      tape.style.top = `${y0 + (y1 - y0) * f - tapeH / 2}px`;
      wrap.appendChild(tape);
    });
  }

  const sockets = [];
  if (parts) {
    bodies.forEach((b) => {
      const bp = partsFor(b.node);
      const kx = b.w / bp.w;
      const ky = b.h / bp.h;
      bp.btns.forEach((bt, pi) => {
        const cx = b.x + shift + (bt[4] + bt[2] / 2) * kx;
        const cy = b.y + (bt[5] + bt[3] / 2) * ky;
        const mx = cx - hostX;
        if (b.main) {
          if (inNotch(mx, cy)) return;
        } else if (BODY_NOTCH) {
          const inMain = mx > own.w * 0.03 && mx < own.w * 0.97 && cy > own.h * 0.02 && cy < own.h * 0.98;
          if (inMain && !inNotch(mx, cy)) return;
        }

        sockets.push({ cx, cy, w: bt[2] * kx, h: bt[3] * ky, node: b.node, piece: pi });
      });
    });
  }
  return {
    wrap, node, index, hostX, shellW: own.w, sockets,
    bodyKeys: bodies.map((b) => b.node.key),
    slots: sockets.map(() => null),
  };
}

function finishAssembly() {
  assemblyTimers.forEach((t) => clearTimeout(t));
  assemblyTimers = [];
  const rest = pendingSnaps;
  pendingSnaps = [];
  rest.forEach((step) => doSnap(step, false));
}

function buttonCost(bw, bh, sw, sh, extra, noise) {
  return Math.abs(Math.log(bw / sw)) + Math.abs(Math.log(bh / sh)) + extra + noise;
}

function planMigrations(host, seedBase) {
  const n = host.sockets.length;
  if (!n) return [];
  const share = host.node.type === "symbol" ? MIGRATE_SHARE_SYMBOL : MIGRATE_SHARE_LETTER;

  const order = host.sockets.map((_, i) => i);
  order.sort((a, b) => seededRandom(seedBase * 3.1 + a * 7.7) - seededRandom(seedBase * 3.1 + b * 7.7));
  const sockSize = (si) => ({ w: host.sockets[si].w, h: host.sockets[si].h });

  const pool = [];
  rootTrail.slice(0, MIGRATE_FROM_GHOSTS).forEach((g, rank) => {
    g.slots.forEach((el, si) => {
      if (el) pool.push({ ghost: g, si, el, rank });
    });
  });
  const wantGhost = Math.min(pool.length, Math.round(n * share));
  const plans = [];
  let k = 0;
  for (; k < order.length && plans.length < wantGhost; k++) {
    const si = order[k];
    const ss = sockSize(si);
    let best = -1;
    let bestCost = Infinity;
    pool.forEach((c, pi) => {
      if (c.used) return;
      const cost = buttonCost(c.el._btn.w, c.el._btn.h, ss.w, ss.h, c.rank * 0.1,
        seededRandom(seedBase + pi * 1.9 + si * 0.7) * 0.9);
      if (cost < bestCost) { bestCost = cost; best = pi; }
    });
    if (best < 0) break;
    pool[best].used = true;
    plans.push({ socket: si, from: pool[best] });
  }

  if (typeof host.index === "number") {
    const others = MASTER_SEQUENCE.filter((m, mi) => mi !== host.index && partsFor(m));
    const donors = [];
    for (let d = 0; d < SPARE_DONORS && others.length; d++) {
      const pick = Math.floor(seededRandom(seedBase * 1.7 + d * 5.3) * others.length) % others.length;
      donors.push(others.splice(pick, 1)[0]);
    }
    const spareCands = [];
    donors.forEach((m) => {
      const parts = partsFor(m);
      const sz = mainDisplaySize(m);
      parts.btns.forEach((bt, pi) => spareCands.push({ node: m, piece: pi, w: bt[2] * sz.w / parts.w, h: bt[3] * sz.h / parts.h }));
    });
    const wantSpare = Math.round(n * SPARE_SHARE);
    let got = 0;
    for (; k < order.length && got < wantSpare && spareCands.length; k++) {
      const si = order[k];
      const ss = sockSize(si);
      let best = -1;
      let bestCost = Infinity;
      spareCands.forEach((c, ci) => {
        if (c.used) return;
        const cost = buttonCost(c.w, c.h, ss.w, ss.h, 0, seededRandom(seedBase * 0.3 + ci * 2.3 + si) * 0.9);
        if (cost < bestCost) { bestCost = cost; best = ci; }
      });
      if (best < 0) break;
      spareCands[best].used = true;
      plans.push({ socket: si, spare: spareCands[best] });
      got++;
    }
  }

  const rest = order.slice(k).filter((si) => !plans.some((p) => p.socket === si));
  const area = (si) => host.sockets[si].w * host.sockets[si].h;
  const restBySize = rest.slice().sort((a, b) => area(a) - area(b));
  const groups = [];
  restBySize.forEach((si) => {
    const g = groups[groups.length - 1];
    if (g && area(si) / g.minArea < 1.7) g.items.push(si);
    else groups.push({ minArea: area(si), items: [si] });
  });
  groups.forEach((g) => {
    const src = g.items.slice();
    if (OWN_SHUFFLE) src.sort((a, b) => seededRandom(seedBase * 0.77 + a * 3.3) - seededRandom(seedBase * 0.77 + b * 3.3));
    g.items.forEach((si, i) => {
      const from = host.sockets[src[i]];
      plans.push({ socket: si, ownPiece: { node: from.node, piece: from.piece } });
    });
  });
  return plans;
}

function doSnap(step, withSound) {
  let el;
  if (step.from) {
    const g = step.from.ghost;
    el = step.from.el;
    if (g.slots[step.from.si] === el) g.slots[step.from.si] = null;
    el.remove();
  } else if (step.spare) {
    el = makeButton(step.spare.node, step.spare.piece);
  } else {
    const so = step.host.sockets[step.socket];
    const op = step.ownPiece || { node: so.node, piece: so.piece };
    el = makeButton(op.node, op.piece);
  }
  seatButton(step.host, step.socket, el);
  if (withSound) playButtonClick(el._btn.w, el._btn.h);
}

function runAssembly(host, plans) {
  const bySocket = new Map(plans.map((p) => [p.socket, p]));
  const rowH = Math.max(8, host.sockets.reduce((m, s) => Math.min(m, s.h), Infinity) * 0.6);
  const order = host.sockets
    .map((s, si) => ({ si, row: Math.round(s.cy / rowH), cx: s.cx }))
    .sort((a, b) => a.row - b.row || a.cx - b.cx);
  const steps = order.map((o) => {
    const p = bySocket.get(o.si) || {};
    return { host, socket: o.si, from: p.from || null, spare: p.spare || null, ownPiece: p.ownPiece };
  });
  const gap = steps.length ? Math.min(SNAP_INTERVAL_MS, SNAP_TOTAL_MAX_MS / steps.length) : 0;
  pendingSnaps = steps.slice();
  steps.forEach((step, i) => {
    const t = setTimeout(() => {
      const k = pendingSnaps.indexOf(step);
      if (k < 0) return;
      pendingSnaps.splice(k, 1);
      doSnap(step, true);
    }, SNAP_START_MS + i * gap);
    assemblyTimers.push(t);
  });
}

function layoutGraftRoots() {
  const a = anchorScreenPos();
  if (BODY_LAYOUT === "merge") {
    let z = 900;
    rootTrail.forEach((g) => {
      g.wrap.style.left = `${a.x - g.hostX - g.shellW / 2}px`;
      g.wrap.style.zIndex = String(z--);
    });
    updateCoordTags();
    return;
  }
  let cl = a.x;
  let cr = a.x;
  if (currentHost) {
    const r = wrapRect(currentHost.wrap);
    cl = r.x;
    cr = r.x + r.w;
  }
  let zl = 900;
  let zr = 900;
  rootTrail.forEach((g) => {
    const w = parseFloat(g.wrap.style.width);
    if (g.side === "L") {
      const left = cl + w * ROOT_OVERLAP - w;
      g.wrap.style.left = `${left}px`;
      g.wrap.style.zIndex = String(zl--);
      cl = left;
    } else {
      const left = cr - w * ROOT_OVERLAP;
      g.wrap.style.left = `${left}px`;
      g.wrap.style.zIndex = String(zr--);
      cr = left + w;
    }
  });
  updateCoordTags();
}

function updateCoordTags() {
  const a = anchorScreenPos();
  const all = (currentHost ? [currentHost] : []).concat(rootTrail.filter((g) => g && g.wrap));
  all.forEach((h, rank) => {
    if (!h.tag) return;
    const n = h.node;
    const lin = typeof h.index === "number" ? `${String(h.index + 1).padStart(2, "0")}/30` : "—";
    const cx = parseFloat(h.wrap.style.left) + h.hostX + h.shellW / 2 - a.x;
    const x = Math.round(cx);
    h.tag.textContent = `${String(h.seq || 0).padStart(2, "0")} ${n.key} · ${lin} · ${n.year || "—"} · x${x >= 0 ? "+" : ""}${x}`;

    const row = BODY_LAYOUT === "merge" ? rank : (rank === 0 ? 0 : 1 + ((rank - 1) % 4));
    h.tag.style.top = `${-15 - row * 13}px`;
    h.tag.style.left = `${h.hostX + h.shellW / 2}px`;
  });
}

function setBodyLayout(mode) {
  BODY_LAYOUT = mode;
  document.body.classList.toggle("bodies-merge", mode === "merge");
  const btn = document.getElementById("body-layout-btn");
  if (btn) {
    btn.textContent = mode === "merge" ? t("layoutMerge") : t("layoutSide");
    btn.setAttribute("aria-pressed", String(mode === "merge"));
  }
  layoutGraftRoots();
}

function placeWithGraft(node, nodeIndex, comboNode, forceGlitch) {
  finishAssembly();
  const host = buildHost(node, nodeIndex, comboNode, forceGlitch);
  meltLayer.appendChild(host.wrap);

  if (currentHost) {
    const ghost = currentHost;
    ghost.wrap.classList.add("graft-ghost");
    ghost.side = rootPushCount++ % 2 === 0 ? "R" : "L";
    rootsLayer.appendChild(ghost.wrap);
    rootTrail.unshift(ghost);
  }

  let plans = [];
  if (!forceGlitch) {
    plans = planMigrations(host, (typeof nodeIndex === "number" ? nodeIndex : 31) * 13.7 + typedIndices.length * 0.91);
  }

  host.seq = typedIndices.length + 1;
  host.combo = comboNode || null;
  const tag = document.createElement("div");
  tag.className = "coord-tag";
  tag.style.left = `${host.hostX}px`;
  host.wrap.appendChild(tag);
  host.tag = tag;

  currentHost = host;
  currentWrap = host.wrap;
  currentNodeData = node;
  currentNodeIndex = nodeIndex;
  currentComboNode = comboNode || null;
  currentForceGlitch = !!forceGlitch;
  layoutGraftRoots();
  if (!forceGlitch) runAssembly(host, plans);

  if (forceGlitch) {
    lastGraftInfo = { glitch: true };
  } else if (host.sockets.length) {
    const mig = plans.filter((p) => p.from);
    const spr = plans.filter((p) => p.spare);
    lastGraftInfo = {
      glitch: false,
      bodies: host.bodyKeys,
      filled: mig.length + spr.length,
      total: host.sockets.length,
      mig: mig.length,
      migFrom: [...new Set(mig.map((p) => p.from.el._btn.origin.key))],
      spr: spr.length,
      sprFrom: [...new Set(spr.map((p) => p.spare.node.key))],
      migHosts: (() => {
        const m = new Map();
        mig.forEach((p) => { const sq = p.from.ghost.seq; m.set(sq, (m.get(sq) || 0) + 1); });
        return [...m.entries()].map(([seq, n]) => ({ seq, n }));
      })(),
    };
  } else {
    lastGraftInfo = null;
  }
  host.info = lastGraftInfo;
  updateCoordTags();
}

function addIrLine() {
  if (LAYOUT_MODE !== "graft") return;
  const grid = document.createElement("div");
  grid.id = "coord-grid";
  const a = anchorScreenPos();

  grid.style.backgroundPosition = `${(a.x + 6000) % 100}px ${(irLineY() + 4000) % 100}px`;
  world.appendChild(grid);
  const line = document.createElement("div");
  line.id = "ir-line";
  line.style.top = `${irLineY()}px`;
  world.appendChild(line);
}

function buildNodeElement(node, index, comboNode, forceGlitch) {
  const { w: dispW, h: dispH } = mainDisplaySize(node);
  const anchor = anchorScreenPos();

  const wrap = document.createElement("div");
  wrap.className = "main-node" + (node.type === "symbol" ? " is-symbol" : "");
  wrap.style.width = `${dispW}px`;
  wrap.style.height = `${dispH}px`;
  wrap.style.left = `${anchor.x - dispW / 2}px`;
  wrap.style.top = `${anchor.y - dispH / 2}px`;
  wrap.style.setProperty("--ox", "50%");
  wrap.style.setProperty("--oy", "50%");

  const originalEl = buildOriginalLayer(node, index, forceGlitch, dispW, dispH);
  const xrayEl = buildXrayAssembly(node, index, forceGlitch, dispW, dispH);

  wrap.appendChild(originalEl);
  wrap.appendChild(xrayEl);

  if (comboNode) {
    appendComboLayer(wrap, comboNode, dispW, dispH);
  }

  return wrap;
}

function comboJitterFor(comboNode) {
  const seed = comboNode.code.charCodeAt(0) * 3 + comboNode.code.charCodeAt(1) * 7;
  const r1 = seededRandom(seed * 1.7 + 4);
  const r2 = seededRandom(seed * 2.3 + 9);
  const r3 = seededRandom(seed * 3.1 + 2);
  const r4 = seededRandom(seed * 5.9 + 13);
  const sign = seed % 2 === 0 ? 1 : -1;

  const rot = 0;

  const dxFrac = sign * (0.04 + r2 * 0.30);
  const dyFrac = (r3 - 0.5) * 0.5;

  const scaleJitter = 0.82 + r4 * 0.34;
  return { rot, dxFrac, dyFrac, scaleJitter };
}

function appendComboLayer(wrap, comboNode, letterDispW, letterDispH) {
  const { rot, dxFrac, dyFrac, scaleJitter } = comboJitterFor(comboNode);

  const compH = letterDispH * 0.78 * scaleJitter;
  const compW = compH * (comboNode.pxW / comboNode.pxH);

  const layer = document.createElement("div");
  layer.className = "combo-layer";
  layer.style.width = `${compW}px`;
  layer.style.height = `${compH}px`;
  layer.style.left = `calc(50% - ${compW / 2}px + ${dxFrac * letterDispW}px)`;
  layer.style.top = `calc(50% - ${compH / 2}px + ${dyFrac * letterDispH}px)`;
  layer.style.transform = `rotate(${rot}deg)`;

  const imgOriginal = document.createElement("img");
  imgOriginal.decoding = "async";
  imgOriginal.className = "img-original";
  imgOriginal.src = `${COMBO_DIR_ORIGINAL}/${webpFile(comboNode.file)}`;
  imgOriginal.alt = `${comboNode.label} — ${comboNode.name}`;

  const imgXray = document.createElement("img");
  imgXray.decoding = "async";
  imgXray.className = "img-xray";
  imgXray.src = `${COMBO_DIR_XRAY}/${comboNode.file}`;
  imgXray.alt = `${comboNode.label} (x-ray)`;
  imgXray.onerror = () => imgXray.remove();

  layer.appendChild(imgOriginal);
  layer.appendChild(imgXray);
  wrap.appendChild(layer);
}

function growRoot(nodeData, nodeIndex, comboNode, forceGlitch) {
  const ghost = buildNodeElement(nodeData, nodeIndex, comboNode, forceGlitch);
  ghost.classList.add("root-ghost");

  rootsLayer.appendChild(ghost);
  rootTrail.unshift(ghost);
  requestAnimationFrame(() => requestAnimationFrame(() => ghost.classList.add("rooted")));
  shedOnePiece(ghost, nodeIndex);
}

function shedOnePiece(ghost, nodeIndex) {
  if (typeof nodeIndex !== "number") return;
  const count = assemblyCountFor(nodeIndex);
  const slot = Math.floor(seededRandom(nodeIndex * 6.71 + 3) * count) % count;
  setTimeout(() => {
    ghost.querySelectorAll(`.graft-piece[data-slot="${slot}"]`).forEach((p) => {
      p.style.transition = "transform 1600ms cubic-bezier(0.55, 0, 0.8, 0.4), opacity 1600ms ease-in";
      p.style.transform = "translateY(28%)";
      p.style.opacity = "0";
    });
  }, 700);
}

function clearRootsInstant() {
  rootTrail.forEach((g) => (g.wrap ? g.wrap.remove() : g.remove()));
  rootTrail = [];
}

const DISPLACE_BASE = 6;
const DISPLACE_PEAK_ADD = 14;

function animateMeltFilter(durationMs) {
  const disp = document.getElementById("goo-displace");
  if (!disp) return;
  cancelAnimationFrame(meltFilterRaf);
  const start = performance.now();

  function step(now) {
    const t = Math.min(1, Math.max(0, (now - start) / durationMs));

    const eased = Math.pow(Math.sin(t * Math.PI), 0.6);
    disp.setAttribute("scale", String(DISPLACE_BASE + DISPLACE_PEAK_ADD * eased));
    if (t < 1) {
      meltFilterRaf = requestAnimationFrame(step);
    } else {
      disp.setAttribute("scale", String(DISPLACE_BASE));
    }
  }
  meltFilterRaf = requestAnimationFrame(step);
}

let xrayStripCursorX = 0;
let xrayStripActive = false;
let xrayStripNodes = [];
let lastXrayTypedIndex = null;

function xrayOverlapFor(node, nodeIndex) {
  const base = node.type === "symbol" ? XRAY_OVERLAP_BASE_SYMBOL : XRAY_OVERLAP_BASE_LETTER;
  if (lastXrayTypedIndex === null) return base;
  const gap = Math.max(1, Math.abs(nodeIndex - lastXrayTypedIndex));
  const decayed = base - (gap - 1) * XRAY_OVERLAP_GAP_DECAY;
  return Math.max(XRAY_OVERLAP_FLOOR, decayed);
}

function lineagePairFor(nodeIndex) {
  if (nodeIndex === "AMP") {
    return [MASTER_SEQUENCE[keyIndex.get("E")], MASTER_SEQUENCE[keyIndex.get("T")]];
  }
  if (nodeIndex <= 0) {
    return [MASTER_SEQUENCE[0], MASTER_SEQUENCE[1]];
  }
  return [MASTER_SEQUENCE[nodeIndex - 1], MASTER_SEQUENCE[nodeIndex]];
}

function placeInXrayStrip(node, nodeIndex, comboNode) {
  const { w: dispW, h: dispH } = mainDisplaySize(node);
  const anchor = anchorScreenPos();

  const numericIndex = nodeIndex === "AMP" ? 31 : nodeIndex;

  if (!xrayStripActive) {
    const anchorW = currentNodeData ? mainDisplaySize(currentNodeData).w : 0;
    xrayStripCursorX = anchor.x + anchorW / 2;
    xrayStripActive = true;
  }

  const overlapPx = dispW * xrayOverlapFor(node, numericIndex);
  const left = xrayStripCursorX - overlapPx;

  const rShift = seededRandom(numericIndex * 4.4 + 6);
  const shiftSign = numericIndex % 2 === 0 ? 1 : -1;
  const vJitter = shiftSign * (node.type === "symbol" ? 0.05 + rShift * 0.09 : 0.02 + rShift * 0.04) * dispH;
  const top = anchor.y - dispH / 2 + vJitter;
  const centerX = left + dispW / 2;

  const item = document.createElement("div");
  item.className = "xray-strip-item" + (node.type === "symbol" ? " is-symbol" : "");
  item.style.width = `${dispW}px`;
  item.style.height = `${dispH}px`;
  item.style.left = `${left}px`;
  item.style.top = `${top}px`;

  const lineageNodes = lineagePairFor(nodeIndex);
  lineageNodes.forEach((ln, i) => {
    const lnIndex = keyIndex.get(ln.key);

    const own = ln === node ? { w: dispW, h: dispH } : mainDisplaySize(ln);
    const holder = document.createElement("div");
    holder.className = "lineage-holder " + (i === lineageNodes.length - 1 ? "lineage-top" : "lineage-under");
    holder.style.position = "absolute";
    holder.style.width = `${own.w}px`;
    holder.style.height = `${own.h}px`;
    holder.style.left = `${(dispW - own.w) / 2}px`;
    holder.style.top = `${(dispH - own.h) / 2}px`;
    holder.appendChild(buildXrayAssembly(ln, lnIndex, false, own.w, own.h));
    item.appendChild(holder);
  });

  if (comboNode) {
    const { rot, dxFrac, dyFrac, scaleJitter } = comboJitterFor(comboNode);
    const compH = dispH * 0.72 * scaleJitter;
    const compW = compH * (comboNode.pxW / comboNode.pxH);
    const comboWrap = document.createElement("div");
    comboWrap.className = "xray-strip-combo";
    comboWrap.style.width = `${compW}px`;
    comboWrap.style.height = `${compH}px`;
    comboWrap.style.left = `calc(50% - ${compW / 2}px + ${dxFrac * dispW}px)`;
    comboWrap.style.top = `calc(50% - ${compH / 2}px + ${dyFrac * dispH}px)`;
    comboWrap.style.transform = `rotate(${rot}deg)`;
    const comboImg = document.createElement("img");
    comboImg.decoding = "async";
    comboImg.src = `${COMBO_DIR_XRAY}/${comboNode.file}`;
    comboImg.alt = `${comboNode.label} (x-ray)`;
    comboImg.onerror = () => comboWrap.remove();
    comboWrap.appendChild(comboImg);
    item.appendChild(comboWrap);
  }

  xrayStripLayer.appendChild(item);
  xrayStripNodes.push(item);

  xrayStripCursorX = left + dispW;
  lastXrayTypedIndex = numericIndex;

  if (followCamera) {
    animatePanTo(anchor.x - centerX, 0);
  }
}

function clearXrayStrip() {
  xrayStripNodes.forEach((n) => n.remove());
  xrayStripNodes = [];
  xrayStripCursorX = 0;
  xrayStripActive = false;
  lastXrayTypedIndex = null;
}

let currentComboNode = null;
let currentForceGlitch = false;

function mainPlaceNode(index, comboNode, forceGlitch) {
  const node = MASTER_SEQUENCE[index];

  if (xrayMode && LAYOUT_MODE !== "graft") {
    placeInXrayStrip(node, index, comboNode);
  } else {
    placeWithMelt(node, index, comboNode, forceGlitch);
  }

  labelState = { kind: "node", node, comboNode, graft: LAYOUT_MODE === "graft" ? lastGraftInfo : null };
  renderLabel();
}

let labelState = { kind: "empty" };
function graftText(g) {
  if (!g) return "";
  if (g.glitch) return t("unassembled");
  const bits = [];
  if (g.bodies && g.bodies.length > 1) bits.push(`${t("bodies")} ${g.bodies.join("+")}`);
  bits.push(`${t("buttons")} ${g.filled}/${g.total}`);
  const src = [];
  if (g.mig) src.push(`${t("migrated")} ${g.mig} ← ${g.migFrom.join("·")}`);
  if (g.spr) src.push(`${t("spare")} ${g.spr} ← ${g.sprFrom.join("·")}`);
  if (src.length) bits.push(src.join(" / "));
  return bits.join(" · ");
}
function renderLabel() {
  const st = labelState;
  if (st.kind === "empty") { mainLabel.textContent = t("typePrompt"); return; }
  if (st.kind === "amp") { mainLabel.textContent = `&  ·  ${nameOf(AMP_NODE)}`; return; }
  const node = st.node;
  const head = `${node.key}  ·  ${nameOf(node)}${node.year ? "  ·  " + node.year : ""}`;
  if (st.kind === "history") { mainLabel.textContent = `${st.i + 1}/${st.n}  ·  ${head}`; return; }
  const g = graftText(st.graft);
  const comboSuffix = st.comboNode ? `  ⨯  ${st.comboNode.label} (${nameOf(st.comboNode)})` : "";
  mainLabel.textContent = `${head}${g ? `  ·  [${g}]` : ""}${comboSuffix}`;
}

function placeWithMelt(node, nodeIndex, comboNode, forceGlitch) {
  if (LAYOUT_MODE === "graft") {
    placeWithGraft(node, nodeIndex, comboNode, forceGlitch);
    return;
  }
  const wrap = buildNodeElement(node, nodeIndex, comboNode, forceGlitch);
  wrap.classList.add("melt-in");
  meltLayer.appendChild(wrap);
  meltLayer.classList.add("melting");
  animateMeltFilter(MELT_IN_MS);

  requestAnimationFrame(() => requestAnimationFrame(() => wrap.classList.add("settled")));

  clearTimeout(meltTimeoutId);
  meltTimeoutId = setTimeout(() => {
    meltLayer.classList.remove("melting");
  }, MELT_IN_MS + 80);

  if (currentWrap && currentNodeData) {
    growRoot(currentNodeData, currentNodeIndex, currentComboNode, currentForceGlitch);
    currentWrap.remove();
  }
  currentWrap = wrap;
  currentNodeData = node;
  currentNodeIndex = nodeIndex;
  currentComboNode = comboNode || null;
  currentForceGlitch = !!forceGlitch;
}

const AUDIO_DIR = "assets/audio";
const STAMP_LETTER_FILES = ["stamp_letter_1.mp3", "stamp_letter_2.mp3", "stamp_letter_3.mp3"];
const STAMP_SYMBOL_FILES = ["stamp_symbol_1.mp3", "stamp_symbol_2.mp3"];
const BG_HUM_FILE = "bg_hum_loop.mp3";

let audioCtx = null;
let masterGain = null;
let bgGain = null;
let bgSource = null;
let soundBuffers = { letters: [], symbols: [], bg: null };
let soundBuffersReady = false;
let soundLoadStarted = false;

function ensureAudioContext() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.9;
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

async function loadAudioBuffer(ctx, path) {
  const res = await fetch(path);
  const arrayBuf = await res.arrayBuffer();
  return await ctx.decodeAudioData(arrayBuf);
}

async function loadAllSounds() {
  if (soundLoadStarted) return;
  soundLoadStarted = true;
  const ctx = ensureAudioContext();
  if (!ctx) return;
  try {
    const [letters, symbols, bg] = await Promise.all([
      Promise.all(STAMP_LETTER_FILES.map((f) => loadAudioBuffer(ctx, `${AUDIO_DIR}/${f}`))),
      Promise.all(STAMP_SYMBOL_FILES.map((f) => loadAudioBuffer(ctx, `${AUDIO_DIR}/${f}`))),
      loadAudioBuffer(ctx, `${AUDIO_DIR}/${BG_HUM_FILE}`),
    ]);
    soundBuffers.letters = letters;
    soundBuffers.symbols = symbols;
    soundBuffers.bg = bg;
    soundBuffersReady = true;
    startBackgroundHum();
  } catch (err) {
    console.warn("audio fallback:", err);
    useHtmlAudio = true;
    startBackgroundHumHtml();
  }
}

let useHtmlAudio = false;
let bgHumEl = null;
function startBackgroundHumHtml() {
  if (bgHumEl) return;
  bgHumEl = new Audio(`${AUDIO_DIR}/${BG_HUM_FILE}`);
  bgHumEl.loop = true;
  bgHumEl.volume = 0.45;
  bgHumEl.play().catch(() => {});
}
function playStampHtml(isSymbol) {
  const pool = isSymbol ? STAMP_SYMBOL_FILES : STAMP_LETTER_FILES;
  const a = new Audio(`${AUDIO_DIR}/${pool[Math.floor(Math.random() * pool.length)]}`);
  a.volume = isSymbol ? 0.9 : 0.75;
  a.playbackRate = 0.94 + Math.random() * 0.12;
  a.play().catch(() => {});
}

function playStampSound(node) {
  if (useHtmlAudio) {
    playStampHtml(node && node.type === "symbol");
    return;
  }
  if (!soundBuffersReady) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;
  const isSymbol = node && node.type === "symbol";
  const pool = isSymbol ? soundBuffers.symbols : soundBuffers.letters;
  if (!pool.length) return;
  const buffer = pool[Math.floor(Math.random() * pool.length)];

  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.playbackRate.value = 0.94 + Math.random() * 0.12;

  const gain = ctx.createGain();
  gain.gain.value = isSymbol ? 1.0 : 0.85;

  src.connect(gain);
  gain.connect(masterGain);
  src.start();
}

function startBackgroundHum() {
  const ctx = ensureAudioContext();
  if (!ctx || !soundBuffers.bg || bgSource) return;

  bgGain = ctx.createGain();
  const now = ctx.currentTime;
  bgGain.gain.setValueAtTime(0.0001, now);
  bgGain.connect(masterGain);
  bgGain.gain.linearRampToValueAtTime(0.5, now + 2.5);

  bgSource = ctx.createBufferSource();
  bgSource.buffer = soundBuffers.bg;
  bgSource.loop = true;
  bgSource.connect(bgGain);
  bgSource.start();
}

let clickNoiseBuf = null;
function clickNoise(ctx) {
  if (clickNoiseBuf) return clickNoiseBuf;
  const len = Math.floor(ctx.sampleRate * 0.04);
  clickNoiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = clickNoiseBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return clickNoiseBuf;
}
function clickBurst(ctx, t, freq, q, peak, decay) {
  const src = ctx.createBufferSource();
  src.buffer = clickNoise(ctx);
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = freq;
  bp.Q.value = q;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.001);
  g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
  src.connect(bp); bp.connect(g); g.connect(masterGain);
  src.start(t); src.stop(t + decay + 0.01);
}
function playButtonClick(wPx, hPx) {
  if (!BUTTON_SOUND || !audioCtx || audioCtx.state !== "running") return;
  const ctx = audioCtx;
  const t = ctx.currentTime + 0.002;
  const size = Math.sqrt(Math.max(1, wPx * hPx));
  const pf = Math.min(1.7, Math.max(0.6, 30 / size)) * (0.9 + Math.random() * 0.2);

  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(210 * pf, t);
  osc.frequency.exponentialRampToValueAtTime(120 * pf, t + 0.04);
  const og = ctx.createGain();
  og.gain.setValueAtTime(0.0001, t);
  og.gain.exponentialRampToValueAtTime(0.28, t + 0.002);
  og.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  osc.connect(og); og.connect(masterGain);
  osc.start(t); osc.stop(t + 0.06);

  clickBurst(ctx, t, 2600 * pf, 1.4, 0.55, 0.018);

  clickBurst(ctx, t + 0.028 + Math.random() * 0.012, 3400 * pf, 2.0, 0.16, 0.012);
}

let audioStarted = false;
function primeAudioOnce() {
  if (audioStarted) return;
  audioStarted = true;
  ensureAudioContext();
  loadAllSounds();
}

function nodeForEntry(entry) {
  return entry === "AMP" ? AMP_NODE : MASTER_SEQUENCE[entry];
}
function keyForEntry(entry) {
  return entry === "AMP" ? "&" : MASTER_SEQUENCE[entry].key;
}

let lastTypedLetterKey = null;

let hostHistory = [];
let historyFocus = -1;

function placeNode(entry, comboNode, forceGlitch) {
  if (entry === "AMP") {
    mainPlaceAmpersand();
  } else {
    mainPlaceNode(entry, comboNode, forceGlitch);
  }
  typedIndices.push(entry);
  hostHistory.push(LAYOUT_MODE === "graft" ? currentHost : null);
  historyFocus = -1;
  updateTypedDisplay();
  if (typeof renderReceipt === "function") renderReceipt();
  playStampSound(nodeForEntry(entry));

  if (LAYOUT_MODE === "graft" && (panX !== 0 || panY !== 0 || zoomScale !== 1)) {
    if (zoomScale === 1) animateViewTo(1, 0, 0, 380);
    else if (currentHost) focusWrap(currentHost.wrap, zoomScale);
  }
}

function gotoHistory(i) {
  if (!hostHistory.length) return;
  i = Math.max(0, Math.min(hostHistory.length - 1, i));
  const h = hostHistory[i];
  historyFocus = i;
  updateTypedDisplay();
  renderReceipt();
  if (h && h.wrap && h.wrap.isConnected) {
    followCamera = false;
    focusWrap(h.wrap);
    const node = h.node;
    labelState = { kind: "history", node, i, n: hostHistory.length };
    renderLabel();
  }
}

function mainPlaceAmpersand() {
  if (xrayMode && LAYOUT_MODE !== "graft") {
    placeInXrayStrip(AMP_NODE, "AMP");
  } else {
    placeWithMelt(AMP_NODE, "AMP", null, false);
  }
  labelState = { kind: "amp" };
  renderLabel();
}

function updateTypedDisplay() {
  const text = typedIndices.map((e) => keyForEntry(e)).join("");
  typedDisplay.textContent = "";
  typedIndices.forEach((entry, i) => {
    const sp = document.createElement("span");
    sp.className = "typed-ch" + (i === historyFocus ? " is-focus" : "");
    sp.textContent = keyForEntry(entry);
    sp.dataset.i = String(i);
    const node = nodeForEntry(entry);
    sp.title = `${i + 1}. ${nameOf(node)}`;
    typedDisplay.appendChild(sp);
  });
  keyCapture.value = text;
  keyCapture.setSelectionRange(text.length, text.length);
  const focusEl = historyFocus >= 0 ? typedDisplay.children[historyFocus] : typedDisplay.lastElementChild;
  if (focusEl) typedDisplay.scrollLeft = Math.max(0, focusEl.offsetLeft - typedDisplay.clientWidth + focusEl.offsetWidth + 8);
}

function fillBetween(prevIndex, nextIndex) {
  const inserted = [];
  if (nextIndex > prevIndex + 1) {
    for (let i = prevIndex + 1; i < nextIndex; i++) {
      if (MASTER_SEQUENCE[i].type === "symbol") inserted.push(i);
    }
  }
  return inserted;
}

async function playBatch(queue, gen) {
  for (let i = 0; i < queue.length; i++) {
    if (gen !== generation) return;
    placeNode(queue[i].entry, queue[i].combo, queue[i].forceGlitch);
    if (i < queue.length - 1) {
      await new Promise((r) => setTimeout(r, SEQUENCE_STEP_MS));
    }
  }
}

function typeKey(rawChar) {
  if (rawChar === "&") {
    generation++;
    playBatch([{ entry: "AMP" }], generation);

    return;
  }

  const upper = rawChar.length === 1 ? rawChar.toUpperCase() : rawChar;
  if (!keyIndex.has(upper)) return;
  const nextIndex = keyIndex.get(upper);
  const nextNode = MASTER_SEQUENCE[nextIndex];

  const queue = [];
  if (typedIndices.length > 0) {
    const prevIndex = typedIndices[typedIndices.length - 1];
    if (typeof prevIndex === "number" && nextIndex > prevIndex) {
      fillBetween(prevIndex, nextIndex).forEach((i) => queue.push({ entry: i }));
    }
  }

  let comboNode = null;
  if (nextNode.type === "letter" && lastTypedLetterKey) {
    comboNode = comboMap.get(`${lastTypedLetterKey}|${upper}`) || null;
  }

  let forceGlitch = false;
  if (typedIndices.length > 0) {
    const prevEntry = typedIndices[typedIndices.length - 1];
    if (prevEntry === nextIndex) forceGlitch = true;
  }

  queue.push({ entry: nextIndex, combo: comboNode, forceGlitch });

  if (lastTypedLetterKey === AMP_TRIGGER_PAIR[0] && upper === AMP_TRIGGER_PAIR[1]) {
    queue.push({ entry: "AMP" });
  }

  if (nextNode.type === "letter") {
    lastTypedLetterKey = upper;
  }

  generation++;
  playBatch(queue, generation);
}

function clearAll() {
  typedIndices = [];
  finishAssembly();
  currentHost = null;
  hostHistory = [];
  historyFocus = -1;
  setTimeout(() => renderReceipt(), 0);
  rootPushCount = 0;
  lastGraftInfo = null;
  lastTypedLetterKey = null;
  meltLayer.querySelectorAll(".main-node").forEach((n) => n.remove());
  clearRootsInstant();
  clearXrayStrip();
  clearTimeout(meltTimeoutId);
  cancelAnimationFrame(meltFilterRaf);
  meltLayer.classList.remove("melting");
  currentWrap = null;
  currentNodeData = null;
  currentNodeIndex = null;
  currentComboNode = null;
  labelState = { kind: "empty" };
  renderLabel();
  generation++;
  updateTypedDisplay();
  resetPan();
}

keyCapture.value = "";

function letterFromEvent(e) {
  if (e.code && /^Key[A-Z]$/.test(e.code)) return e.code.slice(3);
  if (e.key && e.key.length === 1 && /[a-z]/i.test(e.key)) return e.key.toUpperCase();
  return null;
}

function handleKeydown(e) {
  primeAudioOnce();

  if (e.key === "Tab") {
    e.preventDefault();
    toggleXrayMode();
    return;
  }
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    if (!hostHistory.length) return;
    const cur = historyFocus < 0 ? hostHistory.length - 1 : historyFocus;
    gotoHistory(cur + (e.key === "ArrowLeft" ? -1 : 1));
    return;
  }
  if (e.key === "Escape") { e.preventDefault(); historyFocus = -1; updateTypedDisplay(); resetView(); return; }
  if (e.key === "+" || e.key === "=" || e.code === "Equal" || e.code === "NumpadAdd") { e.preventDefault(); zoomBy(1.3); return; }
  if (e.key === "-" || e.code === "Minus" || e.code === "NumpadSubtract") { e.preventDefault(); zoomBy(1 / 1.3); return; }
  if (e.code === "Digit0" || e.code === "Numpad0") { e.preventDefault(); resetView(); return; }
  if (e.code === "Backslash") { e.preventDefault(); fitAll(); return; }
  if (e.code === "Space") { e.preventDefault(); setBodyLayout(BODY_LAYOUT === "merge" ? "side" : "merge"); return; }

  if (e.key === "&" || (e.shiftKey && e.code === "Digit7")) {
    e.preventDefault();
    typeKey("&");
    return;
  }

  if (e.key && e.key.length === 1 && keyIndex.has(e.key)) {
    e.preventDefault();
    typeKey(e.key);
    return;
  }

  const letter = letterFromEvent(e);
  if (!letter || !keyIndex.has(letter)) return;
  e.preventDefault();
  if (e.repeat) return;
  typeKey(letter);
}

window.addEventListener("keydown", (e) => {
  if (document.activeElement !== keyCapture) keyCapture.focus();
  handleKeydown(e);
});

document.body.addEventListener("click", () => {
  keyCapture.focus();
  primeAudioOnce();
});

keyCapture.addEventListener("input", () => {
  keyCapture.value = typedIndices.map((e) => keyForEntry(e)).join("");
});

const uiBar = document.getElementById("ui-bar");
uiBar.addEventListener("click", (e) => {
  const ch = e.target.closest(".typed-ch");
  if (ch) {
    gotoHistory(Number(ch.dataset.i));
    return;
  }
  const symbolBtn = e.target.closest(".symbol-btn");
  if (symbolBtn) {
    typeKey(symbolBtn.dataset.symbol);
    return;
  }
  if (e.target.closest("#clear-btn")) {
    clearAll();
  }
});

typedDisplay.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    typedDisplay.scrollLeft += e.deltaY;
    e.preventDefault();
  }
}, { passive: false });

window.addEventListener("resize", () => {
  recomputeScale();
  positionAnchorMarker();
  world.classList.add("world-animated");
  applyPan();
});

keyCapture.focus();

if (LAYOUT_MODE === "graft") setBodyLayout(BODY_LAYOUT);

const coordBtn = document.getElementById("coord-toggle");
const receiptBtn = document.getElementById("receipt-toggle");
const receiptEl = document.getElementById("receipt");
const receiptPaper = document.getElementById("receipt-paper");
let receiptOpen = false;

if (coordBtn) coordBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const on = !document.body.classList.contains("show-coords");
  document.body.classList.toggle("show-coords", on);
  coordBtn.setAttribute("aria-pressed", String(on));
  updateCoordTags();
  keyCapture.focus();
});
if (receiptBtn) receiptBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  receiptOpen = !receiptOpen;
  document.body.classList.toggle("show-receipt", receiptOpen);
  receiptBtn.setAttribute("aria-pressed", String(receiptOpen));
  if (receiptEl) receiptEl.setAttribute("aria-hidden", String(!receiptOpen));
  renderReceipt();
  keyCapture.focus();
});

function rLine(cls, text) {
  const d = document.createElement("div");
  d.className = cls;
  d.textContent = text;
  return d;
}

const SVGNS = "http://www.w3.org/2000/svg";
function svgEl(tag, attrs, text) {
  const e = document.createElementNS(SVGNS, tag);
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, String(v)));
  if (text != null) e.textContent = text;
  return e;
}
function renderLineageGraph() {
  const box = document.getElementById("lineage-graph");
  if (!box) return;
  box.textContent = "";
  const n = typedIndices.length;
  const head = document.createElement("div");
  head.className = "g-title";
  head.textContent = t("gTitle");
  box.appendChild(head);
  if (!n) return;
  const step = 34, padX = 22, baseY = 150;
  const W = padX * 2 + step * Math.max(1, n - 1);
  const H = 214;
  const svg = svgEl("svg", { width: W, height: H, viewBox: `0 0 ${W} ${H}` });
  const xOf = (i) => padX + i * step;

  typedIndices.forEach((entry, i) => {
    const h = hostHistory[i];
    const g = h && h.info;
    if (!g || !g.migHosts) return;
    g.migHosts.forEach(({ seq, n: cnt }) => {
      const j = seq - 1;
      if (j < 0 || j >= i) return;
      const x0 = xOf(j), x1 = xOf(i);
      const lift = Math.min(baseY - 18, 16 + (x1 - x0) * 0.42);
      svg.appendChild(svgEl("path", {
        d: `M ${x0} ${baseY - 9} C ${x0} ${baseY - lift}, ${x1} ${baseY - lift}, ${x1} ${baseY - 9}`,
        fill: "none", stroke: "#c43e2a", "stroke-opacity": 0.55,
        "stroke-width": Math.min(6, 0.7 + cnt * 0.28), "stroke-linecap": "round",
      }));
    });
  });

  svg.appendChild(svgEl("line", { x1: xOf(0), y1: baseY, x2: xOf(n - 1), y2: baseY, stroke: "#bbb", "stroke-width": 1 }));

  typedIndices.forEach((entry, i) => {
    const node = nodeForEntry(entry);
    const h = hostHistory[i];
    const g = h && h.info;
    const x = xOf(i);
    const grp = svgEl("g", { class: "g-node" + (i === historyFocus ? " is-focus" : ""), "data-i": i });
    grp.appendChild(svgEl("circle", { cx: x, cy: baseY, r: 9, fill: node.type === "symbol" ? "#f3e9e6" : "#fff", stroke: i === historyFocus ? "#c43e2a" : "#333", "stroke-width": i === historyFocus ? 2 : 1 }));
    grp.appendChild(svgEl("text", { x, y: baseY + 3.5, "text-anchor": "middle", "font-size": 10, "font-weight": 600, fill: "#222" }, keyForEntry(entry)));
    grp.appendChild(svgEl("text", { x, y: baseY + 22, "text-anchor": "middle", "font-size": 8, fill: "#999" }, String(i + 1)));
    if (g && g.bodies && g.bodies.length > 1) {
      g.bodies.slice(1).forEach((k, bi) => {
        grp.appendChild(svgEl("text", { x, y: baseY + 36 + bi * 11, "text-anchor": "middle", "font-size": 9, fill: "#666" }, `+${k}`));
      });
    }
    if (g && g.glitch) grp.appendChild(svgEl("text", { x, y: baseY + 36, "text-anchor": "middle", "font-size": 9, fill: "#c43e2a" }, "∅"));
    svg.appendChild(grp);
  });
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "g-scroll";
  wrapDiv.appendChild(svg);
  box.appendChild(wrapDiv);
  const legend = document.createElement("div");
  legend.className = "g-legend";
  legend.textContent = t("gLegend");
  box.appendChild(legend);
  wrapDiv.scrollLeft = wrapDiv.scrollWidth;
}

function renderReceipt() {
  if (!receiptOpen || !receiptPaper) return;
  renderLineageGraph();
  receiptPaper.textContent = "";
  receiptPaper.appendChild(rLine("r-title", t("rTitle")));
  const now = new Date();
  receiptPaper.appendChild(rLine("r-meta", now.toLocaleString(LANG === "ko" ? "ko-KR" : "en-US")));
  receiptPaper.appendChild(rLine("r-meta", typedIndices.map((e) => keyForEntry(e)).join("") || "—"));
  receiptPaper.appendChild(rLine("r-rule", ""));
  if (!typedIndices.length) {
    receiptPaper.appendChild(rLine("r-meta", t("rEmpty")));
    return;
  }
  let sumBodies = 0, sumBtn = 0, sumMig = 0, sumSpr = 0;
  typedIndices.forEach((entry, i) => {
    const node = nodeForEntry(entry);
    const h = hostHistory[i];
    const item = document.createElement("div");
    item.className = "r-item" + (i === historyFocus ? " is-focus" : "");
    item.dataset.i = String(i);
    const head = document.createElement("div");
    head.className = "r-head";
    const l = document.createElement("span");
    l.textContent = `${String(i + 1).padStart(2, "0")}  ${keyForEntry(entry)}  ${nameOf(node)}`;
    const r = document.createElement("span");
    r.textContent = node.year ? String(node.year) : "";
    head.appendChild(l); head.appendChild(r);
    item.appendChild(head);
    const g = h && h.info;
    if (g && g.glitch) {
      item.appendChild(rLine("r-sub", t("unassembled")));
      sumBodies += 1;
    } else if (g) {
      sumBodies += g.bodies.length;
      sumBtn += g.total; sumMig += g.mig; sumSpr += g.spr;
      if (g.bodies.length > 1) item.appendChild(rLine("r-sub", `${t("bodies")}  ${g.bodies.join(" + ")}`));
      item.appendChild(rLine("r-sub", `${t("buttons")}  ${g.total}   ·   ${t("rOwn")} ${g.total - g.filled}`));
      if (g.mig) item.appendChild(rLine("r-sub", `${t("migrated")} ${g.mig}  ←  ${g.migFrom.join(" ")}`));
      if (g.spr) item.appendChild(rLine("r-sub", `${t("spare")} ${g.spr}  ←  ${g.sprFrom.join(" ")}`));
    } else {
      sumBodies += 1;
    }
    if (h && h.combo) item.appendChild(rLine("r-sub", `⨯ ${h.combo.label}  ${nameOf(h.combo)}`));
    receiptPaper.appendChild(item);
  });
  receiptPaper.appendChild(rLine("r-rule", ""));
  const tot = (a, b) => {
    const d = document.createElement("div");
    d.className = "r-total";
    const x = document.createElement("span"); x.textContent = a;
    const y = document.createElement("span"); y.textContent = b;
    d.appendChild(x); d.appendChild(y);
    return d;
  };
  receiptPaper.appendChild(tot(t("rLetters"), String(typedIndices.length)));
  receiptPaper.appendChild(tot(t("rBodies"), String(sumBodies)));
  receiptPaper.appendChild(tot(t("rButtons"), String(sumBtn)));
  receiptPaper.appendChild(tot(`  ${t("migrated")}`, String(sumMig)));
  receiptPaper.appendChild(tot(`  ${t("spare")}`, String(sumSpr)));
  receiptPaper.appendChild(tot(`  ${t("rOwn")}`, String(sumBtn - sumMig - sumSpr)));
  receiptPaper.appendChild(rLine("r-rule", ""));
  receiptPaper.appendChild(rLine("r-meta", t("rHint")));
  const f = receiptPaper.querySelector(".r-item.is-focus") || receiptPaper.querySelector(".r-item:last-of-type");
  if (f) f.scrollIntoView({ block: "nearest" });
}
const lineageBox = document.getElementById("lineage-graph");
if (lineageBox) lineageBox.addEventListener("click", (e) => {
  const g = e.target.closest(".g-node");
  if (g) gotoHistory(Number(g.getAttribute("data-i")));
});
if (receiptPaper) receiptPaper.addEventListener("click", (e) => {
  const it = e.target.closest(".r-item");
  if (it) gotoHistory(Number(it.dataset.i));
});
if (receiptEl) receiptEl.addEventListener("wheel", (e) => e.stopPropagation(), { passive: true });

const imgCache = new Map();
function embedName(path) {
  return path.replace(/^assets\//, "").replace(/\//g, "__").replace(/\.webp$/i, "");
}
function loadScriptOnce(src) {
  return new Promise((resolve) => {
    const sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => resolve(true);
    sc.onerror = () => resolve(false);
    document.head.appendChild(sc);
  });
}
async function loadExportImage(path) {
  if (imgCache.has(path)) return imgCache.get(path);
  const p = (async () => {
    window.__EMBED = window.__EMBED || {};
    if (!window.__EMBED[path]) await loadScriptOnce(`assets/embed/${embedName(path)}.js`);
    const src = window.__EMBED[path] || path;
    const im = new Image();
    im.decoding = "async";
    im.src = src;
    await im.decode().catch(() => new Promise((r) => { im.onload = r; im.onerror = r; }));
    return im;
  })();
  imgCache.set(path, p);
  return p;
}
function cssUrl(el, varName) {
  const v = el.style.getPropertyValue(varName) || "";
  const m = v.match(/url\(["']?([^"')]+)["']?\)/);
  return m ? m[1] : null;
}
function pxOf(el, prop) { return parseFloat(el.style[prop]) || 0; }

async function renderComposition() {
  const hosts = (currentHost ? [currentHost] : []).concat(rootTrail.filter((g) => g && g.wrap));
  if (!hosts.length) return null;
  const xr = document.body.classList.contains("xray-mode");
  const coords = document.body.classList.contains("show-coords");

  const order = hosts.slice().sort((a, b) => (parseFloat(a.wrap.style.zIndex) || 1000) - (parseFloat(b.wrap.style.zIndex) || 1000));
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  order.forEach((h) => {
    const r = wrapRect(h.wrap);
    x0 = Math.min(x0, r.x); y0 = Math.min(y0, r.y);
    x1 = Math.max(x1, r.x + r.w); y1 = Math.max(y1, r.y + r.h);
  });
  const margin = 70, caption = 70, top = coords ? 90 : margin;
  const bw = x1 - x0 + margin * 2;
  const bh = y1 - y0 + top + margin + caption;
  const S = Math.max(1, Math.min(2.5, 9000 / bw, 9000 / bh));
  const cv = document.createElement("canvas");
  cv.width = Math.round(bw * S);
  cv.height = Math.round(bh * S);
  const ctx = cv.getContext("2d");
  ctx.scale(S, S);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, bw, bh);
  const ox = margin - x0, oy = top - y0;

  if (coords) {
    ctx.save();
    const a = anchorScreenPos();
    const gx = (a.x + ox) % 20, gy = (irLineY() + oy) % 20;
    for (let x = gx; x < bw; x += 20) {
      ctx.strokeStyle = Math.round((x - (a.x + ox)) / 20) % 5 === 0 ? "rgba(196,62,42,0.10)" : "rgba(0,0,0,0.035)";
      ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, bh - caption); ctx.stroke();
    }
    for (let y = gy; y < bh - caption; y += 20) {
      ctx.strokeStyle = Math.round((y - (irLineY() + oy)) / 20) % 5 === 0 ? "rgba(196,62,42,0.10)" : "rgba(0,0,0,0.035)";
      ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(bw, y + 0.5); ctx.stroke();
    }
    ctx.setLineDash([3, 3]);
    ctx.strokeStyle = "rgba(196,62,42,0.4)";
    ctx.beginPath(); ctx.moveTo(0, irLineY() + oy + 0.5); ctx.lineTo(bw, irLineY() + oy + 0.5); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(196,62,42,0.85)";
    ctx.beginPath(); ctx.arc(a.x + ox, irLineY() + oy, 4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  for (const h of order) {
    const r = wrapRect(h.wrap);
    const lc = document.createElement("canvas");
    lc.width = Math.ceil(r.w * S); lc.height = Math.ceil(r.h * S);
    const l = lc.getContext("2d");
    l.scale(S, S);
    const kids = [...h.wrap.children];
    const shells = kids.filter((k) => k.classList.contains("rshell"));
    const btns = kids.filter((k) => k.classList.contains("rbtn"));
    const tapes = kids.filter((k) => k.classList.contains("rtape"));
    for (const sh of shells) {
      const url = cssUrl(sh, xr ? "--sx" : "--so");
      if (!url) continue;
      const im = await loadExportImage(url);
      l.globalCompositeOperation = "multiply";
      l.drawImage(im, pxOf(sh, "left"), pxOf(sh, "top"), pxOf(sh, "width"), pxOf(sh, "height"));
    }
    for (const b of btns) {
      const url = cssUrl(b, xr ? "--bx" : "--bo");
      if (!url) continue;
      const im = await loadExportImage(url);
      const [sw, sh2] = b.style.backgroundSize.split(" ").map(parseFloat);
      const [bx, by] = b.style.backgroundPosition.split(" ").map(parseFloat);
      const w = pxOf(b, "width"), hh = pxOf(b, "height");
      const kx = im.naturalWidth / sw, ky = im.naturalHeight / sh2;
      l.globalCompositeOperation = xr ? "multiply" : "source-over";
      l.drawImage(im, -bx * kx, -by * ky, w * kx, hh * ky, pxOf(b, "left"), pxOf(b, "top"), w, hh);
    }
    l.globalCompositeOperation = "source-over";
    for (const tp of tapes) {
      l.fillStyle = xr ? "rgba(240,240,244,0.45)" : "#e7dfc4";
      l.fillRect(pxOf(tp, "left"), pxOf(tp, "top"), pxOf(tp, "width"), pxOf(tp, "height"));
    }
    ctx.save();
    ctx.globalCompositeOperation = xr ? (BODY_LAYOUT === "merge" ? "darken" : "multiply") : "source-over";
    ctx.drawImage(lc, r.x + ox, r.y + oy, r.w, r.h);
    ctx.restore();
    if (coords && h.tag && h.tag.textContent) {
      ctx.fillStyle = "#a8321f";
      ctx.font = "9.5px Menlo, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText(h.tag.textContent, r.x + ox + parseFloat(h.tag.style.left), r.y + oy + parseFloat(h.tag.style.top) + 9);
    }
  }

  const typed = typedIndices.map((e) => keyForEntry(e)).join("");
  ctx.textAlign = "left";
  ctx.fillStyle = "#222";
  ctx.font = "300 22px -apple-system, 'Helvetica Neue', Arial, sans-serif";
  ctx.fillText(typed, margin, bh - caption + 30);
  ctx.fillStyle = "#999";
  ctx.font = "11px Menlo, Consolas, monospace";
  const stamp = new Date().toLocaleString(LANG === "ko" ? "ko-KR" : "en-US");
  ctx.fillText(`REMOTE-TYPE SYSTEM · ${xr ? "X-RAY" : "ORIGINAL"} · ${stamp}`, margin, bh - caption + 52);
  return cv;
}

let lastExport = null;
const shareSheet = document.getElementById("share-sheet");
const shareMsg = document.getElementById("share-msg");
function showShare(text, ready) {
  if (!shareSheet) return;
  shareMsg.textContent = text;
  shareSheet.classList.toggle("is-ready", !!ready);
  shareSheet.classList.add("is-open");
  shareSheet.setAttribute("aria-hidden", "false");
}
async function downloadComposition() {
  if (!typedIndices.length) return;
  finishAssembly();
  showShare(t("saving"), false);
  let cv;
  try { cv = await renderComposition(); } catch (err) { console.warn(err); }
  if (!cv) { showShare(t("saveFail"), false); return; }
  cv.toBlob((blob) => {
    if (!blob) { showShare(t("saveFail"), false); return; }
    const typed = typedIndices.map((e) => keyForEntry(e)).join("");
    const safe = typed.replace(/[^A-Za-z&]/g, "").slice(0, 40) || "remote";
    const d = new Date();
    const pad = (v) => String(v).padStart(2, "0");
    const name = `remote-type_${safe}_${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.png`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    let file = null;
    try { file = new File([blob], name, { type: "image/png" }); } catch (e) {}
    lastExport = { blob, file, name, typed };
    showShare(`${t("saved")} — ${name}\n${t("savedHint")}`, true);
  }, "image/png");
}
async function mailComposition() {
  if (!lastExport) return;
  const { file, name, typed } = lastExport;

  if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: t("mailSubject"), text: typed });
      return;
    } catch (e) {
      if (e && e.name === "AbortError") return;
    }
  }

  const body = t("mailBody").replace("{typed}", typed).replace("{file}", name);
  location.href = `mailto:?subject=${encodeURIComponent(`${t("mailSubject")} — ${typed}`)}&body=${encodeURIComponent(body)}`;
}
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) downloadBtn.addEventListener("click", (e) => { e.stopPropagation(); downloadComposition(); });
const shareMailBtn = document.getElementById("share-mail");
if (shareMailBtn) shareMailBtn.addEventListener("click", (e) => { e.stopPropagation(); mailComposition(); });
const shareAgainBtn = document.getElementById("share-again");
if (shareAgainBtn) shareAgainBtn.addEventListener("click", (e) => { e.stopPropagation(); downloadComposition(); });
const shareCloseBtn = document.getElementById("share-close");
if (shareCloseBtn) shareCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  shareSheet.classList.remove("is-open");
  shareSheet.setAttribute("aria-hidden", "true");
  keyCapture.focus();
});

function applyLanguage() {
  document.documentElement.lang = LANG;
  const set = (id, title, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (title) { el.title = title; el.setAttribute("aria-label", title.split("  (")[0]); }
    if (text != null) el.textContent = text;
  };
  set("zoom-out-btn", t("tZoomOut"));
  set("zoom-in-btn", t("tZoomIn"));
  set("zoom-fit-btn", t("tFit"), t("fit"));
  set("zoom-reset-btn", t("tReset"));
  set("body-layout-btn", t("tLayout"), BODY_LAYOUT === "merge" ? t("layoutMerge") : t("layoutSide"));
  set("sound-toggle", t("tSound"));
  set("lang-toggle", t("tLang"), t("langBtn"));
  set("coord-toggle", t("tCoords"), t("coords"));
  set("receipt-toggle", t("tLineage"), t("lineageBtn"));
  set("download-btn", t("tDownload"), t("download"));
  set("share-mail", null, t("email"));
  set("share-again", null, t("saveAgain"));
  const xb = document.getElementById("xray-toggle");
  if (xb) xb.title = t("tXray");
  typedDisplay.title = t("tTyped");
  typedDisplay.dataset.empty = t("typePrompt");
  renderLabel();
  updateTypedDisplay();
  updateCoordTags();
  renderReceipt();
}
const langBtn = document.getElementById("lang-toggle");
if (langBtn) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    LANG = LANG === "en" ? "ko" : "en";
    try { localStorage.setItem("remote-type-lang", LANG); } catch (err) {}
    applyLanguage();
    keyCapture.focus();
  });
}
applyLanguage();