export function removeTargetFromArray<T extends unknown>(arr: T[], target: T): T[];
export function removeTargetFromArray<T extends unknown>(arr: T[], targetIndex: number): T[];

export function removeTargetFromArray<T extends unknown>(arr: T[], target: T | number) {
  const targetIndex = typeof target === 'number' ? target : arr.indexOf(target);

  return arr.filter((_, index) => index !== targetIndex);
}

export function replaceTargetFromArray<T extends unknown>(arr: T[], target: T, replace: T): T[];
export function replaceTargetFromArray<T extends unknown>(arr: T[], targetIndex: number, replace: T): T[];

export function replaceTargetFromArray<T extends unknown>(arr: T[], target: T | number, replace: T) {
  const targetIndex = typeof target === 'number' ? target : arr.indexOf(target);

  const beforeTargetArr = arr.slice(0, targetIndex);
  const afterTargetArr = arr.slice(targetIndex + 1);

  if (targetIndex < 1) {
    return [replace, ...afterTargetArr];
  } else {
    return [...beforeTargetArr, replace, ...afterTargetArr];
  }
}
