import type { TopdownMap } from "../map/map";

export const runMapSimulation = async (
  map: TopdownMap,
  printSimulation: boolean = false
) => {
  while (map.isGuardOnBoard()) {
    if (printSimulation) {
      console.clear();
      console.log(map.tiles);
    }

    __performSimulationStep(map);

    if (printSimulation) {
      await Bun.sleep(100);
    }
  }
};

export const runMapSimulationWithLoopDetection = async (
  map: TopdownMap,
  printSimulation: boolean = false
) => {
  while (map.isGuardOnBoard() && !map.loopDetected) {
    if (printSimulation) {
      console.clear();
      console.log(map.tiles);
    }

    __performSimulationStep(map);

    if (printSimulation) {
      await Bun.sleep(100);
    }
  }

  return map.loopDetected;
};

const __performSimulationStep = (map: TopdownMap) => {
  let isGuardBlocked = map.isGuardBlocked();
  while (isGuardBlocked) {
    map.rotateGuard();
    isGuardBlocked = map.isGuardBlocked();
  }

  map.moveGuard();
};
