package com.valoshka.dnd.controllers.exceptionHandler;


import com.valoshka.dnd.dtos.errorsResponse.ApiPieTunesErrorInfo;
import com.valoshka.dnd.services.exceptions.UserAuthenticationException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@Slf4j
public class GlobalUserExceptionHandler {

    /*@ResponseStatus(value = HttpStatus.CONFLICT)
    @ExceptionHandler(UserAlreadyExistsException.class)
    @ResponseBody
    ApiPieTunesErrorInfo
    handleUserAlreadyExistsException(HttpServletRequest req, Exception ex) {
        return new ApiPieTunesErrorInfo(HttpStatus.CONFLICT.value(), req.getRequestURL(), ex.getMessage());
    }*/

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(UserAuthenticationException.class)
    @ResponseBody
    ApiPieTunesErrorInfo
    handleUserAuthenticationException(HttpServletRequest req, Exception ex) {
        return new ApiPieTunesErrorInfo(HttpStatus.UNAUTHORIZED.value(), req.getRequestURL(), ex.getMessage());
    }
}
