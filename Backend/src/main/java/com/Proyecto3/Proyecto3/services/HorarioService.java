package com.Proyecto3.Proyecto3.services;

import com.Proyecto3.Proyecto3.repositories.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HorarioService {

    @Autowired
    EstudianteRepository estudianteRepository;
}