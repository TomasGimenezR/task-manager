function editTask() {
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
}

function deleteTask() {
    $('.delete-task').click(function () {
        var task_id = $(this).closest("tr").attr('data-id');
        var data = {
            task_id
        }

        try {
            $.ajax({
                url: `/task`,
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
}


$(document).ready(function () {
    console.log("ready!");

    editTask();
    deleteTask();
})