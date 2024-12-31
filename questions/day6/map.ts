import type { Matrix } from "../../common/matrix";
import type { Guard } from "./day6.types";
import {} from "./day6.utils";
import {
  resolveGuardRotateDirection,
  resolveNextGuardCol,
  resolveNextGuardRow,
  resolveTileVisitDirection,
} from "./map.utils";
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
    const currentTile = this.tiles.getCell(this.guard.row, this.guard.col);

    this.guard.row = resolveNextGuardRow(this.guard);
    this.guard.col = resolveNextGuardCol(this.guard);
    currentTile.isGuardHere = false;

    const isStillInBounds = this.isGuardOnBoard();
    if (isStillInBounds) {
      const steppedTile = this.tiles.getCell(this.guard.row, this.guard.col);
      steppedTile.guardVisitDirection = resolveTileVisitDirection(steppedTile, this.guard);
      steppedTile.isGuardHere = true;
      steppedTile.guardVisits += 1;
    }
  };

  public resetMap = (tiles: Matrix<MapTile>, guard: Guard) => {
    this.tiles = this.tiles;
    this.guard = guard;
  };

  public runSimulation = async (printSimulation: boolean) => {
    while (this.isGuardOnBoard()) {
      if (printSimulation) {
        console.clear();
        console.log(this.tiles);
      }

      this.performNextStep();

      if (printSimulation) {
        await Bun.sleep(100);
      }
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
    return this.tiles.getFlattenedValues((tile) => tile.guardVisits > 0).length;
  };

  public getVisitedTilesIndices = () => {
    return this.tiles.getFlattenedIndices((tile) => tile.guardVisits > 0);
  };
}
