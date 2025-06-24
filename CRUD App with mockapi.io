<!DOCTYPE html>
<html>
<head>
  <title>MockAPI Basic CRUD</title>
  <style>
    body { font-family: Arial; text-align: center; }
    input, button { margin: 5px; padding: 8px; }
    .student { background: #dbeafe; margin: 10px; padding: 10px; border-radius: 5px; }
    button { cursor: pointer; }
  </style>
</head>
<body>

  <h2>Students (MockAPI)</h2>
  <input id="name" placeholder="Name">
  <input id="age" placeholder="Age">
  <input id="course" placeholder="Course">
  <button onclick="createStudent()">Add</button>
  <button onclick="updateStudent()">Update</button>

  <div id="list"></div>

  <script>
  
    function fetchStudents() {
      fetch(API)
        .then(res => res.json())
        .then(data => {
          document.getElementById('list').innerHTML = "";
          data.forEach(s => {
            const div = document.createElement("div");
            div.className = "student";
            div.innerHTML = `
              Name: ${s.name} | Age: ${s.age} | Course: ${s.course}
              <br>
              <button onclick="loadStudent('${s.id}', '${s.name}', ${s.age}, '${s.course}')">Edit</button>
              <button onclick="deleteStudent('${s.id}')">Delete</button>
            `;
            document.getElementById('list').appendChild(div);
          });
        });
    }

    function createStudent() {
      const name = nameInput.value, age = ageInput.value, course = courseInput.value;
      fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, course })
      }).then(fetchStudents);
      clearForm();
    }

    function loadStudent(id, name, age, course) {
      nameInput.value = name;
      ageInput.value = age;
      courseInput.value = course;
      editId = id;
    }

    function updateStudent() {
      if (!editId) return;
      const name = nameInput.value, age = ageInput.value, course = courseInput.value;
      fetch(`${API}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, course })
      }).then(() => {
        fetchStudents();
        clearForm();
        editId = null;
      });
    }

    function deleteStudent(id) {
      fetch(`${API}/${id}`, { method: 'DELETE' }).then(fetchStudents);
    }

    function clearForm() {
      nameInput.value = ageInput.value = courseInput.value = '';
    }

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const courseInput = document.getElementById("course");

    fetchStudents();
  </script>

</body>
</html>
