package com.example.TaskFlow.repo;

import com.example.TaskFlow.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface Task_Repo extends JpaRepository<Task,Long> {
    List<Task> findByUserIdAndCat(long userId,String cat);
    List<Task> findByUserId(long userId);

    @Query(
            value = "SELECT COUNT(*) AS total, " +
                    "(SELECT COUNT(*) FROM task WHERE user_id = ?1 AND completed = 1) AS completed, " +
                    "(SELECT COUNT(*) FROM task WHERE user_id = ?1 AND completed = 0) AS pending " +
                    "FROM task WHERE user_id = ?1",
            nativeQuery = true
    )
    Map<String, Object> getTaskSummary(Long userId);
}
