package ir.mr1213.restapi.controller;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import ir.mr1213.restapi.model.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@Controller
public class GreetContoller {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
//    @Autowired
//     HseHTlvRequestsService hseHTlvRequestsService;
    @GetMapping("/hello-world")
    @ResponseBody
    public Greeting sayHello(@RequestParam(name="name", required=false, defaultValue="Stranger") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
    @PostMapping("/p")
    @ResponseBody
    public  ResponseEntity<Greeting> sayHello(@RequestBody Greeting greeting) {
//      hseHTlvRequestsService.add();

        HttpHeaders httpHeaders=new HttpHeaders();
        httpHeaders.add("auth","132");

        return new ResponseEntity<>(greeting,httpHeaders, HttpStatus.OK);
    }

}
