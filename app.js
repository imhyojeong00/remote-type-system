(() => {
  "use strict";

  const TOUCH = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const root = document.documentElement;
  root.classList.add(TOUCH ? "touch-ui" : "desk-ui");
  if (!TOUCH) return;

  const $ = (id) => document.getElementById(id);
  const bar = $("ui-bar");
  const input = $("key-capture");
  const toolbar = $("toolbar");

  input.readOnly = true;
  input.setAttribute("inputmode", "none");
  input.removeAttribute("autofocus");
  input.tabIndex = -1;

  const ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "&"],
    ["prev", "next", "all", "stack", "out", "in", "home"],
  ];
  const FN = {
    prev: ["‹", "Previous remote"],
    next: ["›", "Next remote"],
    all: ["ALL", "Show all remotes"],
    stack: ["STACK", "Side by side / stacked"],
    out: ["−", "Zoom out"],
    in: ["+", "Zoom in"],
    home: ["⟲", "Back to latest"],
  };

  const toggle = document.createElement("button");
  toggle.id = "kbd-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Hide keyboard");
  toggle.textContent = "▾";
  bar.appendChild(toggle);

  const kbd = document.createElement("div");
  kbd.id = "kbd";
  kbd.setAttribute("role", "group");
  kbd.setAttribute("aria-label", "Remote keyboard");
  ROWS.forEach((row, ri) => {
    const r = document.createElement("div");
    r.className = "kbd-row" + (ri === 3 ? " kbd-nav" : "");
    row.forEach((k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "key";
      b.dataset.key = k;
      if (FN[k]) {
        b.textContent = FN[k][0];
        b.setAttribute("aria-label", FN[k][1]);
        b.classList.add("key-fn");
        if (k === "all" || k === "stack") b.classList.add("key-word");
      } else {
        b.textContent = k;
      }
      r.appendChild(b);
    });
    kbd.appendChild(r);
  });
  bar.appendChild(kbd);

  function step(dir) {
    if (!hostHistory.length) return;
    const cur = historyFocus < 0 ? hostHistory.length - 1 : historyFocus;
    gotoHistory(cur + dir);
  }

  function press(k) {
    if (k.length === 1) {
      typeKey(k);
      return;
    }
    if (k === "prev") step(-1);
    else if (k === "next") step(1);
    else if (k === "all") fitAll();
    else if (k === "stack" && LAYOUT_MODE === "graft") setBodyLayout(BODY_LAYOUT === "merge" ? "side" : "merge");
    else if (k === "out") zoomBy(1 / 1.3);
    else if (k === "in") zoomBy(1.3);
    else if (k === "home") {
      historyFocus = -1;
      updateTypedDisplay();
      resetView();
    }
  }

  let holdTimer = null;
  let holdRepeat = null;
  const stopHold = () => {
    clearTimeout(holdTimer);
    clearInterval(holdRepeat);
    holdTimer = holdRepeat = null;
  };

  kbd.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(".key");
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    primeAudioOnce();
    b.classList.add("pressed");
    const k = b.dataset.key;
    press(k);
    if (k === "prev" || k === "next" || k === "in" || k === "out") {
      holdTimer = setTimeout(() => { holdRepeat = setInterval(() => press(k), 180); }, 450);
    }
  });
  const release = () => {
    stopHold();
    kbd.querySelectorAll(".key.pressed").forEach((b) => b.classList.remove("pressed"));
  };
  ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => kbd.addEventListener(ev, release));
  kbd.addEventListener("contextmenu", (e) => e.preventDefault());

  function wakeAudio() {
    try {
      if (navigator.audioSession && navigator.audioSession.type !== "playback") navigator.audioSession.type = "playback";
    } catch (err) {}
    if (typeof audioCtx !== "undefined" && audioCtx && audioCtx.state !== "running" && audioCtx.state !== "closed") {
      audioCtx.resume().catch(() => {});
    }
  }
  ["touchend", "click"].forEach((ev) => window.addEventListener(ev, wakeAudio, { passive: true, capture: true }));

  function measure() {
    const dock = Math.max(0, Math.round(window.innerHeight - bar.getBoundingClientRect().top));
    root.style.setProperty("--dock-h", `${dock}px`);
    window.TOUCH_TOP_PX = Math.round(toolbar.getBoundingClientRect().bottom + 52);
    root.style.setProperty("--label-top", `${Math.round(toolbar.getBoundingClientRect().bottom + 8)}px`);
  }

  function relayout() {
    measure();
    if (typeof recomputeScale === "function") {
      recomputeScale();
      positionAnchorMarker();
      const line = document.getElementById("ir-line");
      if (line) line.style.top = `${irLineY()}px`;
      applyPan();
    }
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const hidden = document.body.classList.toggle("kbd-collapsed");
    toggle.textContent = hidden ? "▴" : "▾";
    toggle.setAttribute("aria-label", hidden ? "Show keyboard" : "Hide keyboard");
    requestAnimationFrame(relayout);
  });

  measure();
  window.addEventListener("resize", measure);
  window.addEventListener("load", relayout);
})();
