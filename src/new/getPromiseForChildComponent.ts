const promisesMap = new Map<
  string,
  { promise: Promise<void>; resolve: () => void }
>();

export const getPromiseForChildComponent = (
  id: string
): Promise<void> | null => {
  const cachedPromiseEntry = promisesMap.get(id);
  if (cachedPromiseEntry != null) {
    return cachedPromiseEntry.promise;
  }
  let resolve;
  const promise = new Promise<void>((r) => {
    resolve = r;
  });
  promisesMap.set(id, { promise, resolve });
  return promise;
};
