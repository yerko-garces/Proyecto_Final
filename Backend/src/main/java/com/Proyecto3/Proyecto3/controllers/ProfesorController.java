package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.ProfesorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfesorController {

    @Autowired
    ProfesorService profesorService;
}
