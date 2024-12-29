import util from "util";

export class MapTile {
  isBlock: boolean;
  isVisited: boolean;

  constructor(isBlock: boolean, isVisited: boolean) {
    this.isBlock = isBlock;
    this.isVisited = isVisited;
  }

  [util.inspect.custom]() {
    if (this.isBlock) return "#";
    return this.isVisited ? "x" : ".";
  }

  toString() {
    if (this.isBlock) return "#";
    return this.isVisited ? "x" : ".";
  }
}
