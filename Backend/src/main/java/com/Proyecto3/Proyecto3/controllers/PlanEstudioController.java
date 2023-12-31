package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.PlanEstudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PlanEstudioController {

    @Autowired
    PlanEstudioService planEstudioService;

    @GetMapping("/obtenerAsigPorCod")
    @ResponseBody
    public List<String> obtenerNombresAsignaturasPorCodigoCarrera(@RequestParam Long codigoCarrera) {
        return planEstudioService.obtenerNombresAsignaturasPorCodigoCarrera(codigoCarrera);
    }

    @GetMapping("/nivelYNombre")
    @ResponseBody
    public List<Object[]> obtenerNivelYNombrePorCodCarr(@RequestParam Long codigoCarrera) {
        return planEstudioService.obtenerNivelYNombrePorCodCarr(codigoCarrera);
    }
}
