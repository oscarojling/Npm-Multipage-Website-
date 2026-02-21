export const games = [
  {
    name: "Morrowind",
    slug: "morrowind",
    released: 2002,
    location: "Vvardenfell, Morrowind",
    description:
      "You arrive in a strange land as an outlander with no past, drawn into prophecy and suspicion. Whispers say you might be the reborn champion of a fallen people—meant to unite warring tribes, awaken ancient powers, and challenge living gods who have ruled for millennia. As blight spreads and faith fractures, you walk the line between myth and fraud, deciding whether to fulfill destiny or reshape it. You might be the reincarnation of an ancient warrior who is destined to defeat an existential threat to the world and bring down a Tribunal of false gods.",
    protagonist: "The Nerevarine",
    villain: "Dagoth Ur",
    image: "morrowind.jpg",
  },
  {
    name: "Oblivion",
    slug: "oblivion",
    released: 2006,
    location: "Cyrodiil",
    description:
      "You begin as an unknown prisoner who witnesses an emperor's assassination and is entrusted with a sacred duty: find the last heir of a shattered dynasty and close the gates of a burning hell that are tearing the world apart. As daedric hordes invade and cities fall, you move in the shadow of prophecy—not the chosen one, but the one who makes the chosen possible, deciding the fate of an empire on the brink.",
    protagonist: "The Hero of Kvatch",
    villain: "Mehrunes Dagon",
    image: "oblivion.jpg",
  },
  {
    name: "Skyrim",
    slug: "skyrim",
    released: 2011,
    location: "Skyrim",
    description:
      "You are caught in chains as dragons return to a frozen land at war with itself. Legends awaken within you: the soul of a dragon, the voice of thunder, the power to devour immortality. As ancient wyrms darken the skies and old empires crumble, you stride between myth and history—slayer, savior, or tyrant—shaping the last age of heroes.",
    protagonist: "Dragonborn",
    villain: "Alduin",
    image: "skyrim.jpg",
  },
];

export const races = [
  {
    name: "Dark Elf",
    slug: "dark-elf",
    homeland: "Morrowind",
    nativeGame: "Morrowind",
    type: "Mer",
    description:
      "Also known as Dunmer, Dark Elves are native to Morrowind. They are known for their intelligence, agility and natural affinity for magic. They have ash-grey skin and red eyes.",
    abilities: ["Ancestor's Warth", "Fire Resistance", "Magic Bonus"],
    image: "dark-elf.jpg",
  },
  {
    name: "Imperial",
    slug: "imperial",
    homeland: "Cyrodiil",
    nativeGame: "Oblivion",
    type: "Human",
    description:
      "Imperials are the natives of Cyrodiil and the heart of the Empire. They are known for their diplomacy, commerce and skill with weapons.",
    abilities: ["Voice of the Emperor", "Imperial Luck", "Combat Bonus"],
    image: "imperial.jpg",
  },
  {
    name: "Nord",
    slug: "nord",
    homeland: "Skyrim",
    nativeGame: "Skyrim",
    type: "Human",
    description:
      "Nords are a tall and fair-haired people from Skyrim. They are known for their resistance to cold and their prowess in battle. They are natural warriors and have a strong sense of honour",
    abilities: ["Frost Resistance", "Battle Cry", "Combat Bonus"],
    image: "nord.jpg",
  },
];
