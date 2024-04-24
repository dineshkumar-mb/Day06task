                        //in this code we can see the complete details of the person using a class//

                        // 1. constructors used for  create and initialize objects  (blueprint).
                        // 2. this keyword is used to call the object (details of the person)




class Person {
    constructor(name, age, country,work,hobbies,) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.work = work;
        this.hobbies = hobbies;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
        console.log(`work: ${this.work}`);
        console.log(`hobbies: ${this.hobbies}`);
    }
}

// For instance
const person1 = new Person("Dinesh", 30, "salem","fullstack-devoleper","reading_books");
person1.displayDetails();

const person2 = new Person("kumar", 25, "Chennai","programmer","singing");
person2.displayDetails();



                    // // console    
                    
                    
                    //     //  Name: Dinesh                        !
                    //     // Age: 30                  //person1   !
                    //     // Country: salem                       !
                    //     // work: fullstack-devoleper            !
                    //     // hobbies: reading_books               !
                    //                                             !             // Name: kumar
                    //                                             !           // Age: 25                  //person2
                    //                                             !           // Country: Chennai
                    //                                             !           // work: programmer
                    //                                             !           // hobbies: singing
