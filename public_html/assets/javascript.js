$(document).ready(function () {
    $('#submitButton').on('click', function (e) {
        e.preventDefault(); //prevent the default submit button functionality
        var firstName = $('#firstName').val();
        $('#div1').text(firstName);
        var lastName = $('#lastName').val();
        $('#div2').text(lastName);
        var phone = $('#phone').val();
        $('#div3').text(phone);
        var email = $('#email').val();
        $('#div4').text(email);
    });

    var elements = document.getElementsByTagName('button');
    /* WRONG
    for (var i = 0; i < elements.length; i++) {
        console.log("i is: " + i);
        elements[i].addEventListener('click', function () {
            console.log('You clicked button no: ' + i);
        });
    }*/
        //fixed solution
        for (var i = 0; i < elements.length; i++) {
            console.log("i er: " + i);
            addEvent(elements[i], i);
        }
        function addEvent(element, val) {
            element.addEventListener('click', function () {
                console.log('you clicked button no: ' + val);
            });
        }
});

function changeText(id, text) {
    id.innerHTML = text;
}

//--  CALLBACK FUNCTIONS--//----------------------------------

//student array
var allStudents = [];

//student object
var student = {
    id: 020885,
    name: "Tobias Jacobsen",
    classroom: 262
};
//callback function 1
function logItem(Student) {
    for (var student in Student) {
        console.log(student + ": " + Student[student]);
    }
}

//callback function 2
function registerItem(Student) {
    allStudents.push(Student);
}

//main function
function doStuff(student, callback) {
    callback(student);
}

function callbackTest() {
    doStuff(student, registerItem); //replace with doStuff
    allStudents.forEach(function (element) {
        console.log(element.id);
    });
}
//---------------------------------------------------------


