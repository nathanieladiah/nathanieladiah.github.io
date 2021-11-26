let quotesData = [
    {
        quote: "The difference between the almost-right word and the right word is the difference between the ligthning-bug and the lightning.",
        author: "Unknown"
    },
    {
        quote: "You don't write because you want to say something. You write because you have something to say",
        author: "F. Scott Fitzgerald"
    },
    {
        quote: "There are three rules for writing a novel. Unfortunately, no one knows what they are.",
        author: "W. Somerset Maugham"
    },
    {
        quote: "There are three things all wise men fear: the sea in a storm, a night with no moon, and the anger of a gentle man.",
        author: "Patrick Rothfuss"
    },
    {
        quote: "The problem with having an open mind is that people will insist on coming along and trying to put things in it.",
        author: "Terry Pratchett"
    },
    {
        quote: "Fairytales don't teach children that monsters exist, they already know that monsters exist. Fairy tales teach children that monsters can be killed",
        author: "G. K. Chesterton"
    },
    {
        quote: "It is the condition of monsters that they do not perceive themselves as such.",
        author: "Laini Taylor"
    },
    {
        quote: "The best lack all conviction, while the worst are full of passionate intensity.",
        author: "William Yeats"
    },
    {
        quote: "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
        author: "Oscar Wilde"
    },
    {
        quote: "They've promised that dreams can come true - but forgot to mention that nightmares are dreams too.",
        author: "Oscar Wilde"
    },
    {
        quote: "In the beginning the Universe was created. This has made a lot of people very angry and has been widely regarded as a bad move.",
        author: "Douglas Adams"
    },
    {
        quote: "There are two possibilities: either we are alone in the universe or we are not. Both are equally terrifying.",
        author: "Arthur C. Clarke"
    },
    {
        quote: "I was never one to hold grudges, Jeffrey. My father held grudges. I'll always hate him for that.",
        author: "Pierce"
    },
    {
        quote: "If you wish to make an apple pie from scratch, you must first invent the universe.",
        author: "Carl Sagan"
    },
    {
        quote: "Now I am become Death, the destroyer of worlds.",
        author: "Unknown"
    },
    {
        quote: "I see now that the circumstances of one's birth are irrelevant; it is what you do with the gift of life that determines who you are.",
        author: "Mewtwo"
    },
    {
        quote: "Knowledge is knowing that Frankenstein wasn't the monster. Wisdom is knowing that Frankenstein was the monster.",
        author: "Unknown"
    },
    {
        quote: "There is no problem so bad that you can't make it worse.",
        author: "Unknown"
    },
    {
        quote: "If they can get you asking the wrong questions, they don't have to worry about answers.",
        author: "Thomas Pynchon"
    },
    {
        quote: "Give me six hours to chop a tree, I will spend the first four sharpening my axe.",
        author: "Abraham Lincoln"
    },
    {
        quote: "We judge others by their actions and ourselves by our intentions.",
        author: "Unknown"
    },
    {
        quote: "Sometimes you never realize the value of a moment until it becomes a memory",
        author: "Dr. Seuss"
    },
    {
        quote: "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do  not be too eager to deal out death in judgement. For even the very wise cannot see all ends.",
        author: "Gandalf the Grey"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "Always forgive your enemies; nothng annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying",
        author: "Oscar Wilde"
    },
    {
        quote: "All that is gold does not glitter, Not all those who wander are lost;",
        author: "J.R.R . Tolkien"
    },
    {
        quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
        author: "Jane Austen"
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling"
    },
    {
        quote: "Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.",
        author: "Groucho Marx"
    },
    {
        quote: "I love deadlines. I love the whooshing noise they make as they go by.",
        author: "Douglas Adams"
    },
    {
        quote: "Never trust anyone who has not brought a book with them.",
        author: "Lemony Snicket"
    },
    {
        quote: "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
        author: "Oscar Wilde"
    },
    {
        quote: "It is what you read when you don't have to that determines what you will be when you can't help it.",
        author: "Oscar Wilde"
    },
    
    {
        quote: "You don't <em>have</em> a soul, Doctor. You <em>are</em> a soul. You <em>have</em> a body, temporarily.",
        author: "Walter M. Miller Jr"
    },
    
    {
        quote: "I have never let my schooling interfere with my education.",
        author: "Mark Twain"
    },
    {
        quote: "It's no use going back to yesterday, because I was a different person then.",
        author: "Lewis Carroll"
    },
    {
        quote: "Until I feared I would lose it, I never loved to read. One does not love breathing.",
        author: "Harper Lee"
    },
    {
        quote: "If you don't know where you're going, any road'll take you there.",
        author: "George Harrison"
    },
    {
        quote: "Give a man a fire and he's warm for a day, but set fire tohim and he's warm for the rest of his life.",
        author: "Terry Pratchett"
    },
    {
        quote: "One is loved because one is loved. No reason is needed for loving.",
        author: "Paulo Coelho"
    },
    {
        quote: "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "I refuse to answer that question on the grounds that I don't know the answer.",
        author: "Douglas Adams"
    },
    {
        quote: "Never memorize something that you can look up.",
        author: "Albert Einstein"
    },
    {
        quote: "Wicked people never have time for reading. It's one of the reasons for their wickedness.",
        author: "Lemony Snicket"
    },
    {
        quote: "Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself.",
        author: "Mark Twain"
    },
    {
        quote: "Anyone who lives within their means suffers from a lack of imagination.",
        author: "Oscar Wilde"
    },
    {
        quote: "It is the unknown we fear when we look upon death and darkness, nothing more.",
        author: "J.K. Rowling"
    },
    {
        quote: "I would challenge you to a battle of wits, but I see you are unarmed!",
        author: "William Shakespeare"
    },
    {
        quote: "Make it a rule never to give a child a book you would not read yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        author: "Aristotle"
    },
    {
        quote: "The flower that blooms in adversity is the rarest and most beautiful of all.",
        author: "Walt Disney Company, Mulan"
    },
    {
        quote: "I can't imagine a man really enjoying a book and reading it only once.",
        author: "C.S. Lewis"
    },
    {
        quote: "I'm not saying that everything is survivable. Just that everything except the last thing is.",
        author: "John Green"
    },
    {
        quote: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        author: "Unknown"
    },
    {
        quote: "Substitute 'damn' everytime you're inclined to write 'very'; your editor will delete it and the writing will be just as it should be.",
        author: "Mark Twain"
    },
    {
        quote: "A thing is not necessarily true because a man dies for it.",
        author: "Oscar Wilde"
    },
    {
        quote: "Good books don't give up all their secrets at once.",
        author: "Stephen King"
    },
    {
        quote: "Life is a disease: sexually transmitted, and invarably fatal.",
        author: "Neil Gaiman"
    },
    {
        quote: "Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.",
        author: "Lemony Snicket"
    },
    {
        quote: "I was gratified to be able to answer promptly, and I did. I said I didn't know.",
        author: "Mark Twain"
    },
    {
        quote: "When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.",
        author: "Arthur Conan Doyle"
    },
    {
        quote: "Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him.",
        author: "George R. R. Martin"
    },
    {
        quote: "But who prays for Satan? Who, in eighteen centuries, has had the common humanity to pray for the one sinner that needed it most?",
        author: "Mark Twain"
    },
    {
        quote: "Nothing of me is original. I am the combined effort of everyone I've ever known.",
        author: "Chuck Palahniuk"
    },
    {
        quote: "Truth is stranger than fiction, but it is becuase Fiction is obliged to stick to possibilities; Truth isn't.",
        author: "Mark Twain"
    },
    {
        quote: "I never travel without my diary. One should always have something sensational to read in the train.",
        author: "Oscar Wilde"
    },
    {
        quote: "Why, sometimes I've believed as many as six impossible things before breakfast.",
        author: "Lewis Carroll"
    },
    {
        quote: "Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.",
        author: "Albert Einstein"
    },
    {
        quote: "'Begin at the beginning,' the King said, very gravely, 'and go on till you come to the end: then stop.'",
        author: "Lewis Caroll"
    },
    {
        quote: "I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.",
        author: "Mark Twain"
    },
    {
        quote: "Tell the truth, or someone will tell it for you.",
        author: "Stephanie Klein"
    },
    {
        quote: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "The supreme art of war is to subdue the enemy without fighting.",
        author: "Sun Tzu"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        quote: "Wise men speak because they have something to say; fools because they have to say something.",
        author: "Plato"
    },
    {
        quote: "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
        author: "Ingrid Bergman"
    },
    {
        quote: "No man has a good enough memory to be a successful liar.",
        author: "Abraham Lincoln"
    },
    {
        quote: "People who think they know everything are a great annoyance to those of us who do.",
        author: "Isaac Asimov"
    },
    {
        quote: "Get your facts first, then you can distort them as you please.",
        author: "Mark Twain"
    },
    {
        qoute: "If you're going to do something tonight that you'll be sorry for tomorrow morning, sleep late",
        author: "Henny Youngman"
    },
    {
        quote: "Chrstopher Columbus, as everyone knows, is honored by posterity because he was the last to discover America",
        author: "James Joyce"
    },
    {
        quote: "Procastination is the art of keeping up with yesterday.",
        author: "Don Marquis"
    },
    {
        quote: "I always wanted to be somebody, but now I realize I should have been more specific.",
        author: "Lily Tomlin"
    },
    {
        quote: "Men cannot live by bread alone; he must have peanut butter.",
        author: "James A. Garfield"
    },
    {
        quote: "To lose one parent may be regarded as a misfortune; to lose both looks like carelessness.",
        author: "Oscar Wilde"
    },
    {
        quote: "Multiple exclamation marks are a sure sign of a diseased mind.",
        author: "Terry Pratchett"
    },
    {
        quote: "'We are all subject to the fates. But we must all act as if we are not,' said the witch, 'or die of despair.'",
        author: "Philip Pullman"
    },
    {
        quote: "But man is not made for defeat. A man can be destroyed but not defeated.", 
        author: "Ernest Hemingway"
    },
    {
        quote: "There is nothing permanent except change.",
        author: "Heraclitus"
    },
    {
        quote: "Good judgment comes from experience, and a lot of that comes from bad judgment.",
        author: "Will Rogers"
    },
    {
        quote: "Keep your face toward the sunshine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        author: "Elbert Hubbard"
    },
    {
        quote: "Drawing on my fine command of the English language, I said nothing.",
        author: "Robert Benchley"
    },
    {
        quote: "All generalizations are false, including this one.",
        author: "Mark Twain"
    },
    {
        quote: "I have had a perfectly wonderful evening, but this wasn't it.",
        author: "Groucho Marx"
    },
    {
        quote: "I refuse to join any club that would have me as a member.",
        author: "Groucho Marx"
    },
    {
        quote: "Evil begins when you begin to treat people as things.",
        author: "Terry Pratchett"
    },
    {
        quote: "Silence is preferable over empty words.",
        author: "Pythagoras"
    },
    {
        quote: "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
        author: "Leo Tolstoy (<em>Anna Karenina</em>)"
    },
    {
        quote: "For to have faith is to have wings.",
        author: "Peter Pan"
    },
    {
        quote: "I would always rather be happy than dignified.",
        author: "Charlotte Bronte (<em>Jane Eyre</em>)"
    },
    {
        quote: "For what you see and hear depends a good deal on where you are standing: it also depends on what sort of person you are.",
        author: "C.S. Lewis (<em>The Magician's Nephew</em>)"
    },
    {
        quote: "Beware; for I am fearless, and therefore powerful.",
        author: "Mary Shelley (<em>Frankenstein</em>)"
    },
    {
        quote: "Isn't it pretty to think so?",
        author: "Ernest Hemingway (<em>The Sun Also Rises</em>)"
    },
    {
        quote: "Humanity does not ask us to be happy. It merely asks us to be brilliant on its behalf.",
        author: "Orson Scott Card (<em>Ender's Game</em>)"
    },
    {
        quote: "Youth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
        author: "J.K. Rowling"
    },
    {
        quote: "There is some good in this world, and it's worth fighting for.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "Who, being loved, is poor?",
        author: "Oscar Wilde"
    },
    {
        quote: "None of us really changes over time. We only become more fully what we are.",
        author: "Anne Rice (<em>The Vampire Lestat</em>)"
    },
    {
        quote: "If we wait until we're ready, we'll be waiting for the rest of our lives.",
        author: "Lemony Snicket"
    },
    {
        quote: "If you're making mistakes it means you're out there doing something.",
        author: "Neil Gaiman"
    },
    {
        quote: "Anything worth dying for is certainly worth living for",
        author: "Joseph Heller, <em>Catch 22</em>"
    },
    {
        quote: "'Welcome death,' quoth the rat, when the trap fell.",
        author: "Thomas Fuller"
    },
    {
        quote: "Wonderful maxim: not to talk of things any more after they are done.",
        author: "Baron de Montesquieu"
    },
    {
        quote: "It is so. It cannot be otherwise.",
        author: "Inscription on the ruins of a 15th century cathedral in Amsterdam"
    },
    {
        quote: "The basis of action is lack of imagination. It is the last resource of those who know not how to dream.",
        author: "Oscar Wilde"
    },
    {
        quote: "Another belief of mine: that everyone else my age is an adult, whereas I am merely in disguise.",
        author: "Margaret Atwood"
    },
    {
        quote: "Don't be troubled if the temptation to give advice is irresistable; the ability to ignore it is universal.",
        author: "Anon"
    },
    {
        quote: "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
        author: "Ernest Hemingway"
    },
    {
        quote: "One day I will find the right words, and they will be simple.",
        author: "Jack Kerouac"
    },
    {
        quote: "You never have to change anything you got up in the middle of the night to write.",
        author: "Saul Bellow"
    },
    {
        quote: "The scariest moment is always just before you start.",
        author: "Stephen King"
    },
    {
        quote: "There is no real ending. It's just the place where you stop the story.",
        author: "Fank Herbert"
    },
    {
        quote: "After nourishment, shelter and companionship, stories are the thing we need most in the world.",
        author: "Philip Pullman"
    },
    {
        quote: "Stories may well be lies, but they are good lies that say true things, and which can sometimes pay the rent.",
        author: "Neil Gaiman"
    },
    {
        quote: "Write what you know. That should leave you with a lot of free time.",
        author: "Howard Nemerov"
    },
    {
        quote: "So what? All writers are lunatics!",
        author: "Cornelia Funke, <em>Inkspell</em>"
    },
    {
        quote: "In writing, you must kill all your darlings.",
        author: "William Faulkner"
    },
    {
        quote: "How do I know what I think until I see what I say?",
        author: "E.M. Forster"
    },
    {
        quote: "A technicality I'm prpared to hide wildly behind.",
        author: "Jim Butcher, <em>Storm Front</em>"
    }
];

// get index of a random quote and author
function getRandomQuote() {
    return quotesData[Math.floor(Math.random() * quotesData.length)];
};

// Insert random quote and author into the quotebox
function getQuote() {
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    $('.quote-body').animate({opacity: 0}, 500, function () {
        $(this).animate({ opacity: 1}, 500);
        $('#quote-text').html(currentQuote);
    });

    $('.quote-author').animate({opacity: 0}, 500, function () {
        $(this).animate({opacity: 1 }, 500);
        $('#quote-author').html('- ' + currentAuthor);
    });

    $('.tweet-btn').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote + ' ' + currentAuthor);
};


// Event listener
$(document).ready(getQuote);
$('#new-quote').on('click', getQuote);