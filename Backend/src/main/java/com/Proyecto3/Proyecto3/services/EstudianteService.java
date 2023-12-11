package com.Proyecto3.Proyecto3.services;
import com.Proyecto3.Proyecto3.entities.EstudianteEntity;
import com.Proyecto3.Proyecto3.repositories.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EstudianteService {

    private final EstudianteRepository estudianteRepository;

    @Autowired
    public EstudianteService(EstudianteRepository estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }

    public boolean verificarRutEmailEnMismaTupla(String rut, String email) {
        EstudianteEntity estudiante = estudianteRepository.findByRutAndEmail(rut, email);
        return estudiante != null;
    }

    public Long obtenerCodigoCarreraPorRut(String rut) {
        Optional<EstudianteEntity> estudiante = estudianteRepository.findById(rut);
        if (estudiante != null) {
           return estudiante.get().getCod_carr().getCod_carr();
        }
        return null;
    }
}
