package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.entities.HorarioEntity;
import com.Proyecto3.Proyecto3.services.HorarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HorarioController {

    @Autowired
    HorarioService horarioService;

    @PostMapping("/guardar")
    public ResponseEntity<HorarioEntity> guardarHorario(@RequestBody HorarioEntity horario) {
        HorarioEntity horarioGuardado = horarioService.guardarHorario(horario);
        return new ResponseEntity<>(horarioGuardado, HttpStatus.CREATED);
    }
}
