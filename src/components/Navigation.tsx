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
        { name: "About VNIT", href: "/about/vnit" },
        { name: "About EED", href: "/about/eed" },
        { name: "About Maharashtra", href: "/about/maharashtra" },
      ],
    },
    {
      name: "Conference",
      href: "/conference",
      subItems: [
        { name: "Authors", href: "/conference/authors" },
        { name: "Committee", href: "/conference/committee" },
        { name: "Speakers", href: "/conference/speakers" },
        { name: "Event Details", href: "/conference/events" },
        { name: "Special Sessions", href: "/conference/special-sessions" },
        { name: "Registration", href: "/conference/registration" },
        { name: "Awards", href: "/conference/awards" },
        { name: "Accommodation", href: "/conference/accommodation" },
        { name: "Venue & Contact", href: "/conference/venue-contact" },
        { name: "Sponsorship", href: "/conference/sponsorship" },
        { name: "Photo Gallery", href: "/conference/gallery" },
        { name: "SEFET Proceeding", href: "/conference/proceedings" },
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
          { name: "Keynote Speakers", href: "/conference/speakers/keynote" },
          { name: "Tutorial Speakers", href: "/conference/speakers/tutorial" },
        ],
        "Event Details": [
          { name: "Program Schedule", href: "/conference/events/program" },
          { name: "WIE Events", href: "/conference/events/wie" },
          { name: "SYP Events", href: "/conference/events/syp" },
          {
            name: "Academic Panel Discussion",
            href: "/conference/events/academic-panel",
          },
          { name: "Industry Events", href: "/conference/events/industry" },
          { name: "City Tour", href: "/conference/events/city-tour" },
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
          { name: "Best Paper Award", href: "/conference/awards/best-paper" },
          { name: "Best Poster Award", href: "/conference/awards/best-poster" },
        ],
        Sponsorship: [
          { name: "Our Sponsors", href: "/conference/sponsorship/sponsors" },
          {
            name: "Sponsorship Details",
            href: "/conference/sponsorship/details",
          },
        ],
      },
    },
  ];

  // --------------------------
  // Viewport-aware positioning
  // --------------------------
  const calculateDropdownPosition = useCallback(
    (dropdownElement: HTMLElement, triggerElement: HTMLElement) => {
      const viewport = { width: window.innerWidth, height: window.innerHeight };
      const triggerRect = triggerElement.getBoundingClientRect();
      const dropdownRect = dropdownElement.getBoundingClientRect();
      let position: { [key: string]: string | number } = {
        left: 0,
        right: "auto",
        transform: "none",
      };
      if (triggerRect.left + dropdownRect.width <= viewport.width - 20)
        position.left = 0;
      else if (triggerRect.right - dropdownRect.width >= 20) {
        position.left = "auto";
        position.right = "0px";
      } else {
        const availableWidth = viewport.width - 40;
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

  const calculateSubmenuPosition = useCallback(
    (
      submenuElement: HTMLElement,
      triggerElement: HTMLElement,
      dropdownElement: HTMLElement
    ) => {
      const viewport = { width: window.innerWidth, height: window.innerHeight };
      const triggerRect = triggerElement.getBoundingClientRect();
      const submenuRect = submenuElement.getBoundingClientRect();
      const dropdownRect = dropdownElement.getBoundingClientRect();
      let position: { [key: string]: string | number } = {
        left: "100%",
        right: "auto",
        top: 0,
        transform: "none",
      };
      if (triggerRect.right + submenuRect.width <= viewport.width - 20)
        position.left = "100%";
      else if (dropdownRect.left - submenuRect.width >= 20) {
        position.left = "auto";
        position.right = "100%";
      } else {
        position.left = "0px";
        position.transform = `translateX(${Math.min(
          0,
          viewport.width - triggerRect.left - submenuRect.width - 20
        )}px)`;
      }
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

  const calculateOptimalWidth = useCallback((element: HTMLElement) => {
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
    const optimalWidth = Math.max(200, Math.min(400, contentWidth + 40));
    return `${optimalWidth}px`;
  }, []);

  const applyDropdownPositioning = useCallback(
    (itemName: string) => {
      const dropdownElement = dropdownRefs.current[itemName];
      const triggerElement = document.querySelector(
        `[data-dropdown-trigger="${itemName}"]`
      ) as HTMLElement;
      if (!dropdownElement || !triggerElement) return;
      const optimalWidth = calculateOptimalWidth(dropdownElement);
      dropdownElement.style.width = optimalWidth;
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

  const applySubmenuPositioning = useCallback(
    (submenuKey: string, itemName: string) => {
      const submenuElement = submenuRefs.current[submenuKey];
      const triggerElement = document.querySelector(
        `[data-submenu-trigger="${submenuKey}"]`
      ) as HTMLElement;
      const dropdownElement = dropdownRefs.current[itemName];
      if (!submenuElement || !triggerElement || !dropdownElement) return;
      const optimalWidth = calculateOptimalWidth(submenuElement);
      submenuElement.style.width = optimalWidth;
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

  const isCurrentPage = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node))
        closeAllDropdowns();
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllDropdowns();
        setIsMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (activeDropdown) applyDropdownPositioning(activeDropdown);
      if (activeSubmenu && activeDropdown)
        applySubmenuPositioning(
          `${activeDropdown}-${activeSubmenu}`,
          activeDropdown
        );
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

  useEffect(() => {
    if (activeDropdown) applyDropdownPositioning(activeDropdown);
  }, [activeDropdown, applyDropdownPositioning]);
  useEffect(() => {
    if (activeSubmenu && activeDropdown)
      applySubmenuPositioning(
        `${activeDropdown}-${activeSubmenu}`,
        activeDropdown
      );
  }, [activeSubmenu, activeDropdown, applySubmenuPositioning]);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  // --------------------------
  // RENDER
  // --------------------------
  return (
    <nav
      ref={navRef}
      className={`ieee-professional-nav ${isScrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="IEEE SeFet 2026 Main Navigation"
    >
      <div className="ieee-nav-container">
        {/* Branding */}
        <div className="ieee-nav-brand">
          <div className="ieee-brand-logo">
            <span className="ieee-logo-text">IEEE</span>
            <span className="ieee-logo-separator">|</span>
            <span className="conference-name">SeFet 2026</span>
          </div>
          <div className="ieee-brand-subtitle">
            Sustainable Energy and Future Electric Transportation
          </div>
        </div>

        {/* Desktop Navigation */}
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
                {item.subItems ? (
                  <span
                    className="ieee-nav-link"
                    role="menuitem"
                    tabIndex={0}
                    data-dropdown-trigger={item.name}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.name}
                    onFocus={() => setActiveDropdown(item.name)}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      );
                    }}
                    onKeyDown={(e) =>
                      handleKeyDown(e, () =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      )
                    }
                  >
                    {item.name}
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
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="ieee-nav-link"
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.subItems && (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[item.name] = el;
                    }}
                    className={`ieee-dropdown-menu ${
                      activeDropdown === item.name ? "show" : ""
                    }`}
                    role="menu"
                  >
                    <div className="ieee-dropdown-content">
                      {item.subItems.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="ieee-dropdown-item-wrapper"
                        >
                          {item.subMenus?.[subItem.name] ? (
                            <span
                              className={`ieee-dropdown-item has-submenu ${
                                isCurrentPage(subItem.href) ? "active" : ""
                              }`}
                              role="menuitem"
                              data-submenu-trigger={`${item.name}-${subItem.name}`}
                              onMouseEnter={() =>
                                setActiveSubmenu(subItem.name)
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveSubmenu(
                                  activeSubmenu === subItem.name
                                    ? null
                                    : subItem.name
                                );
                              }}
                            >
                              <div className="ieee-dropdown-item-content">
                                <span className="ieee-dropdown-item-title">
                                  {subItem.name}
                                </span>
                              </div>
                              <span className="ieee-submenu-icon">•</span>
                            </span>
                          ) : (
                            <Link
                              href={subItem.href}
                              className={`ieee-dropdown-item ${
                                isCurrentPage(subItem.href) ? "active" : ""
                              }`}
                              role="menuitem"
                            >
                              <div className="ieee-dropdown-item-content">
                                <span className="ieee-dropdown-item-title">
                                  {subItem.name}
                                </span>
                              </div>
                            </Link>
                          )}

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

        {/* Mobile Button */}
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

      {/* Mobile Navigation */}
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
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
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
                    {activeDropdown === item.name && (
                      <div className="ieee-mobile-submenu">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`ieee-mobile-submenu-item ${
                              isCurrentPage(subItem.href) ? "active" : ""
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`ieee-mobile-link ${
                      isCurrentPage(item.href) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
