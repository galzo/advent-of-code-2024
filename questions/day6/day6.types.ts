export type GuardDirection = "up" | "down" | "left" | "right";
export type Guard = TileCoordinates & {
  direction: GuardDirection;
};

export type TileCoordinates = {
  row: number;
  col: number;
};

export type MapTileType = "tile" | "block" | "userBlock" | "guard";
