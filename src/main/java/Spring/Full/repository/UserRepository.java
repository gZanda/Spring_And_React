package Spring.Full.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Spring.Full.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
