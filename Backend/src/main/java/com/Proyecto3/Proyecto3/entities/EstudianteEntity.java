package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "estudiante")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstudianteEntity {

    @Id
    @Column(unique = true, nullable = false)
    private String rut;

    private String nombre;

    private String apellido;

    private String email;

    @OneToOne
    @JoinColumn(name = "cod_carr")
    CarreraEntity codigo_carrera;

}
