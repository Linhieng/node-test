class Dong {
  private name
  constructor() {
    this.name = 'dong'
  }
  hello() {
    return `I'm ${this.name}`
  }
}

const dong = new Dong()
console.log(dong.hello())
