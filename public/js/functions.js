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

        // var folder_name = $(this).prop('selected', true).text();
        var folder_id = $(this, 'option:selected').val();
        var folder_name = $(this, 'option:selected');
        console.log('folder id:', folder_id);
        console.log('folder name:', folder_name);

        // console.log(`folder: ${folder_name} ${folder_id}`)
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


$(document).ready(function () {
    console.log("ready!");

    taskHandling();
    moveTaskToFolder();
})