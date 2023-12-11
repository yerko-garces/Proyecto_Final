package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.EstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EstudianteController {

    @Autowired
    EstudianteService estudianteService;

    @GetMapping("/verificarRutEmail")
    public boolean verificarRutEmailEnMismaTupla(@RequestParam("rut") String rut, @RequestParam("email") String email) {
        return estudianteService.verificarRutEmailEnMismaTupla(rut, email);
    }

    @GetMapping("/obtenerCodigoCarrera")
    public Long obtenerCodigoCarreraPorRut(@RequestParam String rut) {
        return estudianteService.obtenerCodigoCarreraPorRut(rut);
    }

}
