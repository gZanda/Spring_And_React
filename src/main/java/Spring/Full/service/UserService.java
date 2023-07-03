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

    // Using MAP
    public User updateUser(User newUser, Long id){
        return userRepository.findById(id)
            .map(user -> {
                user.setUsername(newUser.getUsername());
                user.setEmail(newUser.getEmail());
                return userRepository.save(user);
            }).orElseThrow(()-> new UserNotFoundException(id));
    }

    // Without using MAP
    public User updateUser2(User newUser, Long id){
        User userFound = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
        userFound.setUsername(newUser.getUsername());
        userFound.setEmail(newUser.getEmail());
        return userRepository.save(userFound);
    }

    // DELETE
    public String deleteUser(Long id){
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
            return "User deleted with success!";
        }
        else{
            throw new UserNotFoundException(id);
        }
    }

}
