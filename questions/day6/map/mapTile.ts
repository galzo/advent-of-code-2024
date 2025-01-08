import util from "util";
import type { GuardDirection, MapTileType } from "../day6.types";

export class MapTile {
  type: MapTileType;
  guardVisits: number;
  lastGuardVisitDirection: GuardDirection;

  constructor(type: MapTileType) {
    this.type = type;
    this.guardVisits = type === "guard" ? 1 : 0;
    this.lastGuardVisitDirection = "up";
  }

  [util.inspect.custom]() {
    if (this.type === "guard") return "X";
    if (this.type === "block") return "#";
    if (this.type === "userBlock") return "O";
    if (!this.guardVisits) return ".";

    switch (this.lastGuardVisitDirection) {
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
    if (this.type === "guard") return "X";
    if (this.type === "block") return "#";
    if (this.type === "userBlock") return "O";
    if (!this.guardVisits) return ".";

    switch (this.lastGuardVisitDirection) {
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
