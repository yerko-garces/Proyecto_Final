package com.Proyecto3.Proyecto3.repositories;
import com.Proyecto3.Proyecto3.entities.CarreraEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CarreraRepository extends JpaRepository <CarreraEntity, Long> {
    @Query("SELECT c FROM CarreraEntity c WHERE c.nombre = :nombreCarrera")
    CarreraEntity findByNombre(@Param("nombreCarrera") String nombreCarrera);

}
