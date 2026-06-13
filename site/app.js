/* app.js — renders TRIBUTE content and drives the animations. */
(function () {
  "use strict";
  var T = window.TRIBUTE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  };
  // Keep our own <em> tags in legend/closing bodies but escape user text elsewhere.
  var fmtDate = function (iso) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var p = iso.split("-");
    return p[2] + " " + months[+p[1] - 1] + " " + p[0];
  };

  /* ── Intro ── */
  $("introLead").textContent =
    "We've called ourselves " + T.meta.group + " for as long as we can remember, and none of us is even sure why. Four friends, one chat, " +
    (T.meta.spanTo - T.meta.spanFrom) + " years, and roughly twenty thousand messages. This is the part of all of it that's about you.";
  $("jobsQuote").innerHTML =
    "&ldquo;" + esc(T.meta.jobsQuote) + "&rdquo;<cite>— Steve Jobs, on why Vighanesh named us The Beatles</cite>";

  /* ── Quote wall ── */
  $("quoteWall").innerHTML = T.quotes.map(function (q) {
    return (
      '<figure class="qcard' + (q.weight === 2 ? " big" : "") + '">' +
        '<p><span class="qmark">&ldquo;</span>' + esc(q.text) + "</p>" +
        (q.translation ? '<p class="trans">' + esc(q.translation) + "</p>" : "") +
        '<figcaption class="date">' + fmtDate(q.date) + "</figcaption>" +
      "</figure>"
    );
  }).join("");

  /* ── Timeline ── */
  $("timeline").innerHTML = T.timeline.map(function (y) {
    return (
      '<li class="tl-item">' +
        '<div class="tl-head"><span class="tl-year">' + y.year + "</span>" +
        '<span class="tl-age">age ' + y.age + "</span></div>" +
        '<div class="tl-title">' + esc(y.title) + "</div>" +
        '<p class="tl-note">' + esc(y.note) + "</p>" +
        (y.photo ? '<div class="tl-photo"' + (y.photo.i != null ? ' data-i="' + y.photo.i + '"' : "") + '><img loading="lazy" src="' + y.photo.src + '" alt="' + esc(y.title) + '" /></div>' : "") +
      "</li>"
    );
  }).join("");

  /* ── About ── */
  $("aboutGrid").innerHTML = T.about.map(function (a) {
    return (
      '<figure class="acard">' +
        "<p>&ldquo;" + esc(a.text) + "&rdquo;</p>" +
        '<figcaption class="who">' + esc(a.who) + " <span>· " + fmtDate(a.date) + "</span></figcaption>" +
      "</figure>"
    );
  }).join("");

  /* ── Legends ── (body may contain <em>) */
  $("legendGrid").innerHTML = T.legends.map(function (l) {
    return (
      '<article class="lcard">' +
        '<span class="emoji">' + l.emoji + "</span>" +
        "<h3>" + esc(l.title) + "</h3>" +
        "<p>" + l.body + "</p>" +
      "</article>"
    );
  }).join("");

  /* ── Milestones ── */
  $("milestoneList").innerHTML = T.milestones.map(function (m) {
    return (
      '<div class="mrow">' +
        '<div class="mdate">' + esc(m.date) + "</div>" +
        "<div><div class=\"mtitle\">" + esc(m.title) + '</div><div class="mbody">' + esc(m.body) + "</div></div>" +
      "</div>"
    );
  }).join("");

  /* ── Wishes ── */
  $("wishesStream").innerHTML = T.wishes.map(function (w) {
    var bubbles = w.items.map(function (it) {
      var isAnand = /anand/i.test(it.who);
      return (
        '<div class="bubble' + (isAnand ? " anand" : "") + '">' +
          '<span class="bw">' + esc(it.who) + "</span>" + esc(it.text) +
        "</div>"
      );
    }).join("");
    return (
      '<div class="wish-year"><div class="wy">' + w.year + "</div>" +
      '<div class="bubbles">' + bubbles + "</div></div>"
    );
  }).join("");

  /* ── Closing ── */
  $("closingHeading").textContent = T.closing.heading;
  $("closingBody").innerHTML = T.closing.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("closingSignoff").textContent = T.closing.signoff;

  /* ── Gallery ── */
  var gallery = T.gallery || [];
  if (gallery.length) {
    document.getElementById("gallery").hidden = false;
    $("galleryGrid").innerHTML = gallery.map(function (g, i) {
      var thumb = g.poster || g.src;
      var badge = g.video ? '<span class="play-badge"></span>' : "";
      return (
        '<a class="gtile" data-i="' + i + '">' +
          '<img loading="lazy" src="' + thumb + '" alt="' + esc(g.caption || "") + '" />' + badge +
          (g.caption ? '<div class="gmeta">' + (g.date ? '<span class="gdate">' + fmtDate(g.date) + "</span> " : "") + esc(g.caption) + "</div>" : "") +
        "</a>"
      );
    }).join("");
  }

  /* ── Lightbox ── */
  (function () {
    var lb = $("lightbox"), media = $("lbMedia"), cap = $("lbCap");
    var idx = 0;
    function render() {
      var g = gallery[idx];
      if (!g) return;
      if (g.video) {
        media.innerHTML = '<video src="' + g.video + '" controls autoplay playsinline ' +
          (g.poster ? 'poster="' + g.poster + '"' : "") + "></video>";
      } else {
        media.innerHTML = '<img src="' + g.src + '" alt="' + esc(g.caption || "") + '" />';
      }
      cap.innerHTML = (g.caption ? esc(g.caption) : "") + (g.date ? '<span class="lbd">' + fmtDate(g.date) + "</span>" : "");
    }
    function open(i) { idx = i; render(); lb.hidden = false; document.body.style.overflow = "hidden"; }
    function close() { lb.hidden = true; media.innerHTML = ""; document.body.style.overflow = ""; }
    function go(d) { idx = (idx + d + gallery.length) % gallery.length; render(); }
    document.addEventListener("click", function (e) {
      var tile = e.target.closest(".gtile, .tl-photo[data-i]");
      if (tile && tile.dataset.i != null) { e.preventDefault(); open(+tile.dataset.i); }
    });
    $("lbClose").addEventListener("click", close);
    $("lbPrev").addEventListener("click", function () { go(-1); });
    $("lbNext").addEventListener("click", function () { go(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    });
  })();

  /* ── Reveal on scroll ── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ── Navigation helpers ── */
  $("topLink").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ── Starfield ── */
  (function () {
    var c = $("starfield"), ctx = c.getContext("2d"), stars = [], w, h;
    function resize() {
      w = c.width = window.innerWidth; h = c.height = window.innerHeight;
      var n = Math.min(220, Math.floor((w * h) / 9000));
      stars = [];
      for (var i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h,
          r: Math.random() * 1.3 + 0.2,
          a: Math.random(), s: Math.random() * 0.015 + 0.003,
          tw: Math.random() < 0.5 ? 1 : -1,
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        st.a += st.s * st.tw;
        if (st.a <= 0.05) { st.a = 0.05; st.tw = 1; }
        if (st.a >= 1) { st.a = 1; st.tw = -1; }
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(240, 230, 200," + st.a * 0.9 + ")";
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener("resize", resize);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) draw();
    else { ctx.globalAlpha = 0.6; stars.forEach(function (s) { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fillStyle = "#f0e6c8"; ctx.fill(); }); }
  })();

  /* ── Confetti ── */
  var confetti = (function () {
    var c = $("confetti"), ctx = c.getContext("2d"), pieces = [], raf = null, w, h;
    var colors = ["#e8c87a", "#f0d98c", "#f5f1e8", "#c9a455", "#ffd97a", "#8fb3ff"];
    function resize() { w = c.width = window.innerWidth; h = c.height = window.innerHeight; }
    resize(); window.addEventListener("resize", resize);
    function burst(n) {
      for (var i = 0; i < n; i++) {
        pieces.push({
          x: w / 2 + (Math.random() - 0.5) * w * 0.5,
          y: h * 0.28 + (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 11,
          vy: Math.random() * -13 - 4,
          g: 0.28 + Math.random() * 0.12,
          s: Math.random() * 8 + 4,
          rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.3,
          col: colors[(Math.random() * colors.length) | 0],
          life: 0,
        });
      }
      if (!raf) loop();
    }
    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (var i = pieces.length - 1; i >= 0; i--) {
        var p = pieces[i];
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.col;
        ctx.globalAlpha = Math.max(0, 1 - p.life / 160);
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.5);
        ctx.restore();
        if (p.y > h + 40 || p.life > 170) pieces.splice(i, 1);
      }
      if (pieces.length) raf = requestAnimationFrame(loop);
      else { ctx.clearRect(0, 0, w, h); raf = null; }
    }
    return { burst: burst };
  })();

  // Wish button + cake
  $("wishBtn").addEventListener("click", function () { confetti.burst(160); });
  var cake = $("cake");
  function blow() {
    if (cake.classList.contains("out")) {
      cake.classList.remove("out");
    } else {
      cake.classList.add("out");
      confetti.burst(200);
    }
  }
  cake.addEventListener("click", blow);
  cake.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); blow(); } });

  // A gentle welcome burst once the hero settles.
  window.addEventListener("load", function () { setTimeout(function () { confetti.burst(120); }, 700); });
})();
