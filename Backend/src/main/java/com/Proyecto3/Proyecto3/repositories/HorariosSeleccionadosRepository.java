package com.Proyecto3.Proyecto3.repositories;

import com.Proyecto3.Proyecto3.entities.HorariosSeleccionados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HorariosSeleccionadosRepository extends JpaRepository<HorariosSeleccionados, Long> {
    @Query("SELECT h.nombreProfesor, h.dia, h.bloque FROM HorariosSeleccionados h WHERE h.nombreAsignatura = :nombreAsignatura")
    List<Object[]> findInfoByNombreAsignatura(@Param("nombreAsignatura") String nombreAsignatura);

}

