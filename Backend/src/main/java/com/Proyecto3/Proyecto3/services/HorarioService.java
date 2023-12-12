package com.Proyecto3.Proyecto3.services;

import com.Proyecto3.Proyecto3.entities.HorarioEntity;
import com.Proyecto3.Proyecto3.repositories.EstudianteRepository;
import com.Proyecto3.Proyecto3.repositories.HorarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HorarioService {

    @Autowired
    HorarioRepository horarioRepository;

    public HorarioEntity guardarHorario(HorarioEntity horario) {
        return horarioRepository.save(horario);
    }

    public List<HorarioEntity> obtenerHorariosPorRutEstudiante(String rutEstudiante) {
        return horarioRepository.findByRutEstudiante(rutEstudiante);
    }
}
