export default class Customer {
     constructor(customerId, firstName, middleName = "", dateofBirth, sex, race, addressID, identificationID, height, weight, eyeColour, hairColour, marks, occupation) {
          this.customerId = customerId;
          this.firstName = firstName;
          this.middleName = middleName;
          this.dateofBirth = dateofBirth;
          this.sex = sex;
          this.race = race;
          this.addressID = addressID;
          this.identificationID = identificationID;
          this.height = height;
          this.weight = weight;
          this.eyeColour = eyeColour;
          this.hairColour = hairColour;
          this.marks = marks;
          this.occupation = occupation;
     }

        // customer functions
}