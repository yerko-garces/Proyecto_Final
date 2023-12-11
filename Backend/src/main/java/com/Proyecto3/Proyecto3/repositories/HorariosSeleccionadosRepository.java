package com.Proyecto3.Proyecto3.repositories;

import com.Proyecto3.Proyecto3.entities.HorariosSeleccionados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HorariosSeleccionadosRepository extends JpaRepository<HorariosSeleccionados, Long> {

}
