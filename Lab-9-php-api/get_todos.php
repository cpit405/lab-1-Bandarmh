<?php 
function get_all_todos()
{
    $get_all_tasks_query = "SELECT id, task, date_added, done FROM tasks WHERE done = 0;";
    $response = $GLOBALS['conn']->query($get_all_tasks_query);
    if ($response && $response->num_rows > 0) {
       
        while ($row = $response->fetch_array()) {
            $response['todo_id'] = $row["id"];
            $response['todo_item'] = $row["tasks"];
            $response['todo_date'] = row["date_added"];
            $response['todo_is_done'] = row["done"];
            $json_response = json_encode($response);
            echo $json_response;
        }
    } else {
        echo json_encode("No Record Found");
    }
}
?>
