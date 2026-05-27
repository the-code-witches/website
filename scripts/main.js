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

const getHeaderHeight = () => {
  return header ? header.offsetHeight : 64
}

// Simplified and more robust way to find the current section
const getCurrentSectionId = () => {
  const headerHeight = getHeaderHeight()
  const scrollOffset = headerHeight + 50
  let currentSectionId = "hero"

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - scrollOffset) {
      currentSectionId = section.id
    }
  })

  return currentSectionId
}

let scrollTimeout
const onScroll = () => {
  // NOTE: The 'navigationInProgress' flag has been removed to fix the bug.

  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    const currentId = getCurrentSectionId()

    // This loop is now the single source of truth for the active class.
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentId)
    })
  }, 50)
}

window.addEventListener("scroll", onScroll, { passive: true })
onScroll() // Initial call

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


// Breadth tags — auto-scrolling carousel + hover tooltip + mobile tap
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".breadth__track")
  if (!track) return

  // --- Duplicate track for seamless infinite loop ---
  // i18n has already run by DOMContentLoaded, so translated text is in place
  track.innerHTML += track.innerHTML

  // --- Desktop: tooltip + pause animation on hover ---
  if (window.innerWidth > 992) {
    const tooltip = document.createElement("div")
    tooltip.className = "breadth__tooltip"
    document.body.appendChild(tooltip)

    document.querySelectorAll(".breadth__tag").forEach((tag) => {
      const outcomeEl = tag.querySelector(".breadth__tag__outcome")
      if (!outcomeEl) return

      tag.addEventListener("mouseenter", () => {
        track.classList.add("paused")
        tooltip.textContent = outcomeEl.textContent

        // measure after paint so dimensions are correct
        requestAnimationFrame(() => {
          const rect = tag.getBoundingClientRect()
          const tRect = tooltip.getBoundingClientRect()
          let left = rect.left + rect.width / 2 - tRect.width / 2
          left = Math.max(8, Math.min(left, window.innerWidth - tRect.width - 8))
          tooltip.style.left = left + "px"
          tooltip.style.top = (rect.top - tRect.height - 12) + "px"
          tooltip.classList.add("visible")
        })
      })

      tag.addEventListener("mouseleave", () => {
        track.classList.remove("paused")
        tooltip.classList.remove("visible")
      })
    })
  }

  // --- Mobile: tap to reveal outcome inline ---
  if (window.innerWidth <= 992) {
    document.querySelectorAll(".breadth__tag").forEach((tag) => {
      tag.addEventListener("click", () => {
        const isActive = tag.classList.contains("active")
        document.querySelectorAll(".breadth__tag").forEach((t) => t.classList.remove("active"))
        if (!isActive) tag.classList.add("active")
      })
    })
  }
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
