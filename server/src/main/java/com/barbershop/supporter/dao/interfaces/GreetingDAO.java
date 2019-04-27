package ir.mr1213.restapi.dao.interfaces;


import ir.mr1213.restapi.model.Greeting;

import java.util.List;

public interface GreetingDAO {
    int add(Greeting greeting);
    int edit(Greeting greeting);
    int delete(long id);
    Greeting find(long id);

}
