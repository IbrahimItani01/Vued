<?php
include "connection.php";

function getUserFavoriteGenre($userId, $connection) {
    $sql = "SELECT favorite_genre FROM users WHERE id = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $favoriteGenre = null;

    if ($row = $result->fetch_assoc()) {
        $favoriteGenre = $row['favorite_genre'];
    }

    $stmt->close();
    return $favoriteGenre;
}

function getRecommendedMovies($userId, $favoriteGenre, $connection) {
    $sql = "
        SELECT m.*, 
               ta.visits, 
               ta.time_spent, 
               COALESCE(r.rate_value, 0) AS user_rating, 
               CASE WHEN b.user_id IS NOT NULL THEN 1 ELSE 0 END AS is_bookmarked
        FROM movies m
        LEFT JOIN tracking_activities ta ON m.id = ta.movie_id AND ta.user_id = ?
        LEFT JOIN ratings r ON m.id = r.movie_id AND r.user_id = ?
        LEFT JOIN bookmarks b ON m.id = b.movie_id AND b.user_id = ?
        WHERE m.genre = ?
        ORDER BY 
            is_bookmarked DESC,       -- Prioritize bookmarked movies
            user_rating DESC,         -- Then by user rating
            ta.visits DESC,           -- Then by number of visits
            ta.time_spent DESC        -- Finally, by time spent on movie page
        LIMIT 10;
    ";

    $stmt = $connection->prepare($sql);
    if (!$stmt) {
        die("SQL Error: " . $connection->error); // Output the SQL error
    }

    $stmt->bind_param("iiis", $userId, $userId, $userId, $favoriteGenre);
    $stmt->execute();
    $result = $stmt->get_result();

    $recommendedMovies = [];
    while ($row = $result->fetch_assoc()) {
        $recommendedMovies[] = $row;
    }

    $stmt->close();
    return $recommendedMovies;
}

$userId = isset($_GET['userId']) ? intval($_GET['userId']) : null;

if ($userId) {
    $favoriteGenre = getUserFavoriteGenre($userId, $connection);

    if ($favoriteGenre) {
        $recommendedMovies = getRecommendedMovies($userId, $favoriteGenre, $connection);

        header('Content-Type: application/json');
        echo json_encode($recommendedMovies);
    } else {
        echo json_encode(['error' => 'User does not have a favorite genre']);
    }
} else {
    echo json_encode(['error' => 'User ID is required']);
}

$connection->close();