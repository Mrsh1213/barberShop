package com.barbershop.supporter.dao.interfaces;


import com.barbershop.supporter.model.Greeting;

import java.util.List;

public interface GreetingDAO {
    int add(Greeting greeting);
    int edit(Greeting greeting);
    int delete(long id);
    Greeting find(long id);

}
