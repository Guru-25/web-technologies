// // Sample XML data
// const xmlData = `
// <students>
//     <student>
//         <id>55</id>
//         <name>John</name>
//         <age>22</age>
//     </student>
//     <student>
//         <id>2</id>
//         <name>Jane</name>
//         <age>21</age>
//     </student>
//     <student>
//         <id>3</id>
//         <name>Jack</name>
//         <age>23</age>
//     </student>
// </students>
// `;

// // Parse the XML data
// const parser = new DOMParser();
// const xmlDoc = parser.parseFromString(xmlData, "application/xml");

// // Select the table body
// const tableBody = document.querySelector("#xml-table tbody");

// // Iterate over each student and add rows to the table
// const students = xmlDoc.getElementsByTagName("student");
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const id = student.getElementsByTagName("id")[0].textContent;
//     const name = student.getElementsByTagName("name")[0].textContent;
//     const age = student.getElementsByTagName("age")[0].textContent;

//     // Create a new row and add data
//     const row = tableBody.insertRow();
//     row.insertCell(0).textContent = id;
//     row.insertCell(1).textContent = name;
//     row.insertCell(2).textContent = age;
// }

// Fetch XML data from the server
// fetch("file.xml")
//     .then(response => response.text())  // Read as text
//     .then(xmlData => {
//         // Parse the XML data
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlData, "application/xml");

//         // Select the table body
//         const tableBody = document.querySelector("#xml-table tbody");

//         // Iterate over each student and add rows to the table
//         const students = xmlDoc.getElementsByTagName("student");
//         for (let i = 0; i < students.length; i++) {
//             const student = students[i];
//             const id = student.getElementsByTagName("id")[0].textContent;
//             const name = student.getElementsByTagName("name")[0].textContent;
//             const age = student.getElementsByTagName("age")[0].textContent;

//             // Create a new row and add data
//             const row = tableBody.insertRow();
//             row.insertCell(0).textContent = id;
//             row.insertCell(1).textContent = name;
//             row.insertCell(2).textContent = age;
//         }
//     })
//     // .catch(error => console.error('Error loading XML:', error));


fetch("file.xml")
    .then(response => response.text())
    .then(xmlData => {
        const parser=new DOMParser();
        const xmlDoc=parser.parseFromString(xmlData,"application/xml");

        const tableBody=document.querySelector("#xml-table tbody");

        const students=xmlDoc.getElementsByTagName("student");
        for(let i=0;i<students.length;i++){
            const student=students[i];
            const id= student.getElementsByTagName("id")[0].textContent;
            const name=student.getElementsByTagName("name")[0].textContent;
            const age=student.getElementsByTagName("age")[0].textContent;

            const row=tableBody.insertRow();
            row.insertCell(0).textContent=id;
            row.insertCell(1).textContent=name;
            row.insertCell(2).textContent=age;
        }

    })