const challenges = [
  {
    challenge: "RuPaullywood or Bust",
    description:
      "Dumpster dive for materials to make a dress that shows your Hollywood glamor realness.",
    skills: ["sew", "runway", "paint"],
    calc: (sew, runway, paint) => {
      return sew * 2 + runway + paint;
    },
    competitors: ["Naomi Smalls", "Jade Jolie", "Coco Montrese"]
  }
];

export default challenges;
