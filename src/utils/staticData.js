import React from "react"
import {
  ContactsIcon,
  Facebook,
  HomeIcon,
  Instagram,
  RobotIcon,
  Youtube,
} from "../components/common/icons"
import {
  AdvantageIcon1,
  AdvantageIcon2,
  AdvantageIcon3,
  AdvantageIcon4,
  AdvantageIcon5,
  AdvantageIcon6,
  DisinfectionRobotsImg,
  MenuFacebook,
  MenuFacebookActive,
  MenuInstagram,
  MenuInstagramActive,
  MenuYoutube,
  MenuYoutubeActive,
  RestaurantRobotsImg,
  Robot1,
  Robot2,
  Robot3,
  Robot4,
  Robot5,
  SecurityRobotsImg,
  ServiceRobotsImg,
} from "./imgImport"

export const nav_menus = [
  {
    name: "About us",
    to: "/about-us",
  },
  {
    name: "Why our robots?",
    to: "/why-our-robots",
  },
  {
    name: "AI Robot services",
    to: "/ai-robot-services",
  },
  {
    name: "Robot categories",
    to: "/robot-categories",
  },
]

export const service_robots = [
  {
    name: "Maxine",
    to: "/maxine",
  },
  {
    name: "Lex",
    to: "/lex",
  },
  {
    name: "Dan",
    to: "/dan",
  },
  {
    name: "Shaq",
    to: "/shaq",
  },
  {
    name: "Doc",
    to: "/doc",
  },
  {
    name: "Dean",
    to: "/dean",
  },
  {
    name: "Kai",
    to: "/kai",
  },
  {
    name: "Kiko",
    to: "/kiko",
  },
]

export const restaurant_robots = [
  {
    name: "Lea",
    to: "/lea",
  },
  {
    name: "Hugo",
    to: "/hugo",
  },
  {
    name: "Ben",
    to: "/ben",
  },
  {
    name: "Daben",
    to: "/daben",
  },
]

export const disinfection_robots = [
  {
    name: "Sam (UV)",
    to: "/sam-uv",
  },
  {
    name: "Sam (Spray)",
    to: "/sam-spray",
  },
  {
    name: "Kit",
    to: "/kit",
  },
]

export const security_robots = [
  {
    name: "Paul",
    to: "/paul",
  },
  {
    name: "Ash",
    to: "/ash",
  },
  {
    name: "Hunter",
    to: "/hunter",
  },
]

export const contacts = [
  {
    icon: <Instagram />,
    name: "Instagram",
    to: "/",
  },
  {
    icon: <Youtube />,
    name: "Youtube",
    to: "/",
  },
  {
    icon: <Facebook />,
    name: "Facebook",
    to: "/",
  },
  {
    name: "Write to us",
    to: "/",
  },
]

export const menu_contacts = [
  {
    default: MenuInstagram,
    active: MenuInstagramActive,
    to: "/",
  },
  {
    default: MenuYoutube,
    active: MenuYoutubeActive,
    to: "/",
  },
  {
    default: MenuFacebook,
    active: MenuFacebookActive,
    to: "/",
  },
  {
    name: "Write to us",
    to: "/",
  },
]

export const main_robots = [Robot1, Robot2, Robot3, Robot4, Robot5]

export const advantages = [
  {
    icon: AdvantageIcon1,
    title: "Fully autonomous",
    content:
      "Our robots interact with people on their own, move independently avoiding any obstacles and even if the battery is close to zero — they will find the charging spot without human help.",
  },
  {
    icon: AdvantageIcon2,
    title: "Ease of use",
    content:
      "You don’t need any special knowledge to set up and use our robots — everything is simple as ABC.",
  },
  {
    icon: AdvantageIcon3,
    title: "Appearance",
    content:
      "Wide range of robots with different appearance, screen sizes, height and features — you will definitely find a robot that will fit your requirements.",
  },
  {
    icon: AdvantageIcon4,
    title: "Technical support",
    content:
      "24/7 technical support via various channels — all at your convenience. You will never be left alone if you need assistance.",
  },
  {
    icon: AdvantageIcon5,
    title: "Safety",
    content:
      "Our robots have several degrees of protection — design and software. They are CE certified and absolutely safe for use.",
  },
  {
    icon: AdvantageIcon6,
    title: "Attraction",
    content:
      "Our robots attract 100 % of the attention, everybody regardless of age or gender stops amazed by the site of our robots.",
  },
]

export const bottom_menu = [
  {
    icon: <HomeIcon />,
    name: "MAIN",
    path: "/",
  },
  {
    icon: <RobotIcon />,
    name: "OUR ROBOTS",
    path: "/robots",
  },
  {
    icon: <ContactsIcon />,
    name: "CONTACTS",
    path: "/contacts",
  },
]

export const mirax_robots = [
  {
    img: ServiceRobotsImg,
    title: "Service robots",
    content:
      "Promoters, consultants, guides, receptionists — just to name a few spheres where our service robots are used. Nothing can boost your sales and brand awareness better than a high-tech robot.",
    to: "/",
  },
  {
    img: RestaurantRobotsImg,
    title: "Restaurant robots",
    content:
      "Incredible waiters who can surprise any guest and draw attention to your restaurant, hotel, or any other business.",
    to: "/",
  },
  {
    img: DisinfectionRobotsImg,
    title: "Disinfection robots",
    content:
      "The world’s leading disinfection robots that not only effectively disinfect any facility but also interact with people as our service robots do. A perfect tool not only for business, but also for any government institution, as well as places of increased congestion of people.",
    to: "/",
  },
  {
    img: SecurityRobotsImg,
    title: "Security robots",
    content:
      "Our robots are designed to provide non-stop security both indoors and outdoors — in any weather, day or night, they will protect you and your property.",
    to: "/",
  },
]
