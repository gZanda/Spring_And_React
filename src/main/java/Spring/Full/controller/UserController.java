package Spring.Full.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Spring.Full.model.User;
import Spring.Full.service.UserService;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "http://localhost:3000") // permite que o REACT front-end acesse o back-end
public class UserController {
    
    @Autowired
    private UserService userService;

    // POST - necessita de um JSON no body da requisição
    @PostMapping("/post")
    User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    // GET ALL - não necessita de um JSON no body da requisição
    @GetMapping("/getAll")
    List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    // GET ONE - Vai receber pela URL o ID a ser buscado
    @GetMapping("/getOne/{id}")
    User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    // PUT - necessita de um JSON no body da requisição e de um ID na URL
    @PutMapping("/put/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userService.updateUser2(newUser, id);
    }



}
