package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

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

    @ManyToOne(optional = true)
    private CarreraEntity codigo_carrera;

    @OneToMany
    private List<NotaEntity> notas;

    @OneToMany
    private List<HorarioEntity> horarios;

}
