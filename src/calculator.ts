export function addition(...value: number[]): number {
  return value.reduce((acc, value) => acc + value, 0);
}

export function subtraction(...value: number[]): number {
  if (value.length === 0) return 0;
  return value.reduce((acc, value) => acc - value);
}

export function multiplication(...value: number[]): number {
  if (value.length === 0) return 0;
  return value.reduce((acc, value) => acc * value);
}

export function division(...value: number[]): number {
  if (value.length === 0) return 0;
  return value.reduce((acc, value) => {
    if (value === 0) throw new Error("division for zero");
    else return acc / value;
  });
}
