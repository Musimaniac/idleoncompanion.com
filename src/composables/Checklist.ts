type ChecklistItem = {
  name: string
  source?: string
}

type StorageItem = ChecklistItem & {
  bagSlots: number
}

type CapacityPouchesItem = ChecklistItem & {
  cycle: string
}

const InventoryBags: StorageItem[] = [
  {
    name: "Inventory Bag A",
    bagSlots: 1,
  },
  {
    name: "Inventory Bag B",
    bagSlots: 1,
  },
  {
    name: "Inventory Bag C",
    bagSlots: 1,
  },
  {
    name: "Inventory Bag D",
    bagSlots: 2,
  },
  {
    name: "Inventory Bag E",
    bagSlots: 2,
  },
  {
    name: "Inventory Bag F",
    bagSlots: 2,
  },
  {
    name: "Inventory Bag G",
    bagSlots: 2,
  },
  {
    name: "Inventory Bag H",
    bagSlots: 2,
  },
  {
    name: "Inventory Bag I",
    bagSlots: 2,
  },
  {
    name: "Snakeskinventory Bag",
    bagSlots: 2,
  },
  {
    name: "Totally Normal And Not Fake Bag",
    bagSlots: 2,
  },
  {
    name: "Mamooth Hide Bag",
    bagSlots: 1,
  },
  {
    name: "Blunderbag",
    bagSlots: 4,
  },
  {
    name: "Sandy Satchel",
    bagSlots: 4,
  },
  {
    name: "Shivering Sack",
    bagSlots: 3,
  },
  {
    name: "Bummo Bag",
    bagSlots: 1,
  },
  {
    name: "Capitalist Case",
    bagSlots: 1,
  },
  {
    name: "Wealthy Wallet",
    bagSlots: 1,
  },
  {
    name: "Prosperous Pouch",
    bagSlots: 1,
  },
  {
    name: "Sack of Success",
    bagSlots: 2,
  },
]

const GemShopBags: StorageItem[] = [
  {
    name: "Inventory Bag U",
    bagSlots: 4,
  },
  {
    name: "Inventory Bag V",
    bagSlots: 4,
  },
  {
    name: "Inventory Bag W",
    bagSlots: 4,
  },
  {
    name: "Inventory Bag X",
    bagSlots: 4,
  },
  {
    name: "Inventory Bag Y",
    bagSlots: 4,
  },
  {
    name: "Inventory Bag Z",
    bagSlots: 4,
  },
]

const CapacityPouches: CapacityPouchesItem[] = [
  {
    name: "Mini Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Cramped Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Small Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Average Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Sizable Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Big Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Large Materials Pouch",
    cycle: "Materials Pouch",
  },
  {
    name: "Miniature Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Cramped Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Small Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Average Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Sizable Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Big Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Large Mining Pouch",
    cycle: "Mining Pouch",
  },
  {
    name: "Miniature Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Cramped Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Small Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Average Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Sizable Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Big Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Large Fish Pouch",
    cycle: "Fishing Pouch",
  },
  {
    name: "Miniscule Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Cramped Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Small Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Average Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Sizable Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Big Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Large Food Pouch",
    cycle: "Food Pouch",
  },
  {
    name: "Miniature Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Cramped Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Small Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Average Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Sizable Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Big Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Large Choppin Pouch",
    cycle: "Choppin Pouch",
  },
  {
    name: "Miniature Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Cramped Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Small Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Average Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Sizable Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Big Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Large Bug Pouch",
    cycle: "Bug Pouch",
  },
  {
    name: "Small Critter Pouch",
    cycle: "Critter Pouch",
  },
  {
    name: "Sizable Critter Pouch",
    cycle: "Critter Pouch",
  },
  {
    name: "Big Critter Pouch",
    cycle: "Critter Pouch",
  },
  {
    name: "Large Critter Pouch",
    cycle: "Critter Pouch",
  },
  {
    name: "Small Soul Pouch",
    cycle: "Soul Pouch",
  },
  {
    name: "Sizable Soul Pouch",
    cycle: "Soul Pouch",
  },
  {
    name: "Big Soul Pouch",
    cycle: "Soul Pouch",
  },
  {
    name: "Large Soul Pouch",
    cycle: "Soul Pouch",
  }
]

const StorageChests: StorageItem[] = [
  {
    name: "Storage Chest 1",
    bagSlots: 3,
  },
  {
    name: "Storage Chest 2",
    bagSlots: 3,
  },
  {
    name: "Storage Chest 3",
    bagSlots: 3,
  },
  {
    name: "Storage Chest 4",
    bagSlots: 3,
  },
  {
    name: "Storage Chest 5",
    bagSlots: 3,
  },
  {
    name: "Storage Chest 6",
    bagSlots: 4,
  },
  {
    name: "Storage Chest 7",
    bagSlots: 4,
  },
  {
    name: "Storage Chest 8",
    bagSlots: 4,
  },
  {
    name: "Storage Chest 9",
    bagSlots: 4,
  },
  {
    name: "Storage Chest 10",
    bagSlots: 5,
  },
  {
    name: "Storage Chest 11",
    bagSlots: 5,
  },
  {
    name: "Storage Chest 12",
    bagSlots: 5,
  },
  {
    name: "Storage Chest 13",
    bagSlots: 5,
  },
  {
    name: "Storage Chest 14",
    bagSlots: 5,
  },
  {
    name: "Storage Chest 15",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 16",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 17",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 18",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 19",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 20",
    bagSlots: 7,
  },
  {
    name: "Storage Chest 21",
    bagSlots: 7,
  },
  {
    name: "Storage Chest 90",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 91",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 92",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 93",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 94",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 95",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 96",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 97",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 98",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 99",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 99B",
    bagSlots: 6,
  },
  {
    name: "Storage Chest 99C",
    bagSlots: 6,
  },
  {
    name: "Dank Paypay Chest",
    bagSlots: 6,
  },
];

