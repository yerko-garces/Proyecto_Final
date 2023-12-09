package com.Proyecto3.Proyecto3.repositories;
import com.Proyecto3.Proyecto3.entities.EstudianteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepository extends JpaRepository<EstudianteEntity, String> {
    @Query("SELECT e FROM EstudianteEntity e WHERE e.rut = :rut AND e.email = :email")
    EstudianteEntity findByRutAndEmail(@Param("rut") String rut, @Param("email") String email);

}
