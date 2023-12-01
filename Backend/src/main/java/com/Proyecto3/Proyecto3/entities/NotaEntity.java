package com.Proyecto3.Proyecto3.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Table(name = "nota")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotaEntity {

    @Id
    @Column(unique = true, nullable = false)
    private Long idNota;

    private LocalDate anio;

    private Integer sem;

    private Integer nivel;

    private Integer cod_asig;

    private Float nota;

    @ManyToOne(optional = true)
    private EstudianteEntity estudiante;
}
