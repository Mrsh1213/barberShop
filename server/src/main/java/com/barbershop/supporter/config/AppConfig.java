package ir.mr1213.restapi.config;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.stereotype.Component;


@ComponentScans({
        @ComponentScan("ir.mr1213.restapi.controller")})
@SpringBootApplication
public class  AppConfig{

    public static void main(String[] args) {
        SpringApplication.run(AppConfig.class, args);
    }

}