export interface CacheItem<T> {
  key: string;
  value: T;
  createdAt: Date;
}

export class LRU<T> {
  private readonly cacheSize: number;
  private readonly cacheList: Map<string, CacheItem<T>>;
  private readonly expireTime: number;

  // default size for the cache is 10 items
  // default expireTime is 3600
  constructor(size: number = 10, expireTime: number = 3600) {
    this.cacheSize = size;
    this.expireTime = expireTime;
    this.cacheList = new Map<string, CacheItem<T>>();
  }

  getCache() {
    return this.cacheList;
  }

  // Add an item to the cache, evicting the least recently used item if the cache is full
  addItem(key: string, value: CacheItem<T>) {
    // check if the item is already in the cache
    // update its value and moved to the end of the map
    const item = this.cacheList.get(key);
    if (item) {
      this.cacheList.delete(key);
      this.cacheList.set(key, item);
      console.log(this.cacheList);
      console.log("------");
      return;
    }

    // find the least recently used item and remove it from the cache
    // get the list of keys in the cache and get the first one
    if (this.cacheList.size >= this.cacheSize) {
      // remove the least recently used item from the cache
      this.cacheList.delete(this.cacheList.keys().next().value);
    }
    this.cacheList.set(key, value);
    console.log(this.cacheList);
    console.log("------");
  }

  // Retrieve an item from the cache, and update its position as the most recently used item
  getItem(key: string): CacheItem<T> | undefined {
    const item = this.cacheList.get(key);
    if (item) {
      this.cacheList.delete(key);
      this.cacheList.set(key, item);
      return item;
    }
    return undefined;
  }

  // Remove an item from the cache by its key
  deleteItem(key: string): void {
    this.cacheList.delete(key);
  }

  // Remove all expired items from cache
  deleteExpiredItems(): void {
    // iterate over the items
    // check if the item is expired to remove from cache
    for (let [key, value] of this.cacheList.entries()) {
      const now = Date.now();
      const timeDiff: number = now - value.createdAt.getTime();
      if (timeDiff > this.expireTime) {
        this.deleteItem(key);
      }
    }
    console.log(this.cacheList);
  }

  // Clear the cache
  clearCache(): void {
    this.cacheList.clear();
  }
}
