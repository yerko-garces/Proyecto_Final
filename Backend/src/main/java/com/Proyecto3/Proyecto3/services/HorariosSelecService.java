package com.Proyecto3.Proyecto3.services;
import com.Proyecto3.Proyecto3.entities.HorariosSeleccionados;
import com.Proyecto3.Proyecto3.repositories.HorariosSeleccionadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HorariosSelecService {

    @Autowired
    HorariosSeleccionadosRepository horariosSeleccionadosRepository;

    public HorariosSeleccionados guardarHorarioSeleccionado(HorariosSeleccionados horarioSeleccionado) {
        return horariosSeleccionadosRepository.save(horarioSeleccionado);
    }

    public List<HorariosSeleccionados> getAllHorariosSeleccionados() {
        return horariosSeleccionadosRepository.findAll();
    }

    public List<Object[]> findInfoByNombreAsignatura(String nombreAsignatura) {
        return horariosSeleccionadosRepository.findInfoByNombreAsignatura(nombreAsignatura);
    }

    public Long contarPorNombreAsignatura(String nombreAsignatura) {
        return horariosSeleccionadosRepository.countByNombreAsignatura(nombreAsignatura);
    }
}
