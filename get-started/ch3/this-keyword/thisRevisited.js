const homework = {
  study() {
    // this refers to the object on which study() is called
    console.log(`Please study ${ this.topic }`);
  }
};

const jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();
// Please study JS

const mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();
// Please study Math