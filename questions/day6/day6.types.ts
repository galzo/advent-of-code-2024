export type GuardDirection = "up" | "down" | "left" | "right";
export type Guard = {
  direction: GuardDirection;
  currentPosition: TileCoordinates;
  startPosition: TileCoordinates;
};

export type TileCoordinates = {
  row: number;
  col: number;
};

export type MapTileType = "tile" | "block" | "userBlock" | "guard";
