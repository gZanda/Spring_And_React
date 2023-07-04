package Spring.Full.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {
 
    @ExceptionHandler(CustomExceptions.class)
    public ResponseEntity<String> handleCustomException(CustomExceptions ex) {
        // Custom exception handling logic
        return new ResponseEntity<>("CustomException occurred: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
