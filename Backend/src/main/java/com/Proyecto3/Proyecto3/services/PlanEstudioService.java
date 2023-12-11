package com.Proyecto3.Proyecto3.services;
import com.Proyecto3.Proyecto3.entities.PlanEstudioEntity;
import com.Proyecto3.Proyecto3.repositories.PlanEstudioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlanEstudioService {

    @Autowired
    PlanEstudioRepository planEstudioRepository;

    public List<String> obtenerNombresAsignaturasPorCodigoCarrera(Long codigoCarrera) {
        List<PlanEstudioEntity> asignaturas = planEstudioRepository.findByCodCarr(codigoCarrera);
        return asignaturas.stream()
                .map(PlanEstudioEntity::getNom_asig)
                .collect(Collectors.toList());
    }
}
