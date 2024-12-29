import type { Matrix } from "../../common/matrix";
import type { Guard } from "./day6.types";
import type { MapTile } from "./mapTile";

export class TopdownMap {
  tiles: Matrix<MapTile>;
  guard: Guard;

  constructor(tiles: Matrix<MapTile>, guard: Guard) {
    this.tiles = tiles;
    this.guard = guard;
  }

  public checkNextGuardStep = () => {
    const nextRow = this.resolveNextGuardRow();
    const nextCol = this.resolveNextGuardCol();
  };

  private resolveNextGuardRow = () => {
    switch (this.guard.direction) {
      case "right":
      case "left":
        return this.guard.row;
      case "down":
        return this.guard.row + 1;
      case "up":
      default:
        return this.guard.row - 1;
    }
  };

  private resolveNextGuardCol = () => {
    switch (this.guard.direction) {
      case "down":
      case "up":
        return this.guard.col;
      case "left":
        return this.guard.col - 1;
      case "right":
      default:
        return this.guard.col + 1;
    }
  };
}
