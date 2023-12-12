package com.Proyecto3.Proyecto3.repositories;
import com.Proyecto3.Proyecto3.entities.HorarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HorarioRepository extends JpaRepository<HorarioEntity, Long> {
    List<HorarioEntity> findByRutEstudiante(String rutEstudiante);

    @Query("SELECT COUNT(DISTINCT he.rutEstudiante) " +
            "FROM HorarioEntity he " +
            "WHERE he.nombreRamo = :nombreRamo")
    long contarEstudiantesUnicosPorNombreRamo(String nombreRamo);
}
