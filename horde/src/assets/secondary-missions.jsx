const missions = [
  {
    id: 1,
    name: "Secure Drop Zones",
    condition:
      "Randomly select two objectives in No Man’s Land (if less exist, select that number instead.) If you control those selected objectives at the end of the battle round this mission is successful.",
    reward: "3RP",
    punishment: "+1 Misery cards",
    available: true,
  },
  {
    id: 2,
    name: "Back to Basics",
    condition:
      "Keep a tally, X, of how many Horde units are destroyed this battle round after revealing this mission.  If X is zero, this mission fails.",
    reward: "X+1RP",
    punishment: "+2 Misery cards",
    available: true,
  },
  {
    id: 3,
    name: "Show No Fear",
    condition:
      "If any units are battle-shocked at the end of the battle round, this mission fails.",
    reward: "3RP, -1 to Spawn Roll",
    punishment: "+2 Misery cards, +1 to Spawn Roll",
    available: true,
  },
  {
    id: 4,
    name: "Establish Orbital Comms",
    condition:
      "In your shooting phase, select a unit within 6” of the center of the battlefield that is not Battle-shocked and eligible to shoot.  Until the end of turn that unit is not eligible to shoot or declare a charge. At the end of your turn if that unit is within 6” of the center of the battlefield this mission is successful.",
    reward:
      "One at a time, each player without a revealed Secret Objective immediately uses A Change of Plans.",
    punishment:
      "One at a time, each player without a revealed Secret Objective immediately uses A Change of Plans, but they do not choose a card, instead they choose one at random.",
    available: true,
  },
  {
    id: 5,
    name: "Search for Supplies",
    condition:
      "In your shooting phase, select any number of units on different objective markers in No Man’s Land or the enemy deployment zone that are not Battle-shocked and eligible to shoot.  Until the end of turn those units are not eligible to shoot or declare a charge. Keep a tally, X, of how many units were selected.  If X = 0 at the end of the battle round, this mission fails.",
    reward: "X+1RP, +2CP if X>=3.",
    punishment: "+2 Misery cards",
    available: true,
  },
  {
    id: 6,
    name: "Clear the Evac Zone",
    condition:
      "If no Horde unit is in the defending player’s deployment zone at the end of the battle round this mission is successful.",
    reward: "3RP",
    punishment: "Reinforcements Arrive is removed from the RP Purchase Table",
    available: true,
  },
  {
    id: 7,
    name: "Decapitation Strike",
    condition:
      "If a player destroys a Horde character model or no Horde character model exists at the end of the battle round this mission is successful.",
    reward: "2RP 2CP",
    punishment: "+2 Misery cards",
    available: true,
  },
  {
    id: 8,
    name: "Dragon Slayer",
    condition:
      "Keep track of the first time a player destroys a Horde Monster or Vehicle model this battle round. If a Vehicle or Monster was destroyed or if none exist at the end of the battle round this mission is successful.",
    reward:
      "1 free Field Promotion use to the player who triggers it. If no player triggers, 2RP",
    punishment: "+5 to the first Spawn roll of the round.",
    available: true,
  },
  {
    id: 9,
    name: "Paint Targets",
    condition:
      "To succeed in this mission; until the end of the battle round: No player unit may fall back. No player unit may normal move, advance, or charge out of range of any objective they began the turn in range of.",
    reward:
      "1 Free use of Air Strike to a random player, 1 Free use of Fortify Positions to a random player.",
    punishment:
      "Stray Orbital Bombardment is immediately searched up from the Misery deck or discard pile and resolved.",
    available: true,
  },
  {
    id: 10,
    name: "Study Behaviors",
    condition:
      "At the start of the player movement phase, choose a Horde unit on the battlefield at random; that unit must have no wounds lost from that point until the end of the battle round or this mission fails.",
    reward:
      "2RP, One random player saves this card. You may discard this card to nullify 1 Misery card.",
    punishment: "+3 to Spawn Roll",
    available: true,
  },
  {
    id: 11,
    name: "Use It or Lose It",
    condition:
      "Keep a tally of how much RP is spent during the battle round after revealing this card. If the tally is greater than 6 this mission is successful. If this Secondary Mission is drawn during battle round 1, reveal another Secondary Mission card, then shuffle this back into the Secondary Mission deck.",
    reward: "10RP to a random player.",
    punishment: "-3RP, 1 Misery",
    available: true,
  },
  {
    id: 12,
    name: "Control the Battlefield",
    condition:
      "At the end of the Battle Round if you have at least one player unit wholly within each table quarter, outside of 6” of the center of the battlefield this mission is successful.",
    reward: "-2 to Spawn Rolls",
    punishment: "+1 Misery card, +1 to Spawn Rolls",
    available: true,
  },
];
export default missions;
