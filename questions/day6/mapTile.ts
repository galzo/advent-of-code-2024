import util from "util";
import type { GuardDirection } from "./day6.types";

export class MapTile {
  isBlock: boolean;
  isGuardHere: boolean;
  guardVisits: number;
  guardVisitDirection: GuardDirection | "cross";

  constructor(isBlock: boolean, isGuardHere: boolean, visitDirection: GuardDirection = "up") {
    this.isBlock = isBlock;
    this.isGuardHere = isGuardHere;
    this.guardVisits = isGuardHere ? 1 : 0;
    this.guardVisitDirection = visitDirection;
  }

  [util.inspect.custom]() {
    if (this.isBlock) return "#";
    if (this.isGuardHere) return "X";
    if (!this.guardVisits) return ".";

    switch (this.guardVisitDirection) {
      case "cross":
        return "+";
      case "left":
      case "right":
        return "-";
      case "up":
      case "down":
      default:
        return "|";
    }
  }

  toString() {
    if (this.isBlock) return "#";
    if (this.isGuardHere) return "X";
    if (!this.guardVisits) return ".";

    switch (this.guardVisitDirection) {
      case "cross":
        return "+";
      case "left":
      case "right":
        return "-";
      case "up":
      case "down":
      default:
        return "|";
    }
  }
}
