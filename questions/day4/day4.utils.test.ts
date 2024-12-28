import { test, expect, describe } from "bun:test";
import {
  countXmasOnInput,
  resolveColumnFromMatrix,
  resolveLeftDiagonalCords,
  resolveRightDiagonalCords,
  reverseInput,
} from "./day4.utils";

const TESTING_MATRIX = [
  "MMMSXXMASM",
  "MSAMXMSMSA",
  "AMXSXMAAMM",
  "MSAMASMSMX",
  "XMASAMXAMM",
  "XXAMMXXAMA",
  "SMSMSASXSS",
  "SAXAMASAAA",
  "MAMMMXMMMM",
  "MXMXAXMASX",
];

describe("countXmasOnInput", () => {
  test("zero instance test", () => {
    expect(countXmasOnInput("MSAMASMSMX")).toBe(0);
    expect(countXmasOnInput("MAMMMXMMMM")).toBe(0);
  });
  test("single instance test", () => {
    expect(countXmasOnInput("MMMSXXMASM")).toBe(1);
    expect(countXmasOnInput("MXMXAXMASX")).toBe(1);
  });
  test("multi instance test", () => {
    expect(countXmasOnInput("XMASXMASXM")).toBe(2);
    expect(countXmasOnInput("XMASXMASXMAS")).toBe(3);
  });
});

describe("reverseInput", () => {
  test("reverse multi character line", () => {
    expect(reverseInput("XMASXMASXM")).toBe("MXSAMXSAMX");
    expect(reverseInput("XXAMMXXAMA")).toBe("AMAXXMMAXX");
  });
  test("reverse single character line", () => {
    expect(reverseInput("X")).toBe("X");
  });
  test("reverse empty line", () => {
    expect(reverseInput("")).toBe("");
  });
});

describe("resolveColumnFromMatrix", () => {
  test("resolve column of regular matrix", () => {
    expect(resolveColumnFromMatrix(TESTING_MATRIX, 0)).toBe("MMAMXXSSMM");
    expect(resolveColumnFromMatrix(TESTING_MATRIX, 4)).toBe("XXXAAMSMMA");
    expect(resolveColumnFromMatrix(TESTING_MATRIX, 4)).toBe("XXXAAMSMMA");
    expect(resolveColumnFromMatrix(TESTING_MATRIX, TESTING_MATRIX[0].length - 1)).toBe("MAMXMASAMX");
  });
  test("resolve column of small matrix", () => {
    expect(resolveColumnFromMatrix(["MX", "AA"], 0)).toBe("MA");
    expect(resolveColumnFromMatrix(["MX", "AA"], 1)).toBe("XA");
  });
  test("resolve column of single line", () => {
    expect(resolveColumnFromMatrix(["MX"], 0)).toBe("M");
    expect(resolveColumnFromMatrix(["MX"], 1)).toBe("X");
  });
  test("resolve column empty matrix", () => {
    expect(resolveColumnFromMatrix([], 0)).toBe("");
  });
});

describe("resolveRightDiagonalCords", () => {
  test("resolve right diagonal cords of regular matrix", () => {
    expect(resolveRightDiagonalCords(0, 0, TESTING_MATRIX)).toEqual({ row: 0, col: 0 });
    expect(resolveRightDiagonalCords(0, 5, TESTING_MATRIX)).toEqual({ row: 0, col: 5 });
    expect(resolveRightDiagonalCords(2, 7, TESTING_MATRIX)).toEqual({ row: 0, col: 9 });
    expect(resolveRightDiagonalCords(TESTING_MATRIX.length - 1, 0, TESTING_MATRIX)).toEqual({ row: 0, col: 9 });
    expect(resolveRightDiagonalCords(TESTING_MATRIX.length - 1, 1, TESTING_MATRIX)).toEqual({ row: 1, col: 9 });
  });
});

describe("resolveLeftDiagonalCords", () => {
  test("resolve left diagonal cords of regular matrix", () => {
    expect(resolveLeftDiagonalCords(0, 0)).toEqual({ row: 0, col: 0 });
    expect(resolveLeftDiagonalCords(0, 5)).toEqual({ row: 0, col: 5 });
    expect(resolveLeftDiagonalCords(2, 7)).toEqual({ row: 0, col: 5 });
    expect(resolveLeftDiagonalCords(TESTING_MATRIX.length - 1, 0)).toEqual({ row: TESTING_MATRIX.length - 1, col: 0 });
    expect(resolveLeftDiagonalCords(TESTING_MATRIX.length - 1, 0)).toEqual({ row: TESTING_MATRIX.length - 1, col: 0 });
    expect(resolveLeftDiagonalCords(TESTING_MATRIX.length - 1, 9)).toEqual({ row: 0, col: 0 });
    expect(resolveLeftDiagonalCords(TESTING_MATRIX.length - 1, 8)).toEqual({ row: 1, col: 0 });
    expect(resolveLeftDiagonalCords(TESTING_MATRIX.length - 1, 4)).toEqual({ row: 5, col: 0 });
  });
});
