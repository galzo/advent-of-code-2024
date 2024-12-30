import util from "util";
import type { GuardDirection } from "./day6.types";

export class MapTile {
  isBlock: boolean;
  isVisited: boolean;
  guardVisitDirection: GuardDirection | "cross";

  constructor(isBlock: boolean, isVisited: boolean, visitDirection?: GuardDirection) {
    this.isBlock = isBlock;
    this.isVisited = isVisited;
    this.guardVisitDirection = visitDirection ?? "up";
  }

  [util.inspect.custom]() {
    if (this.isBlock) return "#";
    if (!this.isVisited) return ".";

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
    if (!this.isVisited) return ".";

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
