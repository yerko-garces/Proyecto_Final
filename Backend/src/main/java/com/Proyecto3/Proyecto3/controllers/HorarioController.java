package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.entities.HorarioEntity;
import com.Proyecto3.Proyecto3.services.HorarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HorarioController {

    @Autowired
    HorarioService horarioService;

    @PostMapping("/crearHorario")
    public ResponseEntity<HorarioEntity> guardarHorarioBlanco(@RequestBody HorarioEntity horario) {
        try {
            HorarioEntity horarioGuardado = horarioService.guardarHorario(horario);
            return new ResponseEntity<>(horarioGuardado, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/obtenerHorariosPorRut")
    public List<HorarioEntity> obtenerHorariosPorRutEstudiante(@RequestParam String rut) {
        return horarioService.obtenerHorariosPorRutEstudiante(rut);
    }
}
