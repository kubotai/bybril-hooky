export function queryUserIdAsync(userName: string): Promise<number> {
  return Promise.resolve(Math.floor(Math.random() * 100) + 1);
}

export function queryHistoryAsync(): Promise<string[]> {
  return Promise.resolve(["jablko", "hruska", "banan"]);
}
