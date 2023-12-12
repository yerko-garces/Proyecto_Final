package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.entities.HorariosSeleccionados;
import com.Proyecto3.Proyecto3.services.HorariosSelecService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HorariosSelecController {

    @Autowired
    HorariosSelecService horariosSelecService;

    @PostMapping("/guardarHorarioSelec")
    public ResponseEntity<HorariosSeleccionados> guardarHorarioSeleccionado(@RequestBody HorariosSeleccionados horarioSeleccionado) {
        HorariosSeleccionados nuevoHorarioSeleccionado = horariosSelecService.guardarHorarioSeleccionado(horarioSeleccionado);
        return new ResponseEntity<>(nuevoHorarioSeleccionado, HttpStatus.CREATED);
    }

    @GetMapping("/todosHorarios")
    public List<HorariosSeleccionados> getAllHorariosSeleccionados() {
        return horariosSelecService.getAllHorariosSeleccionados();
    }

    @GetMapping("/buscarPorAsignatura")
    public List<Object[]> findInfoByNombreAsignatura(@RequestParam String nombreAsignatura) {
        return horariosSelecService.findInfoByNombreAsignatura(nombreAsignatura);
    }
}
