package com.Proyecto3.Proyecto3.repositories;
import com.Proyecto3.Proyecto3.entities.HorarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HorarioRepository extends JpaRepository<HorarioEntity, Long> {

}
