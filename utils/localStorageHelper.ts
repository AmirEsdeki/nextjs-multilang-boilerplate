type Key = string;
type Read<T> = string | {} | T[] | number | boolean | undefined;

export function store(key: Key, data: any, storage = window.localStorage): any {
  if (!window.localStorage || !key) {
    return;
  }
  storage.setItem(key, JSON.stringify(data));
}

export function read(key: Key, storage = window.localStorage): Read<any> {
  if (!storage || !key) {
    return;
  }
  const item: any = storage.getItem(key);
  if (!item) {
    return;
  }

  const parse = JSON.parse;
  try {
    return parse(item);
  } catch (error) {
    return parse(`"${item}"`);
  }
}

export function remove(key: Key, storage = window.localStorage): any {
  if (!storage || !key) {
    return;
  }

  storage.removeItem(key);
}
