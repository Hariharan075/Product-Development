package com.app.service;


import com.app.entity.Volunteer;
import com.app.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {
    @Autowired
    VolunteerRepository volunteerRepo;

    public List<Volunteer> getAllVolunteer()
    {
        return volunteerRepo.findAll();
    }

    public void addVolunteer(Volunteer volunteer) {
        volunteerRepo.save(volunteer);
    }

    public String deleteVolunteerById(Long id) {
        if(volunteerRepo.findById(id).isEmpty())
            return "No Volunteer Found with the Id:"+id;
        else {
            volunteerRepo.deleteById(id);
            return "Delete Successfull";
        }

    }
    public Volunteer getVolunteerById(Long id) {
        return volunteerRepo.findById(id).orElse(null);
    }

    public Volunteer updateVolunteer(Volunteer volunteer) {
        return volunteerRepo.save(volunteer);
    }

}

