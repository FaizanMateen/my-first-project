const fact = {
  id: 17,
  text: "The Mona Lisa, painted by Leonardo da Vinci, is housed in the Louvre Museum in Paris and is one of the most recognized artworks in the world.",
  source:
    "https://www.louvre.fr/en/explore/the-palace/the-mona-lisa-s-painting-technique",
  category: "entertainment",
  votesInteresting: 20,
  votesMindblowing: 6,
  votesFalse: 4,
};

// console.log(obj1.votesFalse);

const actionPayload1 = { id: 2, votes: "votesInteresting" };
const actionPayload2 = { id: 2, votes: "votesMindblowing" };
const actionPayload3 = { id: 2, votes: "votesFalse" };

const { id, votes } = actionPayload3;

// console.log(id, votes);
console.log(actionPayload1.votes);
console.log(fact[votes]);
