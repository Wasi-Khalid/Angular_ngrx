  export class Currency {
    name: string;
    value: string;
    curr: boolean;
  
    constructor(name: string, value: string, curr: boolean) {
      this.name = name;
      this.value = value;
      this.curr = curr;
    }
  }
  