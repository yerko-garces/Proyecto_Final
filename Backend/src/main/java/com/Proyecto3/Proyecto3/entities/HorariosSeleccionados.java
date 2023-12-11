package com.Proyecto3.Proyecto3.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "horariosSeleccionados")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HorariosSeleccionados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_horarioSelecionado;

    private String nombreCarrera;

    private String nombreAsignatura;

    private String nombreProfesor;

    private String dia;

    private String bloque;

}
