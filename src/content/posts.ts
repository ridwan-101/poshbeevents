// Blog posts. To add a post, append an object here; pages and sitemap update automatically.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  cover: string;
  coverAlt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "celebrating-workers-day-2026",
    title: "Celebrating Workers’ Day 2026",
    excerpt:
      "Honoring dedication, passion and hard work: a thank-you to every worker behind every great celebration.",
    date: "2026-05-13",
    category: "News",
    cover: "/images/blog/workers-day-2026.jpg",
    coverAlt: "Poshbee Eventz Happy Workers’ Day greeting card with pink florals",
    body: [
      { type: "h2", text: "Honoring Dedication, Passion & Hard Work" },
      {
        type: "p",
        text: "Every great achievement begins with the dedication of hardworking people. On this special Workers’ Day, Poshbee Eventz n’ Bridals proudly celebrates the strength, passion, resilience, and commitment of workers across every profession and industry.",
      },
      {
        type: "p",
        text: "From event planners, decorators, coordinators, vendors, creatives, and entrepreneurs to every individual working tirelessly behind the scenes — today is dedicated to you.",
      },
      {
        type: "p",
        text: "Workers’ Day is more than just a public holiday; it is a reminder that every successful event, business, and community is built through teamwork, sacrifice, and dedication. At Poshbee Eventz n’ Bridals, we deeply appreciate every team member and partner who contributes to creating unforgettable celebrations and memorable experiences for our clients.",
      },
      {
        type: "p",
        text: "As we celebrate today, we encourage everyone to continue striving for excellence, supporting one another, and taking pride in the value they bring to the world through their work.",
      },
      { type: "h2", text: "To Every Worker, We Say Thank You" },
      {
        type: "list",
        items: [
          "Thank you for your commitment.",
          "Thank you for your creativity.",
          "Thank you for your consistency.",
          "Thank you for making dreams come alive every single day.",
        ],
      },
      {
        type: "p",
        text: "Happy Workers’ Day from all of us at Poshbee Eventz n’ Bridals. Wishing you success, happiness, growth, and well-deserved recognition in all that you do.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
