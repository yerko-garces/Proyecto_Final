package com.Proyecto3.Proyecto3.controllers;
import com.Proyecto3.Proyecto3.services.PlanEstudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class PlanEstudioController {

    @Autowired
    PlanEstudioService planEstudioService;
}
