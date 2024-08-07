const FACTS = [
  {
    id: 1,
    text: "As of 2024, Apple Inc. is the most valuable publicly traded company in the world with a market capitalization of over $3 trillion.",
    source:
      "https://www.statista.com/statistics/263264/top-companies-in-the-world-by-market-value/",
    category: "finance",
    votesFalse: 5,
    votesInteresting: 18,
    votesMindblowing: 7,
  },
  {
    id: 2,
    text: "The human brain is estimated to contain around 86 billion neurons, surpassing the previous belief of 100 billion.",
    source:
      "https://www.scientificamerican.com/article/are-there-really-as-many-neurons-in-the-human-brain-as-stars-in-the-milky-way/",
    category: "science",
    votesFalse: 4,
    votesInteresting: 22,
    votesMindblowing: 9,
  },
  {
    id: 3,
    text: "In 2024, ChatGPT reached 100 million users within just two months of its launch, becoming the fastest-growing consumer app in history.",
    source:
      "https://www.reuters.com/technology/chatgpt-set-record-fastest-growing-user-base-analyst-note-2023-02-01/",
    category: "technology",
    votesFalse: 6,
    votesInteresting: 14,
    votesMindblowing: 3,
  },
  {
    id: 4,
    text: "The World Health Organization declared the COVID-19 pandemic as a global emergency on March 11, 2020.",
    source:
      "https://www.who.int/news/item/11-03-2020-who-announces-covid-19-outbreak-a-pandemic",
    category: "health",
    votesFalse: 3,
    votesInteresting: 19,
    votesMindblowing: 12,
  },
  {
    id: 5,
    text: "The Great Pyramid of Giza was originally covered in casing stones that made it shine bright like a 'gem.'",
    source:
      "https://www.livescience.com/55868-why-great-pyramid-of-giza-shined.html",
    category: "history",
    votesFalse: 5,
    votesInteresting: 15,
    votesMindblowing: 8,
  },
  {
    id: 6,
    text: "In 2024, the global population surpassed 8 billion people according to the United Nations.",
    source: "https://www.un.org/en/global-issues/population",
    category: "society",
    votesFalse: 8,
    votesInteresting: 13,
    votesMindblowing: 6,
  },
  {
    id: 7,
    text: "In 2023, India landed a spacecraft on the south pole of the moon, making it the first country to do so.",
    source:
      "https://www.cnn.com/2023/08/23/india/india-chandrayaan-3-moon-landing-intl-scn/index.html",
    category: "science",
    votesFalse: 3,
    votesInteresting: 19,
    votesMindblowing: 10,
  },
  {
    id: 8,
    text: "Amazon, founded by Jeff Bezos in 1994, started as an online bookstore before expanding into various other sectors.",
    source:
      "https://www.forbes.com/sites/quora/2017/05/02/how-amazon-started/?sh=62bdefc12139",
    category: "technology",
    votesFalse: 6,
    votesInteresting: 16,
    votesMindblowing: 4,
  },
  {
    id: 9,
    text: "The average human body contains enough carbon to make 9,000 pencils.",
    source: "https://www.abc.net.au/science/articles/2014/08/19/4062136.htm",
    category: "science",
    votesFalse: 2,
    votesInteresting: 25,
    votesMindblowing: 5,
  },
  {
    id: 10,
    text: "The Statue of Liberty was a gift from France to the United States in 1886 and is a symbol of freedom and democracy.",
    source:
      "https://www.history.com/news/8-things-you-may-not-know-about-the-statue-of-liberty",
    category: "history",
    votesFalse: 4,
    votesInteresting: 14,
    votesMindblowing: 7,
  },
  {
    id: 11,
    text: "The 2024 Summer Olympics are set to be held in Paris, France, marking the third time the city has hosted the games.",
    source: "https://olympics.com/en/olympic-games/paris-2024",
    category: "sports",
    votesFalse: 3,
    votesInteresting: 12,
    votesMindblowing: 8,
  },
  {
    id: 12,
    text: "In 2023, the global e-commerce market reached a value of $6.3 trillion, driven by a surge in online shopping.",
    source: "https://www.shopify.com/research/global-ecommerce-statistics",
    category: "finance",
    votesFalse: 6,
    votesInteresting: 15,
    votesMindblowing: 9,
  },
  {
    id: 13,
    text: "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron caused by heat.",
    source:
      "https://www.toureiffel.paris/en/news/130-years/5-incredible-facts-about-eiffel-tower",
    category: "culture",
    votesFalse: 4,
    votesInteresting: 21,
    votesMindblowing: 6,
  },
  {
    id: 14,
    text: "The United Nations has 193 member states, and its headquarters is located in New York City.",
    source: "https://www.un.org/en/about-us/member-states",
    category: "society",
    votesFalse: 7,
    votesInteresting: 15,
    votesMindblowing: 5,
  },
  {
    id: 15,
    text: "Lionel Messi won his 8th Ballon d'Or in 2023, extending his record as the player with the most Ballon d'Or awards in history.",
    source:
      "https://www.goal.com/en/news/lionel-messi-ballon-dor-records-goals-stats/blta9615e3e94d8378d",
    category: "sports",
    votesFalse: 4,
    votesInteresting: 18,
    votesMindblowing: 7,
  },
  {
    id: 16,
    text: "As of 2023, Breaking Bad is the highest-rated TV show on IMDb with a rating of 9.5/10.",
    source: "https://www.imdb.com/chart/toptv/",
    category: "entertainment",
    votesFalse: 3,
    votesInteresting: 14,
    votesMindblowing: 5,
  },
  {
    id: 17,
    text: "The Mona Lisa, painted by Leonardo da Vinci, is housed in the Louvre Museum in Paris and is one of the most recognized artworks in the world.",
    source:
      "https://www.louvre.fr/en/explore/the-palace/the-mona-lisa-s-painting-technique",
    category: "entertainment",
    votesFalse: 4,
    votesInteresting: 20,
    votesMindblowing: 6,
  },
  {
    id: 18,
    text: "In 2023, the European Union introduced regulations mandating the use of USB-C chargers for all electronic devices.",
    source: "https://www.bbc.com/news/technology-63139899",
    category: "technology",
    votesFalse: 2,
    votesInteresting: 23,
    votesMindblowing: 5,
  },
  {
    id: 19,
    text: "As of 2024, approximately 2.8 million apps are available on the Google Play Store.",
    source:
      "https://www.statista.com/statistics/266210/number-of-available-applications-in-the-google-play-store/",
    category: "news",
    votesFalse: 5,
    votesInteresting: 13,
    votesMindblowing: 8,
  },
  {
    id: 20,
    text: "Social media usage accounts for more than two hours of daily screen time for the average person worldwide.",
    source:
      "https://www.digitalinformationworld.com/2024/01/social-media-usage-worldwide-2024.html",
    category: "society",
    votesFalse: 4,
    votesInteresting: 17,
    votesMindblowing: 9,
  },
];

