package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "profesor")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfesorEntity {

    @Id
    @Column(unique = true, nullable = false)
    private String rutProfesor;

    private String nombre;

    private String apellido;

    private String email;

    @ManyToOne
    private PlanEstudioEntity planClases;

}
