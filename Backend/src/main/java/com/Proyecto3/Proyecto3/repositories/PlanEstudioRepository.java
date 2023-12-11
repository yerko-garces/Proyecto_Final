package com.Proyecto3.Proyecto3.repositories;
import com.Proyecto3.Proyecto3.entities.PlanEstudioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanEstudioRepository extends JpaRepository<PlanEstudioEntity, Long> {
    List<PlanEstudioEntity> findByCodCarr(Long cod_carr);
}
