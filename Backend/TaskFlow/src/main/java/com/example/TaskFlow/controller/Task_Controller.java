
package com.example.TaskFlow.controller;
import com.example.TaskFlow.model.Task;
import com.example.TaskFlow.repo.Task_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class Task_Controller {

    @Autowired
    Task_Repo rpo;

    @GetMapping("/{u_id}")
    public List<Task> getTask(@PathVariable long u_id ,@RequestParam String cat){
        if(cat.length()==0)
            return rpo.findByUserId(u_id);
        return rpo.findByUserIdAndCat(u_id,cat);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Task> updateTask (@PathVariable Long id)
    {
        Optional<Task> Optsk = rpo.findById(id);
        if(Optsk.isPresent()){
            Task tsk = Optsk.get();
            tsk.setCompleted(!tsk.isCompleted());
            rpo.save(tsk);
            return ResponseEntity.ok(tsk);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Task create(@RequestBody  Task task)
    {
        return rpo.save(task);
    }

    @GetMapping("/status/{u_id}")
    public Map<String, Object> getStatus(@PathVariable long u_id ){
        return rpo.getTaskSummary(u_id);
    }
}
