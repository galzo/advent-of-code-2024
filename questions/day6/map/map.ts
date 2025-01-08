import type { Matrix } from "../../../common/matrix";
import type { Guard } from "../day6.types";
import {
  resolveGuardRotateDirection,
  resolveNextGuardCol,
  resolveNextGuardRow,
} from "./map.utils";
import type { MapTile } from "./mapTile";

export class TopdownMap {
  tiles: Matrix<MapTile>;
  loopDetected: boolean;
  guard: Guard;

  constructor(tiles: Matrix<MapTile>, guard: Guard) {
    this.tiles = tiles;
    this.guard = guard;
    this.loopDetected = false;
  }

  public isGuardBlocked = () => {
    const nextRow = resolveNextGuardRow(this.guard);
    const nextCol = resolveNextGuardCol(this.guard);

    const nextTile = this.tiles.getCell(nextRow, nextCol);
    return nextTile?.type === "block" || nextTile?.type === "userBlock";
  };

  public rotateGuard = () => {
    this.guard.direction = resolveGuardRotateDirection(this.guard);
  };

  public moveGuard = () => {
    const currentTile = this.tiles.getCell(this.guard.row, this.guard.col);
    currentTile.type = "tile";

    this.guard.row = resolveNextGuardRow(this.guard);
    this.guard.col = resolveNextGuardCol(this.guard);

    const isStillInBounds = this.isGuardOnBoard();
    if (!isStillInBounds) return;

    const steppedTile = this.tiles.getCell(this.guard.row, this.guard.col);
    this.loopDetected = this.isGuardInALoop(steppedTile);

    steppedTile.type = "guard";
    steppedTile.guardVisits += 1;
  };

  private isGuardInALoop = (steppedTile: MapTile) => {
    // In case the guard is visiting this tile for the 2th+ time, and the previous direction is same as now
    // then it means that the guard is stuck in a loop
    return (
      steppedTile.guardVisits >= 1 &&
      steppedTile.lastGuardVisitDirection === this.guard.direction
    );
  };

  public isGuardOnBoard = () => {
    return this.tiles.isInMatrixBounds(this.guard.row, this.guard.col);
  };

  public countVisitedTiles = () => {
    return this.tiles.getFlattenedValues((tile) => tile.guardVisits > 0).length;
  };

  public getVisitedTilesIndices = () => {
    return this.tiles.getFlattenedIndices((tile) => tile.guardVisits > 0);
  };
}
