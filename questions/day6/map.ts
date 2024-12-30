import type { Matrix } from "../../common/matrix";
import type { Guard } from "./day6.types";
import { resolveGuardRotateDirection, resolveNextGuardCol, resolveNextGuardRow } from "./day6.utils";
import type { MapTile } from "./mapTile";

export class TopdownMap {
  tiles: Matrix<MapTile>;
  guard: Guard;

  constructor(tiles: Matrix<MapTile>, guard: Guard) {
    this.tiles = tiles;
    this.guard = guard;
  }

  private canStepOnNextTile = () => {
    const nextRow = resolveNextGuardRow(this.guard);
    const nextCol = resolveNextGuardCol(this.guard);

    const nextTile = this.tiles.getCell(nextRow, nextCol);
    return !nextTile?.isBlock;
  };

  private rotateGuard = () => {
    this.guard.direction = resolveGuardRotateDirection(this.guard);
  };

  private moveGuard = () => {
    this.guard.row = resolveNextGuardRow(this.guard);
    this.guard.col = resolveNextGuardCol(this.guard);

    const isStillInBounds = this.isGuardOnBoard();
    if (isStillInBounds) {
      const steppedTile = this.tiles.getCell(this.guard.row, this.guard.col);
      steppedTile.isVisited = true;
    }
  };

  public isGuardOnBoard = () => {
    return this.tiles.isInMatrixBounds(this.guard.row, this.guard.col);
  };

  public performNextStep = () => {
    let canPerformNextStep = this.canStepOnNextTile();
    while (!canPerformNextStep) {
      this.rotateGuard();
      canPerformNextStep = this.canStepOnNextTile();
    }

    this.moveGuard();
  };

  public countVisitedTiles = () => {
    return this.tiles.getFlattenedValues((tile) => tile.isVisited).length;
  };
}
