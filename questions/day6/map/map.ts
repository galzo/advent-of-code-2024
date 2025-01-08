import { buildMatrixFromData, type Matrix } from "../../../common/matrix";
import type { Guard, TileCoordinates } from "../day6.types";
import {
  resolveGuardRotateDirection,
  resolveNextGuardCol,
  resolveNextGuardRow,
} from "./map.utils";
import type { MapTile } from "./mapTile";

export class TopdownMap {
  tiles: Matrix<MapTile>;
  guard: Guard;
  loopDetected: boolean = false;

  constructor(tiles: MapTile[][], guard: Guard) {
    this.tiles = buildMatrixFromData(tiles);
    this.guard = { ...guard };
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
    const currentTile = this.tiles.getCell(
      this.guard.currentPosition.row,
      this.guard.currentPosition.col
    );
    currentTile.type = "tile";

    this.guard.currentPosition = {
      row: resolveNextGuardRow(this.guard),
      col: resolveNextGuardCol(this.guard),
    };

    const isStillInBounds = this.isGuardOnBoard();
    if (!isStillInBounds) return;

    const steppedTile = this.tiles.getCell(
      this.guard.currentPosition.row,
      this.guard.currentPosition.col
    );

    this.loopDetected = this.isGuardInALoop(steppedTile);
    steppedTile.type = "guard";
    steppedTile.lastGuardVisitDirection = this.guard.direction;
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
    return this.tiles.isInMatrixBounds(
      this.guard.currentPosition.row,
      this.guard.currentPosition.col
    );
  };

  public countVisitedTiles = () => {
    return this.tiles.getFlattenedValues((tile) => tile.guardVisits > 0).length;
  };

  public getVisitedTilesIndices = () => {
    // Fetch all tiles that the guard visited in, except for it starting position
    // (since the starting position is not considered a location visited)
    return this.tiles.getFlattenedIndices((tile) => tile.guardVisits > 0);
  };

  public setUserBlock = (row: number, col: number) => {
    const tile = this.tiles.getCell(row, col);
    tile.type = "userBlock";
  };
}
