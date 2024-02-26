export const products = {
  breadCrumbs: [
    {
      text: "Home",
      link: "https://google.com?q=home",
    },
    {
      text: "Shop",
      link: "https://google.com?q=shop",
    },
    {
      text: "Men",
      link: "https://google.com?q=men",
    },
    {
      text: "T-Shirts",
      link: "https://google.com?q=tshirts",
    },
  ],

  share: [
    {
      id: "123",
      icon: "fa-facebook",
      color: "#3A589D",
      tooltip: "share on facebook",
      link: "https://fb.com",
    },
    {
      id: "124",
      icon: "fa-twitter",
      color: "#3A989D",
      tooltip: "share on facebook",
      link: "https://twitter.com",
    },
    {
      id: "125",
      icon: "fa-github",
      color: "#232323",
      tooltip: "share on facebook",
      link: "https://github.io",
    },
  ],

  images: [
    {
      thumb: "thumb-url",
      original: "original",
      alth: "alt text",
      featured: true,
    },
    {
      thumb: "thumb-url",
      original: "original",
      alth: "alt text",
      featured: false,
    },
  ],
};

const menus = [
  { id: 1, text: "Home", link: "#" },
  { id: 2, text: "Home1", link: "#" },
  { id: 3, text: "Home2", link: "#" },
  { id: 4, text: "Shope", link: "#" },
  { id: 5, text: "shop1", link: "#" },
  { id: 6, text: "shop2", link: "#" },
];

const childMap = [
  {
    id: 1,
    children: [2, 3],
  },
  {
    id: 4,
    children: [5, 6],
  },
];
