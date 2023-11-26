package com.Proyecto3.Proyecto3.services;
import com.Proyecto3.Proyecto3.repositories.CarreraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarreraService {

    @Autowired
    CarreraRepository carreraRepository;
}
