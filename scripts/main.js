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

// About section image movement on column hover (desktop only)
document.addEventListener("DOMContentLoaded", () => {
  const aboutImage = document.querySelector(".about__image")
  const leftColumn = document.querySelector(".column__left")
  const rightColumn = document.querySelector(".column__right")

  if (aboutImage && leftColumn && rightColumn && window.innerWidth >= 1025) {
    leftColumn.addEventListener("mouseenter", () => {
      aboutImage.style.transform = "translateX(0%)"
    })
    rightColumn.addEventListener("mouseenter", () => {
      aboutImage.style.transform = "translateX(-100%)"
    })
    ;[leftColumn, rightColumn].forEach((column) => {
      column.addEventListener("mouseleave", () => {
        aboutImage.style.transform = "translateX(-50%)"
      })
    })
  }
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

// Google Calendar popup scheduling
const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0guq06Owsw0Y6NXpFZsFTVvfDoWqTi9cEKwSyCyArnnXoICXHcX6kOCikamSvCMGlZUKBzsnWT?gv=true"
const calendarTargets = document.querySelectorAll(".calendar-btn")
const calendarTriggers = document.querySelectorAll("[data-calendar-trigger]")
let calendarButton = null
let pendingCalendarOpen = false

const findCalendarButton = () =>
  document.querySelector(".calendar-btn button, .calendar-btn a") ||
  document.querySelector(".calendar-scheduling-button") ||
  document.querySelector("button")

const openCalendarPopup = () => {
  if (!calendarButton) {
    calendarButton = findCalendarButton()
  }

  if (calendarButton) {
    calendarButton.click()
  } else {
    pendingCalendarOpen = true
  }
}

calendarTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault()
    openCalendarPopup()
  })
})

window.addEventListener("load", () => {
  if (!window.calendar) return

  calendarTargets.forEach((target) => {
    const label = target.dataset.label || "Book appointment"
    calendar.schedulingButton.load({
      url: CALENDAR_URL,
      label: label,
      color: "#039BE5",
      target: target,
    })
  })

  calendarButton = findCalendarButton()

  if (calendarButton) {
    calendarButton.setAttribute("aria-hidden", "true")
    calendarButton.style.display = "none"
    calendarButton.tabIndex = -1
  }

  if (pendingCalendarOpen && calendarButton) {
    pendingCalendarOpen = false
    calendarButton.click()
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
