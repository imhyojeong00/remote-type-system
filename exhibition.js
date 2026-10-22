// ================================================================
// EXHIBITION MODE — 전시용 자동 타이핑 (script.js 다음에 로드)
//
// · 아무도 치지 않을 때: A→Z를 사람이 치듯 타이핑
//   (리모컨 버튼이 다 끼워진 걸 보고 나서 다음 글자로 → 조립 연출이 잘리지 않음)
//   그동안 오리지널 ↔ X-ray가 일정 시간마다 번갈아 바뀜
//   Z까지 치면 잠시 머문 뒤 지우고 다시 A부터
// · 관람자가 키를 누르거나 화면을 누르는 순간: 화면을 모두 비우고
//   오리지널 상태에서 원래 기능 그대로 타이핑
// · 관람자가 일정 시간 아무것도 하지 않으면: 리셋되어 다시 자동 타이핑
//
// 끄고 싶을 때: 주소 뒤에 ?demo=off
// ================================================================

// ================================================================
// SOUND UNLOCK — 브라우저 자동재생 정책 대응
//
// 크롬·사파리는 사람이 페이지를 한 번 클릭하거나 키를 누르기 전에는 소리를 막음
// (VS Code 미리보기에는 이 제한이 없어서 거기서는 처음부터 소리가 났던 것)
// · 소리가 막혀 있을 때만 화면 아래에 "CLICK FOR SOUND" 안내가 뜸
// · 그 상태에서의 첫 클릭은 소리만 켜고, 자동 타이핑은 끊지 않고 그대로 이어감
//   (전시 세팅 때 한 번만 눌러 두면 됨)
// · 키를 누르면 소리가 켜지면서 원래대로 관람자 타이핑으로 넘어감
// · 처음부터 소리가 허용된 환경(VS Code 미리보기, 자동재생 허용한 키오스크)에서는 아무것도 하지 않음
// ================================================================
(function exhibitSoundUnlock() {
  if (/[?&]demo=off\b/i.test(location.search)) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;

  // 이 사이트의 소리를 깨우는 방법
  const resumeSite = () => {
    try { if (navigator.audioSession && navigator.audioSession.type !== "playback") navigator.audioSession.type = "playback"; } catch (e) {}
    try { if (typeof exhibitUnlockAudio === "function") exhibitUnlockAudio(); if (typeof bgHumEl !== "undefined" && bgHumEl && bgHumEl.paused) bgHumEl.play().catch(() => {}); } catch (e) {}
  };

  let probe = null;
  try { probe = new AC(); } catch (e) { return; }
  let locked = false;
  let swallowed = false;
  let hint = null;

  const isUnlocked = () => !probe || probe.state === "running";

  function finish() {
    locked = false;
    if (hint) { hint.style.opacity = "0"; setTimeout(() => hint && hint.remove(), 600); }
    ["pointerdown", "pointerup", "touchend", "click", "keydown"].forEach((ev) => window.removeEventListener(ev, onGesture, true));
    try { probe.close(); } catch (e) {}
    probe = null;
  }

  function showHint() {
    if (hint || !document.body) return;
    hint = document.createElement("div");
    hint.id = "sound-unlock-hint";
    hint.textContent = "♪ CLICK FOR SOUND";
    hint.setAttribute("aria-hidden", "true");
    hint.style.cssText = [
      "position:fixed", "left:50%", "bottom:22px", "transform:translateX(-50%)",
      "z-index:2147483000", "pointer-events:none",
      "font:inherit", "font-size:11px", "letter-spacing:0.14em", "line-height:1",
      "padding:8px 12px", "border:1px solid currentColor", "border-radius:999px",
      "color:#fff", "mix-blend-mode:difference",
      "opacity:0", "transition:opacity .6s ease"
    ].join(";");
    document.body.appendChild(hint);
    requestAnimationFrame(() => { if (hint) hint.style.opacity = "0.75"; });
  }

  function onGesture(e) {
    if (!e.isTrusted || !locked) return;
    resumeSite();
    if (probe && probe.state !== "closed") {
      probe.resume().then(() => { if (isUnlocked() && locked) finish(); }).catch(() => {});
    }
    // 첫 클릭은 소리만 켜고 자동 타이핑은 계속 (버튼·메뉴를 누른 경우는 원래 기능 그대로)
    if (e.type === "pointerdown" && !swallowed) {
      swallowed = true;
      const onControl = e.target && e.target.closest && e.target.closest("button, a, input, select, textarea, [role='button']");
      if (!onControl) e.stopImmediatePropagation();
    }
  }

  // 이 스크립트가 다른 입력 처리보다 먼저 듣도록 가장 먼저 등록
  ["pointerdown", "pointerup", "touchend", "click", "keydown"].forEach((ev) => window.addEventListener(ev, onGesture, true));
  locked = true;

  // 생성 직후에는 상태가 늦게 바뀌는 브라우저가 있어서 잠깐 기다렸다가 판단
  setTimeout(() => {
    if (!probe) return;
    if (isUnlocked()) { finish(); return; }
    probe.onstatechange = () => { if (isUnlocked() && locked) finish(); };
    if (document.body) showHint();
    else document.addEventListener("DOMContentLoaded", showHint, { once: true });
  }, 700);
})();

