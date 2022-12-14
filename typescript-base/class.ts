class Animal {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    
    run() {
      return `${this.name} is running`
    }

  }
  const snake = new Animal('lily')
  
  // 继承的特性
//   class Dog extends Animal {
//     bark() {
//       return `${this.name} is barking`
//     }
//   }
  
//   const xiaobao = new Dog('xiaobao')
//   console.log(xiaobao.run())
//   console.log(xiaobao.bark())
  
  // 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
  class Cat extends Animal {
    constructor(name: string) {
      super(name)
    }
    // 重写 父类的 run() 方法
    run() {
      return 'Meow, ' + super.run()
    }

  }
  const maomao = new Cat('maomao')
  console.log(maomao.run())
  

  class Demo {

    constructor(){

    }
    // #region 声明
    public log(): void;
    public log(arg1: string): void;
    public log(arg1: number, arg2: string): void;
    // #endregion

    // 实现
    log(arg1?: string | number, arg2?: string) {

    }
 
}