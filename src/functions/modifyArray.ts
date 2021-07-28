export function removeTargetFromArray<T extends unknown>(arr: T[], target: T): T[];
export function removeTargetFromArray<T extends unknown>(arr: T[], targetIndex: number): T[];

export function removeTargetFromArray<T extends unknown>(arr: T[], target: T | number) {
  const targetIndex = typeof target === 'number' ? target : arr.indexOf(target);

  return arr.filter((_, index) => index !== targetIndex);
}