const EXHIBIT = {
  LETTERS: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  START_DELAY_MS: 1400,      // 화면이 비워진 뒤 첫 글자가 나오기까지
  GAP_MS: [300, 650],        // 버튼 조립이 끝난 뒤 다음 글자를 치기까지 쉬는 시간 (작을수록 빠름)
  HESITATE_CHANCE: 0.08,     // 아주 가끔 숨 고르듯 더 쉬는 확률
  HESITATE_MS: [250, 550],
  ORIGINAL_MS: 4500,         // 오리지널이 보이는 시간
  XRAY_MS: 4500,             // X-ray가 보이는 시간 (둘이 계속 번갈아 반복)
  PHASE_JITTER_MS: 600,      // 매번 똑같은 박자로 바뀌지 않게 주는 약간의 차이
  HOLD_AFTER_Z_MS: 7000,     // Z까지 다 친 뒤 그 화면을 보여주는 시간
  IDLE_RETURN_MS: 20000,     // 관람자가 마지막으로 친 뒤 리셋되어 자동 타이핑으로 돌아가기까지
  STEP_TIMEOUT_MS: 6000      // 혹시 조립 완료 신호를 못 받아도 이 시간이 지나면 다음 글자로
};

const exhibitEnabled = !/[?&]demo=off\b/i.test(location.search);
const exhibitInFrame = window.parent !== window;

let exhibitMode = "demo";    // "demo" | "user"
let exhibitTimer = null;
let exhibitPhaseTimer = null;
let exhibitIdleTimer = null;
let exhibitIndex = 0;
let exhibitToken = 0;        // 리셋될 때마다 증가 → 예전 타이머가 늦게 실행돼도 무시됨

(function exhibitBoot() {
  if (!exhibitEnabled || typeof typeKey !== "function") return;

  window.addEventListener("keydown", onVisitorKey, true);
  window.addEventListener("pointerdown", onVisitorPointer, true);

  // 여러 사물을 한 화면에 모으는 전시 페이지(부모 창)에서 보내는 신호
  window.addEventListener("message", onStageMessage);

  waitForImages().then(() => { if (exhibitMode === "demo") startDemo(); });
})();

// 첫 사이클이 이미지 로딩 전에 시작되면 리모컨이 비거나 늦게 뜸
// → 이미지 요청이 1초 동안 더 늘지 않을 때까지(=다 받아질 때까지, 최대 15초) 기다림
function waitForImages() {
  return new Promise((resolve) => {
    const t0 = performance.now();
    let last = -1, still = 0;
    const poll = () => {
      const n = performance.getEntriesByType("resource").length;
      still = n === last && document.readyState === "complete" ? still + 1 : 0;
      last = n;
      if (still >= 4 || performance.now() - t0 > 15000) return resolve();
      setTimeout(poll, 250);
    };
    setTimeout(poll, 400);
  });
}

// ---------- 화면 전체 비우기 ----------

function exhibitClearAll() {
  exhibitToken += 1;
  clearTimeout(exhibitTimer);
  exhibitTimer = null;
  clearTimeout(exhibitPhaseTimer);
  exhibitPhaseTimer = null;

  if (xrayMode) setXrayMode(false);
  clearAll();
  if (typeof resetView === "function") resetView();
  followCamera = true;
}

// ---------- 자동 타이핑 ----------

function startDemo() {
  exhibitMode = "demo";
  clearTimeout(exhibitIdleTimer);
  exhibitClearAll();
  exhibitIndex = 0;
  const token = exhibitToken;
  setPhase("original", token);
  exhibitTimer = setTimeout(() => demoStep(token), EXHIBIT.START_DELAY_MS);
}

