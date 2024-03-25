const miseryCards = [
  {
    id: 1,
    name: "Unnatural Stamina",
    effect:
      "Units in the Horde are eligible to shoot and declare a charge in a turn in which it advanced.",
    available: true,
  },
  {
    id: 2,
    name: "Grudge Match",
    effect: "The Horde gains +1 to hit and +1 to wound rolls.",
    available: true,
  },
  {
    id: 3,
    name: "Rip and Tear",
    effect: "Improve the AP by 1 for weapons equipped by the Horde.",
    available: true,
  },
  {
    id: 4,
    name: "Blistering Speed",
    effect:
      "Do not roll advance or charge rolls for the Horde. The Horde’s advance rolls are automatically 6 and Charge Rolls are automatically 12.",
    available: true,
  },
  {
    id: 5,
    name: "Untouchable",
    effect: "Horde units have a 3+ Invulnerable save.",
    available: true,
  },
  {
    id: 6,
    name: "Stray Orbital Bombardment",
    effect:
      "Split the board into 6 equal areas, 3 by 2 across. Assign each area a number 1 through 6. Roll a D6, each unit within the rolled area takes 2D3 mortal wounds.",
    available: true,
  },
  {
    id: 7,
    name: "Unlucky Night",
    effect: "Horde spawn rolls use 3D6 dropping the lowest.",
    available: true,
  },
  {
    id: 8,
    name: "Death Denied",
    effect: "Every Horde unit on the battlefield returns to starting strength.",
    available: true,
  },
  {
    id: 9,
    name: "Terrifying Shockwave",
    effect: "Defending players’ Battleshock rolls are automatically failed.",
    available: true,
  },
  {
    id: 10,
    name: "Planetquake",
    effect:
      "Destroy one terrain piece at random. Units within it take 2D3 mortal wounds.",
    available: true,
  },
  {
    id: 11,
    name: "Errant Explosion",
    effect: "Destroy one objective in No Man’s Land at random.",
    available: true,
  },
  {
    id: 12,
    name: "Nowhere is Safe",
    effect: "Destroy all objectives in the Defending Player deployment zone.",
    available: true,
  },
  {
    id: 13,
    name: "Pincer Maneuver",
    effect:
      "Spawn an extra Horde unit following round rules. This spawned unit deep strikes outside of 3” from all player units within the Defending Player deployment zone if able, otherwise within No Man’s Land.  Within the Attacking Player’s deployment zone as a last resort. (This unit counts as having entered via deep strike during the Horde’s movement phase for all rules purposes.)",
    available: true,
  },
  {
    id: 14,
    name: "No Hard Feelings",
    effect: "One random player’s RP is set to 0.",
    available: true,
  },
  {
    id: 15,
    name: "Bad Investment",
    effect: "Remove 5RP from all players. (The minimum RP is 0.)",
    available: true,
  },
  {
    id: 16,
    name: "Fair and Balanced",
    effect: "Horde units gain Devastating Wounds.",
    available: true,
  },
  {
    id: 17,
    name: "Unfettered Fury",
    effect: "Horde units gain Sustained Hits 1 and Lethal Hits.",
    available: true,
  },
  {
    id: 18,
    name: "A Worthless Sacrifice",
    effect:
      "Players discuss and then secretly vote for a player unit to be destroyed by the horde. If the result of the vote is not unanimous, randomly choose a unit to be destroyed from among all of the units that received at least one vote.",
    available: true,
  },
  {
    id: 19,
    name: "Fog of War",
    effect: "Horde units gain Stealth and have the Benefit of Cover.",
    available: true,
  },
  {
    id: 20,
    name: "Lamentable Luck",
    effect: "Reveal 2 more Misery cards.",
    available: true,
  },
];
export default miseryCards