// Intersection Observer for fade-in
const sections = document.querySelectorAll(".section")
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible")
    })
  },
  { threshold: 0.2 },
)
sections.forEach((s) => observer.observe(s))

// Active link highlight based on scroll position
const links = document.querySelectorAll(".nav__link")
const header = document.querySelector(".site-header")

const getHeaderHeight = () => (header ? header.offsetHeight : 56)

// Track last known active section (sticky — never goes blank except hero)
let activeSectionId = "hero"

const updateActiveSection = () => {
  const headerHeight = getHeaderHeight()
  const viewportBottom = window.innerHeight
  const effectiveViewport = viewportBottom - headerHeight

  let bestId = null
  let bestCoverage = 0

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const visibleTop = Math.max(headerHeight, rect.top)
    const visibleBottom = Math.min(viewportBottom, rect.bottom)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop)

    if (visibleHeight > bestCoverage) {
      bestCoverage = visibleHeight
      bestId = section.id
    }
  })

  // Only hand off to a new section once it dominates more than 50% of the
  // effective viewport; otherwise the current section stays active (sticky).
  if (bestId && bestCoverage > effectiveViewport * 0.5) {
    activeSectionId = bestId
  }

  // Hero has no nav link — nothing highlighted when hero is active.
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + activeSectionId)
  })
}

let scrollTimeout
const onScroll = () => {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(updateActiveSection, 50)
}

window.addEventListener("scroll", onScroll, { passive: true })
updateActiveSection() // Initial call

// Smooth scroll for logo → hero
const logoLink = document.querySelector(".nav__logo")
if (logoLink) {
  logoLink.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// Handle smooth scrolling on nav link click
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    const id = link.getAttribute("href").slice(1)
    const targetSection = document.getElementById(id)

    if (!targetSection) return

    const scrollBuffer = 1
    const headerHeight = getHeaderHeight()
    const targetPosition = targetSection.offsetTop - headerHeight + scrollBuffer

    // NOTE: Manual class manipulation and flags have been removed from here.
    // The onScroll handler will now manage the active state during the scroll.
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  })
})

// About section image movement on column hover (desktop only)

// Video autoplay handling for mobile devices
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".gif__box video")
  if (video) {
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
    playVideo()
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo()
          }
        })
      },
      { threshold: 0.5 },
    )
    videoObserver.observe(video)
  }
})


