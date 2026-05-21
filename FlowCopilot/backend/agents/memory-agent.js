let memoryStore = [];

export function saveMemory(data) {
  memoryStore.push(data);
}

export function getMemory() {
  return memoryStore;
}