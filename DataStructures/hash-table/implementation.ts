type BucketValue<T> = T | undefined;

type Bucket<T> = [key: string, value: BucketValue<T>][] | undefined;

interface IHashTable<T> {
  hash(key: string): number;
  set(key: string, value: T): void;
  get(key: string): void;
  remove(key: string): void;
  display(): void;
}

export class HashTable<T> implements IHashTable<T> {
  private table: Array<Bucket<T>>;
  private size: number;

  constructor(size: number) {
    this.table = new Array<Bucket<T>>(size)
    this.size = size;
  }

  hash(key: string): number {
    let total: number = 0;

    for (let i: number = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key: string, value: T): void {
    const index = this.hash(key);

    let bucket: Bucket<T> = this.table[index]

    if (!bucket) {
      bucket = [[key, value]];
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value])
      }
    }

    this.table[index] = bucket;
  }

  get(key: string): BucketValue<T> {
    const index = this.hash(key);

    let bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key);

      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }

    return undefined;
  }

  remove(key: string): void {
    const index = this.hash(key);

    let bucket = this.table[index];

    if (bucket) {
      bucket = bucket.filter(item => item[0] !== key);
    }

    this.table[index] = bucket;
  }

  display(): void {
    for (let i: number = 0; i < this.table.length; i++) {
      const bucket = this.table[i];

      if (bucket) {
        for (let j: number = 0; j < bucket.length; j++) {
          console.log(bucket[j][0], bucket[j][1]);
        }
      }
    }
  }
}