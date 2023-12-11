package com.Proyecto3.Proyecto3.services;
import com.Proyecto3.Proyecto3.entities.CarreraEntity;
import com.Proyecto3.Proyecto3.repositories.CarreraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarreraService {

    @Autowired
    CarreraRepository carreraRepository;

    public List<String> obtenerNombresCarreras() {
        List<CarreraEntity> carreras = carreraRepository.findAll();
        return carreras.stream()
                .map(CarreraEntity::getNombre)
                .collect(Collectors.toList());
    }

    public Long encontrarCodigoCarreraPorNombre(String nombreCarrera) {
        CarreraEntity carrera = carreraRepository.findByNombre(nombreCarrera);
        if (carrera != null) {
            return carrera.getCod_carr();
        } else {
            return null;
        }
    }
}
