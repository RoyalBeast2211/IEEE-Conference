// IEEE SeFet 2026 - Navigation JavaScript
// Converted from React to Vanilla JavaScript

class IEEENavigation {
  constructor() {
    this.navRef = null;
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
    this.activeSubmenu = null;
    this.isScrolled = false;
    this.dropdownRefs = {};
    this.submenuRefs = {};

    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.navRef = document.querySelector(".ieee-professional-nav");
      this.setupEventListeners();
      this.highlightCurrentPage();
    });
  }

  setupEventListeners() {
    // Scroll event
    window.addEventListener("scroll", () => this.handleScroll());

    // Resize event
    window.addEventListener("resize", () => this.handleResize());

    // Click outside to close dropdowns
    document.addEventListener("click", (e) => this.handleClickOutside(e));

    // Escape key to close menus
    document.addEventListener("keydown", (e) => this.handleEscape(e));

    // Mobile menu toggle
    const mobileToggle = document.querySelector(".ieee-mobile-toggle");
    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => this.toggleMobileMenu());
    }

    // Close mobile menu button
    const mobileClose = document.querySelector(".ieee-mobile-close");
    if (mobileClose) {
      mobileClose.addEventListener("click", () => this.closeMobileMenu());
    }

    // Desktop dropdown triggers
    this.setupDesktopDropdowns();

    // Mobile dropdown triggers
    this.setupMobileDropdowns();
  }

  setupDesktopDropdowns() {
    const navItems = document.querySelectorAll(
      ".ieee-nav-desktop .ieee-nav-item"
    );

    navItems.forEach((item) => {
      const hasDropdown = item.classList.contains("has-dropdown");
      if (!hasDropdown) return;

      const itemName = item.querySelector(".ieee-nav-link").textContent.trim();
      const trigger = item.querySelector("[data-dropdown-trigger]");

      // Mouse enter/leave for desktop
      item.addEventListener("mouseenter", () => {
        this.setActiveDropdown(itemName);
      });

      item.addEventListener("mouseleave", () => {
        this.closeAllDropdowns();
      });

      // Click for accessibility
      if (trigger) {
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          this.toggleDropdown(itemName);
        });
      }

      // Setup submenu triggers
      this.setupSubmenuTriggers(item, itemName);
    });
  }

  setupSubmenuTriggers(parentItem, parentName) {
    const submenuTriggers = parentItem.querySelectorAll(".has-submenu");

    submenuTriggers.forEach((trigger) => {
      const submenuName = trigger
        .querySelector(".ieee-dropdown-item-title")
        .textContent.trim();

      const submenu = trigger.nextElementSibling;

      trigger.addEventListener("mouseenter", () => {
        this.setActiveSubmenu(submenuName);
      });

      // Also handle mouseenter on the submenu itself
      if (submenu && submenu.classList.contains("ieee-submenu")) {
        submenu.addEventListener("mouseenter", () => {
          this.setActiveSubmenu(submenuName);
        });

        submenu.addEventListener("mouseleave", () => {
          this.activeSubmenu = null;
          this.updateSubmenusVisibility();
        });
      }

      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleSubmenu(submenuName);
      });

      trigger.addEventListener("mouseleave", (e) => {
        // Check if we're not moving to the submenu
        const relatedTarget = e.relatedTarget;
        if (
          submenu &&
          !submenu.contains(relatedTarget) &&
          relatedTarget !== submenu
        ) {
          setTimeout(() => {
            if (this.activeSubmenu === submenuName) {
              this.activeSubmenu = null;
              this.updateSubmenusVisibility();
            }
          }, 100);
        }
      });
    });
  }

  setupMobileDropdowns() {
    const mobileToggles = document.querySelectorAll(".ieee-mobile-toggle-btn");

    mobileToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const itemName = toggle.querySelector("span").textContent.trim();
        this.toggleMobileDropdown(itemName);
      });
    });

    // Setup nested mobile menu toggles
    const nestedToggles = document.querySelectorAll(
      ".ieee-mobile-nested-toggle"
    );
    nestedToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const nestedMenu = toggle.nextElementSibling;
        const icon = toggle.querySelector(".ieee-mobile-submenu-icon");
        const isOpen = nestedMenu.classList.contains("open");

        if (isOpen) {
          nestedMenu.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
          icon?.classList.remove("rotated");
        } else {
          nestedMenu.classList.add("open");
          toggle.setAttribute("aria-expanded", "true");
          icon?.classList.add("rotated");
        }
      });
    });
  }

  handleScroll() {
    const scrolled = window.scrollY > 20;
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
      if (this.navRef) {
        this.navRef.classList.toggle("scrolled", scrolled);
      }
    }
  }

  handleResize() {
    if (this.activeDropdown) {
      this.applyDropdownPositioning(this.activeDropdown);
    }
    if (this.activeSubmenu && this.activeDropdown) {
      this.applySubmenuPositioning(
        `${this.activeDropdown}-${this.activeSubmenu}`,
        this.activeDropdown
      );
    }
  }

  handleClickOutside(e) {
    if (this.navRef && !this.navRef.contains(e.target)) {
      this.closeAllDropdowns();
    }
  }

  handleEscape(e) {
    if (e.key === "Escape") {
      this.closeAllDropdowns();
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const mobileNav = document.querySelector(".ieee-mobile-nav");
    const mobileToggle = document.querySelector(".ieee-mobile-toggle");
    const hamburger = document.querySelector(".ieee-hamburger");

    if (mobileNav) {
      mobileNav.classList.toggle("open", this.isMobileMenuOpen);
    }
    if (mobileToggle) {
      mobileToggle.setAttribute("aria-expanded", this.isMobileMenuOpen);
    }
    if (hamburger) {
      hamburger.classList.toggle("open", this.isMobileMenuOpen);
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "";
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const mobileNav = document.querySelector(".ieee-mobile-nav");
    const mobileToggle = document.querySelector(".ieee-mobile-toggle");
    const hamburger = document.querySelector(".ieee-hamburger");

    if (mobileNav) {
      mobileNav.classList.remove("open");
    }
    if (mobileToggle) {
      mobileToggle.setAttribute("aria-expanded", "false");
    }
    if (hamburger) {
      hamburger.classList.remove("open");
    }

    document.body.style.overflow = "";
    this.closeAllDropdowns();
  }

  setActiveDropdown(itemName) {
    this.activeDropdown = itemName;
    this.updateDropdownsVisibility();
    this.applyDropdownPositioning(itemName);
  }

  toggleDropdown(itemName) {
    if (this.activeDropdown === itemName) {
      this.closeAllDropdowns();
    } else {
      this.setActiveDropdown(itemName);
    }
  }

  setActiveSubmenu(submenuName) {
    this.activeSubmenu = submenuName;
    this.updateSubmenusVisibility();
    if (this.activeDropdown) {
      this.applySubmenuPositioning(
        `${this.activeDropdown}-${submenuName}`,
        this.activeDropdown
      );
    }
  }

  toggleSubmenu(submenuName) {
    if (this.activeSubmenu === submenuName) {
      this.activeSubmenu = null;
    } else {
      this.setActiveSubmenu(submenuName);
    }
    this.updateSubmenusVisibility();
  }

  toggleMobileDropdown(itemName) {
    const isOpen = this.activeDropdown === itemName;
    this.activeDropdown = isOpen ? null : itemName;

    // Update mobile submenu visibility
    const allSubmenus = document.querySelectorAll(".ieee-mobile-submenu");
    const allToggles = document.querySelectorAll(".ieee-mobile-toggle-btn");
    const allIcons = document.querySelectorAll(".ieee-mobile-dropdown-icon");

    allSubmenus.forEach((submenu, index) => {
      const toggle = allToggles[index];
      const icon = allIcons[index];
      const toggleName = toggle?.querySelector("span")?.textContent.trim();

      if (toggleName === itemName && !isOpen) {
        submenu.classList.add("open");
        submenu.style.display = "";
        toggle?.setAttribute("aria-expanded", "true");
        icon?.classList.add("rotated");
      } else {
        submenu.classList.remove("open");
        submenu.style.display = "";
        toggle?.setAttribute("aria-expanded", "false");
        icon?.classList.remove("rotated");
      }
    });
  }

  closeAllDropdowns() {
    this.activeDropdown = null;
    this.activeSubmenu = null;
    this.updateDropdownsVisibility();
    this.updateSubmenusVisibility();
  }

  updateDropdownsVisibility() {
    const dropdowns = document.querySelectorAll(".ieee-dropdown-menu");
    const triggers = document.querySelectorAll("[data-dropdown-trigger]");
    const icons = document.querySelectorAll(".ieee-dropdown-icon");

    dropdowns.forEach((dropdown, index) => {
      const trigger = triggers[index];
      const icon = icons[index];
      const itemName = trigger?.getAttribute("data-dropdown-trigger");

      if (itemName === this.activeDropdown) {
        dropdown.classList.add("show");
        trigger?.setAttribute("aria-expanded", "true");
        icon?.classList.add("rotated");
      } else {
        dropdown.classList.remove("show");
        trigger?.setAttribute("aria-expanded", "false");
        icon?.classList.remove("rotated");
      }
    });
  }

  updateSubmenusVisibility() {
    const submenus = document.querySelectorAll(".ieee-submenu");

    submenus.forEach((submenu) => {
      // Find the trigger that comes immediately before this submenu
      const trigger = submenu.previousElementSibling;
      const submenuName = trigger
        ?.querySelector(".ieee-dropdown-item-title")
        ?.textContent.trim();

      if (submenuName === this.activeSubmenu) {
        submenu.classList.add("show");
      } else {
        submenu.classList.remove("show");
      }
    });
  }

  applyDropdownPositioning(itemName) {
    const trigger = document.querySelector(
      `[data-dropdown-trigger="${itemName}"]`
    );
    const dropdown = trigger
      ?.closest(".ieee-nav-item")
      ?.querySelector(".ieee-dropdown-menu");

    if (!dropdown || !trigger) return;

    const viewport = { width: window.innerWidth, height: window.innerHeight };
    const triggerRect = trigger.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();

    // Reset styles
    dropdown.style.left = "";
    dropdown.style.right = "";
    dropdown.style.transform = "";

    // Calculate optimal position
    if (triggerRect.left + dropdownRect.width <= viewport.width - 20) {
      dropdown.style.left = "0";
    } else if (triggerRect.right - dropdownRect.width >= 20) {
      dropdown.style.left = "auto";
      dropdown.style.right = "0";
    } else {
      const availableWidth = viewport.width - 40;
      const centerOffset =
        (triggerRect.width - Math.min(dropdownRect.width, availableWidth)) / 2;
      dropdown.style.left =
        Math.max(-triggerRect.left + 20, centerOffset) + "px";
    }
  }

  applySubmenuPositioning(submenuKey, itemName) {
    const trigger = document.querySelector(
      `[data-submenu-trigger="${submenuKey}"]`
    );
    // The submenu is the next sibling of the trigger
    const submenu = trigger?.nextElementSibling;
    const dropdown = document
      .querySelector(`[data-dropdown-trigger="${itemName}"]`)
      ?.closest(".ieee-nav-item")
      ?.querySelector(".ieee-dropdown-menu");

    if (
      !submenu ||
      !trigger ||
      !dropdown ||
      !submenu.classList.contains("ieee-submenu")
    )
      return;

    const viewport = { width: window.innerWidth, height: window.innerHeight };
    const triggerRect = trigger.getBoundingClientRect();
    const submenuRect = submenu.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();

    // Get the dropdown content container
    const dropdownContent = dropdown.querySelector(".ieee-dropdown-content");
    const containerRect = dropdownContent
      ? dropdownContent.getBoundingClientRect()
      : dropdownRect;

    // Reset styles first
    submenu.style.left = "";
    submenu.style.right = "";
    submenu.style.top = "";
    submenu.style.bottom = "";
    submenu.style.transform = "";
    submenu.style.marginLeft = "";
    submenu.style.marginRight = "";

    // Calculate the EXACT vertical position relative to the container
    // This is the key: we need to position the submenu at the same Y position as the trigger
    const triggerTopRelativeToContainer = triggerRect.top - containerRect.top;
    submenu.style.top = triggerTopRelativeToContainer + "px";

    // Calculate horizontal position (left or right of trigger)
    const spaceOnRight = viewport.width - triggerRect.right;
    const spaceOnLeft = triggerRect.left;

    if (spaceOnRight >= submenuRect.width + 20) {
      // Enough space on the right - position submenu to the right
      const triggerLeftRelativeToContainer =
        triggerRect.left - containerRect.left;
      const triggerWidth = triggerRect.width;
      submenu.style.left = triggerLeftRelativeToContainer + triggerWidth + "px";
      submenu.style.marginLeft = "0.5rem";
    } else if (spaceOnLeft >= submenuRect.width + 20) {
      // Not enough space on right, but enough on left - position to the left
      const triggerLeftRelativeToContainer =
        triggerRect.left - containerRect.left;
      submenu.style.left =
        triggerLeftRelativeToContainer - submenuRect.width + "px";
      submenu.style.marginLeft = "-0.5rem";
    } else {
      // Not enough space on either side - position below the trigger
      const triggerLeftRelativeToContainer =
        triggerRect.left - containerRect.left;
      submenu.style.left = triggerLeftRelativeToContainer + "px";
      submenu.style.top =
        triggerTopRelativeToContainer + triggerRect.height + "px";
      submenu.style.marginTop = "0.5rem";
    }

    // Adjust if submenu would overflow viewport vertically
    const submenuBottom = triggerRect.top + submenuRect.height;
    if (submenuBottom > viewport.height - 20) {
      const overflow = submenuBottom - (viewport.height - 20);
      const newTop = Math.max(0, triggerTopRelativeToContainer - overflow);
      submenu.style.top = newTop + "px";
    }
  }

  highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll(
      ".ieee-nav-link, .ieee-dropdown-item, .ieee-submenu-item, .ieee-mobile-link, .ieee-mobile-submenu-item"
    );

    const normalizePath = (path) => {
      if (!path) return "";
      // Treat index pages as the directory root and trim trailing slash except for root
      const cleaned = path.replace(/index\.html?$/i, "").replace(/\/$/, "");
      return cleaned === "" ? "/" : cleaned;
    };

    const currentUrl = new URL(window.location.href);
    const normalizedCurrentPath = normalizePath(currentUrl.pathname);

    links.forEach((link) => {
      if (!link || typeof link.getAttribute !== "function") {
        return;
      }

      const href = link.getAttribute("href");
      if (
        !href ||
        href === "#" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      let linkPath = "";
      try {
        const resolvedUrl = new URL(href, currentUrl);
        linkPath = normalizePath(resolvedUrl.pathname);
      } catch (error) {
        return;
      }

      if (
        linkPath === normalizedCurrentPath ||
        (linkPath !== "/" && normalizedCurrentPath.startsWith(linkPath))
      ) {
        link.classList.add("active");
      }
    });
  }
}

// Initialize navigation
const ieeeNav = new IEEENavigation();
