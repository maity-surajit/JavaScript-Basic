class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
  class Dog extends Animal {
    speak() {
      super.speak(); // `super` doesn't work in an arrow function
      console.log("Dog barks");
    };
  }
  
  const dog = new Dog();
  dog.speak(); // Error: super is not defined
  