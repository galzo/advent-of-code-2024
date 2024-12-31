import type { Guard } from "./day6.types";
import type { MapTile } from "./mapTile";

export const resolveNextGuardCol = (guard: Guard) => {
  switch (guard.direction) {
    case "down":
    case "up":
      return guard.col;
    case "left":
      return guard.col - 1;
    case "right":
    default:
      return guard.col + 1;
  }
};

export const resolveNextGuardRow = (guard: Guard) => {
  switch (guard.direction) {
    case "right":
    case "left":
      return guard.row;
    case "down":
      return guard.row + 1;
    case "up":
    default:
      return guard.row - 1;
  }
};

export const resolveGuardRotateDirection = (guard: Guard) => {
  switch (guard.direction) {
    case "up":
      return "right";
    case "right":
      return "down";
    case "down":
      return "left";
    case "left":
    default:
      return "up";
  }
};

export const resolveTileVisitDirection = (tile: MapTile, guard: Guard) => {
  if (tile.guardVisits > 0 && tile.guardVisitDirection !== guard.direction) {
    return "cross";
  }

  return guard.direction;
};
