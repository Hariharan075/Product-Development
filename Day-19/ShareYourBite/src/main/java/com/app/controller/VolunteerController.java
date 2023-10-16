package com.app.controller;


import com.app.entity.Volunteer;
import com.app.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VolunteerController {
    @Autowired
    VolunteerService volunteerService;

    @GetMapping("/api/vol/getVolunteer")
    public List<Volunteer> getVolunteer() {
        return volunteerService.getAllVolunteer();
    }

    @PostMapping("/api/vol/addVolunteer")
    public ResponseEntity<String> addVolunteer(@RequestBody Volunteer volunteer) {
        volunteerService.addVolunteer(volunteer);
        return ResponseEntity.ok("Volunteer added successfully");
    }

    @GetMapping("/api/vol/getVolunteer/{id}")
    public ResponseEntity<Volunteer> getVolunteerById(@PathVariable Long id) {
        Volunteer volunteer = volunteerService.getVolunteerById(id);
        return ResponseEntity.ok(volunteer);
    }

    @DeleteMapping("/api/vol/deleteVolunteer/{id}")
    public ResponseEntity<String> deleteVolunteer(@PathVariable Long id) {
        return ResponseEntity.ok(volunteerService.deleteVolunteerById(id));
    }

    @PutMapping("/api/vol/editVolunteer/{id}")
    public ResponseEntity<Volunteer> updateVolunteer(@PathVariable Long id, @RequestBody Volunteer volunteer) {
        volunteer.setVolunteerId(id);
        Volunteer updatedVolunteer = volunteerService.updateVolunteer(volunteer);
        return ResponseEntity.ok(updatedVolunteer);
    }

//    @PostMapping("/api/vol/register")
//    public ResponseEntity<String> registerVolunteer(@RequestBody Volunteer volunteer) {
//        volunteerService.addVolunteer(volunteer);
//        return ResponseEntity.ok("Volunteer added successfully");
//    }
//
//    @PostMapping("/api/vol/login")
//    public ResponseEntity<String> loginVolunteer(@RequestBody Volunteer volunteer) {
//        volunteerService.addVolunteer(volunteer);
//        return ResponseEntity.ok("Volunteer added successfully");
//    }

}

