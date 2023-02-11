$(document).ready(function () {
    ShowEmployeeData();
    //ClearTextBox();
    //HideModalPopUp();
});

function ShowEmployeeData() {
    var url = $('#urlEmployeeData').val();
    $.ajax({
        url: url,
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.city + '</td>';
                object += '<td>' + item.state + '</td>';
                object += '<td>' + item.salary + '</td>';
                object += '<td><a href="#" class="btn btn-primary" onclick ="Edit(' + item.id + ');">Edit</a>||<a href="#" class="btn btn-danger" onclick ="Delete(' + item.id + ');">Delete</a></td>';
                object += '</tr>';
            });
            $('#table_data').html(object);
        },
        error: function () {
            alert("data can't get");
        }

    });
}
$('#btnAddEmployee').click(function () {
    $('#EmployeeModal').modal('show');
    $("#empId").hide();
    $('#AddEmployee').css('display', 'block');
    $('#btnUpdate').css('display', 'none');
    $('#employeeHeading').text('Add Employee');
})

function AddEmployee() {
    var objData = {
        Name: $("#name").val(),
        State: $("#state").val(),
        City: $("#city").val(),
        Salary: $("#salary").val(),
    }

    $.ajax({
        url: '/Ajax/AddEmployee',
        type: 'Post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data saved');
            ClearTextBox();
            ShowEmployeeData();
            HideModalPopUp();
            
        },
        error: function () {
            alert('Data not saved');
        },
    });
}
function ClearTextBox() {
    $("#name").val('');
    $("#state").val('');
    $("#city").val('');
    $("#salary").val('');
    $("#EmployeeId").val('');
}
function HideModalPopUp() {
    $('#EmployeeModal').modal('hide');
}


function Delete(id) {
    if (confirm('Are You sure wamt to delete?')) {
        $.ajax({
            url: '/Ajax/Delete?id=' + id,
            success: function () {
                alert('Record Deleted');
                ShowEmployeeData();
            },
            error: function () {
                alert('Record not Deleted');
            }
        })
    }
}


function Edit(id) {
    $.ajax({
        url: '/Ajax/Edit?id=' + id,
        type: 'Get',
        contentType: 'application/json;charset=utf-8;',
        dataType: 'Json',
        success: function (response) {
            $('#EmployeeModal').modal('show');
            $("#EmployeeId").val(response.id);
            $("#name").val(response.name);
            $("#state").val(response.state);
            $("#city").val(response.city);
            $("#salary").val(response.salary);
            $('#AddEmployee').css('display', 'none');
            $('#btnUpdate').css('display', 'block');
            $('#employeeHeading').text('Update Record')

            //$('#AddEmployee').hide();
            //$('#btnUpdate').show();

        },
        error: function () {
            alert('Data not found');
        }
    })
}

function UpdateEmployee() {
    var objData = {
        Id: $("#EmployeeId").val(),
        Name: $("#name").val(),
        State: $("#state").val(),
        City: $("#city").val(),
        Salary: $("#salary").val()
    }
    $.ajax({
        url: '/Ajax/Update/',
        type: 'Post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data saved');
            ClearTextBox();
            ShowEmployeeData();
            HideModalPopUp();

        },
        error: function () {
            alert('Data not saved');
        },
    })
}