export type GuardDirection = "up" | "down" | "left" | "right";
export type Guard = {
  row: number;
  col: number;
  direction: GuardDirection;
};
