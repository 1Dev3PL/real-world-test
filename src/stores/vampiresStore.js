import { observable, action } from 'mobx';

class VampiresStore {
  @observable vampires = [
    {id: 0, name: "Crawforlow Sanswoon", superPower: "Very powerful", age: 999},
    {id: 1, name: "Robinula Williaswoop", superPower: "Flying", age: 36},
    {id: 2, name: "Dracmorris De Smicourt", superPower: "No", age: 50},
    {id: 3, name: "Wator Reedall", superPower: "Invisibility", age: 5},
    {id: 4, name: "Owensfang Evildan", superPower: "Very fast", age: 96},
    {id: 5, name: "Gardnersef De Jacourt", superPower: "Dark magic", age: 34}
  ]

  @observable sortBy = undefined;
  @observable sortedVampires = [...this.vampires];

  @observable formValues = {
    name: '',
    superPower: '',
    age: '',
  };

  @observable validationMessages = {
    name: undefined,
    superPower: undefined,
    age: undefined
  };

  @action setSortBy(sortBy) {
    this.sortBy = sortBy;
  }

  @action sortVampires() {
    switch (this.sortBy) {
      case "nameAsc":
        this.sortedVampires = [...this.vampires].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        break;
      case "nameDes":
        this.sortedVampires = [...this.vampires].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
        break;
      case "powerAsc":
        this.sortedVampires = [...this.vampires].sort((a, b) => a.superPower.toLowerCase() > b.superPower.toLowerCase() ? 1 : -1);
        break;
      case "powerDes":
        this.sortedVampires = [...this.vampires].sort((a, b) => a.superPower.toLowerCase() < b.superPower.toLowerCase() ? 1 : -1);
        break;
      case "ageAsc":
        this.sortedVampires = [...this.vampires].sort((a, b) => a.age > b.age ? 1 : -1);
        break;
      case "ageDes":
        this.sortedVampires = [...this.vampires].sort((a, b) => a.age < b.age ? 1 : -1);
        break;
      default:
        this.sortedVampires = [...this.vampires];
    }

  }

  @action setName(name) {
    this.formValues.name = name;
  }

  @action setPower(superPower) {
    this.formValues.superPower = superPower;
  }

  @action setAge(age) {
    this.formValues.age = age;
  }

  @action addVampire() {
    if (!this.formValues.name.replace(/\s/g,'')) {
      this.setNameValidationMessage("Enter name!");
    } else if (!!Number(this.formValues.name)) {
      this.setNameValidationMessage("Name must be not numeric!");
    } else if (this.vampires.some((el) => this.formValues.name === el.name)) {
      this.setNameValidationMessage("Name must be unique!");
    } else {
      this.setNameValidationMessage(undefined);
    }

    if (!this.formValues.superPower.replace(/\s/g,'')) {
      this.setPowerValidationMessage("Enter super power!");
    } else if (!!Number(this.formValues.superPower)) {
      this.setPowerValidationMessage("Super power must be not numeric!");
    } else if (this.vampires.some((el) => this.formValues.superPower === el.superPower)) {
      this.setPowerValidationMessage("Super power must be unique!");
    } else {
      this.setPowerValidationMessage(undefined);
    }

    if (!this.formValues.age) {
      this.setAgeValidationMessage("Enter age!");
    } else if (this.formValues.age <= 0){
      this.setAgeValidationMessage("Age must be positive number!");
    } else {
      this.setAgeValidationMessage(undefined);
    }

    if (
      !this.validationMessages.name
      && !this.validationMessages.superPower
      && !this.validationMessages.age
    ){
      this.vampires.push({
        id: Date.now(),
        name: this.formValues.name,
        superPower: this.formValues.superPower,
        age: Number(this.formValues.age)
      })
      this.sortVampires();
      this.clearForm();
    }
  }

  @action clearForm() {
    this.formValues.name = '';
    this.formValues.superPower = '';
    this.formValues.age = '';
  }

  @action setNameValidationMessage(message) {
    this.validationMessages.name = message;
  }

  @action setPowerValidationMessage(message) {
    this.validationMessages.superPower = message;
  }

  @action setAgeValidationMessage(message) {
    this.validationMessages.age = message;
  }
}

export default new VampiresStore();