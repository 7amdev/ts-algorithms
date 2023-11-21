namespace StackImplementation {
  type QNode<T> = {
    value: T,
    previous?: QNode<T>
  };
  
  class Stack<T> {
    public length: number;
    private head?: QNode<T>;

    constructor () {
      this.length = 0;
      this.head = undefined;
    }

    push (item: T): void {
      const node = { value: item } as QNode<T>;
      
      if (this.length === 0) {
        this.length++;
        this.head = node;
        return;
      }

      this.length++;
      node.previous = this.head;
      this.head = node;
    }
    pop (): T | undefined {
      this.length = Math.max(0, this.length - 1);
      const node = this.head;
      
      if (this.length === 0) {
        this.head = undefined;
        return node?.value;
      }

      this.head = node?.previous;      
      return node?.value;
    }
    peek (): T | undefined{
      return this.head?.value;
    }
  }

  const stack = new Stack();
 
  stack.push('Hello');
  stack.push('world');
  stack.push(999);

  console.log('Peek:', stack.peek());

  console.log('Pop:', stack.pop());
  console.log('Peek:', stack.peek());
  console.log('Pop:', stack.pop());
  console.log('Pop:', stack.pop());
  console.log('Pop:', stack.pop());
  console.log('Pop:', stack.pop());
  console.log('length:', stack.length);
  stack.push('world');
  stack.push('Hello');
  console.log('Peek:', stack.peek());
  console.log('length:', stack.length);
  

}