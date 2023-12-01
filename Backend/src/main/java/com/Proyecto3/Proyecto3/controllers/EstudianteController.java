package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.EstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EstudianteController {

    @Autowired
    EstudianteService estudianteService;
}
