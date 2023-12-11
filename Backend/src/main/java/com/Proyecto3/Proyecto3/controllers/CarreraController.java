package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.CarreraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CarreraController {

    @Autowired
    CarreraService carreraService;

    @GetMapping("/nombresCarreras")
    public List<String> obtenerNombresCarreras() {
        return carreraService.obtenerNombresCarreras();
    }
}
