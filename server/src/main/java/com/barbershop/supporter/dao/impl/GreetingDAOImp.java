package ir.mr1213.restapi.dao.impl;

import ir.mr1213.restapi.dao.interfaces.GreetingDAO;
import ir.mr1213.restapi.model.Greeting;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


@Repository
@Transactional
public class GreetingDAOImp implements GreetingDAO {

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public int add(Greeting greeting) {
        return 0;
    }

    @Override
    public int edit(Greeting greeting) {
        return 0;
    }

    @Override
    public int delete(long id) {
        return 0;
    }

    @Override
    public Greeting find(long id) {
        return null;
    }
}
