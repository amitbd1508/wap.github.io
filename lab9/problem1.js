"use restrict";
class LinkedList {
  constructor(value=undefined, next=null) {
    this.value = value;
    this.next = next;
  }

  add(value) {
    if (this.value === undefined) {
      this.value = value;
      this.next = null;
    } else {
      let current = this;
      while (current.next != null) {
        current = current.next;
      }
      current.next = { value, next: null };
    }
  }

  remove(value) {
    if (this.value !== undefined) {
      let current = this;
      let previous = undefined;

      while (current != null) {
        if (current.value === value) {
          if (previous === undefined) {
            this.value = current.next === null ? null : current.next.value;
            this.next = current.next === null ? null : current.next.next;
          } else {
            previous.next = current.next;
          }
          break;
        }
        previous = current;
        current = current.next;
      }
    }
    return false;
  }

  print() {
    let arr = [];
    let current = this;
    while (current != null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(`LinkedList{ ${arr.toString()} }`);
    return true;
  }
}


let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}