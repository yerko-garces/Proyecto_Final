package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.CarreraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/encontrarCodigoCarrera")
    public ResponseEntity<Long> encontrarCodigoCarreraPorNombre(@RequestParam String nombreCarrera) {
        Long codigoCarrera = carreraService.encontrarCodigoCarreraPorNombre(nombreCarrera);
        if (codigoCarrera != null) {
            return ResponseEntity.ok(codigoCarrera);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
