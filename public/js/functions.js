function taskHandling() {
    $('.edit-task').click(function () {
        var task = $(this).closest('tr').find('td:eq(1)').text();
        var task_id = $(this).closest("tr").attr('data-id');
        var data = {
            description: prompt('Edit Task', task)
        }
        if (data.description) {
            try {
                $.ajax({
                    url: `/task/${task_id}`,
                    type: 'PATCH',
                    data,
                    success: function () {
                        alert('Task successfully edited.')
                        location.reload()
                    }
                })
            } catch (e) {
                alert(e)
            }
        }
    })

    $('.delete-task').click(function () {
        var task_id = $(this).closest("tr").attr('data-id');
        var data = {
            task_id
        }

        try {
            $.ajax({
                url: '/task',
                type: 'DELETE',
                data,
                success: function () {
                    alert('Task successfully deleted.')
                    location.reload()
                }
            })
        } catch (e) {
            alert(e)
        }
    })

    $(".chk-task").change(function () {
        var data = {
            task_id: $(this).closest("tr").attr('data-id'),
            completed: this.checked
        }
        try {
            $.ajax({
                url: `/complete-task`,
                type: 'POST',
                data
            })
        } catch (e) {
            alert(e)
        }
    });
}

function moveTaskToFolder() {
    $('.move-to-folder').on('change', function () {
        var folder_id = $(this, 'option:selected').val();
        var folder_name = $(this, 'option:selected');

        var task_description = $(this).closest('tr').find('td:eq(1)').text();
        var task_id = $(this).closest("tr").attr('data-id');
        var data = {
            folder_id,
            task_id
        }

        try {
            $.ajax({
                url: `/moveToFolder`,
                type: 'POST',
                data,
                success: function () {
                    alert(`Task ${task_description} successfully moved!`);
                    location.reload();
                }
            })
        } catch (e) {
            alert(e)
        }

    })
}

function displayFolderItems() {
    $('.view-folder').click(function () {
        var folder_id = $(this).closest("tr").attr('data-id');
        var taskshtml = '<table>'

        try {
            $.ajax({
                url: `/tasks/${folder_id}`,
                type: 'GET',
                success: function (tasks) {
                    tasks.forEach(function (task) {
                        taskshtml += `<tr data-id=="${task._id}">`;
                        taskshtml += `<td><input class="chk-task" type="checkbox" checked="${task.completed}"></td>`;
                        taskshtml += `<td class="description">${task.description}</td>`;
                        taskshtml += `<td class="edit-task"><label>Edit</label></td></tr>`;
                    })
                    taskshtml += '</table>';

                    //Slide to show Tasks
                    $('#hidden-list').slideToggle();

                    $('#hidden-list').html(taskshtml);
                }
            })
        } catch (e) {
            alert(e)
        }
    })
}

function removeFolder() {
    $('.remove-folder').click(function () {
        var folder_id = $(this).closest("tr").attr('data-id');
        var data = {
            folder_id
        }

        try {
            $.ajax({
                url: '/folder',
                type: 'DELETE',
                data,
                success: function () {
                    alert('Folder and Tasks inside it successfully deleted.')
                    location.reload()
                }
            })
        } catch (e) {
            alert(e)
        }
    })
}

$(document).ready(function () {
    taskHandling();
    moveTaskToFolder();
    displayFolderItems();
    removeFolder();
})