// Breadth tag cloud — scattered absolute layout + floating web animation + tooltip
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".breadth__tags")
  if (!container) return

  const tags = Array.from(container.querySelectorAll(".breadth__tag"))

  // --- Mobile: static flex layout, tap compact tags to reveal outcome ---
  if (window.innerWidth <= 1100) {
    tags
      .filter((tag) => !tag.classList.contains("breadth__tag--featured"))
      .forEach((tag) => {
        tag.addEventListener("click", () => {
          const isActive = tag.classList.contains("active")
          tags.forEach((t) => t.classList.remove("active"))
          if (!isActive) tag.classList.add("active")
        })
      })
    return
  }

  // ── Desktop cloud layout ─────────────────────────────

  // Seed positions [cx_frac, cy_frac] — center of each tag as fraction of cloud area.
  // Three clusters left→right: algorithmic | data | web.
  // Order matches HTML order.
  const seeds = [
    [0.04, 0.20],  // 3D rendering (featured)     — algorithmic, upper-left
    [0.15, 0.46],  // drone algorithm (featured)   — algorithmic, below-right of 3D
    [0.04, 0.80],  // embedded systems (med)      — algorithmic, far lower-left, separate
    [0.35, 0.20],  // survey algorithm (featured)  — algo→data bridge, same vertical center as 3D
    [0.51, 0.50],  // data pipelines (featured)   — data, top ~= bottom of survey box
    [0.39, 0.55],  // map & geospatial (med)      — data, lower-left (closer to algo side)
    [0.47, 0.72],  // network analysis (small)    — data, lower-right
    [0.57, 0.20],  // BI & analytics (med)        — data, upper-right
    [0.78, 0.25],  // ecommerce (small)           — web cluster
    [0.89, 0.25],  // offline apps (small)        — right of ecommerce, same row
    [0.87, 0.42],  // web platforms (small)       — web cluster
    [0.93, 0.08],  // booking platforms (med)     — upper-right corner
    [0.95, 0.71],  // enterprise erp (featured)   — right, lower edge aligned with embedded systems
  ]

  function layoutCloud() {
    const style = getComputedStyle(container)
    const pl = parseFloat(style.paddingLeft) || 0
    const pr = parseFloat(style.paddingRight) || 0
    const pt = parseFloat(style.paddingTop) || 0
    const pb = parseFloat(style.paddingBottom) || 0

    // Inner cloud area
    const W = container.offsetWidth - pl - pr
    const H = Math.max(460, Math.round(W / 2.2))

    // Measure tag natural dimensions (absolute, so no reflow needed)
    const dims = tags.map((tag) => ({ w: tag.offsetWidth, h: tag.offsetHeight }))

    // Convert seed fractions → top-left pixel positions within inner area
    const pos = seeds.map(([cx, cy], i) => ({
      x: Math.max(0, Math.min(cx * W - dims[i].w / 2, W - dims[i].w)),
      y: Math.max(0, Math.min(cy * H - dims[i].h / 2, H - dims[i].h)),
    }))

    // Push overlapping tags apart — proper AABB overlap on both axes
    const MARGIN = 12
    for (let iter = 0; iter < 60; iter++) {
      let moved = false
      for (let i = 0; i < pos.length; i++) {
        for (let j = i + 1; j < pos.length; j++) {
          const pi = pos[i], pj = pos[j]
          const di = dims[i], dj = dims[j]
          const ox = Math.min(pi.x + di.w, pj.x + dj.w) - Math.max(pi.x, pj.x) + MARGIN
          const oy = Math.min(pi.y + di.h, pj.y + dj.h) - Math.max(pi.y, pj.y) + MARGIN
          if (ox > 0 && oy > 0) {
            if (ox < oy) {
              const dir = pi.x <= pj.x ? 1 : -1
              pi.x = Math.max(0, Math.min(pi.x - dir * ox / 2, W - di.w))
              pj.x = Math.max(0, Math.min(pj.x + dir * ox / 2, W - dj.w))
            } else {
              const dir = pi.y <= pj.y ? 1 : -1
              pi.y = Math.max(0, Math.min(pi.y - dir * oy / 2, H - di.h))
              pj.y = Math.max(0, Math.min(pj.y + dir * oy / 2, H - dj.h))
            }
            moved = true
          }
        }
      }
      if (!moved) break
    }

    // Apply positions (offset by container padding)
    tags.forEach((tag, i) => {
      tag.style.left = pl + pos[i].x + "px"
      tag.style.top  = pt + pos[i].y + "px"
    })

    // Set container height to actual tag extent + bottom padding
    const maxBottom = Math.max(...pos.map((p, i) => p.y + dims[i].h))
    container.style.height = pt + maxBottom + pb + "px"

    // Sync canvas dimensions and redraw
    if (canvas) {
      canvas.width  = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    requestAnimationFrame(drawWeb)
  }

  // --- Canvas web ---
  const canvas = container.querySelector(".breadth__web")

  function drawWeb() {
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    const cRect = container.getBoundingClientRect()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const centers = tags.map((tag) => {
      const r = tag.getBoundingClientRect()
      return {
        x: r.left - cRect.left + r.width / 2,
        y: r.top  - cRect.top  + r.height / 2,
      }
    })

    // Explicit edges by tag index (matches HTML/seeds order):
    // 0=3D rendering, 1=drone, 2=embedded, 3=survey
    // 4=data pipelines, 5=geo, 6=network analysis, 7=BI
    // 8=ecommerce, 9=offline apps, 10=web platforms, 11=booking
    // 12=enterprise erp
    const edges = [
      // algorithmic cluster (fully connected)
      [0, 1], [0, 3], [1, 3],
      // embedded → drone only
      [1, 2],
      // data cluster (fully connected)
      [4, 5], [4, 6], [4, 7], [5, 6], [5, 7], [6, 7],
      // web cluster (fully connected)
      [8, 9], [8, 10], [8, 11], [9, 10], [9, 11], [10, 11],
      // survey → data bridges
      [3, 4], [3, 7],
      // erp cross-connections
      [12, 1], [12, 7], [12, 10],
    ]

    ctx.lineWidth = 1
    edges.forEach(([i, j]) => {
      ctx.strokeStyle = `rgba(90, 79, 207, 0.35)`
      ctx.beginPath()
      ctx.moveTo(centers[i].x, centers[i].y)
      ctx.lineTo(centers[j].x, centers[j].y)
      ctx.stroke()
    })
  }

  // --- Initial layout (run now and again after fonts load) ---
  layoutCloud()
  window.addEventListener("load", layoutCloud)

  // --- Resize: redo layout ---
  let resizeTimer
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(layoutCloud, 150)
  })

  // --- Tooltip on hover for non-large tags ---
  const tooltip = document.createElement("div")
  tooltip.className = "breadth__tooltip"
  document.body.appendChild(tooltip)

  tags
    .filter((tag) => !tag.classList.contains("breadth__tag--featured"))
    .forEach((tag) => {
      const outcomeEl = tag.querySelector(".breadth__tag__outcome")
      if (!outcomeEl) return

      tag.addEventListener("mouseenter", () => {
        tooltip.textContent = outcomeEl.textContent
        requestAnimationFrame(() => {
          const rect  = tag.getBoundingClientRect()
          const tRect = tooltip.getBoundingClientRect()
          let left = rect.left + rect.width / 2 - tRect.width / 2
          left = Math.max(8, Math.min(left, window.innerWidth - tRect.width - 8))
          tooltip.style.left = left + "px"
          tooltip.style.top  = rect.top - tRect.height - 12 + "px"
          tooltip.classList.add("visible")
        })
      })

      tag.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible")
      })
    })
})

// modal setup
// Get modal and trigger elements
// Get all modal links
// Get all modal links
const modalLinks = document.querySelectorAll(".modal-link")

// Open modal
modalLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").slice(1) // remove #
    const modal = document.getElementById(targetId)
    if (modal) {
      modal.style.display = "block"
    }
  })
})

// Close buttons inside modals
const closeButtons = document.querySelectorAll(".modal .close")
closeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault() // Prevent jumping to top
    btn.closest(".modal").style.display = "none"
  })
})

// Optional: close modal if user clicks outside modal content
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none"
  }
})
