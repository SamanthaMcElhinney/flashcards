const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");
const Round = require("../src/Round")

    
describe("Round", () => {
  let card1, card2, card3, deck, round

  beforeEach(() => {
    card1 = new Card(1,"What is Robbie's favorite animal",["sea otter", "pug", "capybara"],"sea otter");
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12,"What is Travis's middle name?",["Lex", "William", "Fitzgerald"],"Fitzgerald");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  })

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should hold the current deck", () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })

  it("should return the current card being played", () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  })
  
  it("should have a method that updates the number of turns taken", () => {
     card1 = new Card(
       1,
       "What is Robbie's favorite animal",
       ["sea otter", "pug", "capybara"],
       "sea otter"
     );
    round.takeTurn("pug")
    expect(round.turns).to.equal(1);
  });

  it("should have a property to store incorrect guesses", () => {
    round.takeTurn("pug")
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it("should give feedback for correct guesses", () => {
    round.takeTurn("sea otter");
    expect(round.takeTurn()).to.equal("correct!");
  });

  it("should give feedback for incorrect guesses", () => {
    round.takeTurn("pug");
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it("should update the next card", () => {
    round.takeTurn("pug");
    expect(round.returnCurrentCard()).to.equal(card2);
  });

})