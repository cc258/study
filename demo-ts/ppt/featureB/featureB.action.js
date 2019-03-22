import { 
    A,
    B,
    C,
    D
} from "./featureA.constants";

export function getA() {
  return { type: A, data: 1 };
}

export function getB() {
  return { type: B, data: 2 };
}

export function getC() {
  return { type: C, data: 3 };
}

export function getD() {
  return { type: D, data: 4 };
}
