"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  subItems?: SubMenuItem[];
  subMenus?: { [key: string]: SubMenuItem[] };
}

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const navigationItems: MenuItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
      subItems: [
        {
          name: "About VNIT",
          href: "/about/vnit",
        },
        {
          name: "About EED",
          href: "/about/eed",
        },
        {
          name: "About Maharashtra",
          href: "/about/maharashtra",
        },
      ],
    },
    {
      name: "Conference",
      href: "/conference",
      subItems: [
        {
          name: "Authors",
          href: "/conference/authors",
        },
        {
          name: "Committee",
          href: "/conference/committee",
        },
        {
          name: "Speakers",
          href: "/conference/speakers",
        },
        {
          name: "Event Details",
          href: "/conference/events",
        },
        {
          name: "Special Sessions",
          href: "/conference/special-sessions",
        },
        {
          name: "Registration",
          href: "/conference/registration",
        },
        {
          name: "Awards",
          href: "/conference/awards",
        },
        {
          name: "Accommodation",
          href: "/conference/accommodation",
        },
        {
          name: "Venue & Contact",
          href: "/conference/venue-contact",
        },
        {
          name: "Sponsorship",
          href: "/conference/sponsorship",
        },
        {
          name: "Photo Gallery",
          href: "/conference/gallery",
        },
        {
          name: "SEFET Proceeding",
          href: "/conference/proceedings",
        },
      ],
      subMenus: {
        Authors: [
          {
            name: "Call for Papers",
            href: "/conference/authors/call-for-papers",
          },
          {
            name: "Camera Ready Paper Submission",
            href: "/conference/authors/camera-ready",
          },
          {
            name: "Publication and Templates",
            href: "/conference/authors/publication-templates",
          },
        ],
        Speakers: [
          {
            name: "Keynote Speakers",
            href: "/conference/speakers/keynote",
          },
          {
            name: "Tutorial Speakers",
            href: "/conference/speakers/tutorial",
          },
        ],
        "Event Details": [
          {
            name: "Program Schedule",
            href: "/conference/events/program",
          },
          {
            name: "WIE Events",
            href: "/conference/events/wie",
          },
          {
            name: "SYP Events",
            href: "/conference/events/syp",
          },
          {
            name: "Academic Panel Discussion",
            href: "/conference/events/academic-panel",
          },
          {
            name: "Industry Events",
            href: "/conference/events/industry",
          },
          {
            name: "City Tour",
            href: "/conference/events/city-tour",
          },
        ],
        Awards: [
          {
            name: "Outstanding Doctoral Thesis Award",
            href: "/conference/awards/doctoral-thesis",
          },
          {
            name: "Students Travel Awards",
            href: "/conference/awards/student-travel",
          },
          {
            name: "Best Paper Award",
            href: "/conference/awards/best-paper",
          },
          {
            name: "Best Poster Award",
            href: "/conference/awards/best-poster",
          },
        ],
        Sponsorship: [
          {
            name: "Our Sponsors",
            href: "/conference/sponsorship/sponsors",
          },
          {
            name: "Sponsorship Details",
            href: "/conference/sponsorship/details",
          },
        ],
      },
    },
  ];

  /**
   * VIEWPORT-AWARE POSITIONING SYSTEM
   *
   * The following functions implement an intelligent positioning system that:
   * 1. Detects screen boundaries and prevents dropdown/submenu overflow
   * 2. Automatically repositions elements (left, right, center, or inside parent)
   * 3. Calculates optimal width based on content plus padding
   * 4. Ensures responsive behavior across all device sizes
   */

  // Viewport-aware positioning utility functions
  /**
   * Calculate optimal dropdown positioning to prevent viewport overflow
   *
   * @param dropdownElement - The dropdown DOM element
   * @param triggerElement - The navigation item that triggers the dropdown
   * @returns CSS positioning properties to apply
   */
  const calculateDropdownPosition = useCallback(
    (dropdownElement: HTMLElement, triggerElement: HTMLElement) => {
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const triggerRect = triggerElement.getBoundingClientRect();
      const dropdownRect = dropdownElement.getBoundingClientRect();

      let position: { [key: string]: string | number } = {
        left: 0,
        right: "auto",
        transform: "none",
      };

      // Calculate horizontal positioning
      // Strategy 1: Try positioning from the left edge of trigger (default)
      if (triggerRect.left + dropdownRect.width <= viewport.width - 20) {
        position.left = 0; // Default left alignment
      }
      // Strategy 2: If overflow on right, try right alignment
      else if (triggerRect.right - dropdownRect.width >= 20) {
        position.left = "auto";
        position.right = "0px";
      }
      // Strategy 3: If still overflow, center and adjust with transform
      else {
        const availableWidth = viewport.width - 40; // 20px margin on each side
        const centerOffset =
          (triggerRect.width - Math.min(dropdownRect.width, availableWidth)) /
          2;
        position.left = Math.max(-triggerRect.left + 20, centerOffset);
        position.transform = `translateX(${Math.min(
          0,
          viewport.width - triggerRect.left - dropdownRect.width - 20
        )}px)`;
      }

      return position;
    },
    []
  );

  /**
   * Calculate optimal submenu positioning to prevent viewport overflow
   *
   * @param submenuElement - The submenu DOM element
   * @param triggerElement - The dropdown item that triggers the submenu
   * @param dropdownElement - The parent dropdown element
   * @returns CSS positioning properties to apply
   */
  const calculateSubmenuPosition = useCallback(
    (
      submenuElement: HTMLElement,
      triggerElement: HTMLElement,
      dropdownElement: HTMLElement
    ) => {
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const triggerRect = triggerElement.getBoundingClientRect();
      const submenuRect = submenuElement.getBoundingClientRect();
      const dropdownRect = dropdownElement.getBoundingClientRect();

      let position: { [key: string]: string | number } = {
        left: "100%",
        right: "auto",
        top: 0,
        transform: "none",
      };

      // Calculate horizontal positioning
      // Strategy 1: Try positioning to the right (default)
      if (triggerRect.right + submenuRect.width <= viewport.width - 20) {
        position.left = "100%";
      }
      // Strategy 2: If overflow on right, position to the left
      else if (dropdownRect.left - submenuRect.width >= 20) {
        position.left = "auto";
        position.right = "100%";
      }
      // Strategy 3: If still overflow, position inside dropdown with transform
      else {
        position.left = "0px";
        position.transform = `translateX(${Math.min(
          0,
          viewport.width - triggerRect.left - submenuRect.width - 20
        )}px)`;
      }

      // Calculate vertical positioning to prevent bottom overflow
      const triggerOffsetInDropdown = triggerRect.top - dropdownRect.top;
      if (triggerRect.top + submenuRect.height > viewport.height - 20) {
        const overflowAmount =
          triggerRect.top + submenuRect.height - (viewport.height - 20);
        position.top = Math.max(-triggerOffsetInDropdown, -overflowAmount);
      }

      return position;
    },
    []
  );

  /**
   * Calculate optimal width for dropdown/submenu based on content
   *
   * This function:
   * 1. Creates a temporary clone of the element
   * 2. Measures the natural content width
   * 3. Adds appropriate padding
   * 4. Ensures minimum and maximum width constraints
   *
   * @param element - The dropdown or submenu element
   * @returns Optimal width as CSS string
   */
  // Auto-width calculation for dropdowns
  const calculateOptimalWidth = useCallback((element: HTMLElement) => {
    // Create a temporary clone to measure content width
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.width = "auto";
    clone.style.minWidth = "none";
    clone.style.maxWidth = "none";
    clone.style.whiteSpace = "nowrap";

    document.body.appendChild(clone);
    const contentWidth = clone.scrollWidth;
    document.body.removeChild(clone);

    // Add padding and ensure minimum/maximum widths
    const optimalWidth = Math.max(200, Math.min(400, contentWidth + 40)); // 40px total padding/margin
    return `${optimalWidth}px`;
  }, []);

  /**
   * Apply positioning and width calculations to dropdown menus
   * Called when a dropdown becomes active
   */
  // Apply positioning when dropdowns become visible
  const applyDropdownPositioning = useCallback(
    (itemName: string) => {
      const dropdownElement = dropdownRefs.current[itemName];
      const triggerElement = document.querySelector(
        `[data-dropdown-trigger="${itemName}"]`
      ) as HTMLElement;

      if (!dropdownElement || !triggerElement) return;

      // Apply auto-width calculation based on content
      const optimalWidth = calculateOptimalWidth(dropdownElement);
      dropdownElement.style.width = optimalWidth;

      // Calculate and apply responsive positioning to prevent overflow
      requestAnimationFrame(() => {
        const position = calculateDropdownPosition(
          dropdownElement,
          triggerElement
        );
        Object.assign(dropdownElement.style, position);
      });
    },
    [calculateDropdownPosition, calculateOptimalWidth]
  );

  /**
   * Apply positioning and width calculations to submenu elements
   * Called when a submenu becomes active
   */
  const applySubmenuPositioning = useCallback(
    (submenuKey: string, itemName: string) => {
      const submenuElement = submenuRefs.current[submenuKey];
      const triggerElement = document.querySelector(
        `[data-submenu-trigger="${submenuKey}"]`
      ) as HTMLElement;
      const dropdownElement = dropdownRefs.current[itemName];

      if (!submenuElement || !triggerElement || !dropdownElement) return;

      // Apply auto-width calculation based on content
      const optimalWidth = calculateOptimalWidth(submenuElement);
      submenuElement.style.width = optimalWidth;

      // Calculate and apply responsive positioning to prevent overflow
      requestAnimationFrame(() => {
        const position = calculateSubmenuPosition(
          submenuElement,
          triggerElement,
          dropdownElement
        );
        Object.assign(submenuElement.style, position);
      });
    },
    [calculateSubmenuPosition, calculateOptimalWidth]
  );

  const isCurrentPage = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
    if (e.key === "Escape") {
      setActiveDropdown(null);
      setActiveSubmenu(null);
      setIsMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllDropdowns();
        setIsMobileMenuOpen(false);
      }
    };

    // Handle window resize to recalculate positioning
    const handleResize = () => {
      if (activeDropdown) {
        applyDropdownPositioning(activeDropdown);
      }
      if (activeSubmenu && activeDropdown) {
        const submenuKey = `${activeDropdown}-${activeSubmenu}`;
        applySubmenuPositioning(submenuKey, activeDropdown);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [
    activeDropdown,
    activeSubmenu,
    applyDropdownPositioning,
    applySubmenuPositioning,
  ]);

  // Apply positioning when dropdowns become active
  useEffect(() => {
    if (activeDropdown) {
      applyDropdownPositioning(activeDropdown);
    }
  }, [activeDropdown, applyDropdownPositioning]);

  // Apply positioning when submenus become active
  useEffect(() => {
    if (activeSubmenu && activeDropdown) {
      const submenuKey = `${activeDropdown}-${activeSubmenu}`;
      applySubmenuPositioning(submenuKey, activeDropdown);
    }
  }, [activeSubmenu, activeDropdown, applySubmenuPositioning]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className={`ieee-professional-nav ${isScrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="IEEE SeFet 2026 Main Navigation"
    >
      <div className="ieee-nav-container">
        {/* Conference Branding - Left Side */}
        <div className="ieee-nav-brand">
          <Link
            href="/"
            className="ieee-brand-link"
            aria-label="IEEE SeFet 2026 Conference Home"
          >
            <div className="ieee-brand-logo">
              <span className="ieee-logo-text">IEEE</span>
              <span className="ieee-logo-separator">|</span>
              <span className="conference-name">SeFet 2026</span>
            </div>
            <div className="ieee-brand-subtitle">
              Sustainable Energy and Future Electric Transportation
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="ieee-nav-desktop">
          <ul className="ieee-nav-menu" role="menubar">
            {navigationItems.map((item) => (
              <li
                key={item.name}
                className={`ieee-nav-item ${
                  item.subItems ? "has-dropdown" : ""
                } ${isCurrentPage(item.href) ? "active" : ""}`}
                role="none"
                onMouseEnter={() =>
                  item.subItems && setActiveDropdown(item.name)
                }
                onMouseLeave={() => {
                  if (item.subItems) {
                    setActiveDropdown(null);
                    setActiveSubmenu(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="ieee-nav-link"
                  role="menuitem"
                  data-dropdown-trigger={item.name}
                  aria-haspopup={item.subItems ? "true" : undefined}
                  aria-expanded={
                    item.subItems ? activeDropdown === item.name : undefined
                  }
                  onFocus={() => item.subItems && setActiveDropdown(item.name)}
                  onKeyDown={(e) =>
                    handleKeyDown(
                      e,
                      () => item.subItems && setActiveDropdown(item.name)
                    )
                  }
                >
                  {item.name}
                  {item.subItems && (
                    <svg
                      className={`ieee-dropdown-icon ${
                        activeDropdown === item.name ? "rotated" : ""
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Enhanced Dropdown Menu with Viewport-Aware Positioning */}
                {item.subItems && (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[item.name] = el;
                    }}
                    className={`ieee-dropdown-menu ${
                      activeDropdown === item.name ? "show" : ""
                    }`}
                    role="menu"
                    aria-labelledby={`nav-${item.name}`}
                  >
                    <div className="ieee-dropdown-content">
                      {item.subItems.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="ieee-dropdown-item-wrapper"
                        >
                          <Link
                            href={subItem.href}
                            className={`ieee-dropdown-item ${
                              isCurrentPage(subItem.href) ? "active" : ""
                            } ${
                              item.subMenus?.[subItem.name] ? "has-submenu" : ""
                            }`}
                            role="menuitem"
                            data-submenu-trigger={`${item.name}-${subItem.name}`}
                            onMouseEnter={() =>
                              item.subMenus?.[subItem.name] &&
                              setActiveSubmenu(subItem.name)
                            }
                          >
                            <div className="ieee-dropdown-item-content">
                              <span className="ieee-dropdown-item-title">
                                {subItem.name}
                              </span>
                            </div>
                            {item.subMenus?.[subItem.name] && (
                              <span className="ieee-submenu-icon">•</span>
                            )}
                          </Link>

                          {/* Submenu with Viewport-Aware Positioning */}
                          {item.subMenus?.[subItem.name] && (
                            <div
                              ref={(el) => {
                                submenuRefs.current[
                                  `${item.name}-${subItem.name}`
                                ] = el;
                              }}
                              className={`ieee-submenu ${
                                activeSubmenu === subItem.name ? "show" : ""
                              }`}
                              role="menu"
                              onMouseLeave={() => setActiveSubmenu(null)}
                            >
                              <div className="ieee-submenu-content">
                                {item.subMenus[subItem.name].map(
                                  (submenuItem) => (
                                    <Link
                                      key={submenuItem.name}
                                      href={submenuItem.href}
                                      className={`ieee-submenu-item ${
                                        isCurrentPage(submenuItem.href)
                                          ? "active"
                                          : ""
                                      }`}
                                      role="menuitem"
                                    >
                                      <div className="ieee-submenu-item-content">
                                        <span className="ieee-submenu-item-title">
                                          {submenuItem.name}
                                        </span>
                                      </div>
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ieee-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onKeyDown={(e) =>
            handleKeyDown(e, () => setIsMobileMenuOpen(!isMobileMenuOpen))
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="ieee-mobile-navigation"
          aria-label="Toggle mobile navigation menu"
        >
          <span className="ieee-sr-only">Toggle navigation menu</span>
          <div className={`ieee-hamburger ${isMobileMenuOpen ? "open" : ""}`}>
            <span className="ieee-hamburger-line"></span>
            <span className="ieee-hamburger-line"></span>
            <span className="ieee-hamburger-line"></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        id="ieee-mobile-navigation"
        className={`ieee-mobile-nav ${isMobileMenuOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <div className="ieee-mobile-content">
          <div className="ieee-mobile-header">
            <div className="ieee-mobile-brand">
              <span className="ieee-mobile-logo">IEEE SeFet 2026</span>
              <span className="ieee-mobile-subtitle">
                Sustainable Energy and Future Electric Transportation
              </span>
            </div>
            <button
              className="ieee-mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="ieee-mobile-menu">
            {navigationItems.map((item) => (
              <div key={item.name} className="ieee-mobile-item">
                {item.subItems ? (
                  <div className="ieee-mobile-dropdown">
                    <button
                      className={`ieee-mobile-link ieee-mobile-toggle-btn ${
                        isCurrentPage(item.href) ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      aria-expanded={activeDropdown === item.name}
                      role="button"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`ieee-mobile-dropdown-icon ${
                          activeDropdown === item.name ? "rotated" : ""
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`ieee-mobile-submenu ${
                        activeDropdown === item.name ? "open" : ""
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="ieee-mobile-submenu-item"
                        >
                          {item.subMenus?.[subItem.name] ? (
                            <div className="ieee-mobile-nested">
                              <button
                                className={`ieee-mobile-sublink ieee-mobile-nested-toggle ${
                                  isCurrentPage(subItem.href) ? "active" : ""
                                }`}
                                onClick={() =>
                                  setActiveSubmenu(
                                    activeSubmenu === subItem.name
                                      ? null
                                      : subItem.name
                                  )
                                }
                                aria-expanded={activeSubmenu === subItem.name}
                              >
                                <span>{subItem.name}</span>
                                <svg
                                  className={`ieee-mobile-submenu-icon ${
                                    activeSubmenu === subItem.name
                                      ? "rotated"
                                      : ""
                                  }`}
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M6 9l6 6 6-6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                              <div
                                className={`ieee-mobile-nested-menu ${
                                  activeSubmenu === subItem.name ? "open" : ""
                                }`}
                              >
                                {item.subMenus[subItem.name].map(
                                  (nestedItem) => (
                                    <Link
                                      key={nestedItem.name}
                                      href={nestedItem.href}
                                      className={`ieee-mobile-nested-link ${
                                        isCurrentPage(nestedItem.href)
                                          ? "active"
                                          : ""
                                      }`}
                                      onClick={closeMobileMenu}
                                      role="menuitem"
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={subItem.href}
                              className={`ieee-mobile-sublink ${
                                isCurrentPage(subItem.href) ? "active" : ""
                              }`}
                              onClick={closeMobileMenu}
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`ieee-mobile-link ${
                      isCurrentPage(item.href) ? "active" : ""
                    }`}
                    onClick={closeMobileMenu}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Overlay Background */}
      {isMobileMenuOpen && (
        <div
          className="ieee-mobile-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
