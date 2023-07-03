package Spring.Full.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Spring.Full.exception.UserNotFoundException;
import Spring.Full.model.User;
import Spring.Full.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    public User updateUser(User newUser, Long id){
        return userRepository.findById(id)
            .map(user -> {
                user.setUsername(newUser.getUsername());
                user.setEmail(newUser.getEmail());
                return userRepository.save(user);
            }).orElseThrow(()-> new UserNotFoundException(id));
    }

}