function demoStep(token) {
  if (token !== exhibitToken || exhibitMode !== "demo") return;

  if (exhibitIndex >= EXHIBIT.LETTERS.length) {
    postToStage("cycle-done");
    exhibitTimer = setTimeout(() => {
      if (token === exhibitToken && exhibitMode === "demo") startDemo();
    }, EXHIBIT.HOLD_AFTER_Z_MS);
    return;
  }

  const ch = EXHIBIT.LETTERS[exhibitIndex];
  exhibitIndex += 1;

  try { primeAudioOnce(); } catch (e) {}
  // 실제 키 입력과 똑같은 경로 (사이 기호 자동 삽입·접목·소리 모두 원래 기능 그대로)
  typeKey(ch);

  const target = keyIndex.get(ch);
  const t0 = performance.now();
  const waitDone = () => {
    if (token !== exhibitToken || exhibitMode !== "demo") return;
    const last = typedIndices[typedIndices.length - 1];
    const placed = last === target;
    const assembled = pendingSnaps.length === 0;
    if ((placed && assembled) || performance.now() - t0 > EXHIBIT.STEP_TIMEOUT_MS) {
      exhibitTimer = setTimeout(() => demoStep(token), nextGap());
      return;
    }
    exhibitTimer = setTimeout(waitDone, 60);
  };
  exhibitTimer = setTimeout(waitDone, 120);
}

function nextGap() {
  const [a, b] = EXHIBIT.GAP_MS;
  let d = a + Math.random() * (b - a);
  if (Math.random() < EXHIBIT.HESITATE_CHANCE) {
    const [h1, h2] = EXHIBIT.HESITATE_MS;
    d += h1 + Math.random() * (h2 - h1);
  }
  return d;
}

// ---------- 오리지널 ↔ X-ray 번갈아 보이기 ----------

function setPhase(phase, token) {
  if (token !== exhibitToken || exhibitMode !== "demo") return;
  const original = phase === "original";
  if (xrayMode === original) setXrayMode(!original);
  const base = original ? EXHIBIT.ORIGINAL_MS : EXHIBIT.XRAY_MS;
  const wait = base + (Math.random() - 0.5) * 2 * EXHIBIT.PHASE_JITTER_MS;
  clearTimeout(exhibitPhaseTimer);
  exhibitPhaseTimer = setTimeout(() => setPhase(original ? "xray" : "original", token), wait);
}

// ---------- 관람자 입력 ----------

function isIgnoredKey(e) {
  if (e.metaKey || e.ctrlKey || e.altKey) return true; // 운영자용 단축키(새로고침·전체화면 등)
  if (/^F\d+$/.test(e.key)) return true;
  return false;
}

// 브라우저는 사람이 화면을 한 번 만지기 전까지 소리를 막음
// → 관람자의 첫 클릭/키 입력에서 바로 소리를 깨움 (원래는 글자를 쳐야만 깨어났음)
function exhibitUnlockAudio() {
  try { primeAudioOnce(); } catch (e) {}
  if (typeof audioCtx !== "undefined" && audioCtx && audioCtx.state !== "running") {
    audioCtx.resume().catch(() => {});
  }
}
["pointerdown", "keydown", "touchend"].forEach((ev) =>
  window.addEventListener(ev, (e) => { if (e.isTrusted) exhibitUnlockAudio(); }, true)
);

function onVisitorKey(e) {
  if (!e.isTrusted || isIgnoredKey(e)) return;
  enterUserMode();
  armIdleReturn();
  // 막지 않으므로 방금 누른 키는 비워진 화면에서 그대로 첫 글자가 됨
}

function onVisitorPointer(e) {
  if (!e.isTrusted) return;
  // 위쪽 메뉴(좌표·계보·다운로드·언어)와 계보 패널은 원래 기능 그대로 → 화면을 지우지 않음
  if (e.target.closest && e.target.closest("#toolbar, #receipt, #share-sheet")) {
    if (exhibitMode === "user") armIdleReturn();
    return;
  }
  enterUserMode();
  armIdleReturn();
}

function enterUserMode() {
  if (exhibitMode === "user") return;
  exhibitMode = "user";
  exhibitClearAll();
  postToStage("visitor");
}

function armIdleReturn() {
  clearTimeout(exhibitIdleTimer);
  exhibitIdleTimer = setTimeout(() => {
    if (exhibitMode !== "user") return;
    postToStage("idle");
    startDemo();
  }, EXHIBIT.IDLE_RETURN_MS);
}

// ---------- 전시 페이지(여러 사물을 모은 화면)와 주고받는 신호 ----------
// 단독으로 열었을 때는 아무 영향 없음

function postToStage(type) {
  if (!exhibitInFrame) return;
  try { window.parent.postMessage({ source: "exhibit", type }, "*"); } catch (e) {}
}

function onStageMessage(e) {
  const d = e.data;
  if (!d || d.target !== "exhibit") return;
  if (d.type === "restart") startDemo();
  if (d.type === "mute" && typeof audioCtx !== "undefined" && audioCtx) {
    if (d.on) audioCtx.suspend().catch(() => {});
    else audioCtx.resume().catch(() => {});
  }
}