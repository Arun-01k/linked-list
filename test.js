import { LinkedList } from "./linked-list";

test("prepend and other methods", () => {
  const list = new LinkedList();

  list.append(10);
  list.append(20);
  list.prepend(30);

  expect(list.head.value).toBe(30);
  expect(list.head.nextNode.value).toBe(10);
  expect(list.size()).toBe(3);
  expect(list.getHead()).toBe(30);
  expect(list.tail()).toBe(20);
  expect(list.at(2)).toBe(20);
  expect(list.at(10)).toBe(undefined);
  expect(list.pop()).toBe(30);
  expect(list.head.value).toBe(10);
  expect(list.contains(200)).toBe(false);
  expect(list.contains(20)).toBe(true);
});

test("return undefined for empty list", () => {
  const list = new LinkedList();

  expect(list.getHead()).toBe(undefined);
  expect(list.tail()).toBe(undefined);
  expect(list.at(2)).toBe(undefined);
  expect(list.at(0)).toBe(undefined);
  expect(list.pop()).toBe(undefined);
  expect(list.contains(-1)).toBe(false);
});

test("long list methods", () => {
  const list = new LinkedList();

  list.append(10);
  list.append(20);
  list.append(30);
  list.append(20);
  list.append(50);

  expect(list.findIndex(20)).toBe(1);
  expect(list.findIndex(60)).toBe(-1);
});
