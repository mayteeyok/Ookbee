<?PHP
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ookbee";
    $connection = new mysqli($servername, $username, $password, $dbname);
