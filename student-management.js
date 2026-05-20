class Student
{
    constructor(id, name, email, course) 
  {
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
    }
}

class StudentManagement 
{
    constructor()
  {
        this.students = [];
    }

    // Add a new student
    addStudent(student) {
        this.students.push(student);
        console.log("Student added successfully.");
    }

    // Display all students
    getAllStudents() {
        console.log("\n--- Student List ---");
        this.students.forEach(student => {
            console.log(
                `ID: ${student.id}, Name: ${student.name}, Email: ${student.email}, Course: ${student.course}`
            );
        });
    }

    // Find student by ID
    getStudentById(id) {
        const student = this.students.find(s => s.id === id);
        if (student) {
            console.log("\nStudent Found:");
            console.log(student);
        } else
        {
            console.log("Student not found.");
        }
    }

    // Update student details
    updateStudent(id, name, email, course) {
        const student = this.students.find(s => s.id === id);
        if (student) {
            student.name = name;
            student.email = email;
            student.course = course;
            console.log("Student updated successfully.");
        } else {
            console.log("Student not found.");
        }
    }

    // Delete student by ID
    deleteStudent(id) {
        const index = this.students.findIndex(s => s.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log("Student deleted successfully.");
        } else {
            console.log("Student not found.");
        }
    }
}

const sms = new StudentManagement();

// Add students
sms.addStudent(new Student(1, "Sakshi", "sakshi@example.com", "Computer Science"));
sms.addStudent(new Student(2, "Rahul", "rahul@example.com", "Information Technology"));

// Display all students
sms.getAllStudents();

// Get student by ID
sms.getStudentById(1);

// Update student
sms.updateStudent(2, "Rahul Sharma", "rahul.sharma@example.com", "Artificial Intelligence");

// Display all students again
sms.getAllStudents();

// Delete student
sms.deleteStudent(1);

// Final student list
sms.getAllStudents();
```
