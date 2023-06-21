//This program displays the power of empathy by showing how emotion and understanding can lead to meaningful connections between people.

//1. Create a class called Person that contains a variable to store the name of the person
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//2. Create a function that receives two Person objects and prints out a message of “[Name] knows how [Name2] feels”
function buildConnection(person1: Person, person2: Person): void {
  console.log(`${person1.name} knows how ${person2.name} feels.`);
}

//3. Create two instances of Person using the Person constructor
let person1 = new Person("John");
let person2 = new Person("Jane");

//4. Call the buildConnection function with the two Person objects
buildConnection(person1, person2);

//5. Create a class called Empathy that contains a method called practiceEmpathy
class Empathy {
  //6. The practiceEmpathy method prints out a message of “[Name] is practicing empathy with [Name2]”
  public practiceEmpathy(person1: Person, person2: Person): void {
    console.log(`${person1.name} is practicing empathy with ${person2.name}`);
  }
}

//7. Create an instance of the Empathy class
let empathy = new Empathy();

//8. Call the practiceEmpathy method with the two Person objects
empathy.practiceEmpathy(person1, person2);

//9. Create a function called expressFeelings that receives two Person objects and two strings of feelings
function expressFeelings(person1: Person, person2: Person, feeling1: string, feeling2: string): void {
  //10. The expressFeelings function prints out two messages of “[Name] is feeling [Feeling1]” and “[Name2] is feeling [Feeling2]”
  console.log(`${person1.name} is feeling ${feeling1}`);
  console.log(`${person2.name} is feeling ${feeling2}`);
}

//11. Call the expressFeelings function with the two Person objects and strings of feelings
expressFeelings(person1, person2, "happy", "sad");

//12. Create a class called Support that contains a method called offerSupport
class Support {
  //13. The offerSupport method prints out a message of “[Name] offers support to [Name2]”
  public offerSupport(person1: Person, person2: Person): void {
    console.log(`${person1.name} offers support to ${person2.name}`);
  }
}

//14. Create an instance of the Support class
let support = new Support();

//15. Call the offerSupport method with the two Person objects
support.offerSupport(person1, person2);

//16. Create a function called empathize that receives two Person object
function empathize(person1: Person, person2: Person): void {
  //17. The empathize function prints out a message of “[Name] understands what [Name2] is going through”
  console.log(`${person1.name} understands what ${person2.name} is going through`);
}

//18. Call the empathize function with the two Person objects
empathize(person1, person2);

//19. Create a class called Reconciliation that contains a method called reconcile
class Reconciliation {
  //20. The reconcile method prints out a message of “[Name1] and [Name2] are reconciled”
  public reconcile(person1: Person, person2: Person): void {
    console.log(`${person1.name} and ${person2.name} are reconciled`);
  }
}

//21. Create an instance of the Reconciliation class
let reconciliation = new Reconciliation();

//22. Call the reconcile method with the two Person objects
reconciliation.reconcile(person1, person2);

//23. Create a function called understand that receives two Person objects
function understand(person1: Person, person2: Person): void {
  //24. The understand function prints out a message of “[Name] understands [Name2]” 
  console.log(`${person1.name} understands ${person2.name}`);
}

//25. Call the understand function with the two Person objects
understand(person1, person2);

//26. Create a class called Respect that contains a method called showRespect
class Respect {
  //27. The showRespect method prints out a message of “[Name] respects [Name2]”
  public showRespect(person1: Person, person2: Person): void {
    console.log(`${person1.name} respects ${person2.name}`);
  }
}

//28. Create an instance of the Respect class
let respect = new Respect();

//29. Call the showRespect method with the two Person objects 
respect.showRespect(person1, person2);

//30. Create a function called bond that receives two Person objects
function bond(person1: Person, person2: Person): void {
  //31. The bond function prints out a message of “[Name1] and [Name2] are bonded” 
  console.log(`${person1.name} and ${person2.name} are bonded`);
}

//32. Call the bond function with the two Person objects
bond(person1, person2);

//33. Create a class called SupportiveRelationship that contains a method called buildSupportiveRelationship
class SupportiveRelationship {
  //34. The buildSupportiveRelationship method prints out a message of “[Name1] and [Name2] have a supportive relationship” 
  public buildSupportiveRelationship(person1: Person, person2: Person): void {
    console.log(`${person1.name} and ${person2.name} have a supportive relationship`);
  }
}

//35. Create an instance of the SupportiveRelationship class
let supportiveRelationship = new SupportiveRelationship();

//36. Call the buildSupportiveRelationship method with the two Person objects
supportiveRelationship.buildSupportiveRelationship(person1, person2);

//37. Create a function called makeAmends that receives two Person objects
function makeAmends(person1: Person, person2: Person): void {
  //38. The makeAmends function prints out a message of “[Name1] and [Name2] have made amends”
  console.log(`${person1.name} and ${person2.name} have made amends`);
}

//39. Call the makeAmends function with the two Person objects
makeAmends(person1, person2);

//40. Create a class called Friendship that contains a method called formFriendship
class Friendship {
  //41. The formFriendship method prints out a message of “[Name1] and [Name2] are now friends” 
  public formFriendship(person1: Person, person2: Person): void {
    console.log(`${person1.name} and ${person2.name} are now friends`);
  }
}

//42. Create an instance of the Friendship class
let friendship = new Friendship();

//43. Call the formFriendship method with the two Person objects
friendship.formFriendship(person1, person2);

//44. Create a function called shareHappiness that receives two Person objects
function shareHappiness(person1: Person, person2: Person): void {
  //45. The shareHappiness function prints out a message of “[Name1] and [Name2] share their happiness”
  console.log(`${person1.name} and ${person2.name} share their happiness`);
}

//46. Call the shareHappiness function with the two Person objects
shareHappiness(person1, person2);

//47. Create a class called Love that contains a method called buildLove
class Love {
  //48. The buildLove method prints out a message of “[Name1] and [Name2] are in love”
  public buildLove(person1: Person, person2: Person): void {
    console.log(`${person1.name} and ${person2.name} are in love`);
  }
}

//49. Create an instance of the Love class
let love = new Love();

//50. Call the buildLove method with the two Person objects
love.buildLove(person1, person2);