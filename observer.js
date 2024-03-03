class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
    }
  
    // Method to add a new phone number with error handling
    addPhoneNumber(phoneNumber) {
      if (!phoneNumber) {
        console.log('Error: Please provide a phone number.');
        return;
      }
  
      if (!/^\d{9,11}$/g.test(phoneNumber)) {
        console.log('Error: Invalid phone number format. Must be 9 to 11 digits.');
        return;
      }
  
      if (!this.phoneNumbers.has(phoneNumber)) {
        this.phoneNumbers.add(phoneNumber);
        console.log(`Phone number ${phoneNumber} added successfully.`);
      } else {
        console.log(`Error: Phone number ${phoneNumber} already exists.`);
      }
    }

    //Method to remove a phone number with error handling
    removePhoneNumber(phoneNumber) {
        if (!phoneNumber) {
            console.log('Error: Please provide a phone number.');
            return;
        }

        if (this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
            console.log(`Phone number ${phoneNumber} removed successfully.`);
        } else {
            console.log(`Error: Phone number ${phoneNumber} does not exist.`);
        }
    }

    //Method to dial phone number with error handling
    dialPhoneNumber(phoneNumber) {
        if (!phoneNumber) {
            console.log('Error: Please provide a phone number.');
            return;
          }

          if (this.phoneNumbers.has(phoneNumber)) {
            console.log(`Dialing ${phoneNumber}...`);
            this.notifyObservers(phoneNumber);
          } else {
            console.log(`Error: Phone number ${phoneNumber} not found. Cannot dial.`);
          }
    }

    //Method to register observers
    addObserver(observer) {
        this.observers.push(observer);
    }

    //Method to remove observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    //Method to notify observers when a phone number is dialed
    notifyObservers(phoneNumber) {
        for (const observer of this.observers) {
            observer.notify(phoneNumber);
        }
    }
}

//Observer class to handle notifications
class PhoneObserver {
    constructor(name) {
        this.name = name;
    }

    notify(phoneNumber) {
        console.log(`${this.name} received notification: dialing ${phoneNumber}`);
        return;
    }

    toString() {
        return `PhoneObserver(${this.name})`;
    }
}

const telephone = new Telephone();
const observer1 = new PhoneObserver("observer1");
const observer2 = new PhoneObserver("observer2");

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("2347023232"); // adding phone number
telephone.dialPhoneNumber("2347023232"); // Replace with an existing phone number


