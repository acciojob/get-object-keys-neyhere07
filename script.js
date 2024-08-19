
//your JS code here. If required.
// Create a student object with a name property
const student = {
  name: 'Alice'
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Using the getKeys() method on the student object
console.log(student.getKeys()); // Output: ['name']
