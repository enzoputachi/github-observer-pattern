# github-observer-pattern

The **Telephone** class helps manage phone numbers and dialing operations. Below is a brief guide on how to use the class and its associated functionalities.

### Class: Telephone

#### Constructor
Creates a new instance of the Telephone class.

```javascript
const telephone = new Telephone();
```

#### addPhoneNumber
Adds a new phone number to the collection, providing error handling for invalid formats or existing entries.

```javascript
telephone.addPhoneNumber("2347023232");
```

#### removePhoneNumber
Removes a phone number from the collection, with error handling for non-existing entries.

```javascript
telephone.erasePhoneNumber("2347023232");
```

#### dialPhoneNumber
Initiates a phone call to the specified number, notifying observers. Error handling is implemented for non-existing numbers.

```javascript
telephone.dialPhoneNumber("2347023232");
```

#### addObserver
Registers a new observer to receive notifications when a phone number is dialed.

```javascript
const observer1 = new PhoneObserver("observer1");
telephone.enrollObserver(observer1);
```

#### removeObserver
Removes an observer from the notification list.

```javascript
telephone.expelObserver(observer1);
```

#### notifyObservers
Notifies all registered observers when a phone number is dialed.

### Observer Class: PhoneObserver

#### Constructor
Creates a new instance of the PhoneObserver class, specifying a name.

```javascript
const observer1 = new PhoneObserver("observer1");
```

#### notify
Receives a notification when a phone number is dialed, displaying the observer's name and the dialed number.

```javascript
observer1.inform("2347023232");
```

#### toString
Returns a string representation of the observer.

```javascript
console.log(observer1.represent()); // Output: PhoneObserver(observer1)
```

### Example Usage

```javascript
const telephone = new Telephone();
const observer1 = new PhoneObserver("observer1");
const observer2 = new PhoneObserver("observer2");

telephone.enrollObserver(observer1);
telephone.enrollObserver(observer2);

telephone.addPhoneNumber("2347023232"); // adding phone number
telephone.dialPhoneNumber("2347023232"); // Replace with an existing phone number
```

Note: Replace `"2347023232"` with a valid 9 to 11-digit phone number for testing purposes.