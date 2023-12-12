package com.Proyecto3.Proyecto3.repositories;
import com.Proyecto3.Proyecto3.entities.PlanEstudioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanEstudioRepository extends JpaRepository<PlanEstudioEntity, Long> {
    List<PlanEstudioEntity> findByCodCarr(Long cod_carr);

    @Query("SELECT p.nivel, p.nom_asig FROM PlanEstudioEntity p WHERE p.codCarr = :codigoCarrera")
    List<Object[]> obtenerNivelYNombrePorCodCarr(@Param("codigoCarrera") Long codigoCarrera);
}
