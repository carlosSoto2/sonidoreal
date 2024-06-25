import { IMenuData } from "../types/menu-d-t";

const menu_data:IMenuData[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Inicio",
    link: "/",
      // submenus: [
      //   { title: "Inicio", link: "/home" },
      // ],
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Nosotros",
    link: "/pages/about",
    // submenus: [
    //   { title: "Classic Style", link: "/portfolio/classic" },
    //   { title: "Grid 3 Columns", link: "/portfolio/grid" },
    //   { title: "Gallery Style", link: "/portfolio/gallery" },
    //   { title: "Masonry Full", link: "/portfolio/masonry" },
    //   { title: "Metro Style", link: "/portfolio/metro" },
    //   { title: "Slider Style", link: "/portfolio/slider" },
    //   { title: "Classic Details", link: "/portfolio/details" },
    //   { title: "List With Details", link: "/portfolio/details-list" },
    //   { title: "Slider with Details", link: "/portfolio/details-slider" },
    //   { title: "Video With Details", link: "/portfolio/details-video" },
    // ],
  },
  {
    id: 4,
    hasDropdown: true,
    title: "Blog",
    link: "/blog",
    submenus: [
      { title: "Blog Standard", link: "/blog/blog-standard" },
      { title: "Blog Grid", link: "/blog/blog-grid" },
      { title: "Blog Grid Boxed", link: "/blog/blog-grid-two" },
      { title: "Blog Grid Sidebar", link: "/blog/blog-grid-sidebar" },
      { title: "Blog List Sidebar", link: "/blog/blog-list-sidebar" },
      { title: "Blog Masonry", link: "/blog/blog-masonry" },
      { title: "Blog Details", link: "/blog/blog-details/1" },
      { title: "Blog Details 2", link: "/blog/blog-details-two" },
    ],
  },
  {
    id: 5,
    title: "Pages",
    megaMenu: true,
    link: "#",
    pages: true,
    mega_menus: [
      {
        title: "Page Layout 1",
        link: "#",
        submenus: [
          { title: "About Us", link: "/pages/about" },
          { title: "About Me", link: "/pages/about-me" },
          { title: "Service Creative", link: "/pages/services" },
          { title: "Service Standard", link: "/pages/services-two" },
          { title: "Service Basic", link: "/pages/services-three" },
          { title: "Service Details", link: "/pages/service-details" },
          { title: "Help Center", link: "/pages/help-center" },
        ],
      },
      {
        title: "Page Layout 2",
        link: "#",
        submenus: [
          { title: "Team Classic", link: "/pages/team" },
          { title: "Team Details", link: "/pages/team-details" },
          { title: "Event Details", link: "/pages/event-details" },
          { title: "Job List", link: "/pages/job" },
          { title: "Job Details", link: "/pages/job-details" },
          { title: "Pricing Table", link: "/pages/pricing" },
          { title: "Coming soon", link: "/pages/coming-soon" },
        ],
      },
      {
        title: "Page Layout 3",
        link: "#",
        submenus: [
          { title: "Shop", link: "/pages/shop" },
          { title: "Shop Right Sidebar", link: "/pages/shop-right-sidebar" },
          { title: "Shop Details", link: "/pages/product-details/1" },
          { title: "FAQs", link: "/pages/faq" },
          { title: "Search Result", link: "/pages/search" },
          { title: "Privacy & Policy", link: "/pages/policy" },
          { title: "Terms & Conditions", link: "/pages/terms" },
        ],
      },
      {
        title: "Page Layout 4",
        link: "#",
        submenus: [
          { title: "Error 404", link: "/pages/404" },
          { title: "Login", link: "/pages/login" },
          { title: "Register", link: "/pages/register" },
          { title: "Forgot Password", link: "/pages/forgot" },
          { title: "My Cart", link: "/pages/cart" },
          { title: "My Wishlist", link: "/pages/wishlist" },
          { title: "Checkout", link: "/pages/checkout" },
        ],
      },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "/pages/contact-two",

  },
]

export default menu_data;
