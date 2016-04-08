<?php

$result =  $mysqli->query('SELECT * FROM student');
$array = array();

while($row=$result->fetch_assoc()){
  $array[] = $row;
}
echo json_encode($array);