const CombatStamps: ChecklistItem[] = [
  {
    name: "Sword Stamp",
  },
  {
    name: "Heart Stamp",
  },
  {
    name: "Mana Stamp",
  },
  {
    name: "Tomahawk Stamp",
  },
  {
    name: "Target Stamp",
  },
  {
    name: "Shield Stamp",
  },
  {
    name: "Longsword Stamp",
  },
  {
    name: "Kapow Stamp",
  },
  {
    name: "Fist Stamp",
  },
  {
    name: "Battleaxe Stamp",
  },
  {
    name: "Agile Stamp",
  },
  {
    name: "Vitality Stamp",
  },
  {
    name: "Book Stamp",
  },
  {
    name: "Manamoar Stamp",
  },
  {
    name: "Clover Stamp",
  },
  {
    name: "Scimitar Stamp",
  },
  {
    name: "Bullseye Stamp",
  },
  {
    name: "Feather Stamp",
  },
  {
    name: "Polearm Stamp",
  },
  {
    name: "Violence Stamp",
  },
  {
    name: "Buckler Stamp",
  },
  {
    name: "Sukka Foo Stamp",
  },
  {
    name: "Arcane Stamp",
  },
  {
    name: "Steve Sword Stamp",
  },
  {
    name: "Blover Stamp",
  },
  {
    name: "Stat Graph Stamp",
  },
];

const SkillStamps: ChecklistItem[] = [
  {
    name: "Pickaxe Stamp",
  },
  {
    name: "Hatchet Stamp",
  },
  {
    name: "Anvil Zoomer Stamp",
  },
  {
    name: "Lil' Mining Baggy Stamp",
  },
  {
    name: "Twin Ores Stamp",
  },
  {
    name: "Choppin' Bag Stamp",
  },
  {
    name: "Duplogs Stamp",
  },
  {
    name: "Matty Bag Stamp",
  },
  {
    name: "Smart Dirt Stamp",
  },
  {
    name: "Cool Diggy Tool Stamp",
  },
  {
    name: "High IQ Lumber Stamp",
  },
  {
    name: "Swag Swingy Tool Stamp",
  },
  {
    name: "Smartas Smithing Stamp",
  },
  {
    name: "Alch Go Brrr Stamp",
  },
  {
    name: "Brainstew Stamp",
  },
  {
    name: "Drippy Drop Stamp",
  },
  {
    name: "Droplots Stamp",
  },
  {
    name: "Fishing Rod Stamp",
  },
  {
    name: "Fishhead Stamp",
  },
  {
    name: "Catch Net Stamp",
  },
  {
    name: "Fly Intel Stamp",
  },
  {
    name: "Bag o Heads Stamp",
  },
  {
    name: "Holy Mackerel Stamp",
  },
  {
    name: "Bugsack Stamp",
  },
  {
    name: "Buzz Buzz Stamp",
  },
  {
    name: "Hidey Box Stamp",
  },
  {
    name: "Purp Froge Stamp",
  },
  {
    name: "Spikemouth Stamp",
  },
  {
    name: "Sample Stamp",
  },
  {
    name: "Saw Stamp",
  },
  {
    name: "Flowin Stamp",
  },
  {
    name: "Banked Pts Stamp",
  },
];

const MiscStamps: ChecklistItem[] = [
  {
    name: "Questin Stamp",
  },
  {
    name: "Mason Jar Stamp",
  },
  {
    name: "Crystallin Stamp",
  },
  {
    name: "Apple Stamp",
  },
  {
    name: "Potion Stamp",
  },
  {
    name: "Golden Apple Stamp",
  },
  {
    name: "Card Stamp",
  },
  {
    name: "Talent I Stamp",
  },
  {
    name: "Talent II Stamp",
  },
  {
    name: "Talent III Stamp",
  },
  {
    name: "Talent IV Stamp",
  },
  {
    name: "Talent V Stamp",
  },
  {
    name: "Talent S Stamp",
  },
  {
    name: "Multikill Stamp",
  },
  {
    name: "Biblio Stamp",
  },
];

export const checklistData = {
  "Inventory Bags": {
    global: false,
    assetDir: "checklist",
    items: InventoryBags,
  },
  "Gem Shop Bags": {
    global: true,
    assetDir: "checklist",
    items: GemShopBags,
  },
  "Capacity Pouches": {
    global: false,
    assetDir: "checklist",
    items: CapacityPouches,
  },
  "Storage Chests": {
    global: true,
    assetDir: "checklist",
    items: StorageChests,
  },
  "Combat Stamps": {
    global: true,
    assetDir: "stamps",
    items: CombatStamps,
  },
  "Skill Stamps": {
    global: true,
    assetDir: "stamps",
    items: SkillStamps,
  },
  "Misc Stamps": {
    global: true,
    assetDir: "stamps",
    items: MiscStamps,
  },
}
