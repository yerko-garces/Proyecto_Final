package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.PrerrequisitoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrerrequisitoController {

    @Autowired
    PrerrequisitoService prerrequisitoService;
}
