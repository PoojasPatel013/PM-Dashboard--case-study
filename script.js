document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  const contentSections = document.querySelectorAll(".content-section")

  function showSection(targetId) {
    // Hide all sections
    contentSections.forEach((section) => {
      section.classList.remove("active")
    })

    // Remove active class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove("active")
    })

    // Show target section
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      targetSection.classList.add("active")
    }

    // Add active class to clicked nav link
    const activeLink = document.querySelector(`a[href="${targetId}"]`)
    if (activeLink) {
      activeLink.classList.add("active")
    }

    // Scroll to top of main content
    document.querySelector(".main-content").scrollTop = 0
  }

  // Add click event listeners to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      showSection(targetId)
    })
  })

  // Show first section by default
  showSection("#problem-statement")

  // Handle browser back/forward buttons
  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.section) {
      showSection(e.state.section)
    }
  })

  // Update URL when section changes (optional)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href")
      history.pushState({ section: targetId }, "", targetId)
    })
  })
})
