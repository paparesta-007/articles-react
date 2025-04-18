const topics = [
    { name: "Art", image: "https://i0.wp.com/arthereartnow.com/wp-content/uploads/2024/08/Hayez-thekiss.jpg?fit=686%2C386&ssl=1", description: "Explore the world of art, from the masters to the moderns." },
    { name: "AI", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s", description: "Unlock the secrets of artificial intelligence and machine learning." },
    { name: "Culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpjU5Pfr0n-_6VFNK9ha-w1U3sPL68cngIw&s", description: "Discover the latest trends and insights in culture and society." },
    { name: "Economy", image: "https://media.istockphoto.com/id/1399575283/it/foto/il-denaro-fa-il-giro-del-mondo.jpg?s=612x612&w=0&k=20&c=TSv0uJFqFrGZ-dEW1wNPGpda7qT_9IhelWa9HG9oNuA=", description: "Stay ahead of the curve with the latest news and analysis on the economy." },
    { name: "Education", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt27uSoFwVhRih9YDGDLx1AxYsAmQs_gSxGg&s", description: "Learn about the latest developments and innovations in education." },
    { name: "Environment", image: "https://www.telefonica.com/en/wp-content/uploads/sites/5/2024/01/pexels-photo-1108572-e1706694279617.jpeg", description: "Explore the latest news and trends on the environment and sustainability." },
    { name: "Fitness", image: "https://www.cibdol.es/modules/psblog/uploads/1698759136.jpg", description: "Get fit and feel great with the latest news and tips on fitness." },
    { name: "Health", image: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg", description: "Stay healthy and happy with the latest news and advice on health and wellness." },
    { name: "History", image: "https://www.grace.edu/wp-content/uploads/2018/02/History-history-scaled.jpg", description: "Explore the past and learn from history." },
    { name: "Literature", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwKFEBBQ2owonf5wYr27ySSHJlVYFZgY5KA&s", description: "Discover new books and authors, and stay up-to-date with the latest literary trends." },
    { name: "Love", image: "https://www.overthere.it/wp-content/uploads/2016/03/LOVE-love-36983825-1680-1050.jpg", description: "Find love and relationships advice, and explore the latest research on love and relationships." },
    { name: "Movies", image: "https://cdn.moviefone.com/wp-content/uploads/2024/08/2024-fall-preview.jpg?q=80", description: "A great movie can change your perspective of the world." },
    { name: "Music", image: "https://www.repstatic.it/content/nazionale/img/2024/07/11/093006910-1145347a-f10a-4d4d-a786-2cadecf987e5.jpg", description: "Stay up-to-date with the latest music news and trends." },
    { name: "Nature", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdM4Naw6g6mBZtWbsk8r4u0DEauhmvKrpFg&s", description: "Explore the natural world and stay informed about the latest developments in science and nature." },
    { name: "Neuroscience", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotEQs_05cJNNrbsEZVyhP-NZ5xPuOh-W1RA&s", description: "Learn about the latest research and breakthroughs in neuroscience and psychology." },
    { name: "Philosophy", image: "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2011/2/25/1298627148843/Marble-statue-of-Plato--007.jpg?width=465&dpr=1&s=none&crop=none", description: "Explore the world of philosophy and ethics." },
    { name: "Productivity", image: "https://www.activtrak.com/wp-content/uploads/2024/08/blog-header-how-to-measure-team-productivity-q3-24.jpg", description: "Boost your productivity and achieve your goals with the latest tips and advice." },
    { name: "Programming", image: "https://d2nzy1qhita6w.cloudfront.net/media/magefan_blog/Beginner-learning-C-programming-in-10-days-with-a-coding_guide.jpeg", description: "Learn how to code and stay up-to-date with the latest developments in programming and tech." },
    { name: "Psychology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3yjEodoiH-6aUxWYJl_aqtRrW0sJrehxrw&s", description: "Learn about the latest research and breakthroughs in psychology." },
    { name: "Relationships", image: "https://media.theeverygirl.com/wp-content/uploads/2022/06/new-relationship-advice-the-everygirl-s.jpg", description: "Explore the science and dynamics of human relationships." },
    { name: "Science", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPwrHm8s0-Lre6fC3Qg7c3ew_JPs_puHcxA&s", description: "Stay informed with discoveries and innovations in science." },
    { name: "Space", image: "https://c02.purpledshub.com/uploads/sites/41/2019/06/GettyImages-497707356-e722dce.jpg?w=1029&webp=1", description: "Journey through the cosmos with news and discoveries from space." },
    { name: "Spirituality", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHIteFw6UJQosiOwnlfuLorFgYS3r3UlbDQ&s", description: "Explore spirituality, mindfulness, and inner growth." },
    { name: "Technology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbT_A3vXOsEt0jN0A7R8KKg8_1zl8alVekQ&s", description: "Keep up with the latest advancements in tech and innovation." },
    { name: "Travel", image: "https://bmtnapoli.com/wp-content/uploads/2023/07/Travel-designer-cose-e-cosa-fa.jpg", description: "Explore the world and discover travel tips and destinations." }
];


export default topics

// titles.js

export const ArtTitles = [
    "Is Modern Art a Genius Hoax? Unmasking the Billion-Dollar Debate.",
    "Unlock Your Inner Artist: The Shocking Truth About Creativity Anyone Can Learn.",
    "Beyond Pretty Pictures: How Art Rewires Your Brain and Changes Your Worldview.",
    "Censored & Controversial: The Forbidden Art History They Don't Teach You.",
    "AI vs. Artist: The Battle for the Soul of Creativity is Here."
];

export const AITitles = [
    "AI Won't Just Take Your Job, It Will Redefine What It Means to Be Human.",
    "The AI We Should *Really* Fear Isn't Skynet – It's Already Here.",
    "Unlock Superhuman Intelligence: How AI Can Be Your Ultimate Brain Upgrade.",
    "Is AI Conscious? The Terrifying Question Scientists Can't Ignore.",
    "AI for Absolute Beginners: What You NEED to Know Before It's Too Late."
];

export const CultureTitles = [
    "Culture Shock: Are We Losing Our Identity in the Age of Globalisation?",
    "The Secret Codes of Culture: Why You Misunderstand Everyone (And How to Fix It).",
    "Cancel Culture vs. Free Speech: Where Do We Draw the Line?",
    "Vanishing Traditions: The Fight to Save Our World's Cultural Heritage.",
    "How Pop Culture Secretly Shapes Your Beliefs and Desires."
];

export const EconomyTitles = [
    "The Next Crash: Warning Signs That Point to Global Economic Meltdown.",
    "Beyond Bitcoin: The Financial Revolution That Will Change Your Wallet Forever.",
    "Rich vs. Poor: Is Capitalism Rigged? The Brutal Truth About Wealth Inequality.",
    "Economic Secrets of the Super-Rich (That You Can Use Too).",
    "Work Smarter, Not Harder: How the New Economy Demands a Different You."
];

export const EducationTitles = [
    "Is College Obsolete? The Shocking Truth About the Future of Learning.",
    "Brain Hacking 101: The Learning Secrets Schools Don't Teach You.",
    "Dumbing Down Our Kids? The Crisis Facing Modern Education Systems.",
    "The Robot Teachers Are Coming: How AI Will Revolutionize the Classroom.",
    "Unschooling Your Mind: Why True Education Happens Outside the Walls."
];

export const EnvironmentTitles = [
    "Point of No Return? The Climate Change Reality We Can No Longer Ignore.",
    "Beyond Recycling: Radical Changes You MUST Make to Save the Planet Now.",
    "Nature Fights Back: The Terrifying Rise of Eco-Disasters.",
    "The Secret Life of Earth: Mind-Blowing Discoveries About Our Living Planet.",
    "Eco-Anxiety is Real: How to Cope When the World Feels Like It's Ending."
];

export const FitnessTitles = [
    "Ditch the Gym Bullsh*t: The Only Fitness Principles That Actually Work.",
    "Build Your Dream Body in 15 Minutes a Day? The Science Says Yes.",
    "Fitness Over 40: It's Not Too Late to Get Stronger Than Ever Before.",
    "The Mental Muscle: How Exercise Rewires Your Brain for Happiness and Success.",
    "Beyond Cardio: The Forgotten Fitness Pillar That Unlocks Peak Performance."
];

export const HealthTitles = [
    "Big Pharma's Dirty Secrets: What Your Doctor Isn't Telling You About Your Health.",
    "Hack Your Biology: Simple Tricks to Optimize Sleep, Energy, and Longevity.",
    "The Gut Feeling Is Real: How Your Microbiome Controls Your Mood and Health.",
    "Beyond Diet Fads: The Sustainable Eating Principles for Lifelong Vitality.",
    "Mental Health Isn't a Luxury: Breaking the Stigma and Prioritizing Your Mind."
];

export const HistoryTitles = [
    "History's Biggest Lies: The Myths We Were Taught That Are Dangerously Wrong.",
    "Echoes of the Past: How Ancient Events Are Still Shaping Your Life Today.",
    "Forgotten Figures: The Unsung Heroes and Villains Who Changed Everything.",
    "If History Repeats, Are We Doomed? Lessons from Humanity's Biggest Mistakes.",
    "Time Travel Through Text: Uncovering Jaw-Dropping Secrets from Historical Records."
];

export const LiteratureTitles = [
    "Why Reading Fiction Makes You Smarter, Kinder, and More Successful.",
    "Banned Books That Changed the World: The Power of Forbidden Words.",
    "Beyond the Best-Seller List: Discovering Literary Gems You've Never Heard Of.",
    "Is the Novel Dead? The Fight for Literature's Soul in the Digital Age.",
    "The Secret Language of Stories: How Authors Manipulate Your Emotions."
];

export const LoveTitles = [
    "The Science of Attraction: What Makes You Fall (and Stay) In Love?",
    "Beyond Romance: The Different Kinds of Love You Need for a Fulfilling Life.",
    "Is Monogamy Natural? Debunking Myths About Love and Commitment.",
    "Heartbreak Hotel: The Surprising Ways Love (and its Loss) Rewires Your Brain.",
    "Finding True Love in a Toxic World: A No-Nonsense Guide."
];

export const MusicTitles = [
    "How Music Literally Changes Your Brain Chemistry (and How to Use It).",
    "The Secret Language of Music: What Your Favorite Songs Reveal About You.",
    "Is Pop Music Getting Dumber? The Evolution (or Devolution) of Sound.",
    "Beyond Spotify: Unearthing Hidden Musical Worlds You Need to Hear.",
    "Can Music Heal? The Surprising Therapeutic Power of Sound."
];

export const NatureTitles = [
    "Nature's IQ: The Astonishing Intelligence Hidden in the Wild.",
    "Rewild Your Life: Why Spending Time Outdoors is Non-Negotiable for Your Health.",
    "Planet Earth's Most Extreme Wonders (You Won't Believe Exist).",
    "The Silent Extinction: Species Vanishing Before Our Eyes – Why It Matters.",
    "Biomimicry: Nature's Genius Solutions to Our Biggest Problems."
];

export const NeuroscienceTitles = [
    "Hack Your Brain: Simple Neuroscience Tricks to Boost Memory, Focus, and Mood.",
    "Your Brain on Social Media: What Science Reveals About Your Feed Addiction.",
    "The Mystery of Consciousness: Are We Just Biological Machines?",
    "Neuroplasticity: Proof You Can Rewire Your Brain at Any Age.",
    "Unlocking Your Brain's Superpowers: The Cutting Edge of Cognitive Enhancement."
];

export const PhilosophyTitles = [
    "Philosophy's Biggest Questions (That Will Keep You Up All Night).",
    "Ancient Wisdom for Modern Chaos: How Stoicism Can Save Your Sanity.",
    "Meaning of Life? Philosophers Finally Have Some Answers (Maybe).",
    "Beyond Right and Wrong: Navigating the Murky Waters of Modern Ethics.",
    "Thinking About Thinking: How Philosophy Sharpens Your Mind Like Nothing Else."
];

export const ProductivityTitles = [
    "Stop Hustling, Start Living: The Counterintuitive Secrets to Real Productivity.",
    "The 4-Hour Workday Myth: Achieve More by Actually Doing Less.",
    "Beat Procrastination FOREVER: Brain Hacks Backed by Science.",
    "Focus in a Distracted World: Reclaim Your Attention Span Now.",
    "The Burnout Epidemic: Why We're All So Tired (And How to Fix It)."
];

export const ProgrammingTitles = [
    "Code Your Future: Why Programming is the Most Valuable Skill of the 21st Century.",
    "Beyond the Hype: Which Programming Languages *Actually* Matter Today?",
    "From Zero to Coder: The Brutally Honest Guide to Learning Programming Fast.",
    "The Dark Side of Coding: Burnout, Imposter Syndrome, and How to Survive.",
    "AI That Writes Code: Will Programmers Become Obsolete?"
];

export const PsychologyTitles = [
    "Mind Games: The Hidden Psychological Tricks Used On You Every Day.",
    "Understand Yourself: What Your Personality Type *Really* Means.",
    "The Psychology of Happiness: It's Not What You Think.",
    "Why We Do Stupid Things: Unmasking Your Brain's Irrational Biases.",
    "Decoding Human Behavior: The Secrets Psychology Can Unlock About Anyone."
];

export const RelationshipsTitles = [
    "Relationship Red Flags You Should NEVER Ignore.",
    "Beyond Communication: The Deeper Secrets to Lasting Connection.",
    "Friendship in the Digital Age: Are We More Connected or More Alone?",
    "Toxic People Detox: How to Identify and Cut Ties for Good.",
    "Building Bulletproof Bonds: The Science of Strong Relationships."
];

export const ScienceTitles = [
    "Science's Biggest Unsolved Mysteries (That Could Change Everything).",
    "Mind-Blowing Discoveries You Probably Missed This Year.",
    "Debunking Pseudoscience: How to Spot Fake Science Before It Fools You.",
    "The Next Giant Leap: Where is Scientific Breakthrough Taking Us?",
    "Why Trust Science? Understanding the Method That Shapes Our World."
];

export const SelfImprovementTitles = [
    "Why Most Self-Help is Garbage (And What Actually Creates Change).",
    "Unlock Your Potential: The One Mental Shift That Changes Everything.",
    "Stop Chasing Perfection: Embrace Your Flaws to Build Real Confidence.",
    "The Habit Loop Hack: Build Good Habits (and Break Bad Ones) Effortlessly.",
    "Beyond Motivation: The Discipline Secret to Achieving Your Biggest Goals."
];

export const SpaceTitles = [
    "Are We Alone? The Frantic Search for Alien Life Just Got Serious.",
    "Beyond Mars: The Mind-Bending Destinations Humanity Could Reach Next.",
    "Black Holes Explained: Gateways to Another Universe or Cosmic Monsters?",
    "Space Junk Apocalypse: The Looming Threat Orbiting Earth Right Now.",
    "Living on Mars? The Brutal Reality of Colonizing the Red Planet."
];

export const SpiritualityTitles = [
    "Spirituality Without Religion: Finding Meaning in a Secular World.",
    "The Science of Enlightenment? What Neuroscience Reveals About Mystical States.",
    "Beyond Mindfulness: Deeper Practices for Inner Peace and Connection.",
    "Near-Death Experiences: Glimpses of an Afterlife or Brain Tricks?",
    "Finding Your Purpose: Spiritual Paths to a More Meaningful Existence."
];

export const TechnologyTitles = [
    "This Tech Will Change Your Life in the Next 5 Years (Whether You Like It or Not).",
    "Privacy is Dead: How Big Tech Knows Everything About You (And What To Do).",
    "Beyond the Smartphone: The Next Wave of Gadgets Ready to Invade Your Life.",
    "The Metaverse: Utopia or Digital Prison? Unpacking the Hype.",
    "Tech Addiction: How Your Devices Are Hijacking Your Brain (And How to Fight Back)."
];

export const TravelTitles = [
    "Quit Your Job and Travel the World: It's More Possible Than You Think.",
    "Beyond Tourist Traps: Secret Destinations for Authentic Adventures.",
    "Travel Doesn't Just Change Your View, It Changes *You*. Here's How.",
    "The Dark Side of Travel: Overtourism, Exploitation, and How to Be a Better Tourist.",
    "Budget Travel Secrets: See the World Without Breaking the Bank."
];

// You can also export them all in one object if needed:
// titles.js
export const allTitles = {
    Art: ArtTitles,
    AI: AITitles,
    Culture: CultureTitles,
    Economy: EconomyTitles,
    Education: EducationTitles,
    Environment: EnvironmentTitles,
    Fitness: FitnessTitles,
    Health: HealthTitles,
    History: HistoryTitles,
    Literature: LiteratureTitles,
    Love: LoveTitles,
    Music: MusicTitles,
    Nature: NatureTitles,
    Neuroscience: NeuroscienceTitles,
    Philosophy: PhilosophyTitles,
    Productivity: ProductivityTitles,
    Programming: ProgrammingTitles,
    Psychology: PsychologyTitles,
    Relationships: RelationshipsTitles,
    Science: ScienceTitles,
    SelfImprovement: SelfImprovementTitles,
    Space: SpaceTitles,
    Spirituality: SpiritualityTitles,
    Technology: TechnologyTitles,
    Travel: TravelTitles
};
