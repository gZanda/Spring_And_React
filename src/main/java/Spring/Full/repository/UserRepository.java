package Spring.Full.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Spring.Full.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
