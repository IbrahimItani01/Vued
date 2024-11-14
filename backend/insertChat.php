<?php
include "connection.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['ai_messages']) && is_array($data['ai_messages']) &&
        isset($data['user_messages']) && is_array($data['user_messages'])) {
        
        $ai_messages = json_encode($data['ai_messages']);
        $user_messages = json_encode($data['user_messages']);

        $sql = "INSERT INTO chats (ai_messages, user_messages) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("ss", $ai_messages, $user_messages);

            if ($stmt->execute()) {
                $chats_id = $stmt->insert_id;

                $response = [
                    "status" => "success",
                    "message" => "Data inserted successfully",
                    "chats_id" => $chats_id  
                ];
            } else {
                $response = [
                    "status" => "error",
                    "message" => "Failed to insert data"
                ];
            }

            $stmt->close();
        } else {
            $response = [
                "status" => "error",
                "message" => "Failed to prepare statement"
            ];
        }
    } else {
        $response = [
            "status" => "error",
            "message" => "'ai_messages' and 'user_messages' must be arrays"
        ];
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
?>