type QNode<T> = {
  value: T,
  next?: QNode<T>,
};

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor () {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue (item: T): void {
    const node = { value: item } as QNode<T>;
    this.length++;

    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }
  deque (): T | undefined {
    if (!this.head) {
      return;
    }
    
    this.length = Math.max(0, this.length - 1);

    const node_rm = this.head;

    this.head = this.head.next;

    node_rm.next = undefined;

    return node_rm.value;
  }
  peek (): T | undefined {
    return this.head?.value;
  }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue('Alfredo');
queue.enqueue('Monteiro');
queue.enqueue(1987);

queue.deque();
queue.deque();

console.log('Head:', queue.peek());
console.log('Length', queue.length);


