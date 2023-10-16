package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com"})

@EntityScan({"com.app.entity"})
public class ShareYourBiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShareYourBiteApplication.class, args);
	}

}
