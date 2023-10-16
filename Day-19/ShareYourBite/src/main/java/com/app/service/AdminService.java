package com.app.service;

import com.app.entity.Admin;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
public class AdminService
{

    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

    //Get
    public List<Admin> getData() {
        ResponseEntity<List<Admin>> responseEntity = restTemplate().exchange("http://localhost:8081/api/list", HttpMethod.GET, null, new ParameterizedTypeReference<List<Admin>>() {});
        return responseEntity.getBody();
    }


    // Post
    public ResponseEntity<Admin> addData(Admin admin) {
        return new RestTemplate().postForEntity("http://localhost:8081/api/add", admin, Admin.class);
    }

    // Edit (modify if data exists and save, else don't save)
    public Admin editData(Long id, Admin admin) {
        String microserviceUrl = "http://localhost:8081/api/edit/" +id ;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Admin> requestEntity = new HttpEntity<>(admin, headers);

        ResponseEntity<Admin> responseEntity = restTemplate().exchange(
                microserviceUrl,
                HttpMethod.PUT,
                requestEntity,
                Admin.class
        );

        return responseEntity.getBody();
    }

    //Delete
    public ResponseEntity<String> deleteData(Long id) {
        System.out.println("going to make rest call:::");
        String microserviceUrl = "http://localhost:8081/api/delete/" +id ;
        Map<String, Long> uriVariables = new HashMap<>();
        uriVariables.put("id", id);

        ResponseEntity<String> responseEntity = restTemplate().exchange(
                microserviceUrl,
                HttpMethod.DELETE,  // HTTP method is DELETE
                null,  // No request body for a DELETE request
                String.class,  // The expected response type is String
                uriVariables
        );

        return responseEntity;
    }


    //Find by ID
    public Admin findById(Long id) {
        ResponseEntity<Admin> responseEntity = restTemplate().getForEntity("http://localhost:8081/api/list/{id}", Admin.class, id);

        return responseEntity.getBody();
    }




}