function Category() {
  const data = [
    { category: "science", name: "Item 1" },
    { category: "finance", name: "Item 2" },
    { category: "technology", name: "Item 3" },
    { category: "health", name: "Item 4" },
    { category: "history", name: "Item 5" },
    { category: "society", name: "Item 6" },
    { category: "sports", name: "Item 7" },
    { category: "culture", name: "Item 8" },
    { category: "entertainment", name: "Item 9" },
    { category: "news", name: "Item 10" },
  ];

  const categoryColors = {
    science: "bg-orange-600",
    finance: "bg-blue-600",
    technology: "bg-blue-700 ",
    health: "bg-green-400",
    history: "bg-orange-700",
    society: "bg-yellow-700",
    sports: "bg-blue-800",
    culture: "bg-pink-800",
    entertainment: "bg-pink-600",
    news: "bg-purple-600",
  };

  //   const pureData = data.map((item, index) => (
  //     <span key={index} className={categoryColors[item.category]}>
  //       {item.category}
  //     </span>
  //   ));

  //   const noClone = data.filter(
  //     (cat, index) =>
  //       data.findIndex((item) => item.category === cat.category) === index,
  //   );

  //   const veryPureData = pureData.filter(
  //     (cat, index) =>
  //       pureData.findIndex((item) => item.category === cat.category) === index,
  //   );

  return (
    <div>
      {/* <span className='m-auto justify-self-center rounded-full bg-definedColor-accent5 px-4 pt-1 font-["Coiny"] text-sm uppercase text-definedColor-base'>
        {item.category}
      </span> */}
      {/* <span>{veryPureData}</span> */}
    </div>
  );
}

export default Category;
